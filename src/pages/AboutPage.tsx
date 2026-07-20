import React from 'react';
import { motion } from 'motion/react';
import { Truck, Award, ShieldCheck, Droplets, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans pt-14 overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-900 to-[#0b1329] text-white overflow-hidden border-b border-slate-900/60">
        {/* Background glow & texture */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e676_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-sans mb-4"
            >
              About <span className="text-emerald-400">Peauro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm md:text-base lg:text-lg font-medium leading-relaxed tracking-wide max-w-2xl mx-auto"
            >
              Peauro is an innovative platform designed to deliver pure and hygienic water to customers’ doorsteps within just some minutes. Our model ensures high operational efficiency while maintaining strict hygiene standards,providing a reliable solution for quick and safe water delivery.
            </motion.p>
          </div>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Droplets size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">100% Pure</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Multi-stage filtration</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">Minutes Away</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hyper-local delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white">Zero Brokerage</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Peauro Fleet</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. PHOTO 1 SECTION - THE PEAURO MODEL: LAST-MILE PERFECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#fafbfc] text-slate-900 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Subheading Tag */}
            <div className="text-emerald-600 font-black tracking-[0.2em] text-xs uppercase">
              A FRESH BLUEPRINT
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase font-sans italic">
              THE PEAURO <span className="text-emerald-500">MODEL:</span><br />
              LAST-MILE PERFECTION
            </h2>

            {/* Top Paragraph */}
            <p className="text-slate-600 font-bold uppercase tracking-wider text-sm md:text-base leading-relaxed">
              UNLIKE STANDARD DISTRIBUTORS WHO RELY ON LOCAL AGENTS TO MANAGE CLEANLINESS AND DELIVERIES, PEAURO OPERATES ON A DIRECT, CENTRALIZED MODEL.
            </p>

            {/* Quote Box Container */}
            <div className="bg-[#f3f6fa] rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-4">
              <div className="text-slate-900 font-black text-xs md:text-sm tracking-widest uppercase">
                OUR OPERATIONAL CORE:
              </div>
              <blockquote className="text-slate-500 font-semibold uppercase text-xs md:text-sm tracking-wide leading-relaxed italic">
                "LOCAL VENDORS ARE STRICTLY STOCK AND STORAGE POINTS. THEY DO NOT HANDLE YOUR WATER, THEY DO NOT MANAGE DELIVERY, AND THEY DO NOT MAKE SERVICE DECISIONS."
              </blockquote>
            </div>

            {/* Bottom Paragraph */}
            <p className="text-slate-600 font-bold uppercase tracking-wider text-sm md:text-base leading-relaxed pt-2">
              EVERY LAST-MILE RIDER IS A VETTED, CORPORATE PEAURO PARTNER. THEY ARE TRAINED IN EXTREME HYGIENE STANDARDS, GPS ROUTING, AND ABSOLUTE CUSTOMER COURTESY, ENSURING YOUR PURE WATER IS DELIVERED STRICTLY ON TIME, SEALED, AND HANDLED WITH CARE.
            </p>

            {/* Bottom Feature Badges */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Badge 1 */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <Truck size={22} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-wider">
                    PEAURO FLEET ONLY
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    NO LOCAL BROKER FILTERS
                  </p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-wider">
                    COMPLETE QC CONTROL
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    AT STOCK, VEHICLE, AND DROP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. PHOTO 2 SECTION - OUR CORE PRINCIPLES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic font-sans">
              OUR CORE <span className="text-emerald-600">PRINCIPLES</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
              WE GUIDE OUR CHOICES, EXPANSIONS, AND CUSTOMER SERVICES STRICTLY THROUGH THREE UNWAVERING MORAL VALUES.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-start hover:border-emerald-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase italic tracking-wide text-slate-900 mb-4">
                RADICAL ACCOUNTABILITY
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wider leading-relaxed">
                WE DON'T DEFLECT RESPONSIBILITY. FROM FILTRATION SOURCE TO YOUR DOORSTEP GLASS, PEAURO OWNS THE ENTIRE CYCLE SO YOU NEVER HAVE TO GUESS.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-start hover:border-blue-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <Droplets size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase italic tracking-wide text-slate-900 mb-4">
                ABSOLUTE PURITY
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wider leading-relaxed">
                EVERY JAR GOES THROUGH REGULAR TDS TESTING, AND OUR FILTERS ARE CHANGED ON A FIXED SCHEDULE — NOT JUST WHEN SOMETHING GOES WRONG. CONSISTENCY IS THE STANDARD, NOT THE EXCEPTION.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-start hover:border-amber-500/50 transition-all duration-300 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase italic tracking-wide text-slate-900 mb-4">
                COMMUNITY & PLANET FIRST
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wider leading-relaxed">
                AIMING TO ELIMINATE OVER 10 MILLION SINGLE-USE PLASTIC WATER JARS. OUR VISION IS DEDICATED TO CRAFTING A CLEAN, PLASTIC-FREE ENVIRONMENT FOR BIHAR AND BEYOND.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
