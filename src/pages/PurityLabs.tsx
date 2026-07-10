import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Beaker, ShieldCheck, ClipboardCheck, Thermometer, FlaskConical, Award, Search } from 'lucide-react';

const TEST_PARAMETERS = [
  { name: "pH Level", value: "7.2 - 7.5", status: "Optimal", desc: "Perfectly balanced for hydration and taste." },
  { name: "TDS Count", value: "85 - 110 mg/L", status: "Pristine", desc: "Mineral-rich without being heavy." },
  { name: "Oxygenation", value: "9.2 mg/L", status: "Supercharged", desc: "Enhanced vitality through nano-bubbles." },
  { name: "Purity Check", value: "0.00% Impurity", status: "Certified", desc: "Triple-filtered through zero-waste systems." }
];

const LAB_PARTNERS = [
  {
    name: "Nano-Pure Analytics",
    location: "Mumbai, MH",
    specialty: "Molecular Structure Testing",
    cert: "ISO/IEC 17025"
  },
  {
    name: "Aqua-Safe Research",
    location: "Bangalore, KA",
    specialty: "Microbiological Screening",
    cert: "NABL Accredited"
  },
  {
    name: "Geo-Mineral Lab",
    location: "Ranchi, JH",
    specialty: "Aqueous Mineral Profiling",
    cert: "Govt. Certified"
  }
];

export default function PurityLabs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Microscope size={14} /> Advanced Molecular Testing
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.85] mb-8">
              Purity <br /> <span className="text-emerald-500">Verified.</span>
            </h1>
            <p className="text-slate-400 text-sm italic uppercase tracking-[0.4em] font-bold max-w-2xl mx-auto leading-relaxed">
              Every single drop of Peauro goes through a 48-point diagnostic scan at our third-party accredited partner labs.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-32">
        {/* Lab Visualizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative group"
           >
             <img 
               src="https://images.unsplash.com/photo-1579154238328-1c32e4d8a473?auto=format&fit=crop&q=80&w=1200" 
               alt="Lab Equipment" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10">
                <div>
                   <h3 className="text-white text-xl font-black uppercase italic tracking-tight mb-2">Molecular Scanners</h3>
                   <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Spectral Analysis Phase</p>
                </div>
             </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative group"
           >
             <img 
               src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200" 
               alt="Filtration Lab" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10">
                <div>
                   <h3 className="text-white text-xl font-black uppercase italic tracking-tight mb-2">Purity Verification</h3>
                   <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Real-time Quality Control</p>
                </div>
             </div>
           </motion.div>
        </div>

        {/* Test Parameters */}
        <div className="bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] border border-slate-900 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-emerald-950/20 mb-32 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-20 opacity-5">
              <FlaskConical size={300} className="text-white" />
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-16">
                Current <span className="text-emerald-500">Lab Batch</span> Stats
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                 {TEST_PARAMETERS.map((param, idx) => (
                    <div key={idx} className="border-l border-white/10 pl-8">
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] block mb-2">{param.name}</span>
                       <div className="text-3xl font-black text-white italic mb-1">{param.value}</div>
                       <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4">{param.status}</div>
                       <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest">{param.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Accreditation Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-10">
                Our Verification <br /> <span className="text-emerald-600">Partners.</span>
              </h2>
              <div className="space-y-6">
                 {LAB_PARTNERS.map((lab, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-xl transition-all"
                    >
                       <div>
                          <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">{lab.name}</h4>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{lab.location} • {lab.specialty}</p>
                       </div>
                       <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-emerald-600 transition-colors">
                          {lab.cert}
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="aspect-square bg-slate-50 rounded-[4rem] border border-slate-100 p-6">
                 <div className="w-full h-full rounded-[3.5rem] bg-white shadow-inner flex flex-col p-12 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="flex items-center justify-between mb-12 relative z-10">
                       <Award size={48} className="text-emerald-600" />
                       <div className="text-right">
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certificate ID</div>
                          <div className="text-xs font-black text-slate-900 uppercase italic">PEAURO-LAB-2024-X</div>
                       </div>
                    </div>
                    <div className="space-y-4 relative z-10">
                       <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                       <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                       <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                    </div>
                    <div className="mt-auto flex items-center justify-between relative z-10">
                       <div className="w-24 h-24 rounded-full border-[10px] border-emerald-50 text-emerald-600 flex items-center justify-center font-black italic text-xl">
                          100%
                       </div>
                       <div className="text-right">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest max-w-[150px]">verified medical grade hydration profile</p>
                       </div>
                    </div>
                 </div>
              </div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-10 -right-10 p-6 bg-white border border-slate-100 shadow-2xl rounded-3xl z-20"
              >
                 <Search size={24} className="text-slate-900" />
              </motion.div>
           </div>
        </div>

        {/* Transparency Report */}
        <section className="mt-40 p-16 bg-slate-50 rounded-[4rem] border border-slate-100 text-center">
          <div className="max-w-2xl mx-auto">
            <ClipboardCheck size={48} className="text-slate-900 mx-auto mb-8" />
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-6">Open Transparency Report</h2>
            <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium mb-10">
              We update our laboratory findings every month. Browse our historical data and see how Peauro maintains consistent purity through seasonal changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3">
                <Beaker size={16} className="text-emerald-500" /> Download May 2024 Report
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                <Thermometer size={16} className="text-emerald-500" /> View History
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
