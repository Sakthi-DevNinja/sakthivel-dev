
import React from 'react';
import { SystemWork } from '../types';

export const ProjectCard: React.FC<{ project: SystemWork }> = ({ project }) => {
  return (
    <div className="glass rounded-[2rem] p-8 md:p-12 glass-hover transition-all duration-500 flex flex-col h-full relative group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Decorative Index */}
      <span className="absolute top-6 right-6 mono text-[8px] text-neutral-700 group-hover:text-blue-500 transition-colors">SYS_ARCH_{Math.random().toString(36).substr(2, 4).toUpperCase()}</span>
      
      <header className="mb-10">
        <h3 className="text-2xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">{project.name}</h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-500 text-xs mono uppercase tracking-widest hover:text-blue-400">
            Live Interface
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        )}
      </header>

      <div className="space-y-8 flex-grow">
        {project.objective && (
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500/70 block mb-2">Objective</span>
            <p className="text-neutral-300 text-base font-light leading-relaxed">{project.objective}</p>
          </div>
        )}

        {project.overview && (
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500/70 block mb-2">Overview</span>
            <p className="text-neutral-300 text-base font-light leading-relaxed">{project.overview}</p>
          </div>
        )}

        {project.role && (
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500/70 block mb-2">Primary Role</span>
            <p className="text-neutral-400 text-sm font-medium">{project.role}</p>
          </div>
        )}

        {project.contribution && (
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500/70 block mb-3">Key Contribution</span>
            <div className="text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap pl-4 border-l border-white/10 italic">
              {project.contribution}
            </div>
          </div>
        )}

        {project.features && (
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500/70 block mb-3">System Capabilities</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="text-xs text-neutral-400 flex items-start gap-3">
                  <span className="w-1 h-px bg-blue-500 mt-2 flex-shrink-0"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.impact && (
          <div className="bg-blue-500/5 p-4 rounded-xl border border-blue-500/10">
            <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-400 block mb-1">Impact</span>
            <p className="text-neutral-200 text-xs italic">{project.impact}</p>
          </div>
        )}
      </div>

      <footer className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-2">
        {project.technologies?.map(tech => (
          <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-[10px] mono text-neutral-500 border border-white/5">{tech}</span>
        ))}
        {project.note && (
          <p className="w-full mt-4 text-[10px] text-neutral-600 italic mono leading-relaxed">
            Note: {project.note}
          </p>
        )}
      </footer>
    </div>
  );
};
