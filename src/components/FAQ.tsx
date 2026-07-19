import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
      question: " How Many days can water be stored in this bottle. ?",
    answer: "As per out test, it can be stored for 90 days(3 months)."
  },
  {
    question: "Where is Peauro water sourced from?",
    answer: "Peauro water is sourced from pristine, protected underground aquifers. It is naturally filtered through layers of rock and enriched with vital minerals to deliver unmatched purity and a crisp, refreshing taste."
  },
  {
    question: "Can I cancel or pause my delivery?",
    answer: "Absolutely. You can manage your subscription directly from your profile. Pausing or canceling is instant and requires no long-term commitment. You only pay for what you receive."
  },
  {
    question: "How is Peauro water purified?",
    answer: "Peauro water undergoes a multi-stage advanced purification process, including multi-grade sand filtration, activated carbon treatment, micron cartridge filtration, and UV sterilization, ensuring absolute purity while preserving essential minerals."
  },
  {
    question: "What is the pH level of Peauro water?",
    answer: "Peauro maintains a naturally balanced pH level of 7.4, which is slightly alkaline and optimal for human hydration and metabolic balance. Our water is enriched with essential minerals at the source."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-600 mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-slate-900 uppercase tracking-tighter">
            Common <span className="text-slate-400">Queries</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={false}
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIndex === idx ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-white'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === idx ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-8 md:px-8 text-slate-500 text-sm leading-relaxed max-w-2xl font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
