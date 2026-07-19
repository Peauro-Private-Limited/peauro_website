import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, MapPin, ChevronRight, Globe } from 'lucide-react';
import { INDIAN_STATES } from '../constants';

interface LocationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation: string;
  onSelect: (location: string) => void;
}

export default function LocationSelector({ isOpen, onClose, selectedLocation, onSelect }: LocationSelectorProps) {
  const [search, setSearch] = useState('');

  const filteredStates = INDIAN_STATES.filter(state => 
    state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white text-slate-900">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                  <Globe size={24} className="relative z-10 text-white" />
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#00FF41] shadow-[0_0_8px_rgba(0,255,65,0.8)] animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest leading-none mb-1">Select Delivery Zone</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Pan-India Availability</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search */}
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text"
                  placeholder="Search your state or region..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all uppercase tracking-widest"
                />
              </div>
            </div>

            {/* State List */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <div className="grid gap-2">
                {filteredStates.map((state) => (
                  <button
                    key={state}
                    onClick={() => {
                      onSelect(state);
                      onClose();
                    }}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                      selectedLocation === state 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900 border' 
                        : 'hover:bg-slate-50 border-transparent border'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        selectedLocation === state ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'
                      }`}>
                        <MapPin size={14} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">{state}</span>
                    </div>
                    {selectedLocation === state ? (
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    ) : (
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
                    )}
                  </button>
                ))}
                {filteredStates.length === 0 && (
                  <div className="py-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mb-4 border border-slate-100">
                      <Search size={32} />
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">No matching zones found</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-900 text-center">
              <p className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.3em]">
                Refreshing standard hydration across the nation
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
