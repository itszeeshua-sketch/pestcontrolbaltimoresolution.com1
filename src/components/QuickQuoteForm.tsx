import React, { useState } from 'react';
import { ShieldCheck, Phone, Clock, Send, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { QuoteFormData } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/servicesData';
import { BALTIMORE_ZIPS } from '../data/baltimoreData';

interface QuickQuoteFormProps {
  initialService?: string;
  onSuccessSubmit?: (data: QuoteFormData) => void;
  compact?: boolean;
}

export const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({ 
  initialService = "rodent-control", 
  onSuccessSubmit,
  compact = false 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    zipCode: '21213',
    serviceType: initialService,
    urgency: 'emergency',
    propertyType: 'residential',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detectedNeighborhood, setDetectedNeighborhood] = useState<string>('Erdman Ave / Clifton / Belair-Edison (HQ)');

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setFormData(prev => ({ ...prev, zipCode: val }));

    if (val.length === 5) {
      const match = BALTIMORE_ZIPS.find(z => z.zip === val);
      if (match) {
        setDetectedNeighborhood(match.neighborhood);
      } else if (val.startsWith('212')) {
        setDetectedNeighborhood('Baltimore Metro Area');
      } else {
        setDetectedNeighborhood('Greater Maryland Service Zone');
      }
    } else {
      setDetectedNeighborhood('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number for dispatch verification.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit(formData);
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div id="quote-success-panel" className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-500 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Dispatch Request Confirmed
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2C59] mb-2">
          Inspection Request Received!
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our on-duty Baltimore extermination coordinator has routed your request to our fleet van nearest to <strong className="text-slate-900">{formData.zipCode}</strong>.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left mb-5 space-y-2 text-xs sm:text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Service:</span>
            <span className="font-bold text-slate-800 capitalize">{SERVICES.find(s => s.id === formData.serviceType)?.title || formData.serviceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Target Area:</span>
            <span className="font-bold text-slate-800">{detectedNeighborhood || formData.zipCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Expected ETA / Callback:</span>
            <span className="font-extrabold text-[#E07A5F]">Within 15 Minutes</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            id="quote-success-call-now"
            href={BUSINESS_INFO.phoneTel}
            className="w-full bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] hover:from-[#d16a50] hover:to-[#eb3b3b] text-white font-extrabold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            Call Lead Dispatcher Directly: {BUSINESS_INFO.phoneDisplay}
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                zipCode: '21213',
                serviceType: 'rodent-control',
                urgency: 'emergency',
                propertyType: 'residential',
                notes: ''
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline"
          >
            Submit Another Property Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="quick-quote-form-container" className="bg-white/98 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900">
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-[11px] font-extrabold text-[#E07A5F] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Fast Baltimore Dispatch
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#0F2C59] tracking-tight">
            Get Immediate Quote & Inspection
          </h3>
        </div>
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[11px] text-slate-500">Response Avg</span>
          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
            <Clock className="w-3 h-3" /> &lt; 15 Mins
          </span>
        </div>
      </div>

      <form id="hero-quick-quote-form" onSubmit={handleSubmit} className="space-y-3.5">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="quote-name" className="block text-xs font-bold text-slate-700 mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              required
              placeholder="e.g. John Dorsey"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/20 text-sm outline-none transition-all font-medium"
            />
          </div>
          <div>
            <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              placeholder="(410) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/20 text-sm outline-none transition-all font-medium"
            />
          </div>
        </div>

        {/* Zip Code & Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="quote-zip" className="block text-xs font-bold text-slate-700 mb-1">
              Baltimore ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-zip"
              type="text"
              required
              maxLength={5}
              placeholder="21213"
              value={formData.zipCode}
              onChange={handleZipChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/20 text-sm outline-none transition-all font-bold text-[#0F2C59]"
            />
            {detectedNeighborhood && (
              <span className="text-[11px] text-emerald-700 font-semibold block mt-1 truncate">
                📍 {detectedNeighborhood}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="quote-service" className="block text-xs font-bold text-slate-700 mb-1">
              Pest Issue Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-service"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#0F2C59] focus:ring-2 focus:ring-[#0F2C59]/20 text-sm outline-none transition-all bg-white font-medium text-slate-800"
            >
              {SERVICES.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Urgency & Property Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Urgency Level
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, urgency: 'emergency' })}
                className={`text-xs py-2 px-2 rounded-lg font-bold border transition-all text-center ${
                  formData.urgency === 'emergency'
                    ? 'bg-red-50 border-[#FF4D4D] text-[#FF4D4D] shadow-sm'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                🚨 Emergency (Today)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, urgency: 'flexible' })}
                className={`text-xs py-2 px-2 rounded-lg font-bold border transition-all text-center ${
                  formData.urgency === 'flexible'
                    ? 'bg-blue-50 border-[#0F2C59] text-[#0F2C59] shadow-sm'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                📅 Routine / Next Day
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Property Type
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                className={`text-xs py-2 px-2 rounded-lg font-bold border transition-all text-center ${
                  formData.propertyType === 'residential'
                    ? 'bg-[#0F2C59] text-white border-[#0F2C59]'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                🏡 Home / Rowhouse
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                className={`text-xs py-2 px-2 rounded-lg font-bold border transition-all text-center ${
                  formData.propertyType === 'commercial'
                    ? 'bg-[#0F2C59] text-white border-[#0F2C59]'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                🏢 Commercial / Biz
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            id="quote-form-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#E07A5F] via-[#FF4D4D] to-[#E07A5F] hover:opacity-95 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-xl shadow-red-900/20 flex items-center justify-center gap-2 text-base transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Routing to Baltimore Fleet...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Get Free Inspection &amp; Immediate Quote</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            No Obligation • 100% Free Quote
          </span>
          <span className="text-slate-400">Privacy Protected</span>
        </div>
      </form>
    </div>
  );
};
