import React from 'react';
import { Shield, Phone, MapPin, Mail, Clock, CheckCircle2, ChevronRight, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/servicesData';
import { BALTIMORE_ZIPS } from '../data/baltimoreData';

interface FooterProps {
  onOpenQuote: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="main-footer" className="bg-[#07152B] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Identity & NAP */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E07A5F] to-[#FF4D4D] flex items-center justify-center text-white shadow-lg">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                Pest Control Baltimore Solution
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Baltimore's premier emergency exterminator and pest management fleet. Delivering safe, eco-friendly, and 100% guaranteed elimination of rodents, bed bugs, termites, and pests across Baltimore City and County.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E07A5F] flex-shrink-0 mt-0.5" />
                <span>4203 Erdman Ave, Baltimore, MD 21213, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF4D4D] flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="text-white font-bold hover:underline">
                  {BUSINESS_INFO.phoneDisplay} (24/7 Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Open 24/7 • Same-Day Rapid Dispatch</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] bg-slate-800/80 text-slate-300 px-3 py-1 rounded-md border border-slate-700 font-mono">
                MD License: #58392 • EPA Compliant
              </span>
            </div>
          </div>

          {/* Col 2: Core Extermination Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Extermination Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onOpenQuote(s.id)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#E07A5F]" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Baltimore Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Baltimore Neighborhoods
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Belair-Edison / Erdman Ave Corridor (21213)</li>
              <li>• Canton &amp; Patterson Park (21224)</li>
              <li>• Federal Hill &amp; Locust Point (21230)</li>
              <li>• Hampden &amp; Woodberry (21211)</li>
              <li>• Downtown Baltimore &amp; Mount Vernon (21201)</li>
              <li>• Fells Point &amp; Little Italy (21231)</li>
              <li>• Charles Village &amp; Waverly (21218)</li>
              <li>• Towson, Dundalk &amp; Catonsville</li>
            </ul>
          </div>

          {/* Col 4: Quick Emergency Call Action */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Emergency Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an urgent rat, bed bug, or pest issue? Speak to our live Baltimore technician right now.
            </p>
            <a
              id="footer-emergency-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="w-full bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-black text-xs py-3 px-3 rounded-xl shadow-lg flex items-center justify-center gap-1.5 text-center transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 px-3 rounded-xl border border-white/20 text-center"
            >
              Free Inspection Request
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Pest Control Baltimore Solution. All rights reserved. 4203 Erdman Ave, Baltimore, MD 21213.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300">Local SEO Schema Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
