import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram } from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  linkedin?: string;
}

const founders: Founder[] = [
  {
    name: "SANKET PASWAN",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/da9xdkqvl/image/upload/v1783754751/sanket_fqagkj.jpg",
    bio: "My vision is to create a lasting legacy in water management — to transform and strengthen India's water management system, for the nation.",
    instagram: "https://www.instagram.com/sanket_paswan__/"
  },
  {
    name: "AMAN",
    role: "Chief Operating Officer",
    image: "https://res.cloudinary.com/da9xdkqvl/image/upload/v1783754752/aman_img_tapzz2.jpg",
    bio: "I have complete confidence in myself that, through Peauro, I will solve this problem for the people — driven by hard work, and guided always by our founder's vision.",
    instagram: "https://www.instagram.com/i_aman_paswan_?igsh=MW8zcjZ3YWRoNTZhbg==",
    linkedin: "https://www.linkedin.com/in/aman-kumar-paswan-293393422?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    name: "KARAN",
    role: "Chief Financial Officer",
    image: "https://res.cloudinary.com/da9xdkqvl/image/upload/v1783952111/WhatsApp_Image_2026-01-04_at_11.09.25_AM_j4gtcp.jpg",
    bio: "I constantly strive to ensure that Peauro contributes meaningfully to boosting the nation's economy."
  },
  {
    name: "KUNDAN",
    role: "Team Member",
    image: "https://res.cloudinary.com/da9xdkqvl/image/upload/v1783754753/Kundan_Image_-_Copy_rccges.png",
    bio: "My message to people is this: I always work to strengthen our organization, because I believe an idea only reaches people when the foundation of that organization is strong."
  }
];

export default function Founders() {
  const ceo = founders[0];
  const members = founders.slice(1);

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
          <h2 className="text-3xl md:text-5xl font-sans font-black text-slate-900 uppercase tracking-tighter mb-4">
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
              <div className="relative mb-8">
                <div className="w-48 h-48 rounded-full border-4 border-emerald-500/30 p-1 group-hover:border-emerald-500 transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden transition-all duration-500 border-4 border-white group-hover:scale-110">
                    <img 
                      src={ceo.image} 
                      alt={ceo.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{ceo.name}</h3>
              <p className="text-xs uppercase tracking-[0.3em] font-black text-emerald-600 mb-6">{ceo.role}</p>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light max-w-lg mb-8 uppercase tracking-widest">
                {ceo.bio}
              </p>

              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/sanket-paswan-bb67b13a3/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-500 hover:text-white rounded-2xl transition-all hover:bg-emerald-600 relative z-30">
                  <Linkedin size={18} />
                </a>
                <a href={ceo.instagram || "#"} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-500 hover:text-white rounded-2xl transition-all hover:bg-emerald-600 relative z-30">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Members Grid */}
        <div className={`grid grid-cols-1 ${members.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
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
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full border-2 border-emerald-500/30 p-1 group-hover:border-emerald-500 transition-colors duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden transition-all duration-500 border-2 border-white">
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
                  <a href={founder.linkedin || "#"} {...(founder.linkedin ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="p-2 bg-slate-100 text-slate-500 hover:text-white rounded-xl transition-all hover:bg-emerald-600 relative z-30">
                    <Linkedin size={14} />
                  </a>
                  <a href={founder.instagram || "#"} {...(founder.instagram ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="p-2 bg-slate-100 text-slate-500 hover:text-white rounded-xl transition-all hover:bg-emerald-600 relative z-30">
                    <Instagram size={14} />
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
