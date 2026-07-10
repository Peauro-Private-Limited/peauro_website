import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, CheckCircle } from 'lucide-react';

export default function RefundPolicy() {
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
              <RotateCcw size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Refund Policy</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Quality Guarantee
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                If the product delivered is damaged or does not meet our purity standards, we offer a full refund or immediate replacement, no questions asked.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Cancellation Window
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Subscriptions can be cancelled at any time. For scheduled deliveries, cancellations must be made at least 12 hours before the delivery slot to be eligible for a refund.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Refund Processing
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Once approved, refunds are processed within 5-7 business days to the original payment method used during checkout.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Damaged Goods
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                In case of broken glass or faulty bottling, please report it within 2 hours of delivery with photographic evidence for an instant credit.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-50 flex items-center gap-3">
              <CheckCircle size={16} className="text-emerald-500" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer Satisfaction Priority</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
