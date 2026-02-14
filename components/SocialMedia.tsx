import React from "react";

interface SocialMediaProps {
  className?: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
  const baseStyle =
    "w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300";

  return (
    <div className={`flex gap-4 ${className}`}>
      
      
      {/* WhatsApp */}
      <a href="https://wa.me/919585909130?text=Hi%20Sakthivel,%20I%20visited%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noreferrer" className={baseStyle}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12a9 9 0 01-13.5 7.8L3 21l1.2-4.5A9 9 0 1121 12z" />
          <path d="M8.5 9.5c.5-1 1-1 1.5-1 .3 0 .6 0 .8.4l.7 1c.2.3.2.6 0 .9l-.4.6c-.1.2-.1.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6 0l.6-.4c.3-.2.6-.2.9 0l1 .7c.4.2.4.5.4.8 0 .5 0 1-.9 1.5-.7.4-1.5.5-2.4.2-2.6-.9-4.7-3-5.6-5.6-.3-.9-.2-1.7.2-2.4z" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/sakthi_dev18" target="_blank" rel="noreferrer" className={baseStyle}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/sakthivel-dev" target="_blank" rel="noreferrer" className={baseStyle}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-12h4v2a4 4 0 012-2z" />
        </svg>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Sakthi-DevNinja" target="_blank" rel="noreferrer" className={baseStyle}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 00-1.11-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 011.53 1.03 2.13 2.13 0 002.9.83 2.13 2.13 0 01.63-1.34c-2.22-.25-4.55-1.11-4.55-4.95a3.87 3.87 0 011.03-2.69 3.6 3.6 0 01.1-2.65s.84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02a3.6 3.6 0 01.1 2.65 3.87 3.87 0 011.02 2.69c0 3.85-2.34 4.7-4.57 4.94a2.38 2.38 0 01.67 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z"/>
        </svg>
      </a>

    </div>
  );
};
