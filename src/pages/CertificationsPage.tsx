import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, FileText, CheckCircle2, Star, Zap, Globe } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 1,
    title: "ISO 9001:2015",
    org: "Quality Management System",
    description: "Certified for maintaining international standards in water processing and distribution.",
    icon: ShieldCheck,
    date: "Certified 2023"
  },
  {
    id: 2,
    title: "FSSAI License",
    org: "Food Safety Standards Authority",
    description: "Full compliance with Indian food safety regulations for high-quality drinking water.",
    icon: CheckCircle2,
    date: "Active Status"
  },
  {
    id: 3,
    title: "Green Purity Seal",
    org: "Eco-Hydration Board",
    description: "Recognized for sustainable sourcing and zero-waste glass bottling initiatives.",
    icon: Globe,
    date: "Awarded 2024"
  }
];

const ACHIEVEMENTS = [
  {
    year: "2024",
    title: "Purest Brand Award",
    description: "Voted #1 for taste and mineral balance at the Regional Hydration Summit."
  },
  {
    year: "2023",
    title: "Eco-Innovation Grant",
    description: "Received recognition for our revolutionary glass-only distribution model."
  },
  {
    year: "2022",
    title: "Community Hero",
    description: "Successfully provided 100k+ liters of clean water during Bihar drought relief."
  }
];

export default function CertificationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Award size={14} /> Trust & Excellence
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
               Certified <br /> <span className="text-emerald-500">Excellence</span>
            </h1>
             <p className="text-slate-400 text-base lg:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Our commitment to purity is backed by rigorous testing and international standard certifications.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-32">
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group"
            >
              <div className="w-16 h-16 bg-slate-900 text-emerald-500 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                <cert.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                {cert.title}
              </h3>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-6">
                {cert.org}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-medium mb-10">
                {cert.description}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8">
              Milestones of <span className="text-emerald-600">Purity</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium mb-12">
              Every drop tells a story of perseverance. From our first aquarium-grade filter to becoming a regional leader in sustainable hydration.
            </p>
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-100" />
              {ACHIEVEMENTS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-10 relative"
                >
                   <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 z-10 text-emerald-600 font-black text-xs">
                    {item.year}
                  </div>
                  <div>
                     <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest font-medium">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 p-4">
              <div className="w-full h-full rounded-[3rem] bg-slate-900 relative flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                   className="absolute inset-0 border-[40px] border-emerald-500/5 rounded-full"
                 />
                 <Award size={120} className="text-emerald-500 relative z-10 drop-shadow-2xl" />
              </div>
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-8 -right-8 p-6 bg-white border border-slate-100 shadow-2xl rounded-3xl"
            >
              <Zap size={24} className="text-amber-400" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 -left-8 p-6 bg-white border border-slate-100 shadow-2xl rounded-3xl"
            >
              <Star size={24} className="text-emerald-500" />
            </motion.div>
          </div>
        </div>

        {/* Quality Section */}
        <section className="mt-40 p-16 bg-slate-50 rounded-[4rem] border border-slate-100 text-center">
          <div className="max-w-2xl mx-auto">
            <FileText size={48} className="text-slate-900 mx-auto mb-8" />
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">Transparency is Purity</h2>
            <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium mb-10">
              We believe you have the right to know exactly what you are drinking. Download our latest laboratory test results verified by independent agencies.
            </p>
            <button className="px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20">
              Download Latest Lab Report (PDF)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
