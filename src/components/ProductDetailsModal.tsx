import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDetailsModal({ isOpen, onClose, product }: ProductDetailsModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden flex flex-col h-[90vh] md:h-auto max-h-[90vh] rounded-[2rem]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="w-full p-10 overflow-y-auto">
              <div className="aspect-square bg-slate-50 rounded-3xl p-12 mb-10 flex items-center justify-center relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                    <span className="text-sm uppercase tracking-[0.3em] font-black text-emerald-600">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-600 mb-4">{product.category}</div>
               <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">{product.name}</h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < 4 ? "fill-amber-400 text-amber-400" : "text-slate-300"} 
                    />
                  ))}
                  <span className="text-sm font-bold text-slate-900 ml-2">4.8</span>
                </div>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest mb-10 font-medium">
                {product.description}
              </p>

              <div className="flex items-end justify-between mb-10 border-t border-slate-50 pt-10">
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Price per unit</div>
                  <div className="text-4xl font-black text-slate-900">₹{product.price.toFixed(2)}</div>
                </div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Incl. all taxes</div>
              </div>

              <button 
                onClick={onClose}
                className="w-full py-6 bg-slate-950 text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-200 rounded-2xl"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
