
import React from 'react';
import { Product } from '../types';

interface ProductLabProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductLab: React.FC<ProductLabProps> = ({ products, onSelectProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.id}
          onClick={() => onSelectProduct(product)}
          className="glass p-8 rounded-[2rem] glass-hover cursor-pointer transition-all duration-500 group relative flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
            </div>
            <StatusBadge status={product.status} />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{product.name}</h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-blue-500 font-bold group-hover:translate-x-2 transition-transform">
            Analyze Concept 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

const StatusBadge: React.FC<{ status: Product['status'] }> = ({ status }) => {
  const styles = {
    'Live': 'bg-green-500/10 text-green-400 border-green-500/20',
    'In Production': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'MVP / In Progress': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Internal Tool': 'bg-orange-500/10 text-orange-400 border-orange-500/20'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[9px] mono uppercase tracking-widest border font-bold ${styles[status]}`}>
      {status}
    </span>
  );
};
