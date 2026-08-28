import React from 'react';
import { Cpu, ShieldCheck, Heart, Sparkles, Zap, CheckCircle, Phone, Microscope, Eye } from 'lucide-react';
import { MEDIA_ASSETS, EQUIPMENT_SPECS } from '../data/baltimoreData';
import { BUSINESS_INFO } from '../data/servicesData';

export const EquipmentSection: React.FC = () => {
  return (
    <section id="equipment" className="py-16 sm:py-24 bg-[#0A1E3F] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E07A5F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 border border-white/10 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Microscope className="w-3.5 h-3.5" />
            Advanced Science &amp; Family-Safe Technology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Professional Equipment &amp; Safe Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We combine hospital-grade, family-and-pet-safe chemicals with cutting-edge detection and thermal systems to eliminate pests without threatening indoor air quality or home health.
          </p>
        </div>

        {/* Media & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Main Equipment Image with Feature Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
              <img
                src={MEDIA_ASSETS.equipment}
                alt="Professional grade pest control tools and precision equipment at Pest Control Baltimore Solution"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-transparent"></div>
              
              {/* Floating Quality Callout */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">100% Pet &amp; Child Conscious Protocols</h4>
                    <p className="text-xs text-slate-300">Botanical formulations with zero hazardous residual VOCs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white p-3.5 rounded-xl shadow-xl items-center gap-2 text-xs font-extrabold">
              <Zap className="w-4 h-4" />
              <span>EPA Registered Formulations</span>
            </div>
          </div>

          {/* Right Column: Key Tech Specs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EQUIPMENT_SPECS.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-[#E07A5F] flex-shrink-0" />
                    <h4 className="text-sm font-extrabold text-white">{spec.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Safety Commitment Banner */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-xl p-5 mt-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-white mb-1">
                    Strict Maryland Environmental Compliance
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    All technicians undergo bi-annual Maryland Department of Agriculture safety recertification. We adhere to Integrated Pest Management (IPM) guidelines to ensure zero contamination of Baltimore's Chesapeake watershed.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold text-sm py-3 px-6 rounded-xl text-center shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Equipment Tech: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
