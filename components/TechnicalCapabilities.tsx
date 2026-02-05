
import React from 'react';
import { TECHNICAL_CAPABILITIES } from '../constants';

const TechnicalCapabilities: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TECHNICAL_CAPABILITIES.map((cap) => (
        <div 
          key={cap.category} 
          className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all duration-500 group"
        >
          <header className="mb-8">
            <span className="mono text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold block mb-2 opacity-80">
              Domain Expertise
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {cap.category}
            </h3>
          </header>

          <ul className="space-y-4">
            {cap.skills.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-4 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                <span className="w-1.5 h-px bg-blue-500/50 mt-2.5 flex-shrink-0"></span>
                <span className="text-base font-light leading-relaxed tracking-wide">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalCapabilities;
