import React from 'react';
import { X, CheckCircle2, Shield, Clock, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookNow }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#E07A5F] text-white text-[11px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-1">
              {service.warranty}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
              Treatment Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Key Capabilities &amp; Protocols Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-3 bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Typical Arrival</span>
              <span className="text-xs font-extrabold text-[#0F2C59]">{service.responseTime}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Warranty</span>
              <span className="text-xs font-extrabold text-emerald-700">{service.warranty.split(' ')[0]} Guarantee</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Base Price</span>
              <span className="text-xs font-extrabold text-[#E07A5F]">{service.startingPrice}</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookNow(service.id);
              }}
              className="flex-1 bg-[#0F2C59] hover:bg-[#0A1E3F] text-white font-extrabold py-3.5 px-4 rounded-xl text-center shadow-lg transition-transform hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Free Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex-1 bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold py-3.5 px-4 rounded-xl text-center shadow-lg text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technician: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
