import React from 'react';
import { motion } from 'motion/react';
import { Droplets } from 'lucide-react';
import Logo from './Logo';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#fafbfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-[42px] md:text-[54px] font-sans font-black text-[#1a2d5e] leading-[1.1] tracking-tight mb-8 italic">
              Crafting purity <br /> 
              <span className="text-slate-900 not-italic">since 2026.</span>
            </h2>
            
            <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
              <p>
                At Peauro, we believe that every sip should reflect purity, care, and excellence.
              </p>
              <p>
                Our journey began with a vision to provide premium-quality drinking water that combines freshness, safety, and reliability. Using a carefully managed purification process and hygienic packaging, we ensure that every bottle delivers a clean and refreshing experience.
              </p>
              <p>
                Because at Peauro, purity isn't just our promise—it's our commitment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative z-10 aspect-[4/5] bg-white group border border-slate-100">
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-white p-24">
                <motion.div 
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-1000"
                >
                  <Logo className="w-full h-full" showText={false} />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="w-12 h-1 bg-emerald-500 mb-4 rounded-full"></div>
                  <h3 className="text-2xl font-sans font-black text-slate-900 italic tracking-tighter uppercase">
                    Purity in <br /> every drop
                  </h3>
                </div>

                {/* Floating Card inside the image area */}
                <div className="absolute top-8 right-8 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-xl shadow-blue-200 animate-bounce">
                  <Droplets className="text-white" size={24} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/40 backdrop-blur-md rounded-3xl p-5 border border-white/20 shadow-xl">
                  <div className="text-white/60 text-[8px] uppercase tracking-widest font-bold mb-2 text-center">Certified Quality</div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border border-white/10" />)}
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                       <span className="text-[10px] text-white font-black tracking-widest uppercase">Live Tracking Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative base elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
