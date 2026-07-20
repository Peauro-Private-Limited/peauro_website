import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Eye } from 'lucide-react';

export default function VisitorCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const controls = animate(count, 24532, {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    });
    setHasAnimated(true);
    return controls.stop;
  }, [count]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-4 px-6 rounded-[2rem] hover:bg-slate-900/60 transition-all group pointer-events-auto"
    >
      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform">
        <Eye size={18} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
           <motion.span className="text-xl font-sans font-black text-white tracking-tighter">
            {rounded}
          </motion.span>
          <span className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">+</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.3em] font-black text-slate-500">Monthly Visitors</span>
      </div>
    </motion.div>
  );
}
