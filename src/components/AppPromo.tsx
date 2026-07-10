import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import phoneMockup from '../assets/images/phone_mockup.jpg';

export default function AppPromo() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  const rotateX = coords.y * -10;
  const rotateY = coords.x * 10;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] py-32 lg:py-44 overflow-visible border-b border-slate-900/50"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatAnimation {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1.0);
          }
          50% {
            transform: translate3d(0, -18px, 0) scale(1.025);
          }
        }
        @keyframes shadowAnimation {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.55;
            filter: blur(14px);
          }
          50% {
            transform: scale(1.08);
            opacity: 0.25;
            filter: blur(24px);
          }
        }
      `}} />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-10 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[44px] md:text-[64px] font-sans font-black text-white leading-[1.05] tracking-tight uppercase italic"
            >
              Coming Soon <br/>
              <span className="text-emerald-500">Our Peauro App</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 uppercase tracking-widest"
            >
              Order premium drinking water anytime, schedule deliveries, and manage subscriptions with ease.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a 
                href="#" 
                className="flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 group shadow-lg hover:border-emerald-500/30 hover:shadow-emerald-500/5 active:scale-95 w-full sm:w-auto justify-center"
              >
                <svg className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,2.5c-0.2,0-0.4,0.1-0.6,0.2l10.9,10.9l3.3-3.3L5,2.5z M3.3,3.7C3.1,3.9,3,4.2,3,4.5v15c0,0.3,0.1,0.6,0.3,0.8l8.2-8.2L3.3,3.7z M12.6,13.2l8.2,8.2c0.2-0.1,0.3-0.4,0.3-0.8V4.5c0-0.3-0.1-0.6-0.3-0.8L12.6,13.2z M15.3,15.9L4.4,21.3c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.2L15.3,15.9z" />
                </svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-1">GET IT ON</div>
                  <div className="text-sm font-semibold text-white tracking-tight leading-none">Google Play</div>
                </div>
              </a>

              <a 
                href="#" 
                className="flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 group shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/5 active:scale-95 w-full sm:w-auto justify-center"
              >
                <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-1">Download on the</div>
                  <div className="text-sm font-semibold text-white tracking-tight leading-none">App Store</div>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end relative select-none">
            <div 
              className="relative z-10 w-full max-w-[380px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[600px] bg-[#0b1329] border border-white/10 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden will-change-transform lg:translate-y-20"
              style={{
                transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(-30deg) translate3d(0, 0, 0)`,
                transformStyle: 'preserve-3d',
                animation: 'floatAnimation 7s ease-in-out infinite'
              }}
            >
              <img 
                src={phoneMockup} 
                alt="Peauro App Play Store Mockup" 
                className="w-full h-auto object-contain rounded-[2.8rem]"
              />

              <div 
                className="absolute bottom-[-20px] left-[15%] right-[15%] h-8 bg-black/60 rounded-full blur-xl -z-20 pointer-events-none"
                style={{
                  animation: 'shadowAnimation 7s ease-in-out infinite'
                }}
              />

              <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
