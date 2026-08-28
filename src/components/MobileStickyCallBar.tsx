import React from 'react';
import { Phone, Calendar, Zap, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface MobileStickyCallBarProps {
  onOpenQuote: () => void;
}

export const MobileStickyCallBar: React.FC<MobileStickyCallBarProps> = ({ onOpenQuote }) => {
  return (
    <div 
      id="mobile-sticky-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A1E3F]/98 backdrop-blur-lg border-t border-slate-700 p-2.5 sm:hidden shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center gap-2">
        {/* Call Button */}
        <a
          id="mobile-sticky-call-btn"
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 bg-gradient-to-r from-[#E07A5F] via-[#FF4D4D] to-[#E07A5F] text-white font-extrabold py-3 px-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-center text-xs"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[9px] uppercase tracking-wider text-red-100 font-bold">24/7 Emergency</span>
            <span className="text-xs font-black">Call: {BUSINESS_INFO.phoneDisplay}</span>
          </div>
        </a>

        {/* Free Inspection Button */}
        <button
          id="mobile-sticky-quote-btn"
          onClick={onOpenQuote}
          className="flex-1 bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-3 rounded-xl border border-white/20 text-center flex items-center justify-center gap-1.5 text-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Free Inspection</span>
        </button>
      </div>
    </div>
  );
};
