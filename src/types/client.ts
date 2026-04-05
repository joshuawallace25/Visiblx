export interface ClientData {
  name: string;
  subdomain: string;
  title: string;
  bio: string;
  location: string;
  profileImage: string;
  services: string[];
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  socialLinks: Record<string, string>;
  theme: "minimal" | "professional" | "forbes" | "tesla";
  type: "Person" | "Organization";
  seo: {
    title: string;
    description: string;
  };
  // Forbes-style Personal Details
  impactScore?: string;
  ranking?: string;
  currentRole?: string;
  age?: number;
  residence?: string;
  citizenship?: string;
  education?: string;
  maritalStatus?: string;
  didYouKnow?: string[];
  quotes?: string[];
  about?: string; // Long-form markdown bio
  achievements?: { title: string; year: string; description: string }[];
  verifiedBy?: string[];
}
