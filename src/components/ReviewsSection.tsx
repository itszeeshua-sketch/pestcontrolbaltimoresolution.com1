import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, MapPin } from 'lucide-react';
import { REVIEWS } from '../data/baltimoreData';
import { BUSINESS_INFO } from '../data/servicesData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Local Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2C59] tracking-tight">
            What Baltimore Neighbors Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Trusted by more than 280+ residential homeowners, rowhouse landlords, and commercial facilities across Baltimore City.
          </p>

          {/* Rating Summary Pill */}
          <div className="mt-6 inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-md border border-slate-200">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left border-l border-slate-200 pl-4">
              <span className="text-lg font-extrabold text-[#0F2C59] block leading-none">4.9 / 5.0 Rating</span>
              <span className="text-xs text-slate-500 font-medium">Based on 284+ Google &amp; Local Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-slate-200 flex flex-col justify-between transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">{rev.date}</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-[#0F2C59]">{rev.author}</span>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-0.5 text-emerald-600 text-[10px] font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded">
                        <CheckCircle className="w-3 h-3" /> Verified Baltimore Resident
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E07A5F]" />
                    <span>{rev.neighborhood}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Service</span>
                  <span className="text-xs font-bold text-[#0F2C59]">{rev.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
