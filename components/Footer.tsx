import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 text-center border-t border-white/5 relative overflow-hidden bg-black">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-blue-600/5 filter blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex flex-col gap-2 text-left">
          <p className="mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            SAKTHIVEL S // FULL STACK WEB DEVELOPER
          </p>

          <p className="mono text-[10px] tracking-[0.3em] text-neutral-700 uppercase text-center md:text-left">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-[10px] text-neutral-700 mono tracking-widest uppercase">
            Production Systems Experience
          </span>

          <span className="text-[10px] text-neutral-700 mono tracking-widest uppercase">
            //
          </span>

          <span className="text-[10px] text-neutral-700 mono tracking-widest uppercase">
            ERP & SaaS Focus
          </span>
        </div>

      </div>

    </footer>
  );
};