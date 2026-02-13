
import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const getStatusColor = (status: Product['status']) => {
    switch (status) {
      case 'Live': return 'border-green-500/30 text-green-400 bg-green-500/5';
      case 'In Production': return 'border-purple-500/30 text-purple-400 bg-purple-500/5';
      case 'Internal Tool': return 'border-orange-500/30 text-orange-400 bg-orange-500/5';
      case 'MVP / In Progress': return 'border-blue-500/30 text-blue-400 bg-blue-500/5';
      default: return 'border-neutral-500/30 text-neutral-400 bg-neutral-500/5';
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-32 px-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mono text-xs uppercase tracking-widest mb-12 mt-4"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Hub
      </button>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
        <div className="w-24 h-24 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">{product.name}</h1>
            <span className={`px-4 py-1.5 rounded-full text-[10px] mono uppercase tracking-[0.2em] border font-bold h-fit ${getStatusColor(product.status)}`}>
              {product.status}
            </span>
          </div>
          <p className="text-2xl text-blue-400 font-light mb-8 italic">{product.tagline}</p>
          
          <div className="flex flex-wrap gap-4">
            {product.liveLink && (
              <a href={product.liveLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                View Live
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            )}
            {product.githubLink && (
              <a href={product.githubLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass rounded-full hover:bg-white/10 transition-colors font-semibold">
                GitHub Repo
              </a>
            )}
            {product.isConfidential && (
              <div className="px-8 py-4 glass border-blue-500/20 text-blue-400 rounded-full italic font-medium">
                Demo available on request
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-24">
          
          {/* Problem Solution Impact Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500">Problem · Solution · Impact</h2>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              <div className="space-y-2">
                <span className="mono text-[9px] uppercase tracking-[0.3em] text-neutral-500">The Problem</span>
                <p className="text-lg text-neutral-300 font-light leading-relaxed">{product.problemStatement}</p>
              </div>
              
              <div className="space-y-2">
                <span className="mono text-[9px] uppercase tracking-[0.3em] text-blue-500">The Solution</span>
                <p className="text-lg text-neutral-300 font-light leading-relaxed">{product.solutionStatement || "Architecture designed to solve operational friction through optimized data flow."}</p>
              </div>

              <div className="space-y-2">
                <span className="mono text-[9px] uppercase tracking-[0.3em] text-green-500">The Impact</span>
                <p className="text-lg text-neutral-300 font-light leading-relaxed">{product.impactStatement || "Significant improvement in system reliability and user workflow transparency."}</p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500 mb-6">System Architecture</h2>
            <div className="gap-6 flex flex-col items-start gap-4 group hover:border-blue-500/30 transition-all">
              {product.features.map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:animate-ping"></div>
                  <p className="text-neutral-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery Feature */}
          {product.gallery && product.gallery.length > 0 && (
            <section>
              <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500 mb-10">System Visualization</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.gallery.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className="relative aspect-video glass rounded-2xl overflow-hidden cursor-pointer group border-white/5 hover:border-blue-500/30 transition-all"
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} Visualization ${i + 1}`} 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.isConfidential ? 'blur-[2px] brightness-75' : ''}`} 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                    {product.isConfidential && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-400"></div>
                        <span className="mono text-[8px] text-white/70 uppercase tracking-widest">Restricted</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {product.isConfidential && (
                <p className="mt-4 text-[10px] mono text-neutral-600 italic leading-relaxed">
                  Note: Screenshots are partial and modified for demonstration purposes to comply with internal security protocols.
                </p>
              )}
            </section>
          )}

          {/* Developer Contribution */}
          <section>
            <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500 mb-8">Role & Impact</h2>
            <div className="glass p-10 rounded-[2.5rem] border-blue-500/10 italic text-lg font-light leading-relaxed text-neutral-300">
              {product.developerContribution}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          <section>
            <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {product.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 glass rounded-full text-xs mono text-neutral-400 border-white/5">{tech}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mono text-[10px] uppercase tracking-[0.25em] text-blue-500 mb-6">Classification</h2>
            <div className="glass p-6 rounded-2xl border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-4 text-sm mono text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Type: {product.isConfidential ? 'Confidential Enterprise' : 'Public SaaS'}
              </div>
              <div className="flex items-center gap-4 text-sm mono text-neutral-300 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Environment: Production
              </div>
            </div>
          </section>

          {product.isConfidential && (
            <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10 text-xs text-neutral-500 leading-relaxed italic mono">
              Access restricted due to organization compliance policies. Source code and live environments are private.
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[100]"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="System Full Preview" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/5 animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};
