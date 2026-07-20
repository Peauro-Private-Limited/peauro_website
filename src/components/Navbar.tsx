import React, { useState, useEffect } from 'react';
import { Menu, MapPin, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onSubscriptionClick: () => void;
  onProfileClick: () => void;
  selectedLocation: string;
  onLocationClick: () => void;
}

export default function Navbar({ onSubscriptionClick, onProfileClick, selectedLocation, onLocationClick }: NavbarProps) {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // 1. Home page active tab scroll tracking
      if (isHome) {
        const sections = ['about', 'source', 'products', 'impact', 'faq'];
        const scrollPosition = window.scrollY + 200; // Offset for better transition triggers

        let currentSection = 'home';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSection = section;
              break;
            }
          }
        }
        setActiveTab(currentSection);
      }
    };

    // Run initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, location.pathname]);

  const showDarkNavbar = false;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b h-20 transition-all duration-300 ${
      showDarkNavbar ? 'bg-black/10 border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" aria-label="Peauro - Go to homepage">
            <Logo className="h-[42px]" variant={showDarkNavbar ? 'white' : 'default'} />
          </Link>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${
          showDarkNavbar ? 'text-white/80' : 'text-slate-600'
        }`}>
          <Link
            to="/"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`relative py-2 transition-colors ${
              isHome && activeTab === 'home'
                ? (showDarkNavbar ? 'text-emerald-400' : 'text-emerald-600')
                : (showDarkNavbar ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${isHome && activeTab === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          <Link
            to="/about"
            onClick={() => setActiveTab('about')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/about' 
                ? (showDarkNavbar ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          <Link 
            to="/impact" 
            onClick={() => setActiveTab('impact')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/impact' 
                ? (showDarkNavbar ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Impact
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/impact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          {/* HIDDEN: Products link - uncomment to re-enable
          <Link 
            to="/products" 
            onClick={() => setActiveTab('products')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/products' 
                ? (showDarkNavbar ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Products
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          */}
          <Link 
            to="/milestones" 
            onClick={() => setActiveTab('milestones')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/milestones' 
                ? (showDarkNavbar ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Milestones
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/milestones' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={onProfileClick}
            className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${
              showDarkNavbar ? 'text-white/80 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
            }`}
          >
            Support
          </button>

          <button 
            className="p-1 md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-6 h-[14px] relative">
              <motion.span
                className={`h-[2px] w-full rounded-full ${showDarkNavbar ? 'bg-white' : 'bg-slate-900'}`}
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: "50%", originY: "50%" }}
              />
              <motion.span
                className={`h-[2px] w-full rounded-full ${showDarkNavbar ? 'bg-white' : 'bg-slate-900'}`}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`h-[2px] w-full rounded-full ${showDarkNavbar ? 'bg-white' : 'bg-slate-900'}`}
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 md:top-20 left-0 right-0 bg-white border-b border-slate-100 px-6 py-10 flex flex-col gap-8 md:hidden shadow-2xl"
        >
          <Link 
            to="/" 
            onClick={() => { 
              setIsMenuOpen(false); 
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className="text-[16px] uppercase tracking-[0.2em] font-bold text-slate-700 hover:text-emerald-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveTab('about');
            }}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${location.pathname === '/about' ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'}`}
          >
            About
          </Link>
          <Link 
            to="/impact" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveTab('impact');
            }}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${location.pathname === '/impact' ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'}`}
          >
            Impact
          </Link>
          {/* HIDDEN: Mobile Products link - uncomment to re-enable
          <Link 
            to="/products" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveTab('products');
            }}
            className="text-[16px] uppercase tracking-[0.2em] font-bold text-slate-700 hover:text-emerald-600 transition-colors"
          >
            Products
          </Link>
          */}

          <Link 
            to="/milestones" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${location.pathname === '/milestones' ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'}`}
          >
            Milestones
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
