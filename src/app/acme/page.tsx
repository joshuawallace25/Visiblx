import { client } from '@/data/clients/acme';
import ProfessionalTemplate from '@/templates/ProfessionalTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: client.seo.title,
  description: client.seo.description,
};

export default function Page() {
  return <ProfessionalTemplate client={client} />;
}
