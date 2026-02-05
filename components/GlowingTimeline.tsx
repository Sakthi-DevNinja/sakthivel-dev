
import React from 'react';

const MILESTONES = [
  { year: '2023', event: 'Architecture Lead' },
  { year: '2022', event: 'First SaaS Launch' },
  { year: '2020', event: 'Senior Dev Promotion' },
  { year: '2019', event: 'Tech Lab Founder' },
];

const GlowingTimeline: React.FC = () => {
  return (
    <div className="relative py-12 px-6 overflow-x-auto no-scrollbar">
      <div className="flex min-w-[800px] justify-between items-center relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"></div>
        {MILESTONES.map((m, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center mb-6 group cursor-help transition-all hover:border-white/40">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:shadow-[0_0_15px_white]"></div>
            </div>
            <div className="text-xs mono text-white/30 uppercase tracking-[0.2em] mb-1">{m.year}</div>
            <div className="text-sm font-bold max-w-[120px]">{m.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlowingTimeline;
