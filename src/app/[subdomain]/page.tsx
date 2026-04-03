import { notFound } from 'next/navigation';
import { getClientBySubdomain, allClients } from '@/data/clients';
import ForbesTemplate from '@/templates/ForbesTemplate';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    subdomain: string;
  }>;
}

export async function generateStaticParams() {
  return allClients.map((client) => ({
    subdomain: client.subdomain,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);

  if (!client) {
    return {
      title: 'Profile Not Found | Visiblx',
    };
  }

  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'visiblx.com';
  const canonicalUrl = `https://${subdomain}.${domain}`;

  return {
    title: client.seo.title,
    description: client.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: client.seo.title,
      description: client.seo.description,
      url: canonicalUrl,
      siteName: 'Visiblx',
      images: [
        {
          url: client.profileImage,
          width: 800,
          height: 600,
          alt: client.name,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: client.seo.title,
      description: client.seo.description,
      images: [client.profileImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/logo.jpeg',
      apple: '/logo.jpeg',
      shortcut: '/logo.jpeg',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);

  if (!client) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: client.name,
    jobTitle: client.title,
    description: client.bio,
    image: `https://${subdomain}.visiblx.com${client.profileImage}`,
    url: `https://${subdomain}.visiblx.com`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: client.location,
    },
    knowsAbout: client.services,
    sameAs: Object.values(client.socialLinks),
    alumniOf: client.education ? {
      '@type': 'EducationalOrganization',
      name: client.education
    } : undefined,
    worksFor: client.currentRole ? {
      '@type': 'Organization',
      name: 'Independent' // Or a specific company if we split the field later
    } : undefined,
    award: client.achievements?.map(a => `${a.title} (${a.year})`),
    memberOf: client.verifiedBy?.map(org => ({
      '@type': 'Organization',
      name: org
    })),
    quotation: client.quotes?.[0], // Focus on the primary quote
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForbesTemplate client={client} />
    </>
  );
}
