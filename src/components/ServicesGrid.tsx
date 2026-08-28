import React, { useState } from 'react';
import { Shield, Clock, CheckCircle2, ArrowRight, Phone, Sparkles, AlertTriangle, Bug } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab || (activeTab === 'rodent' && s.id === 'rodent-control'));

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#FF4D4D] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Bug className="w-3.5 h-3.5" />
            Targeted Baltimore Extermination Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2C59] tracking-tight">
            Comprehensive Pest Control Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every Baltimore infestation is unique. We deploy specialized, EPA-registered protocols engineered for permanent eradication with zero harm to pets, children, or property integrity.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'rodent', label: '🐀 Rodent & Rats' },
            { id: 'termite', label: '🪵 Termite Control' },
            { id: 'bedbug', label: '🛏️ Bed Bug Heat' },
            { id: 'insects', label: '🪲 Cockroaches & Ants' },
            { id: 'barrier', label: '🏡 Home Perimeter' },
            { id: 'commercial', label: '🏢 Commercial & IPM' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0F2C59] text-white shadow-md shadow-blue-950/20 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                
                {/* Floating Response Badge */}
                <div className="absolute top-3 left-3 bg-[#0F2C59]/90 backdrop-blur-sm text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FF4D4D]" />
                  <span>{service.responseTime}</span>
                </div>

                {/* Warranty Badge */}
                <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>{service.warranty.split(' ')[0]} Guaranteed</span>
                </div>

                {/* Title Overlay on Image Bottom */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-black text-white leading-snug drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Description */}
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Booking Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Upfront Estimate</span>
                      <span className="text-lg font-black text-[#0F2C59]">{service.startingPrice}</span>
                    </div>
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-[#E07A5F] hover:text-[#FF4D4D] flex items-center gap-1 transition-colors"
                    >
                      <span>Treatment Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`book-service-${service.id}`}
                      onClick={() => onOpenQuote(service.id)}
                      className="w-full bg-[#0F2C59] hover:bg-[#0A1E3F] text-white text-xs font-extrabold py-2.5 px-3 rounded-lg text-center transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Book Service</span>
                    </button>

                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="w-full bg-red-50 hover:bg-red-100 text-[#FF4D4D] border border-red-200 text-xs font-extrabold py-2.5 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Tech</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-14 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <Shield className="w-8 h-8 text-[#E07A5F]" />
            </div>
            <div>
              <h4 className="text-lg font-extrabold text-[#0F2C59]">
                The Baltimore 100% Zero-Pest Promise
              </h4>
              <p className="text-sm text-slate-600 max-w-2xl">
                If pests return anytime between your scheduled treatments, our Erdman Ave dispatch unit will return and re-treat your property for free until 100% eradicated.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full lg:w-auto bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Inspection</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
