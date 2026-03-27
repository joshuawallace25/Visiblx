import Image from 'next/image';
import { ClientData } from '@/types/client';

export default function TeslaTemplate({ client }: { client: ClientData }) {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-headline">
      {/* Hero Section - Full Viewport */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <Image
            src={client.profileImage}
            alt={client.name}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          {/* Gradients for text contrast */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* Top Header */}
        <div className="relative z-10 pt-[15vh] px-6 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2 uppercase text-white drop-shadow-2xl">
            {client.name}
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-gray-300 drop-shadow-md">
            {client.title}
          </p>
        </div>

        {/* Bottom Interactive Area */}
        <div className="relative z-10 pb-12 md:pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col items-center animate-fade-in-up-delayed">
          {/* Specs / Highlights */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-24 mb-10 md:mb-12 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-medium mb-1"><span className="material-symbols-outlined text-3xl">location_on</span></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Location</span>
              <span className="text-xs md:text-sm text-gray-300 mt-1">{client.location}</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-medium mb-1">{client.services.length}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Expertise Areas</span>
              <span className="text-xs md:text-sm text-gray-300 mt-1">Verified</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-medium mb-1 flex items-center justify-center"><span className="material-symbols-outlined text-3xl text-white">verified</span></span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Visiblx Status</span>
              <span className="text-xs md:text-sm text-gray-300 mt-1">Authentic</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg mx-auto">
            <a href={`mailto:${client.contact.email}`} className="flex-1 bg-white text-black py-3 px-6 rounded text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-center shadow-lg">
              Contact Me
            </a>
            {client.contact.whatsapp && (
              <a href={client.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/60 backdrop-blur-md border border-white/50 text-white py-3 px-6 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors text-center shadow-lg">
                WhatsApp
              </a>
            )}
            {!client.contact.whatsapp && client.contact.phone && (
              <a href={`tel:${client.contact.phone}`} className="flex-1 bg-black/60 backdrop-blur-md border border-white/50 text-white py-3 px-6 rounded text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors text-center shadow-lg">
                Call Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-black py-24 md:py-32 px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight">Bio.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{client.bio}</p>
              
              {Object.keys(client.socialLinks).length > 0 && (
                <div className="mt-10 flex gap-4">
                  {Object.entries(client.socialLinks).map(([network, url]) => (
                     <a key={network} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-110">
                       <span className="text-xs font-bold uppercase">{network.substring(0,2)}</span>
                     </a>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-8 animate-fade-in-up-delayed">
              <h3 className="text-2xl font-medium border-b border-gray-800 pb-4 text-white">Capabilities & Specs</h3>
              <ul className="space-y-6">
                {client.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-6 text-gray-300">
                    <span className="w-12 h-[1px] bg-gray-600 block shrink-0"></span>
                    <span className="text-lg tracking-wide uppercase font-light">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-gray-900 text-center text-xs tracking-widest uppercase text-gray-600">
        Visiblx Identity Platform &bull; {new Date().getFullYear()}
      </footer>

      {/* Tailwind handles standard animations but we can add inline custom ones for that seamless Tesla fade */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
