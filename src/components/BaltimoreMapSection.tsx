import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, Shield, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { BALTIMORE_ZIPS } from '../data/baltimoreData';

export const BaltimoreMapSection: React.FC = () => {
  return (
    <section id="service-area" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F2C59]/10 text-[#0F2C59] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
            Local Headquarters &amp; Service Radius
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2C59] tracking-tight">
            Serving All of Baltimore City &amp; County
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Centrally anchored at <strong className="text-slate-900 font-semibold">4203 Erdman Ave, Baltimore, MD 21213</strong>, providing rapid same-day exterminator deployment.
          </p>
        </div>

        {/* NAP & Interactive Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: NAP & Business Details */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[11px] font-extrabold text-[#E07A5F] uppercase tracking-wider block mb-1">
                Official Business Profile (NAP)
              </span>
              <h3 className="text-2xl font-black text-[#0F2C59]">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Licensed Maryland Department of Agriculture Pest Operator #{BUSINESS_INFO.license}
              </p>
            </div>

            {/* Address & Contact Items */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0F2C59] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                  <MapPin className="w-5 h-5 text-[#E07A5F]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Headquarters &amp; Dispatch</span>
                  <p className="text-sm font-bold text-slate-900">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=4203+Erdman+Ave,+Baltimore,+MD+21213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#E07A5F] hover:underline font-bold mt-0.5"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF4D4D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">24/7 Phone &amp; Emergency Dispatch</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-base font-black text-[#FF4D4D] hover:underline block"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-slate-500">Live human dispatcher 24 hours a day</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200">
                  <Clock className="w-5 h-5 text-[#0F2C59]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Hours of Operation</span>
                  <p className="text-xs font-bold text-slate-800">
                    Monday – Sunday: Open 24 Hours
                  </p>
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    ✓ Emergency holidays &amp; weekend service
                  </span>
                </div>
              </div>
            </div>

            {/* Baltimore Coverage ZIP badges */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block mb-2">
                Primary Baltimore Coverage ZIP Codes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BALTIMORE_ZIPS.map((item) => (
                  <span
                    key={item.zip}
                    className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {item.zip}
                  </span>
                ))}
              </div>
            </div>

            {/* Immediate Call Button */}
            <a
              id="nap-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="w-full bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold py-3.5 px-4 rounded-xl text-center shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Inspection: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

          </div>

          {/* Right Column: Google Maps Embed & Interactive Radius */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
                  Live Dispatch Map • 4203 Erdman Ave, Baltimore MD 21213
                </span>
              </div>
              <span className="text-xs text-[#E07A5F] font-bold">Fastest Dispatch: Citywide</span>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative flex-1 min-h-[380px] bg-slate-100">
              <iframe
                title="Pest Control Baltimore Solution Location Map"
                src="https://maps.google.com/maps?q=4203+Erdman+Ave,+Baltimore,+MD+21213&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Neighborhood quick list footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-slate-800">
                🚀 Average Rapid Response: 20–45 Mins across Belair-Edison, Canton, Federal Hill, Hampden, Fells Point, Towson &amp; Dundalk.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
