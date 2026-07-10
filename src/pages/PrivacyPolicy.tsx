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
              <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Privacy Policy</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Data Collection
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                We collect information necessary to process your orders, such as name, contact details, and location. We also gather usage data to improve our platform's performance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Data Usage
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Your data is used to personalize your experience, handle deliveries, and communicate important updates. We never sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Security Protocol
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                We use industry-standard encryption and security measures to protect your data from unauthorized access or disclosure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500 text-2xl">•</span> Cookie Policy
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
               We use cookies to enhance navigation and store your preferences. You can manage your cookie settings through your browser.
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
