import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CreditCard, 
  Smartphone, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Loader2,
  Lock
} from 'lucide-react';

interface PaymentGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSuccess: () => void;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking';
type PaymentStep = 'selection' | 'processing' | 'success';

export default function PaymentGateway({ isOpen, onClose, amount, onSuccess }: PaymentGatewayProps) {
  const [method, setMethod] = useState<PaymentMethod>('upi');
  const [step, setStep] = useState<PaymentStep>('selection');
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = async () => {
    setStep('processing');
    // Simulate high-security processing
    await new Promise(resolve => setTimeout(resolve, 2500));
    setStep('success');
    await new Promise(resolve => setTimeout(resolve, 2000));
    onSuccess();
    onClose();
    // Reset state for next time
    setStep('selection');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Secure Checkout</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Peauro Aqueous Co.</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8">
            {step === 'selection' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Total Amount */}
                <div className="text-center py-4 bg-slate-50 rounded-3xl border border-slate-100">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 block mb-1">Amount to Pay</span>
                  <span className="text-4xl font-sans font-black text-slate-900 tracking-tighter italic">
                    ₹{amount.toLocaleString()}
                  </span>
                </div>

                {/* Methods */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 ml-2">Select Payment Method</span>
                  
                  <button 
                    onClick={() => setMethod('upi')}
                    className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between group ${
                      method === 'upi' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        method === 'upi' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <Smartphone size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">UPI / QR Scan</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      method === 'upi' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-200'
                    }`}>
                      {method === 'upi' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod('card')}
                    className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between group ${
                      method === 'card' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        method === 'card' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <CreditCard size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Debit / Credit Card</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Visa, Mastercard, RuPay</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      method === 'card' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-200'
                    }`}>
                      {method === 'card' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod('netbanking')}
                    className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between group ${
                      method === 'netbanking' ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        method === 'netbanking' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <Building2 size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Net Banking</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">All major Indian banks</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      method === 'netbanking' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-200'
                    }`}>
                      {method === 'netbanking' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                </div>

                <button 
                  onClick={handlePayment}
                  className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200"
                >
                  Pay Securely <ChevronRight size={16} />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                  <Lock size={10} /> 256-bit SSL Encrypted
                </div>
              </motion.div>
            )}

            {step === 'processing' && (
              <div className="py-20 flex flex-col items-center text-center">
                <div className="relative mb-10 text-emerald-500">
                  <Loader2 size={64} className="animate-spin opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck size={32} className="animate-pulse" />
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Processing Payment</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                  Verifying your transaction with <br/> the secure bank gateway...
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-20 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-10 shadow-2xl shadow-emerald-200"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Payment Successful</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                  Order ID: PEA-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
