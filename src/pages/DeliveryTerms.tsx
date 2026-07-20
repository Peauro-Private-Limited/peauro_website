import React from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin } from 'lucide-react';

export default function DeliveryTerms() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-slate-200 border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
              <Truck size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Delivery Terms</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: 11/07/26</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">01</span>
                Delivery Area
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Currently serving select areas within Kankarbagh, Patna (pilot phase). Coverage will expand as we onboard more vendors and riders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">02</span>
                Delivery Tiers
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Emergency delivery — single/urgent jar requirement, dispatched via bike, fastest ETA priority.</li>
                <li>Regular delivery — scheduled/recurring orders, delivered via bike (EV riders preferred where available).</li>
                <li>Bulk/Event delivery — large volume orders, delivered via auto or mini-truck depending on quantity.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">03</span>
                Delivery Windows
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Standard delivery slots: 8 AM–12 PM and 4 PM–8 PM. Emergency orders are prioritized outside these slots based on rider availability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">04</span>
                Jar Exchange Process
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our rider will collect your empty jar at the time of delivering a full one. Please keep the empty jar ready to ensure a smooth, quick exchange.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">05</span>
                Delivery Charges
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Delivery fee, if applicable, is communicated at checkout — or built into the per-jar price.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">06</span>
                Missed Delivery
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you're unavailable during the scheduled window, we'll attempt to reschedule for the same day where possible, or the next available slot. Repeated missed deliveries may require rescheduling to a standard slot only.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                 <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs">07</span>
                Rider Conduct
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our riders are trained to handle jars safely and interact respectfully with customers. Any complaints about rider conduct can be reported for immediate action.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-50 flex items-center gap-3">
              <MapPin size={16} className="text-emerald-500" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-Time Tracking Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
