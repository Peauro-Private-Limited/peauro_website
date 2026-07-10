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
              <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Terms of Service</h1>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Last Updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">01.</span> Acceptance of Terms
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                By accessing and using the Peauro platform, you agree to be bound by these terms. If you do not agree, please do not use our services. We reserve the right to modify these terms at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">02.</span> Service Description
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Peauro provides premium hydration solutions, including bottled water delivery and subscription services. We source our water from protected aquifers and process it using state-of-the-art filtration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">03.</span> User Accountability
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                Users are responsible for providing accurate delivery information and ensuring a safe environment for our delivery partners. Subscription changes must be made 24 hours in advance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex items-center gap-2">
                <span className="text-emerald-500">04.</span> Intellectual Property
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                All content on this platform, including logos, designs, and text, is the property of Peauro Technologies Pvt. Ltd. Unauthorized use is strictly prohibited.
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
