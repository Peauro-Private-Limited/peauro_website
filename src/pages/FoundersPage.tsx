import React from 'react';
import Founders from '../components/Founders';
import { motion } from 'motion/react';

export default function FoundersPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 bg-white min-h-screen"
    >
      <div className="bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] py-24 relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-none mb-6"
          >
            Our <span className="text-emerald-500">Founding</span> <br /> Visionaries
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm uppercase tracking-[0.4em] font-bold max-w-2xl mx-auto"
          >
            The minds behind Peauro's mission to redefine purity and sustainable hydration.
          </motion.p>
        </div>
      </div>
      <Founders />
    </motion.div>
  );
}
