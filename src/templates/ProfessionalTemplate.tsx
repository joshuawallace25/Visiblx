import Image from 'next/image';
import { ClientData } from '@/types/client';

export default function ProfessionalTemplate({ client }: { client: ClientData }) {
  return (
    <main className="min-h-screen pt-24 pb-32 px-6 md:px-12 selection:bg-secondary-container selection:text-on-secondary-container">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="glass-high p-8 md:p-12 rounded-3xl mb-8 flex flex-col md:flex-row items-start md:items-center gap-10 relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full group-hover:bg-secondary/20 transition-all duration-1000"></div>
          
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-secondary/20">
            <Image
              src={client.profileImage}
              alt={client.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 192px"
              priority
            />
          </div>

          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-slow"></span>
              <span className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold">Verified Professional</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{client.name}</h1>
            <p className="text-xl text-secondary mb-4 font-medium">{client.title}</p>
            <div className="flex items-center gap-4 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {client.location}</span>
            </div>
          </div>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass p-8 md:p-10 rounded-3xl border-outline-variant/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">person</span>
                Professional Summary
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">{client.bio}</p>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl border-outline-variant/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">verified</span>
                Areas of Expertise
              </h2>
              <ul className="space-y-4">
                {client.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/50 border border-outline-variant/10">
                     <span className="material-symbols-outlined text-secondary">check_circle</span>
                     <span className="font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border-secondary/20">
              <h2 className="text-xl font-bold mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <a href={`mailto:${client.contact.email}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 border border-transparent hover:border-secondary/20 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                    <span className="material-symbols-outlined text-secondary">mail</span>
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant mb-1 font-label uppercase">Email</div>
                    <div className="font-medium text-sm truncate">{client.contact.email}</div>
                  </div>
                </a>
                
                <a href={client.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#25D366]/10 border border-transparent hover:border-[#25D366]/20 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                    <span className="material-symbols-outlined text-[#25D366]">chat</span>
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant mb-1 font-label uppercase">WhatsApp</div>
                    <div className="font-medium text-sm">Send a message</div>
                  </div>
                </a>

                {client.contact.phone && (
                  <a href={`tel:${client.contact.phone}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-bright/50 border border-transparent hover:border-surface-bright transition-all group">
                    <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface">call</span>
                    </div>
                    <div>
                      <div className="text-xs text-on-surface-variant mb-1 font-label uppercase">Phone</div>
                      <div className="font-medium text-sm">{client.contact.phone}</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {Object.keys(client.socialLinks).length > 0 && (
              <div className="glass p-8 rounded-3xl border-outline-variant/10 flex gap-4 justify-center">
                {Object.entries(client.socialLinks).map(([network, url]) => (
                  <a key={network} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all hover:scale-110">
                    <span className="text-xs font-bold uppercase">{network.substring(0,2)}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
