import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getClientBySubdomain, allClients } from '@/data/clients';
import TeslaTemplate from '@/templates/TeslaTemplate';
import ProfessionalTemplate from '@/templates/ProfessionalTemplate';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);
  
  if (!client) {
    return {
      title: 'Profile Not Found | Visiblx',
      description: 'The requested profile does not exist.',
    };
  }
  
  return {
    title: client.seo.title,
    description: client.seo.description,
  };
}

export default async function ClientPage({ params }: PageProps) {
  const { subdomain } = await params;
  const client = getClientBySubdomain(subdomain);

  if (!client) {
    notFound();
  }

  return (
    <>
      {client.theme === 'professional' ? (
        <ProfessionalTemplate client={client} />
      ) : (
        <TeslaTemplate client={client} />
      )}
    </>
  );
}
