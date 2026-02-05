
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  name: string;
  onHomeClick: () => void;
  onLabClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, name, onHomeClick, onLabClick }) => {
  const links = [
    { id: 'home', label: 'Home', action: onHomeClick },
    { id: 'how-i-work', label: 'Strategy', href: '#how-i-work' },
    { id: 'strengths', label: 'Impact', href: '#strengths' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'experience', label: 'Matrix', href: '#experience' },
    { id: 'product-lab', label: 'Product Lab', action: onLabClick }
  ];
  
  return (
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'w-[90%] md:w-auto' : 'w-[95%] md:w-[85%]'}`}>
      <div className={`glass px-8 py-5 rounded-full flex items-center justify-between md:justify-center gap-8 lg:gap-12 shadow-2xl transition-all duration-500 ${scrolled ? 'bg-black/40 py-4 scale-95' : 'scale-100'}`}>
        <button onClick={onHomeClick} className="flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping"></div>
          <span className="mono text-xs font-bold tracking-widest uppercase truncate">{name}</span>
        </button>
        
        <div className="hidden lg:flex gap-8">
          {links.map(link => (
            <a 
              key={link.id} 
              href={link.href || (link.id === 'product-lab' ? '#product-lab' : '#')}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-blue-400 transition-all mono font-medium cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="h-4 w-px bg-white/10 hidden lg:block"></div>
        
        <a href="#contact" className="text-[10px] uppercase tracking-[0.3em] text-white hover:text-blue-300 transition-colors mono font-bold bg-blue-600/20 px-6 py-2 rounded-full border border-blue-500/30">
          Connect
        </a>
      </div>
    </nav>
  );
};
