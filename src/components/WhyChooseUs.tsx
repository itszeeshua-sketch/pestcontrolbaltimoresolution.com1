import React from 'react';
import { Check, X, Shield, Clock, Award, Sparkles, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            The Baltimore Quality Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight">
            How We Compare to Ordinary Exterminators
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Why hundreds of Baltimore homeowners, landlords, and commercial facilities switch to our dedicated local fleet.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-600 w-2/5">
                    Service Feature
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-500 w-1/4 text-center">
                    DIY / Store Sprays
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-500 w-1/4 text-center">
                    National Call Centers
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-black text-white bg-[#0F2C59] w-1/3 text-center rounded-t-xl shadow">
                    Pest Control Baltimore Solution
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Response Speed in Baltimore
                    <span className="block text-xs font-normal text-slate-500">Emergency dispatch from 4203 Erdman Ave</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">N/A (Self handled)</td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">2 to 5 business days</td>
                  <td className="p-4 sm:p-5 text-center font-extrabold text-[#0F2C59] bg-blue-50/60">
                    <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-xs">
                      <Clock className="w-3.5 h-3.5" /> Under 60 Mins
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Pet &amp; Child Safety Formulations
                    <span className="block text-xs font-normal text-slate-500">Hospital-grade &amp; botanically derived</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-red-500">
                    <span className="text-xs">⚠️ Toxic chemicals</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">Generic synthetic</td>
                  <td className="p-4 sm:p-5 text-center font-extrabold text-emerald-700 bg-blue-50/60">
                    <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full text-xs">
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> 100% Eco &amp; Pet Safe
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Root Infestation Elimination
                    <span className="block text-xs font-normal text-slate-500">Targets nests, queens, &amp; eggs</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-red-500">
                    <X className="w-4 h-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">Surface spray only</td>
                  <td className="p-4 sm:p-5 text-center font-extrabold text-emerald-700 bg-blue-50/60">
                    <Check className="w-5 h-5 mx-auto text-emerald-600" />
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    Structural Exclusion &amp; Sealing
                    <span className="block text-xs font-normal text-slate-500">Heavy-gauge steel mesh &amp; mastic seal</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-red-500">
                    <X className="w-4 h-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">Extra $300+ add-on</td>
                  <td className="p-4 sm:p-5 text-center font-extrabold text-emerald-700 bg-blue-50/60">
                    <span className="text-xs font-bold text-slate-800">Included In Plan</span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-800">
                    100% Money-Back Re-Treatment Guarantee
                    <span className="block text-xs font-normal text-slate-500">Free return if any pests appear</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-red-500">
                    <X className="w-4 h-4 mx-auto text-red-500" />
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-500">Limited / Void clauses</td>
                  <td className="p-4 sm:p-5 text-center font-extrabold text-emerald-700 bg-blue-50/60">
                    <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full text-xs">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" /> Full Guarantee
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
