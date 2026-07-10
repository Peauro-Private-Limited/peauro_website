import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Zap, CheckCircle2 } from 'lucide-react';

export default function VisionMissionSection() {
  const data = [
    {
      id: 'vision',
      title: 'Vision',
      icon: <Target className="text-emerald-600" size={24} />,
      subtitle: 'Where we aim to be in the sustainable future.',
      points: [
        'Leading the transformation toward sustainable hydration nationwide.',
        'Eliminating single-use plastic waste through packaging innovation.',
        'Protecting natural springs and aquifers for future generations.',
        'Empowering communities through reliable clean water access.',
        'Redefining the global standard of purity in the beverage industry.'
      ]
    },
    {
      id: 'mission',
      title: 'Mission',
      icon: <Compass className="text-emerald-600" size={24} />,
      subtitle: 'Our daily commitment to quality and service.',
      points: [
        'Accelerating delivery of pristine mineral water to every doorstep.',
        'Aligning with net-zero sustainability goals for all logistics operations.',
        'Reducing environmental footprint through eco-friendly refill models.',
        'Creating eco-positive zones with restoration and community programs.',
        'Ensuring mineral-rich, glass-level purity in every drop provided.'
      ]
    },
    {
      id: 'approach',
      title: 'Approach',
      icon: <Zap className="text-emerald-600" size={24} />,
      subtitle: 'The scientific and ethical method behind our water.',
      points: [
        'Sourcing exclusively from government-certified protected aquifers.',
        'Utilizing state-of-the-art multi-stage oxygen-rich filtration systems.',
        'Maintaining rigorous quality control via independent 150-test lab cycles.',
        'Prioritizing biodegradable and 100% recyclable material sourcing.',
        'Leveraging AI-driven delivery tracks to minimize transit carbon waste.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[42px] font-sans font-black text-[#1a2d5e] leading-tight tracking-tight mb-4">
            Vision, Mission & Approach
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-[0.3em]">
            Clear intent. Real impact. Sustainable progress.
          </p>
        </div>

        <div className="space-y-8">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden relative group"
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 relative z-10">
                <div className="md:w-1/4 flex items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-sans font-black text-slate-900 italic tracking-tighter">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <ul className="grid md:grid-cols-1 gap-6">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
