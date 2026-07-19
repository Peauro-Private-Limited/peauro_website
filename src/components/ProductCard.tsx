import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group transition-all flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#BDCAD0] rounded-3xl p-10 flex items-center justify-center mb-6">
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 blur-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-600">Coming Soon</span>
          </div>
        </div>
      </div>
      
      <div className="text-center px-4 flex-1 flex flex-col items-center">
        <h3 className="font-sans text-2xl font-black text-slate-800 mb-2 tracking-tight">
          {product.unit}
        </h3>
        <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-[0.3em] font-black">
          {product.name}
        </p>

      </div>
    </div>
  );
}
