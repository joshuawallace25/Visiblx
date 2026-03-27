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
  theme: "minimal" | "professional";
  seo: {
    title: string;
    description: string;
  };
}
