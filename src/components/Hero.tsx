import { ArrowRight, Droplets, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import cycleDiagramInner from '../assets/images/cycle_diagram_inner.png';
import cycleDiagramOuter from '../assets/images/cycle_diagram_outer.png';

interface HeroProps {
  onSubscribeClick: () => void;
}

export default function Hero({ onSubscribeClick }: HeroProps) {
  return (
    <section className="relative pt-40 md:pt-48 pb-16 overflow-hidden bg-white min-h-[80vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-20"
        >
          <source 
            src="https://videos.pexels.com/video-files/5965824/5965824-sd_640_360_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <h1 className="text-[48px] md:text-[56px] font-sans font-black leading-[0.9] tracking-tighter text-slate-900 mb-6 uppercase">
              Because We Care<br/>
              <span className="text-emerald-600">Beyond Every Delivery.</span>
            </h1>
            
            <p className="text-[#4e6480] font-bold text-[17px] text-left leading-[23.75px] mb-8 max-w-sm">
              We deliver pure, mineral-rich water directly to your doorstep with eco-friendly jars and smart scheduling, ensuring absolute safety and convenience.
            </p>

            {/* HIDDEN: Explore Products CTA - uncomment to re-enable
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products"
                id="cta-explore" 
                className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 transition-all active:scale-95 flex items-center gap-3 group/btn"
              >
                <span>Explore Products</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
            */}

            <div className="mt-12 bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 p-8 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border border-slate-50">
              <div className="px-4 flex items-center gap-6 w-full justify-between">
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none mb-1">12m+</div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Minerals/L</div>
                </div>
                <motion.div 
                  variants={{
                    hover: { scale: 1.2, rotate: 12, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }
                  }}
                  whileHover="hover"
                  animate="visible"
                  className="bg-blue-50 p-2 rounded-xl cursor-default transition-all duration-300"
                >
                  <motion.div
                    animate={ { rotate: [0, 5, -5, 0] } }
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Droplets size={24} className="text-blue-500" />
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="px-4 flex items-center gap-6 w-full justify-between pt-8 sm:pt-0">
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none mb-1">7.4</div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">pH Level</div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: -12, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
                  className="bg-emerald-50 p-2 rounded-xl cursor-default transition-all duration-300"
                >
                  <ShieldCheck size={24} className="text-emerald-500" />
                </motion.div>
              </div>
              
              <div className="px-4 flex items-center gap-6 w-full justify-between pt-8 sm:pt-0">
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none mb-1">25m</div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Avg Delivery</div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 12, y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.2)" }}
                  className="bg-orange-50 p-2 rounded-xl cursor-default transition-all duration-300"
                >
                  <Zap size={24} className="text-orange-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end p-4 lg:pr-16 -mt-8 lg:-mt-16"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-[48px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(16,185,129,0.2)] border-8 border-white bg-white hover:scale-105 transition-transform duration-500 flex items-center justify-center p-2">
              <div className="relative w-full h-full aspect-square">
                {/* Inner static green circle with text */}
                <img 
                  src={cycleDiagramInner} 
                  alt="Peauro Circular Flow Diagram Inner"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                {/* Outer rotating blue arrow ring */}
                <img 
                  src={cycleDiagramOuter} 
                  alt="Peauro Circular Flow Diagram Outer"
                  className="absolute inset-0 w-full h-full object-contain animate-[spin_60s_linear_infinite]"
                  style={{ 
                    transformOrigin: '49.658% 49.463%'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Editorial Decorative Blooms */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-40 -z-10"></div>
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] opacity-40 -z-10"></div>
    </section>
  );
}
