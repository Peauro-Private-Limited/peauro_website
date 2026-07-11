import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck } from 'lucide-react';

interface SustainabilityPageProps {
  onContactClick: () => void;
}

export default function SustainabilityPage({ onContactClick }: SustainabilityPageProps) {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Globe size={14} /> Sustainability First
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none mb-8">
              Purity Without <br /> <span className="text-emerald-600">Compromise.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base uppercase tracking-[0.2em] font-medium max-w-2xl mx-auto leading-relaxed mb-12">
              Our dream is to make India plastic-free. We don't just sell water; we pioneer sustainable hydration solutions for a greener tomorrow.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Biodegradable Bottle Highlight */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-emerald-500 skew-x-[-20deg]" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter italic mb-8">
                The Biodegradable <br /> <span className="text-emerald-600">Bottle</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 uppercase tracking-widest font-medium">
                Yes, indeed—our Peauro bottle is 100% biodegradable. It looks like plastic, it feels like plastic, but it is crafted from plant-based polymers that decompose naturally within months, not centuries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-900 font-bold uppercase tracking-widest text-xs">
                  <ShieldCheck className="text-emerald-500" size={20} />
                  Zero Microplastics Guarantee
                </div>
                <div className="flex items-center gap-4 text-slate-900 font-bold uppercase tracking-widest text-xs">
                  <ShieldCheck className="text-emerald-500" size={20} />
                  Certified Compostable Materials
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="aspect-square bg-emerald-50 rounded-[4rem] group overflow-hidden flex items-center justify-center p-12">
                <img 
                  src="input_file_1.png" 
                  alt="Biodegradable Bottle" 
                  className="w-full max-w-[300px] h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl">
                <div className="text-3xl font-black mb-1 italic">180</div>
                <div className="text-[8px] uppercase font-bold tracking-[0.2em]">Days to Decompose</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copper Jar Section */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-amber-600 skew-x-[-20deg]" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tighter italic mb-8">
                Premium 20L <br /> <span className="text-amber-700">Copper Jar</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 uppercase tracking-widest font-medium">
                Rediscover ancient wisdom with our signature 20-litre copper jar. Designed for families and offices, it naturally alkalizes your water while eliminating pathogens, providing a sustainable alternative to large plastic dispensers.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-2xl font-black text-amber-900 mb-2 italic">Alkaline</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Natural pH Balance</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-900 mb-2 italic">Reusable</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Lifetime Durability</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="aspect-square bg-amber-50 rounded-[4rem] group overflow-hidden flex items-center justify-center p-12">
                <img 
                  src="input_file_0.png" 
                  alt="20L Copper Jar" 
                  className="w-full max-w-[340px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-amber-700 text-white p-8 rounded-3xl shadow-xl">
                <div className="text-3xl font-black mb-1 italic">20L</div>
                <div className="text-[8px] uppercase font-bold tracking-[0.2em]">Bulk Capacity</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Future */}
      <section className="py-40 text-center px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
        <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter italic mb-10 leading-tight">
          Join Our Plastic-Free <br /> <span className="text-emerald-600">Movement.</span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          Every drop of Peauro water you drink is a step towards a cleaner India. Switch to our sustainable plans today and be the change.
        </p>
        <button 
          onClick={onContactClick}
          className="px-12 py-6 bg-[#1A52CB] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
}
