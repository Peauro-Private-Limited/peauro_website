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
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Refund Policy</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: 11/07/26</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                When You're Eligible for a Refund or Replacement
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Jar arrives leaking, damaged, or with visibly contaminated water</li>
                <li>Wrong item delivered (e.g. wrong jar type/quantity)</li>
                <li>Order not delivered within the promised window and you choose to cancel</li>
                <li>Jar not delivered at all despite payment (COD orders excluded, since no payment was collected)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                When Refunds Do NOT Apply
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Water has already been consumed/used from the jar</li>
                <li>Delay caused by customer being unavailable at the delivery address</li>
                <li>Damage caused by customer after delivery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Refund Process
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Report the issue within 24 hours of delivery via WhatsApp/phone with a photo if possible.</li>
                <li>Approved refunds are processed within 3–5 business days to the original payment method, or adjusted against your next order.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Jar Deposit Refund
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you paid a one-time jar deposit and wish to discontinue service, the deposit will be refunded once the jar is returned in usable condition to our rider or vendor stock point.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-600">
                Contact for Refunds
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                For refund-related queries, please contact us via phone, email, or WhatsApp.
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
