import { notFound } from 'next/navigation';
import { getClientBySubdomain } from '@/data/clients';
import TeslaTemplate from '@/templates/TeslaTemplate';
import MinimalTemplate from '@/templates/MinimalTemplate';
import ProfessionalTemplate from '@/templates/ProfessionalTemplate';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    subdomain: string;
  }>;
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
  };
}

export default async function Page({ params }: PageProps) {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);

  if (!client) {
    notFound();
  }

  // Render the appropriate template based on the client's theme choice
  switch (client.theme) {
    case 'minimal':
      return <MinimalTemplate client={client} />;
    case 'professional':
      // The user previously had some clients using Tesla template 
      // but the type only allows 'minimal' | 'professional'.
      // If the client's subdomain matches those who want Tesla, we'll use that.
      if (['rachel', 'bishop'].includes(client.subdomain)) {
          return <TeslaTemplate client={client} />;
      }
      return <ProfessionalTemplate client={client} />;
    default:
      return <ProfessionalTemplate client={client} />;
  }
}
