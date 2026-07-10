import { Droplets, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#020617] relative overflow-hidden pt-12 pb-6 border-t border-white/5">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-10">
          <div>
            <div className="flex items-center mb-8">
              <img src="/LOGO.jpg-removebg-preview.png" alt="Peauro" className="h-[100px] w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-[11px] uppercase tracking-widest font-bold leading-relaxed mb-8">
              Pristine hydration sourced from protected aquifers. Committed to purity and elegance.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-slate-600 hover:text-emerald-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="X" className="text-slate-600 hover:text-emerald-500 transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-emerald-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="text-slate-600 hover:text-emerald-500 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-600 hover:text-emerald-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Company</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold text-slate-500">
              <li><Link to="/" className="relative group inline-block hover:text-emerald-500 transition-colors">Our Source<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
              <li><Link to="/founders" className="relative group inline-block hover:text-emerald-500 transition-colors">Founders<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
              <li><Link to="/careers" className="relative group inline-block hover:text-emerald-500 transition-colors">Careers<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Policies</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold text-slate-500">
              <li><Link to="/terms" className="relative group inline-block hover:text-emerald-500 transition-colors">Terms of Service<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
              <li><Link to="/privacy" className="relative group inline-block hover:text-emerald-500 transition-colors">Privacy Policy<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
              <li><Link to="/refund" className="relative group inline-block hover:text-emerald-500 transition-colors">Refund Policy<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
              <li><Link to="/delivery-terms" className="relative group inline-block hover:text-emerald-500 transition-colors">Delivery Terms<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">GET IN TOUCH</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold text-slate-500">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+91-8051122134</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span className="uppercase">HELLO@PEAURO.IN</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
              © 2024 PEAURO AQUEOUS CO.
            </p>
            <span className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
              Approved by Food Safety Standards
            </p>
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-slate-600">
            <span className="font-sans font-bold text-[10px] text-slate-700 uppercase tracking-widest italic">Purity Above All</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
