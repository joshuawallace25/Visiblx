'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between px-10 py-5 max-w-[1440px] mx-auto">
          <div className="text-2xl font-black tracking-tighter text-on-surface flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Visiblx Logo" width={32} height={32} className="rounded-md object-cover" />
            Visiblx
          </div>
          <nav className="hidden md:flex items-center gap-8 font-label tracking-tight text-sm font-medium">
            <Link className="text-white border-b-2 border-primary pb-1" href="/">Solutions</Link>
            <Link className="text-gray-400 hover:text-white transition-all duration-300" href="/">Technology</Link>
            <Link className="text-gray-400 hover:text-white transition-all duration-300" href="/">Showcase</Link>
            <Link className="text-gray-400 hover:text-white transition-all duration-300" href="/">About</Link>
          </nav>
          <div className="flex items-center gap-6">
            <button className="active:scale-95 transform transition-all px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Get Started
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 relative outline-none focus:outline-none">
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center gap-8 font-label tracking-widest text-xl uppercase font-bold text-center">
            <Link onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-primary transition-colors duration-300" href="/">Solutions</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-300" href="/">Technology</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-300" href="/">Showcase</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-300" href="/">About</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 mesh-glow -z-[1] animate-pulse-slow"></div>
          <div className="max-w-6xl mx-auto px-6 text-center reveal active">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-label uppercase tracking-widest text-primary-fixed">Visibility Made Simple</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 leading-[1.15] text-balance mx-auto">
              If someone searches your name today, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">what will they find?</span>
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-balance px-4">
             Visiblx is a platform that helps individuals and businesses get found on Google with simple, professional pages. so when someone searches your name, you’re visible.
            </p>

            {/* Google Simulation Mockup */}
            <div className="mt-8 md:mt-12 max-w-3xl mx-auto relative group animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass-high rounded-xl p-8 text-left shadow-2xl border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 border-b border-white/10 pb-6">
                  <div className="flex text-2xl font-bold tracking-tight shrink-0">
                    <span className="google-blue">G</span>
                    <span className="google-red">o</span>
                    <span className="google-yellow">o</span>
                    <span className="google-blue">g</span>
                    <span className="google-green">l</span>
                    <span className="google-red">e</span>
                  </div>
                  <div className="w-full flex-1 h-10 rounded-full bg-[#111111] px-4 sm:px-5 flex items-center gap-3 border border-white/10 min-w-0">
                    <span className="material-symbols-outlined text-sm text-gray-400 shrink-0">search</span>
                    <span className="text-xs sm:text-sm text-white overflow-hidden text-ellipsis whitespace-nowrap border-r-2 border-white pr-1 typing-cursor min-w-0 w-full">Testimony Ruth Wallace Professional</span>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="transition-all duration-500">
                    <Link href="/john" className="block group/link">
                      <div className="text-primary text-xl mb-1 group-hover/link:underline cursor-pointer font-medium">Testimony Ruth Wallace | Official Identity &amp; Professional Hub</div>
                      <div className="text-gray-400 text-xs mb-2">https://testimony.visiblx.com/</div>
                      <div className="text-gray-500 text-sm leading-relaxed">Claim your digital legacy with Visiblx. High-trust identity verification and professional curation for modern leaders. Get found on Google with a verified presence...</div>
                    </Link>
                  </div>
                  <div className="opacity-40">
                    <div className="text-primary text-xl mb-1">Unverified Social Link</div>
                    <div className="text-gray-500 text-sm">Description unavailable for this result. Privacy settings may restrict access to outdated content.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Problem Statement */}
        <section className="py-16 md:py-24 relative bg-surface-container-low">
          <div className="max-w-6xl mx-auto px-6 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                  Visibility is no longer <span className="text-primary italic">optional.</span>
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  In a digital-first economy, silence isn't safety—it's obscurity. Your reputation is being judged before you even enter the room. If you don't control the narrative, the algorithm will.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full glass border-primary/10">
                    <span className="material-symbols-outlined text-primary">security</span>
                    <span className="font-bold text-sm">Identity Protection</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full glass border-secondary/10">
                    <span className="material-symbols-outlined text-secondary">trending_up</span>
                    <span className="font-bold text-sm">SEO Domination</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="glass p-10 rounded-2xl relative overflow-hidden group hover:bg-primary/5 transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl">visibility_off</span>
                  </div>
                  <div className="text-primary text-6xl font-black mb-4">90%</div>
                  <h3 className="text-2xl font-bold mb-3">Opportunities Lost</h3>
                  <p className="text-on-surface-variant leading-relaxed">Top-tier recruiters and clients skip profiles that lack a verified, high-trust digital presence.</p>
                </div>
                <div className="glass p-10 rounded-2xl relative overflow-hidden group border-[rgba(195,192,255,0.2)] hover:bg-[rgba(195,192,255,0.05)] transition-colors duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl">shield_person</span>
                  </div>
                  <div className="text-secondary text-6xl font-black mb-4">64%</div>
                  <h3 className="text-2xl font-bold mb-3">Identity Misuse</h3>
                  <p className="text-on-surface-variant leading-relaxed">Unclaimed names are vulnerable to impersonation, leading to reputational damage that takes years to fix.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Visiblx Monolith */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center reveal">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-8 md:mb-12"></div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 md:mb-6">Visibility made simple.</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-16 md:mb-20">A single source of truth. A luminous pillar of trust that anchors your digital existence.</p>
            
            <div className="relative w-full max-w-4xl mx-auto h-[350px] md:h-[450px] flex items-center justify-center scale-90 md:scale-100 mt-8 mb-8 md:mt-12 md:mb-12">
              {/* Monolith */}
              <div className="absolute w-40 h-72 md:w-48 md:h-80 bg-gradient-to-t from-[#222222] via-[#111111] to-black rounded-2xl shadow-[0_30px_100px_rgba(255,255,255,0.05)] border border-white/20 backdrop-blur-3xl z-10 transform rotate-12 flex items-center justify-center hover:rotate-0 transition-transform duration-1000 group cursor-default">
                <div className="text-5xl md:text-6xl font-black text-[#333333] tracking-tighter -rotate-90 group-hover:text-white transition-colors">VISIBLX</div>
                <div className="absolute bottom-6 left-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white animate-ping"></div>
              </div>

              {/* Orbiting Features */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-white/5 rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
                  <div className="absolute -top-4 md:-top-5 bg-[#111111] p-3 md:p-4 border border-white/20 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-white text-2xl md:text-3xl">verified</span>
                  </div>
                </div>
                <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] border border-white/5 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                  <div className="absolute -right-5 md:-right-6 bg-[#111111] p-3 md:p-4 border border-white/20 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-white text-2xl md:text-3xl">share_reviews</span>
                  </div>
                  <div className="absolute -left-5 md:-left-6 bg-[#111111] p-3 md:p-4 border border-white/20 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="material-symbols-outlined text-white text-2xl md:text-3xl">lock_person</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 relative z-20">
              {/* Feature 1 */}
              <div className="glass p-8 md:p-10 rounded-3xl hover:border-white/50 hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-3xl">search_insights</span>
                </div>
                <h4 className="font-black text-white text-2xl mb-4">Get Found</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Proprietary SEO algorithms ensure your Visiblx profile ranks #1 for your name globally.</p>
              </div>

              {/* Feature 2 */}
              <div className="glass p-8 md:p-10 rounded-3xl hover:border-white/50 hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
                </div>
                <h4 className="font-black text-white text-2xl mb-4">Build Trust</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Blockchain-backed verification icons for every professional claim and certification you hold.</p>
              </div>

              {/* Feature 3 */}
              <div className="glass p-8 md:p-10 rounded-3xl hover:border-white/50 hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-all"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-3xl">tune</span>
                </div>
                <h4 className="font-black text-white text-2xl mb-4">Control Identity</h4>
                <p className="text-base text-on-surface-variant leading-relaxed">Update your narrative instantly across search engines from a centralized dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Three Steps */}
        <section className="py-16 md:py-24 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 reveal">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Own Your Legend in Three Steps</h2>
              <p className="text-on-surface-variant">Professionalism simplified for the digital age.</p>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-8 items-start">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent z-[0]"></div>
              
              <div className="flex-1 flex flex-col items-center group relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl glass flex items-center justify-center mb-6 md:mb-8 border-white/20 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-white/5">
                  <span className="material-symbols-outlined text-4xl text-white">how_to_reg</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">1. Claim</h3>
                <p className="text-on-surface-variant text-center max-w-[250px] leading-relaxed">Secure your unique <span className="text-primary">name.visiblx.com</span> handle instantly before someone else does.</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center group relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl glass flex items-center justify-center mb-6 md:mb-8 border-white/20 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-white/5">
                  <span className="material-symbols-outlined text-4xl text-white">auto_fix_high</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">2. Curate</h3>
                <p className="text-on-surface-variant text-center max-w-[250px] leading-relaxed">Upload proof of expertise and sync your social narratives into one cohesive professional story.</p>
              </div>

              <div className="flex-1 flex flex-col items-center group relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl glass flex items-center justify-center mb-6 md:mb-8 border-white/20 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-white/5">
                  <span className="material-symbols-outlined text-4xl text-white">settings_input_antenna</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">3. Control</h3>
                <p className="text-on-surface-variant text-center max-w-[250px] leading-relaxed">Deploy your profile to the global search index and watch your reputation transform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Pricing */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-6 reveal">
            <div className="text-center mb-14 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Premium Reputation Management</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Simple, transparent, luminous pricing for every stage of your career.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
              <div className="glass-high p-8 md:p-10 rounded-3xl border-white/10 hover:border-primary/60 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all"></div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <div className="font-label text-xs tracking-widest text-primary mb-4 uppercase font-bold">For Individuals</div>
                    <h3 className="text-3xl font-bold">Personal Identity</h3>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <span className="material-symbols-outlined text-primary text-3xl">person</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black">$15</span>
                  <span className="text-on-surface-variant text-xl">/year</span>
                </div>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 text-base">check</span>
                    <span>Verified visiblx.com Profile</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 text-base">check</span>
                    <span>Standard SEO Search Priority</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1 text-base">check</span>
                    <span>Basic Reputation Monitoring</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface/50">
                    <span className="material-symbols-outlined text-outline-variant bg-outline-variant/10 rounded-full p-1 text-base">close</span>
                    <span>Executive Identity Shield</span>
                  </li>
                </ul>
                <button className="w-full py-5 rounded-2xl border-2 border-primary/30 font-bold hover:bg-primary hover:text-on-primary hover:shadow-[0_0_30px_rgba(193,128,255,0.4)] transition-all duration-300 transform active:scale-[0.98]">
                  Start Your Journey
                </button>
              </div>

              <div className="glass-high p-8 md:p-10 rounded-3xl border-white/20 hover:border-white/50 transition-all duration-500 relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-all"></div>
                <div className="absolute top-8 right-8">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black tracking-widest text-white uppercase">Recommended</span>
                </div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <div className="font-label text-xs tracking-widest text-secondary mb-4 uppercase font-bold">For Businesses</div>
                    <h3 className="text-3xl font-bold">Executive Suite</h3>
                  </div>
                  <div className="bg-secondary/10 p-3 rounded-2xl">
                    <span className="material-symbols-outlined text-secondary text-3xl">corporate_fare</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black">$25</span>
                  <span className="text-on-surface-variant text-xl">/year</span>
                </div>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-base">check</span>
                    <span>Multi-user Brand Dashboard</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-base">check</span>
                    <span>Executive Identity Shield</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-base">check</span>
                    <span>24/7 Negative Result Alerts</span>
                  </li>
                  <li className="flex items-center gap-4 text-on-surface">
                    <span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-base">check</span>
                    <span>Priority Indexing Support</span>
                  </li>
                </ul>
                <button className="w-full py-5 rounded-2xl bg-secondary text-on-secondary font-bold hover:shadow-[0_0_40px_rgba(195,192,255,0.5)] transition-all duration-300 transform active:scale-[0.98]">
                  Empower Your Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto px-6 reveal">
            <div className="glass-high p-10 md:p-16 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.02)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 -z-[1]"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter text-balance mx-auto">Don't leave your <br className="hidden md:block"/> reputation to chance.</h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">Join 15,000+ professionals who have already claimed their digital destiny with Visiblx.</p>
              <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg md:text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.1)] border border-transparent hover:border-white">
                <span className="relative z-10">Claim Your Identity Now</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] md:rounded-t-[4rem] mt-12 md:mt-20 bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-12 md:py-16 gap-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3">
               <Image src="/logo.jpeg" alt="Visiblx Logo" width={40} height={40} className="rounded-md object-contain border border-white/10 shadow-lg" />
               <div className="text-3xl font-black text-white tracking-tighter">Visiblx</div>
            </div>
            <p className="font-label text-sm tracking-widest uppercase text-on-surface-variant">© 2026 Visiblx. Visibility made simple.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 font-label text-xs tracking-widest uppercase font-bold">
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Security</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Changelog</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Contact Sales</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
