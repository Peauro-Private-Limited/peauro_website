import React from 'react';
import { motion } from 'motion/react';
import { Lock, Eye } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Lock size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Privacy Policy</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: 11/07/26</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 leading-relaxed mb-12">
              Peauro respects your privacy. This policy explains what data we collect and how we use it.
            </p>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> What We Collect
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Name, phone number, delivery address</li>
                <li>Order history and payment status</li>
                <li>Location data (for delivery routing, if using app/WhatsApp location share)</li>
                <li>Any messages you send us via WhatsApp bot for support/order tracking</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> How We Use It
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>To process and deliver your orders</li>
                <li>To assign the nearest rider and vendor stock point</li>
                <li>To contact you about order status, delays, or offers (only if you've opted in)</li>
                <li>To improve our service (e.g. demand patterns, route planning)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Who We Share It With
              </h2>
              <ul className="text-sm text-slate-500 leading-relaxed list-disc pl-6 space-y-2">
                <li>Our riders (name, address, phone — only for the specific delivery)</li>
                <li>Vendor stock points (only order quantity, not full customer profile)</li>
                <li>We do not sell your personal data to third parties.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Data Storage
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your data is stored securely and retained only as long as needed to serve you and meet legal requirements. WhatsApp-based order data is processed through WhatsApp Business API.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Your Rights
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                You can request to see, correct, or delete your personal data by contacting us. You can also opt out of promotional messages anytime.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Children's Privacy
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Peauro's services are intended for adults placing household/business orders and are not directed at children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Contact
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                For privacy-related questions, please contact us via phone, email, or WhatsApp.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-50 flex items-center gap-3">
              <Eye size={16} className="text-emerald-500" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">End-to-End Encryption Enabled</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
