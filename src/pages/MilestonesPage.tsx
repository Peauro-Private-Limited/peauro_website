import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Rocket, Target, Globe, Zap, Users, Sparkles, TrendingUp, Lightbulb, Smartphone } from 'lucide-react';

const MILESTONES = [
  {
    year: "2023",
    title: "Idea Born",
    description: "Customer pain in traditional water jar delivery identified. Initial concept for Peauro started.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600"
  },
  {
    year: "2024",
    title: "Foundation & Research",
    description: "Brand identity, logo, delivery model, and industry research completed. Business planning finalized.",
    icon: Target,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    year: "2025",
    title: "Digital Presence Launch",
    description: "Peauro website and app development started. Planning for event supply ecosystem begins.",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-600"
  },
  {
    year: "2026",
    title: "Local Expansion",
    description: "Targeting regular household deliveries and vendor onboarding across Patna and nearby regions.",
    icon: Users,
    color: "bg-purple-100 text-purple-600"
  },
  {
    year: "2027",
    title: "Smart Delivery System",
    description: "Introduction of app-based tracking, subscription plans, and high-speed logistics.",
    icon: Smartphone,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    year: "2028",
    title: "Brand Partnerships",
    description: "Collaboration with local events and sponsored hydration setups to increase brand awareness.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600"
  },
  {
    year: "2029",
    title: "Multi-City Scaling",
    description: "Expansion into multiple cities with stronger supply chain and operational teams.",
    icon: Globe,
    color: "bg-blue-100 text-blue-600"
  },
  {
    year: "2030",
    title: "Next-Gen Ecosystem",
    description: "Peauro evolves into a modern water-tech brand focused on smart delivery and sustainability.",
    icon: TrendingUp,
    color: "bg-slate-900 text-white"
  }
];

export default function MilestonesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Rocket size={14} /> Roadmap to Purity
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.85] mb-8">
              Our Journey & <br /> <span className="text-emerald-600">Milestones.</span>
            </h1>
            <p className="text-slate-400 text-sm italic uppercase tracking-[0.4em] font-bold max-w-2xl mx-auto leading-relaxed">
              From a single drop of inspiration to a nationwide hydration revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6 relative">
          
          {/* Vertical Line on the Left */}
          <div className="absolute left-14 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-14 top-0 bottom-0 w-1 bg-emerald-500 z-10 -translate-x-1/2"
          />

          <div className="space-y-24">
            {MILESTONES.map((milestone, idx) => (
              <TimelineItem key={idx} milestone={milestone} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-40 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] relative overflow-hidden border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-10">
                Vision <span className="text-emerald-400">2030</span>
              </h2>
              <p className="text-slate-200 text-sm italic uppercase tracking-[0.3em] font-bold leading-loose mb-16">
                Our ultimate goal is to become the infrastructure of purity for every household in India.
              </p>
              <div className="w-24 h-px bg-emerald-400/30 mx-auto" />
           </motion.div>
        </div>
      </section>
    </div>
  );
}

interface TimelineItemProps {
  milestone: any;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex items-center w-full group pl-20 md:pl-24"
    >
      {/* Marker */}
      <div className="absolute left-8 -translate-x-1/2 z-20">
        <div className={`w-10 h-10 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all duration-500 group-hover:scale-150 group-hover:rotate-12 z-20 ${milestone.color} ring-1 ring-slate-100 group-hover:ring-emerald-400`}>
          <milestone.icon size={14} className="group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Content always on the Right of the line */}
      <div className="w-full">
        <div className="bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 group-hover:-translate-y-2 group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:bg-white group-hover:scale-[1.02]">
          <YearTag year={milestone.year} />
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-2 group-hover:text-emerald-600 transition-colors">
            {milestone.title}
          </h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed group-hover:text-slate-600 transition-colors">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function YearTag({ year }: { year: string }) {
  return (
    <div className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-4">
      {year}
    </div>
  );
}

