
import React from 'react';
import { ExperienceItem } from '../types';

export const ExperienceSection: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <div className="relative pl-12 border-l border-white/10 py-4">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10"></div>
      
      <header className="mb-12">
        <h3 className="text-3xl font-bold mb-2 tracking-tight">{experience.company}</h3>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mono text-[#9d9d9d] uppercase tracking-widest">
          <span>{experience.location}</span>
          <span className="text-blue-500/50">|</span>
          <span>{experience.department}</span>
        </div>
      </header>

      <div className="space-y-20">
        {experience.roles.map((role, rIdx) => (
          <div key={rIdx} className="relative group">
            <div className="absolute -left-[53px] top-2 w-2 h-2 rounded-full border border-blue-500/50 bg-black group-hover:bg-blue-500 transition-colors"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
              <h4 className="text-2xl font-semibold text-blue-400">{role.title}</h4>
              <span className="mono text-xs text-neutral-600 bg-white/5 px-4 py-1 rounded-full border border-white/5">{role.duration}</span>
            </div>

            {role.description && (
              <p className="text-lg font-light text-neutral-300 mb-8 leading-relaxed italic max-w-3xl">
                {role.description}
              </p>
            )}

            <div className="space-y-10">
              {role.highlights && (
                <div>
                  <h5 className="mono text-[10px] uppercase tracking-widest text-[#9d9d9d] mb-4 flex items-center gap-4">
                    Key Execution Points
                    <span className="h-px flex-1 bg-white/5"></span>
                  </h5>
                  <ul className="space-y-4 max-w-3xl">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-neutral-400 leading-relaxed font-light">
                        <span className="text-blue-500 flex-shrink-0 mt-1.5 opacity-50">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {role.details && (
                <div>
                  <h5 className="mono text-[10px] uppercase tracking-widest text-[#9d9d9d] mb-6 flex items-center gap-4">
                    Domain Contributions & Modular Outputs
                    <span className="h-px flex-1 bg-white/5"></span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {role.details.map((detail, i) => (
                      <div key={i} className="glass p-4 rounded-xl text-xs text-[#9d9d9d] mono border-white/5 hover:border-blue-500/20 transition-all flex items-center gap-3">
                        <div className="w-1 h-1 bg-blue-500/40 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
