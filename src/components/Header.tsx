import React, { useState, useEffect } from 'react';
import { Phone, Shield, Clock, MapPin, Menu, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency Announcement Bar */}
      <div id="top-announcement-bar" className="bg-[#0A1E3F] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1 bg-[#FF4D4D] text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              24/7 Live Dispatch
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
              Central Hub: 4203 Erdman Ave, Baltimore MD 21213
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Active Patrol: 4 Vans Dispatched
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-slate-300">Same-Day Emergency Response</span>
            <a 
              id="top-bar-phone-link"
              href={BUSINESS_INFO.phoneTel} 
              className="text-[#FF4D4D] hover:text-white transition-colors flex items-center gap-1 font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-200 ${isScrolled ? 'bg-[#0F2C59]/95 backdrop-blur-md shadow-xl py-3' : 'bg-[#0F2C59] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a id="navbar-logo-link" href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E07A5F] to-[#FF4D4D] flex items-center justify-center text-white shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-tight group-hover:text-amber-200 transition-colors">
                Pest Control Baltimore Solution
              </span>
              <span className="text-slate-300 text-xs font-medium tracking-wide flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                4203 Erdman Ave • Licensed & Insured MD #58392
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
            <a id="nav-link-services" href="#services" className="hover:text-[#E07A5F] transition-colors">Services</a>
            <a id="nav-link-trust-fleet" href="#trust-fleet" className="hover:text-[#E07A5F] transition-colors">About & Fleet</a>
            <a id="nav-link-equipment" href="#equipment" className="hover:text-[#E07A5F] transition-colors">Equipment & Tech</a>
            <a id="nav-link-calculator" href="#quote-calculator" className="hover:text-[#E07A5F] transition-colors">Cost Estimator</a>
            <a id="nav-link-reviews" href="#reviews" className="hover:text-[#E07A5F] transition-colors">Reviews</a>
            <a id="nav-link-service-area" href="#service-area" className="hover:text-[#E07A5F] transition-colors">Service Area</a>
            <a id="nav-link-faq" href="#faq" className="hover:text-[#E07A5F] transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-get-quote-btn"
              onClick={() => onOpenQuote()}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-4 py-2.5 rounded-lg border border-white/20 transition-all shadow-sm"
            >
              Free Inspection
            </button>
            <a
              id="nav-emergency-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] hover:from-[#c9664c] hover:to-[#e03b3b] text-white font-extrabold text-sm sm:text-base px-5 py-2.5 rounded-lg shadow-lg shadow-red-900/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Emergency Call: <span className="underline decoration-white/50">{BUSINESS_INFO.phoneDisplay}</span></span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#0A1E3F] border-b border-slate-800 text-white px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-semibold">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Extermination Services</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#trust-fleet" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Our Fleet & Erdman Ave HQ</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#equipment" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Equipment & Safe Solutions</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#quote-calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Instant Cost Estimator</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Verified Baltimore Reviews</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#service-area" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Baltimore ZIP Code Coverage</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800 flex items-center justify-between text-slate-200 hover:text-[#E07A5F]"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <a
                id="mobile-menu-call-now-btn"
                href={BUSINESS_INFO.phoneTel}
                className="w-full bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Emergency Call: {BUSINESS_INFO.phoneDisplay}
              </a>
              <button
                id="mobile-menu-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-white/15 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl text-center border border-white/20"
              >
                Request Free Inspection Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
