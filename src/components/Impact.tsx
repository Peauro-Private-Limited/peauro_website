import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: '2021', problem: 40, effort: 15 },
  { year: '2022', problem: 58, effort: 35 },
  { year: '2023', problem: 72, effort: 70 },
  { year: '2024', problem: 88, effort: 125 },
  { year: '2025 (Forecast)', problem: 105, effort: 210 },
];

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sans font-black text-slate-900 mb-6 uppercase leading-[1.1] tracking-tighter">Outpacing the Crisis with Purpose.</h2>
            <p className="text-slate-500 font-light leading-relaxed mb-10 text-sm">
              In India, water scarcity and contamination are growing at an alarming rate. 
              Our mission is to create a parallel surge in accessibility. 
              For every 1% of increase in the water crisis, we strive to double our efforts in providing safe, sustainable hydration.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-10">
              <div>
                <div className="text-2xl font-sans font-bold text-emerald-600 mb-1">1M+</div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Liters Reclaimed</div>
              </div>
              <div>
                <div className="text-2xl font-sans font-bold text-emerald-600 mb-1">500k</div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Families Served</div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 font-sans uppercase tracking-[0.2em] font-bold">
              "We don't just sell water; we safeguard the right to pristine hydration."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-sm h-[400px]">
              <div className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8' }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fontWeight: 700, fill: '#cbd5e1' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(16, 185, 129, 0.05)' }}
                      contentStyle={{ 
                        borderRadius: '16px', 
                        border: '1px solid #f1f5f9', 
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', 
                        fontSize: '9px', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.15em', 
                        fontWeight: 700,
                        padding: '12px 16px'
                      }}
                    />
                    <Legend 
                        verticalAlign="top" 
                        align="right"
                        height={40} 
                        iconType="circle"
                        iconSize={6}
                        formatter={(value) => <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 ml-1">{value === 'problem' ? 'Crisis Level' : 'Peauro Effort'}</span>}
                    />
                    <Bar 
                        dataKey="problem" 
                        name="problem" 
                        fill="#cbd5e1" 
                        radius={[4, 4, 0, 0]} 
                        barSize={8} 
                    />
                    <Bar 
                        dataKey="effort" 
                        name="effort" 
                        fill="#10b981" 
                        radius={[6, 6, 0, 0]} 
                        barSize={16} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Legend card on top */}
            <div className="absolute -top-4 -right-4 bg-white p-4 shadow-xl border border-slate-50 flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900">+140%</div>
                <div className="text-[8px] uppercase tracking-tighter text-slate-400">Effort Velocity</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
