import { ClientData } from "@/types/client";

export const client: ClientData = {
  name: "BrightTech Agency",
  subdomain: "brighttech",
  title: "Digital Innovation Agency",
  bio: "We turn complex problems into elegant digital products. A boutique agency specializing in Web3 and AI integrations.",
  location: "Berlin, DE",
  profileImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=400&auto=format&fit=crop",
  services: ["WebApp Development", "AI Integration", "UX Research"],
  contact: {
    phone: "+49 30 1234567",
    email: "hello@brighttech.agency",
    whatsapp: "https://wa.me/49301234567"
  },
  socialLinks: {
    twitter: "https://twitter.com/brighttech",
    linkedin: "https://linkedin.com/company/brighttech"
  },
  theme: "professional",
  seo: {
    title: "BrightTech Agency - Innovation through technology",
    description: "Boutique digital innovation agency specializing in Web3 and AI."
  }
};
