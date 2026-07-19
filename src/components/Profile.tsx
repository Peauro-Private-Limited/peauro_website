import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X as XIcon, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export default function Profile({ isOpen, onClose }: ProfileProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-50 rounded-full transition-colors z-10"
              id="close-profile-btn"
            >
              <XIcon size={20} className="text-slate-400" />
            </button>

            <div className="flex-1 overflow-y-auto p-8 pt-16">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-xl font-sans font-black uppercase tracking-tight text-slate-900 mb-6">Support Hub</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a href="tel:+918580055400" className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col items-center text-center group hover:bg-emerald-50 hover:border-emerald-100 transition-all">
                      <div className="p-3 bg-white rounded-2xl text-slate-400 group-hover:text-emerald-600 shadow-sm mb-4 transition-colors">
                        <Phone size={20} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-slate-900">Call Us</span>
                       <span className="text-[8px] text-slate-500 font-bold uppercase mt-1">Mon-Sat, 9AM-8PM</span>
                    </a>
                    <a href="mailto:Peauroprivatelimited@gmail.com" className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col items-center text-center group hover:bg-blue-50 hover:border-blue-100 transition-all">
                      <div className="p-3 bg-white rounded-2xl text-slate-400 group-hover:text-blue-600 shadow-sm mb-4 transition-colors">
                        <Mail size={20} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-slate-900">Email</span>
                       <span className="text-[8px] text-slate-500 font-bold uppercase mt-1">24/7 Response</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500">Get In Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="p-2 bg-white rounded-xl text-slate-400 shadow-sm">
                        <MapPin size={18} />
                      </div>
                      <a 
                        href="https://www.google.com/maps/search/+registered+office+Near+Kali+Mandir,+Ujhandi,+Jamui,+Bihar+%E2%80%93+811307/@24.9379374,86.2031358,6318m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                      >
                        Registered Office Near Kali Mandir, Ujhandi, Jamui, Bihar – 811307
                      </a>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="p-2 bg-white rounded-xl text-slate-400 shadow-sm">
                        <Phone size={18} />
                      </div>
                      <a href="tel:+918580055400" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">+91 85800 55400</a>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="p-2 bg-white rounded-xl text-slate-400 shadow-sm">
                        <Mail size={18} />
                      </div>
                      <a href="mailto:Peauroprivatelimited@gmail.com" className="text-sm font-medium text-slate-700 uppercase hover:text-emerald-600 transition-colors">Peauroprivatelimited@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500">Follow Us</h4>
                  <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/peauro_india/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-100 transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="https://x.com/peauro_india" target="_blank" rel="noopener noreferrer" aria-label="X" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-black hover:bg-slate-100 hover:border-slate-200 transition-all">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" aria-label="Facebook" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all">
                      <Facebook size={20} />
                    </a>
                    <a href="https://www.youtube.com/@peauro_india" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all">
                      <Youtube size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-100 transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
