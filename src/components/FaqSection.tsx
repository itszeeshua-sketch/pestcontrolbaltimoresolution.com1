import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/baltimoreData';
import { BUSINESS_INFO } from '../data/servicesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F2C59] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to know about our Baltimore extermination process, chemical safety, and warranties.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0F2C59] bg-slate-50/60 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F2C59]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0F2C59] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have More Questions Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0F2C59] to-[#0A1E3F] rounded-2xl p-6 sm:p-8 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-extrabold text-white">Have a specific pest question for our lead tech?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Call our Erdman Ave desk directly for free professional advice.</p>
          </div>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] hover:opacity-95 text-white font-extrabold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow-lg whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
