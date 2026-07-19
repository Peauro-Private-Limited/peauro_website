import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  XCircle, 
  ShieldAlert, 
  Droplet, 
  TrendingDown, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine 
} from 'recharts';
import { Link } from 'react-router-dom';

// Data from Image 1: Per Capita Water Availability in India (1951 - 2031)
const waterAvailabilityData = [
  { year: '1951', availability: 5177, stress: 1700, scarcity: 1000 },
  { year: '2001', availability: 1816, stress: 1700, scarcity: 1000 },
  { year: '2011', availability: 1545, stress: 1700, scarcity: 1000 },
  { year: '2021', availability: 1486, stress: 1700, scarcity: 1000 },
  { year: '2031 (proj.)', availability: 1367, stress: 1700, scarcity: 1000 },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white font-sans pt-14 overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-[#030712] via-[#081026] to-slate-900 text-white overflow-hidden border-b border-slate-900/60">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e676_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-sans mb-4"
            >
              Our Impact & <span className="text-emerald-400">Water Crisis</span> Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm md:text-base lg:text-lg font-medium leading-relaxed tracking-wide max-w-2xl mx-auto"
            >
              Understanding India’s slow-moving water stress, Bihar’s groundwater reality, and Peauro’s relentless commitment to safe, pure, and accessible doorstep hydration.
            </motion.p>
          </div>

          {/* 3 Dark Metric Cards (From Image 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Dark Card 1 */}
            <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
              <p className="text-slate-300 text-sm font-semibold uppercase tracking-wide leading-snug mb-6">
                Face high to extreme water stress in India
              </p>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                600M+
              </div>
            </div>

            {/* Dark Card 2 */}
            <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
              <p className="text-slate-300 text-sm font-semibold uppercase tracking-wide leading-snug mb-6">
                Drink arsenic-contaminated water in Bihar
              </p>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                10M+
              </div>
            </div>

            {/* Dark Card 3 */}
            <div className="bg-[#0b1329] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
              <p className="text-slate-300 text-sm font-semibold uppercase tracking-wide leading-snug mb-6">
                Of India's available water is contaminated
              </p>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                70%
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: IMAGE 2 - THE SAFE WATER CRISIS IN BIHAR */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#fafbfc] text-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <div className="text-emerald-600 font-black tracking-[0.2em] text-xs uppercase">
              THE UNSEEN REALITY
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic font-sans">
              THE SAFE WATER <span className="text-emerald-500">CRISIS</span> IN BIHAR
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
              THE CURRENT LANDSCAPE OF LOCAL HOME WATER JAR DELIVERY IN PATNA AND SURROUNDING REGIONS IS DEEPLY FRAGMENTED, PRESENTING DAILY HEALTH RISKS AND OPERATIONAL FRUSTRATIONS.
            </p>
          </motion.div>

          {/* 3 White Metric Cards (From Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 font-sans italic mb-4">
                  82%
                </div>
                <h3 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-wider mb-2">
                  UNREGULATED JARS IN BIHAR
                </h3>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider leading-relaxed mt-4">
                HOUSEHOLDS RELY ON LOCAL UNCERTIFIED WATER SUPPLIERS.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 font-sans italic mb-4">
                  70%+
                </div>
                <h3 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-wider mb-2">
                  GROUNDWATER CONTAMINATION
                </h3>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider leading-relaxed mt-4">
                PATNA REGION SECTORS REPORT HIGH IRON, ARSENIC OR MICROBIAL LEVELS.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 font-sans italic mb-4">
                  1 in 4
                </div>
                <h3 className="font-black text-slate-900 text-xs md:text-sm uppercase tracking-wider mb-2">
                  DELIVERY DISRUPTION RATE
                </h3>
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider leading-relaxed mt-4">
                DELIVERIES FROM UNORGANIZED VENDORS ARE DELAYED OR MISSED ENTIRELY.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: IMAGE 1 - PER CAPITA WATER AVAILABILITY CHART */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#0a0f1d] text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Chart Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">
                  <TrendingDown size={16} />
                  <span>National Trend (1951 - 2031)</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                  Per capita water availability (m³/year)
                </h2>
              </div>

              {/* Legend Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
                  <span className="text-slate-300">Availability Line</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-amber-400 border border-dashed border-amber-400 inline-block" />
                  <span className="text-amber-400">Stress Line (1,700 m³)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-red-500 border border-dashed border-red-500 inline-block" />
                  <span className="text-red-400">Scarcity Line (1,000 m³)</span>
                </div>
              </div>
            </div>

            {/* Recharts Area Chart Container */}
            <div className="bg-[#040814] p-6 md:p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
              <div className="h-[360px] md:h-[420px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={waterAvailabilityData}
                    margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                  >
                    <defs>
                      <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }}
                      dy={10}
                    />
                    <YAxis
                      domain={[0, 6000]}
                      ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                      tickFormatter={(val) => `${val.toLocaleString()} m³`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0b1329',
                        borderColor: '#334155',
                        borderRadius: '16px',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
                      }}
                      formatter={(value: any) => [`${Number(value).toLocaleString()} m³/year`, 'Availability']}
                    />
                    
                    {/* Water Stress Line (1,700 m³) */}
                    <ReferenceLine
                      y={1700}
                      stroke="#fbbf24"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                      label={{
                        value: 'Water stress line (1,700 m³)',
                        fill: '#fbbf24',
                        position: 'top',
                        fontSize: 11,
                        fontWeight: 'bold'
                      }}
                    />

                    {/* Scarcity Line (1,000 m³) */}
                    <ReferenceLine
                      y={1000}
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                      label={{
                        value: 'Scarcity line (1,000 m³)',
                        fill: '#ef4444',
                        position: 'bottom',
                        fontSize: 11,
                        fontWeight: 'bold'
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="availability"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#waterGradient)"
                      dot={{ r: 6, fill: '#3b82f6', stroke: '#ffffff', strokeWidth: 2 }}
                      activeDot={{ r: 8, fill: '#60a5fa' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Data Source Details (From Image 1) */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4 text-xs md:text-sm text-slate-300">
                <p className="leading-relaxed font-semibold">
                  <strong className="text-white uppercase tracking-wider">Data source:</strong> Government estimates (CGWB / Ministry of Housing and Urban Affairs). India's per capita water availability was 5,177 cubic meters per the 1951 census, falling to 1,816 cubic meters in 2001, 1,545 cubic meters in 2011, 1,486 cubic meters in 2021, and projected to be 1,367 cubic meters in 2031.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 font-medium leading-relaxed">
                  "Ye line curve clearly dikhata hai ki crisis ek slow-moving reality hai — 1951 se lekar 2031 tak paani availability continuously gir rahi hai, already water-stress line (1,700 m³) ke neeche, aur scarcity line (1,000 m³) ki taraf badh rahi hai."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: IMAGE 3 - WHY LOCAL WATER JAR DELIVERY IS FAILING PATNA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fcfdfe] rounded-[36px] p-8 md:p-12 border border-slate-200/80 shadow-lg"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Shield Icon & Main Paragraph */}
              <div className="lg:col-span-5 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 shadow-inner">
                  <ShieldAlert size={28} />
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic font-sans leading-tight text-slate-900">
                  WHY LOCAL WATER JAR DELIVERY IS FAILING PATNA
                </h2>
                <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wider leading-relaxed">
                  BIHAR'S DRINKING WATER DEMANDS ARE MET BY LOCAL, UNORGANIZED SUPPLIERS WHO LEASE OLD PLASTIC JARS, REFILL THEM WITH UNCERTIFIED GROUND WATER, AND OPERATE WITHOUT REAL HYGIENE CERTIFICATES OR CUSTOMER ACCOUNTABILITY. LATE DELIVERIES, RUDE BEHAVIORS, AND SUSPICIOUS SOURCE WATER ARE ACCEPTED AS THE STANDARD. PEAURO WAS CREATED TO CHANGE THIS STORY ENTIRELY.
                </p>
              </div>

              {/* Right Column: 4 Red Cross Points */}
              <div className="lg:col-span-7 space-y-6">
                {/* Point 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <XCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">NO ACCOUNTABILITY:</strong> UNREGISTERED LOCAL VENDORS HAVE ZERO LIABILITY IF CUSTOMERS FACE WATER-BORNE DISEASES.
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <XCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">MICROPLASTICS HAZARD:</strong> OLD BLUE PLASTIC JARS ARE CONSTANTLY REUSED BEYOND THEIR SAFE LIFECYCLE, SHEDDING THOUSANDS OF MICROPLASTIC PARTICLES.
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <XCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">ARSENIC & CHEMICAL SEEPAGE:</strong> SHALLOW TUBEWELL SOURCES COMMONLY FOUND IN PATNA HARBOR HAZARDOUS ARSENIC, HIGH IRON CONTENT, AND MICROBIAL TOXINS.
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <XCircle size={22} className="text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">FRAGMENTED DELIVERY:</strong> INCONSISTENT TIMING MEANS FAMILIES ARE LEFT WITHOUT PURE DRINKING WATER FOR HOURS.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: THE PEAURO SOLUTION & CALL TO ACTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] text-white relative overflow-hidden border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic font-sans leading-tight">
            How Peauro Solves the Crisis
          </h2>

          <p className="text-slate-300 text-sm md:text-base font-medium uppercase tracking-wider leading-relaxed max-w-3xl mx-auto">
            By bypassing uncertified local brokers, enforcing strict multi-stage TDS purification, and deploying our own trained corporate riders, Peauro guarantees safe, sealed, and rapid hydration to your doorstep within minutes.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold uppercase text-xs tracking-widest transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
            >
              Order Safe Water Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
