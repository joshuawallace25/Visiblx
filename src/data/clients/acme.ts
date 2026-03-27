import { ClientData } from "@/types/client";

export const client: ClientData = {
  name: "Acme Corp",
  subdomain: "acme",
  title: "Enterprise Solutions",
  bio: "Delivering world-class enterprise software solutions for Fortune 500 companies since 2010. Security, scalability, and excellence.",
  location: "Global",
  profileImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=400&h=400&auto=format&fit=crop",
  services: ["Enterprise Software", "Digital Transformation", "IT Consulting"],
  contact: {
    phone: "+1 (800) 555-ACME",
    email: "contact@acmecorp.com",
    whatsapp: "https://wa.me/18005552263"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/acmecorp"
  },
  theme: "professional",
  seo: {
    title: "Acme Corp | Enterprise Solutions",
    description: "World-class enterprise software solutions and digital transformation consulting by Acme Corp."
  }
};
