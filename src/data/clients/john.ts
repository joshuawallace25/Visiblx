import { ClientData } from "@/types/client";

export const client: ClientData = {
  name: "John Doe",
  subdomain: "john",
  title: "Senior Product Designer",
  bio: "Specializing in minimal, fast, and accessible digital products. With over 10 years of experience shaping user interactions for global brands.",
  location: "New York, USA",
  profileImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&h=400&auto=format&fit=crop",
  services: ["UI/UX Design", "Design Systems", "Prototyping"],
  contact: {
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    whatsapp: "https://wa.me/15551234567"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
  },
  theme: "professional",
  seo: {
    title: "John Doe | Senior Product Designer",
    description: "Official digital identity of John Doe. Discover design portfolio, skills, and contact information."
  }
};
