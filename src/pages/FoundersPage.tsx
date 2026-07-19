import React from 'react';
import Founders from '../components/Founders';
import { motion } from 'motion/react';

export default function FoundersPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-14 bg-white min-h-screen overflow-x-hidden"
    >
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#0b1329] text-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-900/60">
        {/* Background glow & texture */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e676_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight uppercase font-sans mb-6"
          >
            Our <span className="text-emerald-400">Founding</span> Visionaries
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-wide max-w-3xl mx-auto"
          >
            The minds behind Peauro's mission to redefine purity and sustainable hydration.
          </motion.p>
        </div>
      </div>
      <Founders />
    </motion.div>
  );
}
