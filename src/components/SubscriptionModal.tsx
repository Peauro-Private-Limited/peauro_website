import { X, Minus, Plus, Loader2, Check, Calendar, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Product, SubscriptionOptions } from '../types';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const FREQUENCIES = ['1 Month', '3 Months', '6 Months', '12 Months'];

export default function SubscriptionModal({ isOpen, onClose, product }: SubscriptionModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Wed', 'Fri']);
  const [frequency, setFrequency] = useState('1 Month');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubscribed(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleDay = (day: string) => {
    setError(null);
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSubscribe = async () => {
    if (selectedDays.length === 0) {
      setError('Please select at least one delivery day');
      return;
    }
    setError(null);
    setIsSubscribing(true);
    // Simulate thinking
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubscribing(false);
    setIsSubscribed(true);
    setTimeout(() => onClose(), 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[80]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 inset-y-10 md:inset-0 m-auto w-full max-w-sm h-fit max-h-[85vh] md:max-h-[90vh] bg-white z-[90] shadow-2xl overflow-hidden flex flex-col rounded-[32px]"
          >
            <div className="relative p-4 bg-slate-50 flex items-center justify-center border-b border-slate-100 shrink-0">
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-slate-50 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="w-32 h-32 py-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] uppercase tracking-widest font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Subscription</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Mineral Water</span>
                </div>
                <h3 className="text-xl font-sans font-black text-slate-900 mb-4 uppercase tracking-tight italic">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-slate-900">20 ltr</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-base font-bold text-slate-900">₹{product.price}/jar</span>
                   </div>

                   <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 border border-slate-200 rounded-xl">
                      <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-slate-400 hover:text-emerald-600 transition-colors">
                        <Minus size={16} strokeWidth={3} />
                      </button>
                      <span className="font-black text-base w-6 text-center text-slate-900">{quantity}</span>
                      <button onClick={() => setQuantity(q => q + 1)} className="text-slate-400 hover:text-emerald-600 transition-colors">
                        <Plus size={16} strokeWidth={3} />
                      </button>
                   </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider flex items-center gap-2">
                    <ClipboardCheck size={14} className="text-emerald-600" />
                    Delivery Days
                  </h4>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{selectedDays.length} selected</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DAYS.map(day => {
                    const isSelected = selectedDays.includes(day);
                    return (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                          isSelected
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                            : error 
                              ? 'bg-white border-red-200 text-slate-400 hover:border-red-300'
                              : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        {isSelected && <Check size={12} strokeWidth={4} />}
                        {day}
                      </button>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-[9px] font-bold uppercase tracking-widest mt-3 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-slate-950 mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
                  <Calendar size={14} className="text-emerald-600" />
                  Frequency
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {FREQUENCIES.map(freq => {
                    const isSelected = frequency === freq;
                    return (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq)}
                        className={`px-4 py-3 rounded-2xl text-[9px] uppercase tracking-widest font-black transition-all border flex flex-col items-start gap-1 group relative ${
                          isSelected
                            ? 'bg-slate-950 border-slate-950 text-white shadow-xl'
                            : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                           <span>{freq}</span>
                           <div className={`p-1 rounded-md transition-colors ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-300 group-hover:text-slate-400'}`}>
                              <Calendar size={12} strokeWidth={3} />
                           </div>
                        </div>
                        <span className={`text-[8px] font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-300'} uppercase tracking-[0.1em]`}>
                           {freq === '1 Month' ? 'Standard' : 'Best Value'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selection Summary Panel */}
              <div className="mb-8 p-5 bg-emerald-50/50 rounded-[2rem] border border-emerald-100/50">
                 <h5 className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Subscription Summary</h5>
                 <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                       <span className="text-slate-400 font-bold uppercase tracking-widest">Plan</span>
                       <span className="text-slate-900 font-black uppercase italic">{quantity} × {product.name}</span>
                    </div>
                    <div className="flex items-start justify-between text-[11px]">
                       <span className="text-slate-400 font-bold uppercase tracking-widest">Schedule</span>
                       <span className="text-slate-900 font-black uppercase italic text-right max-w-[150px]">
                          {selectedDays.length > 0 ? selectedDays.join(', ') : 'No days selected'}
                       </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                       <span className="text-slate-400 font-bold uppercase tracking-widest">Duration</span>
                       <span className="text-slate-900 font-black uppercase italic">{frequency}</span>
                    </div>
                 </div>
              </div>

              <button
                disabled={isSubscribing || isSubscribed}
                onClick={handleSubscribe}
                className={`w-full py-4 font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl transition-all active:scale-[0.98] rounded-2xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group ${
                  isSubscribed
                    ? 'bg-emerald-600 text-white'
                    : error 
                      ? 'bg-red-50 text-red-500 border border-red-100 shadow-none' 
                      : 'bg-slate-900 text-white hover:bg-emerald-600 shadow-slate-200'
                }`}
              >
                {isSubscribing ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-emerald-400" />
                    Processing...
                  </>
                ) : isSubscribed ? (
                  <>
                    Plan Saved
                    <Check size={14} />
                  </>
                ) : (
                  <>
                    Save Plan Info
                    <ClipboardCheck size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
