
import React from 'react';
import { SystemWork } from '../types';

interface SystemCardProps {
  system: SystemWork;
}

export const SystemCard: React.FC<SystemCardProps> = ({ system }) => {
  return (
    <div className="glass rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
      <div className="relative h-64 overflow-hidden bg-neutral-900 flex items-center justify-center">
        {/* Fix: Property 'image' does not exist on type 'SystemWork'. Replaced with a placeholder UI element. */}
        <div className="text-neutral-800 mono text-[10px] uppercase tracking-widest select-none">System Visualization Restricted</div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent opacity-80"></div>
        <div className="absolute bottom-6 left-6 flex gap-2">
          
          {/* Fix: Added optional chaining for 'tags' property which is optional in SystemWork. */}
          {system.tags?.map(tag => (
            <span key={tag} className="text-[9px] mono uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/5 px-3 py-1 rounded-full text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{system.name}</h3>
        {/* Fix: Property 'context' does not exist on type 'SystemWork'. Replaced with 'overview' or 'objective'. */}
        <p className="text-sm text-[#9d9d9d] mb-6 font-light">{system.overview || system.objective}</p>
        
        <div className="space-y-4 mb-8">
          <div>
            <span className="mono text-[9px] uppercase tracking-widest text-blue-500 block mb-1">Architecture</span>
            {/* Fix: Property 'responsibility' does not exist on type 'SystemWork'. Replaced with 'role'. */}
            <p className="text-neutral-400 text-sm leading-relaxed">{system.role}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] mono text-neutral-600 uppercase">Live Operations</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
