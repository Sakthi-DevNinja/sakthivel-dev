
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceSection } from './components/ExperienceSection';
import { ProductLab } from './components/ProductLab';
import { ProductDetailView } from './components/ProductDetailView';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import { 
  PERSON_NAME, 
  HEADLINE, 
  ABOUT_TEXT, 
  HOW_I_WORK,
  SYSTEM_THINKING_TEXT,
  INTERNAL_TOOLS_PHILOSOPHY_TEXT,
  KEY_STRENGTHS,
  CONFIDENTIAL_NOTICE,
  SYSTEMS, 
  EXPERIENCE, 
  EDUCATION, 
  AVAILABILITY,
  PRODUCTS
} from './constants';
import { Product } from './types';

import { SocialMedia } from "./components/SocialMedia";

type ViewState = 'HOME' | 'PRODUCT_LAB' | 'PRODUCT_DETAIL';

const PROFILE_IMAGE = "./owner/sakthi.webp";
const ABOUT_IMAGE = "./owner/about-sakthi.webp";

// For Project load count
const INITIAL_COUNT = 4;

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expanded, setExpanded] = React.useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#product-lab') {
        setView('PRODUCT_LAB');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#product/')) {
        const id = hash.replace('#product/', '');
        const p = PRODUCTS.find(prod => prod.id === id);
        if (p) {
          setSelectedProduct(p);
          setView('PRODUCT_DETAIL');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setView('HOME');
        }
      } else {
        const wasSubpage = view !== 'HOME';
        setView('HOME');
        
        if (hash && hash !== '#' && hash !== '') {
          const delay = wasSubpage ? 100 : 0;
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
              const yOffset = -100;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, delay);
        } else if (wasSubpage) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [view]);

  const handleHomeClick = () => {
    if (view === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#');
    } else {
      window.location.hash = '';
    }
  };

  const handleLabClick = () => {
    // Google Analytics event
    if (window.gtag) {
      window.gtag('event', 'product_lab_access', {
        event_category: 'engagement',
        event_label: 'Access Product Lab Button',
        value: 1
      });
    }
    window.location.hash = '#product-lab';
  };

  if (view === 'PRODUCT_DETAIL' && selectedProduct) {
    return (
      <section id="product-lab-detailed">
        <div className="relative z-10 min-h-screen flex flex-col bg-black">
          <Navbar scrolled={scrolled} name={PERSON_NAME} onHomeClick={handleHomeClick} onLabClick={handleLabClick} />
          <div className="flex-grow">
            <ProductDetailView product={selectedProduct} onBack={handleLabClick} />
          </div>
          <Footer />
        </div>
      </section>
    );
  }

  if (view === 'PRODUCT_LAB') {
    return (
      <section id="product-lab">
        <div className="relative z-10 min-h-screen flex flex-col bg-black">
          <Navbar scrolled={scrolled} name={PERSON_NAME} onHomeClick={handleHomeClick} onLabClick={handleLabClick} />
          <main className="max-w-6xl mx-auto py-40 px-6 flex-grow">
            <div className="text-center mb-24">
              <h2 className="mono text-blue-500 text-sm uppercase tracking-[0.25em] mb-8">The Product Lab</h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient leading-tight mb-8">
                System Catalog
              </h1>
              <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
                A detailed technical breakdown of production systems, architecture choices, and developer workflows.
              </p>
            </div>
            <ProductLab products={PRODUCTS} onSelectProduct={(p) => window.location.hash = `#product/${p.id}`} />
          </main>
          <Footer />
        </div>
      </section>
    );
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col bg-black">
      <Navbar scrolled={scrolled} name={PERSON_NAME} onHomeClick={handleHomeClick} onLabClick={handleLabClick} />

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6">

          {/* <div className="absolute left-[10rem] top-[10rem]  w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10"></div> */}
          
          {/* Glow Effect absolute center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-blue-800/20 blur-[140px] z-0"></div>


          <div className="absolute inset-0 flex items-center justify-center pt-28 md:pt-40">
             <img 
               src={PROFILE_IMAGE} 
               alt={`${PERSON_NAME} – Professional Portrait`} 
               className="h-full w-auto max-h-[90vh] object-contain pointer-events-none select-none"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 80%)'
               }}
             />
          </div>

          {/* Architecture & Full Stack Engineering */}
          <div className="relative z-20 flex flex-col items-center text-center mt-[32rem] md:mt-[30rem]">
             <h2 className="text-[#3B82F6] font-bold tracking-[0.2em] md:tracking-[0.4em] mb-2 text-[0.6rem] md:text-xl drop-shadow-lg">
               FULL STACK WEB DEVELOPER | ERP & SaaS PRODUCTS
             </h2>
             <h1 className="text-5xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.1em] leading-none uppercase select-none metallic-text whitespace-nowrap">
                {PERSON_NAME}
             </h1>

              <p className="text-[#9d9d9d] text-[0.6rem] font-bold tracking-[0.1em] md:tracking-[0.2em] mt-2 text-md md:text-[1rem]">3 Years | PHP, MySQL, JavaScript, jQuery, React, HTML, CSS</p>    

              <SocialMedia className="justify-center mt-8" />

         </div>
        </section>

        {/* 01 / Perspective Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">01 / Perspective</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            
            <div className="glass p-8 md:p-16 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row gap-12 items-start">

               {/* Glow Effect - left bottom */}
               {/* <div className="absolute left-[0rem] bottom-[0rem] -translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-blue-800/20 blur-[140px] z-0"></div> */}
               {/* Glow Effect - right top */}
               <div className="absolute right-[0rem] top-[0rem] translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-blue-800/20 blur-[140px] z-0"></div>

               <div className="w-24 h-24 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border-2 border-blue-500/20 shrink-0 shadow-2xl relative group bg-black">
                  <img 
                    src={ABOUT_IMAGE} 
                    alt={PERSON_NAME} 
                    className="w-full h-full object-contain grayscale transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:opacity-0 transition-opacity"></div>
               </div>

               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 filter blur-[100px] rounded-full pointer-events-none"></div>
               <div className="prose prose-invert max-w-none flex-1">
                  {ABOUT_TEXT.split('\n\n').map((paragraph, idx) => (
                   <p key={idx} className="text-lg md:text-xl font-light leading-relaxed text-neutral-300 mb-6 last:mb-0">
                     {paragraph}
                   </p>
                  ))}
                 
                  <div className="flex justify-start mt-10">
                    <a
                      href="./owner/Sakthivel-full_stack_web_developer.pdf"
                      download="Sakthivel-CV.pdf"
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag('event', 'download_cv', {
                            event_category: 'engagement',
                            event_label: 'CV Download Button',
                            value: 1
                          });
                        }
                      }}
                      className="mono text-xs uppercase tracking-[0.4em]
                                px-10 py-4 rounded-full
                                border border-white/10
                                text-neutral-400 hover:text-blue-400
                                hover:border-blue-500/40
                                transition-all inline-block"
                    >
                      Grab My Resume
                    </a>
                  </div>

               </div>
            </div>
          </div>
        </section>

        {/* 02 / Operational Strategy */}
        <section id="how-i-work" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">02 / Operational Strategy</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <div className="glass p-8 md:p-14 rounded-[2.5rem] border-blue-500/10 relative overflow-hidden">
                 <div className="absolute left-[0rem] top-[0rem] -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-blue-800/20 blur-[140px] z-0"></div>
                {HOW_I_WORK.map((howIWork, idx) => (
                  <p key={idx} className="text-lg md:text-xl font-light leading-relaxed text-neutral-300 mb-6 last:mb-0 relative" >
                    {howIWork}
                  </p>
                ))}
            </div>
          </div>
        </section>
        
        {/* 03 / System & Architecture Thinking */}
        <section id="arch-thinking" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">03 / System & Architecture Thinking</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <div className="glass p-8 md:p-14 rounded-[2.5rem] border-blue-500/10 bg-white/[0.01] relative overflow-hidden">

              <div className="absolute right-[0rem] top-[0rem] translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-blue-800/20 blur-[140px] z-0"></div>

              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-300">
                {SYSTEM_THINKING_TEXT}
              </p>
            </div>
          </div>
        </section>

        {/* 04/  Technical Capabilities Section */}
        <section id="technical-capabilities" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono"> 04 / Technical Capabilities</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <TechnicalCapabilities />
          </div>
        </section>


        {/* 05 / Core Impact Matrix */}
        <section id="strengths" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">05 / Core Impact Matrix</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {KEY_STRENGTHS.map((strength, idx) => (
                <div key={idx} className="glass p-10 rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-center group">
                  <div className="w-10 h-px bg-blue-500 mb-6 opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all"></div>
                  <p className="text-neutral-300 text-lg font-light leading-relaxed">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 / Building Internal Tools That Matter */}
        <section id="internal-tools-philosophy" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">06 / Building Internal Tools That Matter</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            <div className="glass p-8 md:p-14 rounded-[2.5rem] border-blue-500/10 border-dashed">
              <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-300">
                {INTERNAL_TOOLS_PHILOSOPHY_TEXT}
              </p>
            </div>
          </div>
        </section>

        {/* 07 / Product Lab Hub Teaser */}
        <section id="lab-teaser" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
             <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">07 / Product Lab Hub</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            
            <div className="glass p-12 md:p-24 rounded-[4rem] text-center border-blue-500/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 pointer-events-none group-hover:bg-blue-500/10 transition-all duration-700"></div>
              <h3 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-gradient">The Lab Ecosystem</h3>
              <p className="text-xl md:text-2xl text-neutral-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                Explore a deeper technical architecture of core systems including real-time monitoring and field deployment apps.
              </p>
              <button 
                onClick={handleLabClick}
                className="px-14 py-6 glass border-blue-500/40 text-blue-400 font-bold rounded-full hover:bg-blue-500/20 transition-all uppercase tracking-widest text-sm"
              >
                Access Product Lab
              </button>
            </div>
          </div>
        </section>

        {/* 08 / Architecture Selected (Work) */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">08 / Architecture Selected</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
               <div className="glass p-8 rounded-3xl border-dashed border-blue-500/20 bg-blue-500/5 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl border border-blue-500/30 flex items-center justify-center flex-shrink-0 bg-blue-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="mono text-[10px] uppercase tracking-[0.4em] text-blue-500 mb-2 font-bold">Confidentiality Protocol</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed italic">{CONFIDENTIAL_NOTICE}</p>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {SYSTEMS
                .slice(0, expanded ? SYSTEMS.length : INITIAL_COUNT)
                .map(system => (
                  <ProjectCard key={system.id} project={system} />
                ))}
            </div>

            <div className="flex justify-center mt-16">
              <button
                onClick={() => {
                  setExpanded(e => !e);
                  if(expanded) {window.location.hash = '#work';}
                }}

                className="mono text-xs uppercase tracking-[0.4em]
                          px-10 py-4 rounded-full
                          border border-white/10
                          text-neutral-400 hover:text-blue-400
                          hover:border-blue-500/40
                          transition-all"
              >
                {expanded ? "Show less" : "Explore more"}
              </button>
            </div>

          </div>
        </section>

        {/* 09 / Career Matrix */}
        <section id="experience" className="py-24 px-6 bg-white/[0.005]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-20">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">09 / Career Matrix</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>
            
            <div className="space-y-24">
              {EXPERIENCE.map((exp, idx) => (
                <ExperienceSection key={idx} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* 10 / Academic Foundation */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">10 / Academic Foundation</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass p-12 rounded-[2.5rem] group hover:border-blue-500/40 transition-all duration-500">
                  <span className="mono text-blue-500 text-[12px] uppercase tracking-widest block mb-4 font-bold">{edu.period}</span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors tracking-tight">{edu.degree}</h3>
                  <p className="text-neutral-500 mb-3 font-light italic text-lg">{edu.university}</p>
                  <p className="text-sm text-neutral-500 font-light italic text-lg">{edu.institution} - {edu.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 / Connectivity (Contact) */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <h2 className="text-xs md:text-lg uppercase tracking-[0.25em] text-blue-500 mono">11 / Protocol: Handshake</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>

            <div className="mb-16 text-center">
              <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed border-b border-white/5 pb-12 italic text-center">
                {AVAILABILITY}
              </p>
            </div>

            <div className="glass rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group border-blue-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter">Initiate Direct Link.</h2>
              <p className="text-xl md:text-2xl text-neutral-400 mb-20 max-w-xl mx-auto font-light leading-relaxed">
                Ready to architect reliable software systems. Let's build something that scales.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="mailto:vel8679@gmail.com" className="px-14 py-6 bg-white text-black font-bold rounded-full hover:scale-105 transition-all w-full md:w-auto text-center shadow-xl">
                  Primary Mailbox
                </a>
                <a href="https://linkedin.com/in/sakthivel-dev" target="_blank" rel="noopener noreferrer" className="px-14 py-6 glass rounded-full hover:bg-white/10 transition-colors w-full md:w-auto font-semibold text-center tracking-wide"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag('event', 'linkedin_profile_click', {
                        event_category: 'contact',
                        event_label: 'LinkedIn Network Button'
                      });
                    }
                  }}
                >
                  LinkedIn Network
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
const Footer: React.FC = () => (
  <footer className="py-20 px-6 text-center border-t border-white/5 relative overflow-hidden bg-black">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/5 filter blur-[120px] rounded-full -z-10"></div>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col gap-2 text-left">
        <p className="mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.25em] text-neutral-700">
          SAKTHIVEL S // FULL STACK WEB DEVELOPER 
        </p>
        <p className="mono text-[10px] tracking-[0.3em] text-neutral-800 uppercase text-center md:text-left
">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>

      <div className="flex gap-4">
        <span className="text-[10px] text-neutral-800 mono tracking-widest uppercase">
          Production Systems Experience
        </span>
        <span className="text-[10px] text-neutral-800 mono tracking-widest uppercase">
          //
        </span>
        <span className="text-[10px] text-neutral-800 mono tracking-widest uppercase">
          ERP & SaaS Focus
        </span>
      </div>
    </div>
  </footer>
);

export default App;
