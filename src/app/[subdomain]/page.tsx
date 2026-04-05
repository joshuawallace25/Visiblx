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
    keywords: [client.name, client.title, ...client.services, 'Visiblx', 'Identity'],
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
          width: 1200,
          height: 630,
          alt: client.name,
        },
      ],
      locale: 'en_US',
      type: client.type === 'Person' ? 'profile' : 'website',
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
  };
}

export default async function Page({ params }: PageProps) {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);

  if (!client) {
    notFound();
  }

  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'visiblx.com';
  const fullUrl = `https://${subdomain}.${domain}`;

  // Schema.org Structured Data
  const jsonLd = client.type === 'Person' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: client.name,
    jobTitle: client.title,
    description: client.bio,
    image: `${fullUrl}${client.profileImage}`,
    url: fullUrl,
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
      name: 'Independent'
    } : undefined,
    award: client.achievements?.map(a => `${a.title} (${a.year})`),
  } : {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: client.name,
    description: client.bio,
    url: fullUrl,
    logo: `${fullUrl}${client.profileImage}`,
    image: `${fullUrl}${client.profileImage}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: client.location,
    },
    knowsAbout: client.services,
    sameAs: Object.values(client.socialLinks),
    award: client.achievements?.map(a => `${a.title} (${a.year})`),
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
