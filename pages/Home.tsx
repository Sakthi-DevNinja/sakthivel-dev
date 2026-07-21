import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { PERSON_NAME } from '../constants';
import { SocialMedia } from "../components/SocialMedia";

const PROFILE_IMAGE = "/owner/sakthi.webp";

const Home: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLabClick = () => {

    if (window.gtag) {
      window.gtag('event', 'product_lab_access', {
        event_category: 'engagement',
        event_label: 'Access Product Lab Button',
        value: 1
      });
    }

    window.location.href = "/product-lab/";
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col bg-black">

      <Navbar
        scrolled={scrolled}
        name={PERSON_NAME}
        onHomeClick={handleHomeClick}
        onLabClick={handleLabClick}
      />

      <main className="grow">
        {/* Cinematic Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6">

          {/* Glow Effect absolute center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-136 h-136 rounded-full bg-blue-800/20 blur-[140px] z-0"></div>

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
          <div className="relative z-20 flex flex-col items-center text-center mt-120 md:mt-120">
             <h2 className="text-[#3B82F6] font-bold tracking-[0.2em] md:tracking-[0.4em] mb-2 text-[0.6rem] md:text-xl drop-shadow-lg">
               FULL STACK WEB DEVELOPER | ERP & SaaS PRODUCTS
             </h2>
             <h1 className="text-5xl md:text-9xl lg:text-[10rem] font-bold tracking-widest leading-none uppercase select-none metallic-text whitespace-nowrap">
                {PERSON_NAME}
             </h1>

              <p className="text-[#9d9d9d] text-[0.6rem] font-bold tracking-widest md:tracking-[0.2em] mt-2 text-md md:text-[1rem]">3 Years | PHP, MySQL, JavaScript, jQuery, React, HTML, CSS</p>    

              <SocialMedia className="justify-center mt-8" />

         </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
