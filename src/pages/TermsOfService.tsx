import React from 'react';
import { motion } from 'motion/react';
import { Shield, Scale } from 'lucide-react';

export default function TermsOfService() {
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
              <Scale size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Terms of Service</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: 11/07/26</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 leading-relaxed mb-12">
              Welcome to Peauro ("we", "us", "our"). By placing an order or using our WhatsApp bot / app / website, you agree to these Terms of Service.
            </p>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.1</span> What Peauro Does
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Peauro is a hyperlocal pure mineral water jar (20-litre) delivery service, currently piloting in the Kankarbagh area of Patna, Bihar. We partner with local water vendors who act as stock points; all pickup and last-mile delivery is carried out by Peauro's own riders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.2</span> Jar Ownership
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                The 20-litre jars used for delivery are the property of Peauro. Customers are given jars on a fill-and-exchange basis (empty jar returned when a full one is delivered) unless a separate jar deposit has been paid for an additional/first-time jar.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.3</span> Orders and Payment
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Orders can be placed via WhatsApp bot, app, or phone.</li>
                <li>Price per jar and any applicable delivery fee will be clearly communicated at the time of order.</li>
                <li>Payment can be made via cash on delivery, UPI, or online, as available in your area.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.4</span> Service Area and Availability
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Peauro currently operates only in select pincodes within Kankarbagh, Patna, during the pilot phase. Service availability, delivery slots, and coverage area may change without prior notice as we scale.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.5</span> Customer Responsibilities
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Provide accurate delivery address and contact number.</li>
                <li>Ensure someone is available to receive the jar and hand over the empty jar during the scheduled window.</li>
                <li>Handle jars with care; report leakage or damage within 24 hours of delivery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.6</span> Limitation of Liability
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Peauro is not liable for indirect losses arising from delayed delivery due to circumstances beyond our reasonable control (weather, road closures, vendor stock shortage, etc.). Our liability for any single order is limited to the value of that order.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.7</span> Termination of Service
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We may suspend or stop service to a customer in case of repeated non-payment, abuse of delivery staff, or misuse of jars (e.g. non-return, damage).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.8</span> Governing Law
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                These terms are governed by the laws of India, with courts in Patna, Bihar having jurisdiction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">1.9</span> Contact
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                For questions about these terms, please contact us via phone, email, or WhatsApp.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-50 flex items-center gap-3">
              <Shield size={16} className="text-emerald-500" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Legal Document</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
