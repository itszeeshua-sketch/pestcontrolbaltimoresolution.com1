import React, { useState } from 'react';
import { Calculator, Phone, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface PestCostCalculatorProps {
  onOpenBooking: (serviceName: string) => void;
}

export const PestCostCalculator: React.FC<PestCostCalculatorProps> = ({ onOpenBooking }) => {
  const [pestType, setPestType] = useState<'rodent' | 'termite' | 'bedbug' | 'insects' | 'commercial'>('rodent');
  const [propertySize, setPropertySize] = useState<'small' | 'medium' | 'large' | 'commercial'>('small');
  const [severity, setSeverity] = useState<'mild' | 'moderate' | 'severe'>('moderate');
  const [isEmergency, setIsEmergency] = useState(true);

  // Calculate pricing estimates
  const basePrices: Record<string, number> = {
    rodent: 149,
    termite: 249,
    bedbug: 299,
    insects: 99,
    commercial: 299
  };

  const sizeMultipliers: Record<string, number> = {
    small: 1.0,
    medium: 1.35,
    large: 1.7,
    commercial: 2.2
  };

  const severityMultipliers: Record<string, number> = {
    mild: 1.0,
    moderate: 1.25,
    severe: 1.55
  };

  const estimatedBase = Math.round(
    basePrices[pestType] * sizeMultipliers[propertySize] * severityMultipliers[severity]
  );
  const estimatedLow = estimatedBase;
  const estimatedHigh = Math.round(estimatedBase * 1.35);

  const getPestName = () => {
    switch (pestType) {
      case 'rodent': return 'Emergency Rodent & Rat Control';
      case 'termite': return 'Termite Inspection & Soil Treatment';
      case 'bedbug': return 'Bed Bug Thermal Heat Remediation';
      case 'insects': return 'Cockroach & Insect Eradication';
      case 'commercial': return 'Commercial Facility IPM Program';
    }
  };

  return (
    <section id="quote-calculator" className="py-16 sm:py-24 bg-slate-100/80 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0F2C59]/10 text-[#0F2C59] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#E07A5F]" />
            Transparent Baltimore Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight">
            Instant Pest Control Cost Estimator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            No surprise hidden fees. Calculate your customized upfront estimate based on your Baltimore property size and pest issue.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pest Type */}
              <div>
                <label className="block text-xs font-extrabold text-[#0F2C59] uppercase tracking-wider mb-2">
                  1. Select Pest Issue
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'rodent', label: '🐀 Rats / Mice' },
                    { id: 'termite', label: '🪵 Termites' },
                    { id: 'bedbug', label: '🛏️ Bed Bugs' },
                    { id: 'insects', label: '🪲 Roaches / Ants' },
                    { id: 'commercial', label: '🏢 Commercial' }
                  ].map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPestType(p.id as any)}
                      className={`text-xs font-bold py-2.5 px-3 rounded-xl border transition-all text-left cursor-pointer ${
                        pestType === p.id
                          ? 'bg-[#0F2C59] text-white border-[#0F2C59] shadow'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Size */}
              <div>
                <label className="block text-xs font-extrabold text-[#0F2C59] uppercase tracking-wider mb-2">
                  2. Property Square Footage
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'small', label: 'Rowhome (< 1,500 sq ft)' },
                    { id: 'medium', label: 'Single Family (1,500 - 3,000 sq ft)' },
                    { id: 'large', label: 'Large Estate (> 3,000 sq ft)' },
                    { id: 'commercial', label: 'Commercial Facility' }
                  ].map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id as any)}
                      className={`text-xs font-bold py-2.5 px-3 rounded-xl border transition-all text-left cursor-pointer ${
                        propertySize === s.id
                          ? 'bg-[#0F2C59] text-white border-[#0F2C59] shadow'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Infestation Severity */}
              <div>
                <label className="block text-xs font-extrabold text-[#0F2C59] uppercase tracking-wider mb-2">
                  3. Infestation Severity Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mild', label: 'Mild / Suspected', desc: 'Early sightings' },
                    { id: 'moderate', label: 'Moderate', desc: 'Active nests / signs' },
                    { id: 'severe', label: 'Severe', desc: 'Heavy infestation' }
                  ].map(sev => (
                    <button
                      key={sev.id}
                      type="button"
                      onClick={() => setSeverity(sev.id as any)}
                      className={`text-xs font-bold py-2.5 px-2.5 rounded-xl border transition-all text-center cursor-pointer ${
                        severity === sev.id
                          ? 'bg-[#E07A5F] text-white border-[#E07A5F] shadow'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block font-bold">{sev.label}</span>
                      <span className={`text-[10px] block opacity-80 ${severity === sev.id ? 'text-white' : 'text-slate-500'}`}>
                        {sev.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2C59] to-[#0A1E3F] text-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span>Estimated Total Cost</span>
                  <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded text-[11px]">
                    100% Guaranteed
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span>${estimatedLow} – ${estimatedHigh}</span>
                  <span className="text-xs font-normal text-slate-300">avg.</span>
                </div>

                <p className="text-xs text-slate-300 mt-2">
                  *Includes full on-site 40-point inspection, structural entry sealing, EPA-registered treatments, and follow-up clearance guarantee.
                </p>
              </div>

              {/* Feature Inclusions */}
              <div className="bg-white/10 rounded-xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free Initial Structural Inspection</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hospital-Grade, Pet-Safe Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dispatched from 4203 Erdman Ave</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  id="calc-lock-in-quote-btn"
                  onClick={() => onOpenBooking(getPestName())}
                  className="w-full bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] hover:opacity-95 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Lock In Quote &amp; Book Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full bg-white/15 hover:bg-white/20 text-white font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF4D4D]" />
                  <span>Call to Verify Estimate: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
