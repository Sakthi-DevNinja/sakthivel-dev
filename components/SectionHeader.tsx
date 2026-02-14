
import React from 'react';

export const SectionHeader: React.FC<{title: string}> = ({ title }) => {
  return (
    <div className="flex items-center gap-6 mb-16">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
      <h2 className="text-xs uppercase tracking-[0.5em] text-blue-500 mono">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50"></div>
    </div>
  );
};

