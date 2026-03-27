import Image from 'next/image';
import { ClientData } from '@/types/client';

export default function MinimalTemplate({ client }: { client: ClientData }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 selection:bg-tertiary-container selection:text-on-tertiary-container text-center">
      <div className="max-w-2xl w-full glass rounded-[3rem] p-10 md:p-16 hover:border-tertiary-dim/50 transition-all duration-700 reveal active backdrop-blur-3xl shadow-[0_0_80px_rgba(242,113,181,0.1)]">
        
        {/* Profile */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-surface-bright shadow-2xl">
            <Image
              src={client.profileImage}
              alt={client.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-glow mb-2">{client.name}</h1>
          <p className="text-tertiary-dim font-medium tracking-wide text-lg uppercase font-label">{client.title}</p>
          <div className="flex items-center gap-1 text-on-surface-variant text-sm mt-3">
            <span className="material-symbols-outlined text-sm">location_on</span>
            {client.location}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-12">
          <p className="text-on-surface-variant text-lg leading-relaxed">{client.bio}</p>
        </div>

        {/* Services */}
        {client.services && client.services.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6 text-on-surface">Core Expertise</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {client.services.map((service, index) => (
                <span key={index} className="px-5 py-2 rounded-full border border-tertiary-dim/30 text-sm font-medium bg-tertiary-dim/5 text-on-surface">
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="pt-8 border-t border-outline-variant/20">
          <h2 className="text-xl font-bold mb-6 text-on-surface">Let's Connect</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={`mailto:${client.contact.email}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-tertiary-dim text-on-tertiary-container font-bold hover:shadow-[0_0_20px_rgba(242,113,181,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">mail</span> Email Me
            </a>
            <a 
              href={client.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-tertiary-dim/40 hover:bg-tertiary-dim/10 text-on-surface font-bold transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span> WhatsApp
            </a>
            {client.contact.phone && (
              <a 
                href={`tel:${client.contact.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-surface-bright hover:bg-surface-bright/50 text-on-surface font-bold transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span> Call
              </a>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
