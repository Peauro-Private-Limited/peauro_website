import { Settings, Shield, Zap, Recycle, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Shield className="text-emerald-600" />,
    title: 'Purity Guaranteed',
    description: 'Our water goes through a 7-stage purification process and is enriched with essential minerals.'
  },
  {
    icon: <Zap className="text-emerald-600" />,
    title: 'Lightning Delivery',
    description: 'Get your water within 30 minutes of ordering. We have hubs in every major neighborhood.'
  },
  {
    icon: <Settings className="text-emerald-600" />,
    title: 'Easy Subscription',
    description: 'Set it and forget it. Schedule recurring deliveries daily, weekly, or monthly.'
  },
  {
    icon: <Recycle className="text-emerald-600" />,
    title: 'Eco-Friendly',
    description: 'We prioritize 100% recyclable materials and have a robust return-and-reuse program for jars.'
  }
];

const stats = [
  { label: "Vendors", value: "500+", icon: Users },
  { label: "Online Delivery", value: "25%", icon: Calendar },
  { label: "Purity Checks", value: "100%", icon: CheckCircle2 }
];

export default function Features() {
  return (
    <section className="py-32 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans font-bold text-slate-900 mb-4 uppercase tracking-tight">Why Peauro?</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-light leading-relaxed text-sm">
            We don't just deliver water; we deliver trust, health, and convenience 
            with a commitment to artisanal quality in every drop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors"
              >
                {feature.icon}
              </motion.div>

              <h4 className="font-sans font-bold text-lg text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-widest font-bold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:bg-slate-900 transition-colors duration-500 shadow-xl shadow-slate-200/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-emerald-600 group-hover:text-emerald-400 group-hover:bg-slate-800 transition-colors shadow-sm">
                <stat.icon size={32} />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 group-hover:text-slate-500 uppercase tracking-[0.2em] transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
