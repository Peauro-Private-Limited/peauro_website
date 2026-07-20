import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 relative overflow-hidden pt-16 text-slate-800 border-t border-slate-200">
      {/* Upper Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Logo & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <img src="/LOGO.jpg-removebg-preview.png" alt="Peauro" className="h-[90px] w-auto object-contain" />
            </div>
            <p className="text-slate-600 text-xs uppercase tracking-widest font-semibold leading-relaxed max-w-sm">
              Pristine hydration sourced from protected aquifers. Committed to purity, speed, and elegance across Bihar and beyond.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/peauro_india/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-500/40 hover:shadow-md transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/peauro_india" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-md transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500/40 hover:shadow-md transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@peauro_india" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Youtube" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-red-600 hover:border-red-500/40 hover:shadow-md transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-700 hover:border-blue-600/40 hover:shadow-md transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-[0.2em] text-xs pb-2 border-b border-slate-200">
              Company
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-slate-600">
              <li>
                <Link to="/about" className="relative group inline-block hover:text-blue-600 transition-colors">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/impact" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Our Impact
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/milestones" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Milestones
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/founders" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Founders
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Careers
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-[0.2em] text-xs pb-2 border-b border-slate-200">
              Policies
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-bold text-slate-600">
              <li>
                <Link to="/terms" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/refund" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Refund Policy
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
              <li>
                <Link to="/delivery-terms" className="relative group inline-block hover:text-blue-600 transition-colors">
                  Delivery Terms
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Google Map */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-[0.2em] text-xs pb-2 border-b border-slate-200 flex items-center justify-between">
              <span>GET IN TOUCH</span>
              <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">Registered Office</span>
            </h4>

            {/* Contact details list */}
            <ul className="space-y-3 text-xs uppercase tracking-widest font-semibold text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/+registered+office+Near+Kali+Mandir,+Ujhandi,+Jamui,+Bihar+%E2%80%93+811307/@24.9379374,86.2031358,6318m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors leading-relaxed"
                >
                  Registered Office Near Kali Mandir, Ujhandi, Jamui, Bihar – 811307
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <a href="tel:+918580055400" className="hover:text-blue-600 transition-colors">+91 85800 55400</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <a href="mailto:Peauroprivatelimited@gmail.com" className="hover:text-blue-600 transition-colors">Peauroprivatelimited@gmail.com</a>
              </li>
            </ul>

            {/* Embedded Google Map */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-36 w-full group mt-4 bg-white">
              <iframe
                title="Peauro Registered Office Location"
                src="https://maps.google.com/maps?q=Near+Kali+Mandir,+Ujhandi,+Jamui,+Bihar+811307&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Overlay Badge */}
              <a
                href="https://www.google.com/maps/search/+registered+office+Near+Kali+Mandir,+Ujhandi,+Jamui,+Bihar+%E2%80%93+811307/@24.9379374,86.2031358,6318m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 hover:bg-blue-600 transition-all shadow-md"
              >
                <span>View on Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* ORGANIC FLUID BLUE WATER WAVES (Matching Reference Image) */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full overflow-hidden leading-none mt-6">
        <svg 
          className="relative block w-full h-[70px] sm:h-[100px] md:h-[140px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Top Light Blue Wave Layer */}
          <path 
            d="M0,0 C150,90 350,-30 550,50 C750,130 950,10 1200,45 L1200,120 L0,120 Z" 
            fill="#93c5fd"
            fillOpacity="0.75"
          />
          {/* Middle Ocean Blue Wave Layer */}
          <path 
            d="M0,25 C220,105 480,5 720,75 C960,135 1100,25 1200,60 L1200,120 L0,120 Z" 
            fill="#3b82f6"
            fillOpacity="0.85"
          />
          {/* Bottom Deep Blue Wave Layer */}
          <path 
            d="M0,55 C320,125 620,25 920,95 C1060,125 1150,65 1200,75 L1200,120 L0,120 Z" 
            fill="#1d4ed8"
          />
        </svg>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DEEP OCEAN BLUE BOTTOM BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#1d4ed8] text-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] uppercase tracking-widest font-bold text-blue-100">
            © 2026 PEAURO AQUEOUS CO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
