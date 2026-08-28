import React from 'react';
import { Phone, Shield, Clock, Award, Star, CheckCircle, MapPin, Zap, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { MEDIA_ASSETS } from '../data/baltimoreData';
import { QuickQuoteForm } from './QuickQuoteForm';

interface HeroProps {
  onOpenQuote: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero-section" className="relative min-h-[700px] lg:min-h-[760px] bg-[#0A1E3F] text-white flex items-center overflow-hidden">
      {/* Background Image with Dark Contrast Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={MEDIA_ASSETS.heroCover}
          alt="Pest Control Baltimore Solution cover showcasing local service coverage in Baltimore MD"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform duration-1000"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152B] via-[#0A1E3F]/90 to-[#0A1E3F]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Trust Badges, Dual CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Live Dispatch Pill */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-extrabold text-red-300 tracking-wide uppercase">
                Baltimore Emergency Hotline Active
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E07A5F]" /> 4203 Erdman Ave
              </span>
            </div>

            {/* H1 Headline */}
            <h1 id="hero-headline" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              #1 Fast &amp; Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A59] via-[#FF5252] to-[#FF8E53]">Pest Control</span> in Baltimore, MD
            </h1>

            {/* Sub-headline */}
            <p id="hero-subheadline" className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Safe, Eco-Friendly &amp; 100% Guaranteed Removal of Rodents, Bed Bugs, Termites &amp; Ants. Dispatched immediately from Erdman Ave across all Baltimore ZIP codes.
            </p>

            {/* Trust Badges Trio */}
            <div id="hero-trust-badges" className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF4D4D]/20 text-[#FF4D4D] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">24/7 Emergency</h4>
                  <p className="text-[11px] text-slate-300">Under 60-min arrival</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">Licensed &amp; Insured</h4>
                  <p className="text-[11px] text-slate-300">MD Dept of Ag #58392</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">100% Guaranteed</h4>
                  <p className="text-[11px] text-slate-300">Free re-treatment</p>
                </div>
              </div>
            </div>

            {/* Dual CTA Buttons (Phone Call + Quote Request) */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-emergency-call-btn"
                href={BUSINESS_INFO.phoneTel}
                className="bg-gradient-to-r from-[#E07A5F] via-[#FF4D4D] to-[#E07A5F] hover:opacity-95 text-white font-extrabold text-lg px-8 py-4 rounded-xl shadow-2xl shadow-red-900/50 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider text-red-100 font-bold leading-none">Immediate Exterminator Dispatch</span>
                  <span className="text-xl font-black leading-tight">Call: {BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </a>

              <a
                id="hero-free-quote-anchor-btn"
                href="#services"
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Explore Core Services</span>
              </a>
            </div>

            {/* Local Social Proof Strip */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-300 flex-wrap">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-extrabold text-white ml-1.5 text-sm">4.9 / 5.0</span>
              </div>
              <span className="text-slate-500">•</span>
              <span>284+ Verified Baltimore Reviews</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Eco-Safe &amp; Pet-Friendly
              </span>
            </div>

          </div>

          {/* Right Column: High Conversion Fast Quote Form */}
          <div className="lg:col-span-5">
            <QuickQuoteForm onSuccessSubmit={() => {}} />
          </div>

        </div>
      </div>
    </section>
  );
};
