import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const founders: Founder[] = [
  {
    name: "MR.SANKET PASWAN",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=600&h=600",
    bio: "Pioneer in sustainable hydration solutions with a mission to bring purity to every household. Leading Peauro's journey toward a sustainable future through innovation and artisanal care."
  },
  {
    name: "AMAN KUMAR PASWAN",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Visionary strategist behind Peauro's distribution network and impact initiatives."
  },
  {
    name: "KARAN KUMAR SAW",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in operational excellence and quality control at the source."
  },
  {
    name: "KUNDAN KUMAR",
    role: "Prime Member",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Leading our legal and corporate governance to ensure ethical growth."
  }
];

export default function Founders() {
  const ceo = founders[0];
  const members = founders.slice(1);

  const BorderTrace = ({ rx }: { rx: string }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="transparent"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        rx={rx}
        ry={rx}
        initial={{ pathLength: 0, opacity: 0 }}
        variants={{
          hover: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" }
          }
        }}
      />
    </svg>
  );

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Orbs/Lines as in Image 2 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border border-emerald-500/20 rounded-full" />
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] border border-emerald-500/10 rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] border border-emerald-500/10 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="w-12 h-[1px] bg-emerald-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-500">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-slate-900 uppercase tracking-tighter italic mb-4">
            Meet Our <span className="text-emerald-500">Visionaries</span>
          </h2>
          <p className="text-slate-500 max-w-xl font-light text-sm uppercase tracking-widest leading-relaxed">
            Leading the charge in sustainable hydration across the nation with artisanal precision and care.
          </p>
        </div>

        {/* CEO Row - Centered and Large */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover="hover"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-2xl group cursor-default"
          >
            <div className="relative bg-slate-50 border border-slate-100 rounded-[3rem] p-6 md:p-12 text-center hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
              <BorderTrace rx="48" />
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full border-4 border-emerald-500/30 p-1 group-hover:border-emerald-500 transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white group-hover:scale-110">
                    <img 
                      src={ceo.image} 
                      alt={ceo.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 italic">{ceo.name}</h3>
              <p className="text-xs uppercase tracking-[0.3em] font-black text-emerald-600 mb-6">{ceo.role}</p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light max-w-lg mb-8 uppercase tracking-widest">
                {ceo.bio}
              </p>

              <div className="flex gap-6">
                <a href="#" className="p-3 bg-slate-100 text-slate-500 hover:text-white rounded-2xl transition-all hover:bg-emerald-600 relative z-30">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="p-3 bg-slate-100 text-slate-500 hover:text-white rounded-2xl transition-all hover:bg-emerald-600 relative z-30">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Members Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.2, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-default"
            >
              <div className="relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-6 md:p-8 text-center hover:bg-white hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center h-full">
                <BorderTrace rx="40" />
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full border-2 border-emerald-500/30 p-1 group-hover:border-emerald-500 transition-colors duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white">
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{founder.name}</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mb-4">{founder.role}</p>
                
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium mb-6 uppercase tracking-widest">
                  {founder.bio}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a href="#" className="p-2 bg-slate-100 text-slate-500 hover:text-white rounded-xl transition-all hover:bg-emerald-600 relative z-30">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="p-2 bg-slate-100 text-slate-500 hover:text-white rounded-xl transition-all hover:bg-emerald-600 relative z-30">
                    <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
