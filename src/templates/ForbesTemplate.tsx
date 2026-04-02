import Image from 'next/image';
import { ClientData } from '@/types/client';

export default function ForbesTemplate({ client }: { client: ClientData }) {
  return (
    <main className="min-h-screen bg-white text-[#121212] selection:bg-[#ed1c24] selection:text-white pb-20">
      {/* Top Navigation / Brand Bar */}
      <div className="border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="forbes-title text-2xl tracking-tighter border-b-4 border-[#ed1c24] leading-none pb-1"> VISIBLX </div>
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hidden md:block">
          Authentic Profile &bull; Digital Identity
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Image & Snapshot */}
          <div className="lg:col-span-4 space-y-8">
            <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 group">
              <Image
                src={client.profileImage}
                alt={client.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gray-200 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Verified Info
              </div>
            </div>

            {/* Profile Stats Card */}
            <div className="border-t-8 border-[#ed1c24] bg-[#f9f9f9] p-8 space-y-6">
              <div className="forbes-subtitle">At a Glance</div>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <div className="forbes-stat-label">Citizenship</div>
                  <div className="forbes-stat-value">{client.citizenship}</div>
                </div>
                <div>
                  <div className="forbes-stat-label">Residence</div>
                  <div className="forbes-stat-value">{client.residence}</div>
                </div>
                <div>
                  <div className="forbes-stat-label">Age</div>
                  <div className="forbes-stat-value">{client.age}</div>
                </div>
                <div>
                  <div className="forbes-stat-label">Education</div>
                  <div className="forbes-stat-value text-sm leading-tight mt-1">{client.education}</div>
                </div>
              </div>

              {client.verifiedBy && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="forbes-stat-label mb-2">Verified By</div>
                  <div className="flex flex-wrap gap-2">
                    {client.verifiedBy.map((v, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-1 bg-gray-200 text-gray-700 uppercase tracking-tighter">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Social Connect */}
            <div className="space-y-4">
              <div className="forbes-subtitle text-xs">Connect</div>
              <div className="flex flex-col gap-3">
                {Object.entries(client.socialLinks).map(([network, url]) => (
                  <a 
                    key={network} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex justify-between items-center py-2 border-b border-gray-100 hover:border-[#ed1c24] group transition-colors"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#ed1c24]">{network}</span>
                    <span className="material-symbols-outlined text-sm text-gray-300 group-hover:text-[#ed1c24]">arrow_outward</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Details */}
          <div className="lg:col-span-8">
            <div className="space-y-2 mb-10">
              <div className="flex items-center gap-4 text-[#ed1c24] font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm">
                <span>The Global Profile</span>
                <span className="h-[1px] flex-1 bg-[#ed1c24]/20"></span>
                <span>2026</span>
              </div>
              <h1 className="forbes-title text-6xl md:text-8xl leading-[0.9]">{client.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
                 <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest">
                   {client.impactScore || "Global Leader"}
                 </div>
                 <div className="text-lg font-medium text-gray-500 italic">
                   {client.ranking}
                 </div>
              </div>
            </div>

            <div className="forbes-divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-1 w-full gap-12">
              {/* Bio Section */}
              <div className="prose prose-lg max-w-none">
                <p className="forbes-title text-2xl md:text-3xl leading-relaxed italic text-gray-800 mb-8">
                  "{client.bio}"
                </p>
                <div className="text-gray-600 leading-loose text-lg space-y-6">
                  {client.about || client.bio}
                </div>
              </div>

              {/* Achievements Section */}
              {client.achievements && (
                <div className="pt-12 border-t border-gray-100">
                  <h2 className="forbes-subtitle mb-8">Key Milestones</h2>
                  <div className="space-y-12">
                    {client.achievements.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start group">
                        <div className="forbes-stat-value text-gray-400 group-hover:text-[#ed1c24] transition-colors">{item.year}</div>
                        <div className="md:col-span-3 space-y-2">
                          <h3 className="forbes-title text-xl">{item.title}</h3>
                          <p className="text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quotes Section */}
              {client.quotes && (
                <div className="bg-black p-12 text-white relative overflow-hidden mt-12 group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-[120px]">format_quote</span>
                  </div>
                  <h2 className="forbes-subtitle text-white/50 mb-8">Personal Perspective</h2>
                  <div className="space-y-12 relative z-10">
                    {client.quotes.map((quote, idx) => (
                      <div key={idx} className="space-y-4">
                        <p className="forbes-title text-2xl md:text-4xl italic leading-tight">"{quote}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Did You Know? */}
              {client.didYouKnow && (
                <div className="pt-12">
                  <h2 className="forbes-subtitle mb-8">Did You Know?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {client.didYouKnow.map((fact, idx) => (
                      <div key={idx} className="p-6 border border-gray-100 hover:border-gray-300 transition-all shadow-sm bg-white hover:-translate-y-1">
                        <div className="w-8 h-8 rounded-full bg-[#ed1c24] text-white flex items-center justify-center font-bold text-xs mb-4">
                           {idx + 1}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{fact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Authentic Mark */}
      <footer className="mt-32 pt-20 border-t border-gray-100 text-center space-y-8">
        <div className="max-w-2xl mx-auto px-6">
          <div className="forbes-title text-4xl mb-4 tracking-tighter">VISIBLX</div>
          <p className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">
            The data presented on this profile has been verified as authentic by Visiblx. <br />
            &copy; 2024 Visiblx &bull; All Rights Reserved.
          </p>
        </div>
        <div className="h-2 w-full bg-black"></div>
      </footer>
    </main>
  );
}
