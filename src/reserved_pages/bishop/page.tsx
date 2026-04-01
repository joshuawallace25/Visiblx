import { client } from '@/data/clients/bishop';
import TeslaTemplate from '@/templates/TeslaTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: client.seo.title,
  description: client.seo.description,
};

export default function Page() {
  return <TeslaTemplate client={client} />;
}
