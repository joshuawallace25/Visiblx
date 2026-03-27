import { client as john } from './john';
import { client as bishop } from './bishop';
import { client as david } from './david';
import { client as rachel } from './rachel';
import { client as acme } from './acme';
import { client as brighttech } from './brighttech';
import { ClientData } from '@/types/client';

export const allClients: ClientData[] = [
  john,
  bishop,
  david,
  rachel,
  acme,
  brighttech
];

export function getClientBySubdomain(subdomain: string): ClientData | undefined {
  return allClients.find(c => c.subdomain === subdomain);
}
