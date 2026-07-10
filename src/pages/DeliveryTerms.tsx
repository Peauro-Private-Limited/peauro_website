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
              <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Delivery Terms</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs not-italic">01</span>
                Delivery Radius
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                We currently deliver within major urban sectors of Maharashtra, Bihar, and Jharkhand. Check the location selector for specific availability in your pin code.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs not-italic">02</span>
                Timings & Slots
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Deliveries are made between 6:00 AM and 9:00 PM. You can choose from 'Early Morning', 'Afternoon', or 'Evening' slots according to your convenience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs not-italic">03</span>
                Unattended Delivery
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                If you are not available at the time of delivery, our partner will attempt to contact you. If unreachable, the delivery will be rescheduled for the next morning.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs not-italic">04</span>
                Bulk & Corporate Orders
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Bulk orders (above 50 units) require a 48-hour lead time and are delivered using our specialized heavy-duty logistics fleet.
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
