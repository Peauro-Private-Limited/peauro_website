import React, { useState, useEffect } from 'react';
import { Menu, MapPin, Search, Sun, Moon } from 'lucide-react';
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

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
      showDarkNavbar || darkMode ? 'bg-slate-950/80 border-slate-800 text-white' : 'bg-white/85 border-slate-200 text-slate-800'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" aria-label="Peauro - Go to homepage">
            <Logo className="h-[42px]" variant={showDarkNavbar || darkMode ? 'white' : 'default'} />
          </Link>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${
          showDarkNavbar || darkMode ? 'text-white/80' : 'text-slate-600'
        }`}>
          <Link
            to="/"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`relative py-2 transition-colors ${
              isHome && activeTab === 'home'
                ? (showDarkNavbar || darkMode ? 'text-emerald-400' : 'text-emerald-600')
                : (showDarkNavbar || darkMode ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar || darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${isHome && activeTab === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          <Link
            to="/about"
            onClick={() => setActiveTab('about')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/about' 
                ? (showDarkNavbar || darkMode ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar || darkMode ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar || darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          <Link 
            to="/impact" 
            onClick={() => setActiveTab('impact')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/impact' 
                ? (showDarkNavbar || darkMode ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar || darkMode ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Impact
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar || darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/impact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
          <Link 
            to="/milestones" 
            onClick={() => setActiveTab('milestones')}
            className={`relative py-2 transition-colors ${
              location.pathname === '/milestones' 
                ? (showDarkNavbar || darkMode ? 'text-emerald-400' : 'text-emerald-600') 
                : (showDarkNavbar || darkMode ? 'hover:text-white group' : 'hover:text-slate-900 group')
            }`}
          >
            Milestones
            <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-transform duration-300 ease-out origin-left ${
              showDarkNavbar || darkMode ? 'bg-emerald-400' : 'bg-emerald-600'
            } ${location.pathname === '/milestones' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle - Hidden for now
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
              showDarkNavbar || darkMode 
                ? 'text-white/80 hover:text-emerald-400 hover:bg-slate-800/60' 
                : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          */}

          <button 
            onClick={onProfileClick}
            className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${
              showDarkNavbar || darkMode ? 'text-white/80 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
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
                className={`h-[2px] w-full rounded-full ${showDarkNavbar || darkMode ? 'bg-white' : 'bg-slate-900'}`}
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: "50%", originY: "50%" }}
              />
              <motion.span
                className={`h-[2px] w-full rounded-full ${showDarkNavbar || darkMode ? 'bg-white' : 'bg-slate-900'}`}
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={`h-[2px] w-full rounded-full ${showDarkNavbar || darkMode ? 'bg-white' : 'bg-slate-900'}`}
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
          className={`absolute top-24 md:top-20 left-0 right-0 border-b px-6 py-10 flex flex-col gap-8 md:hidden shadow-2xl transition-colors duration-300 ${
            darkMode 
              ? 'bg-slate-900 border-slate-800 text-white' 
              : 'bg-white border-slate-100 text-slate-700'
          }`}
        >
          <Link 
            to="/" 
            onClick={() => { 
              setIsMenuOpen(false); 
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${
              isHome && activeTab === 'home'
                ? 'text-emerald-600'
                : (darkMode ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600')
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveTab('about');
            }}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${
              location.pathname === '/about' 
                ? 'text-emerald-600' 
                : (darkMode ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600')
            }`}
          >
            About
          </Link>
          <Link 
            to="/impact" 
            onClick={() => {
              setIsMenuOpen(false);
              setActiveTab('impact');
            }}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${
              location.pathname === '/impact' 
                ? 'text-emerald-600' 
                : (darkMode ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600')
            }`}
          >
            Impact
          </Link>

          <Link 
            to="/milestones" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-[16px] uppercase tracking-[0.2em] font-bold transition-colors ${
              location.pathname === '/milestones' 
                ? 'text-emerald-600' 
                : (darkMode ? 'text-slate-200 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600')
            }`}
          >
            Milestones
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
