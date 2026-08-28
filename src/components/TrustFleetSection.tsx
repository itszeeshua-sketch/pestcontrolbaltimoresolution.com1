import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, Truck, Users, Sparkles, Building2, Phone } from 'lucide-react';
import { MEDIA_ASSETS, BALTIMORE_ZIPS } from '../data/baltimoreData';
import { BUSINESS_INFO } from '../data/servicesData';

export const TrustFleetSection: React.FC = () => {
  const [selectedZip, setSelectedZip] = useState('21213');
  const [zipInput, setZipInput] = useState('');
  const [searchedZone, setSearchedZone] = useState<typeof BALTIMORE_ZIPS[0] | null>(BALTIMORE_ZIPS[0]);

  const handleZipSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim().slice(0, 5);
    const found = BALTIMORE_ZIPS.find(z => z.zip === cleanZip);
    if (found) {
      setSearchedZone(found);
      setSelectedZip(found.zip);
    } else if (cleanZip.length === 5) {
      setSearchedZone({
        zip: cleanZip,
        neighborhood: "Baltimore Metropolitan Service Radius",
        avgResponseMinutes: 40,
        availableNow: true
      });
      setSelectedZip(cleanZip);
    }
  };

  return (
    <section id="trust-fleet" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F2C59]/10 text-[#0F2C59] px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#E07A5F]" />
            Local Headquarters &amp; Rapid Mobile Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2C59] tracking-tight">
            Why Baltimore Trusts Pest Control Baltimore Solution
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Rooted at <strong className="text-slate-900 font-semibold">4203 Erdman Ave, Baltimore, MD 21213</strong>, our certified exterminators and fully equipped service vans are strategically staged for rapid dispatch across every Baltimore neighborhood.
          </p>
        </div>

        {/* Media Grid: Storefront + Fleet Vans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Storefront Card */}
          <div className="lg:col-span-6 flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src={MEDIA_ASSETS.storefront}
                alt="Pest Control Baltimore Solution front office building local trust at 4203 Erdman Ave Baltimore MD"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-[#0F2C59] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-1.5">
                  Official Baltimore HQ &amp; Dispatch Terminal
                </span>
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E07A5F]" />
                  4203 Erdman Ave, Baltimore, MD 21213
                </h3>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Our central Erdman Ave location places our exterminators within minutes of Interstate 895, Belair Road, and Harford Road corridors. Unlike out-of-state brokers, we are true Baltimore locals who understand the specific structural challenges of historic brick rowhouses, damp stone basements, and commercial harbor properties.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Licensed MD Ag #58392</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>EPA Certified Technicians</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct Local Dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero Sub-Contractors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Vans Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Van 1 Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col sm:flex-row group">
              <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden bg-slate-900">
                <img
                  src={MEDIA_ASSETS.fleetVan1}
                  alt="Company service vehicle ready for residential and commercial pest dispatch in Baltimore"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#E07A5F] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                  Fleet Van #04 Ready
                </div>
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-[#0F2C59] mb-1">
                    Emergency Extermination Units
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Equipped with whole-home thermal heaters, ULV fogging units, tamper-resistant rat bait stations, and pet-safe botanical sprayers.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Average City Arrival: 25-45 Mins</span>
                </div>
              </div>
            </div>

            {/* Van 2 Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col sm:flex-row group">
              <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden bg-slate-900">
                <img
                  src={MEDIA_ASSETS.fleetVan2}
                  alt="Fleet ready for dispatch across Baltimore City and County ZIP codes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0F2C59] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                  Fleet Van #08 Ready
                </div>
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-[#0F2C59] mb-1">
                    Termite &amp; Commercial Rig
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Outfitted for high-pressure sub-slab soil barriers, FLIR thermal moisture scans, and commercial restaurant IPM compliance protocols.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#0F2C59] flex items-center gap-1.5 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F2C59]" />
                  <span>100% Guaranteed Eradication</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Live Baltimore ZIP Code Dispatch Checker */}
        <div id="zip-dispatch-checker" className="bg-gradient-to-br from-[#0F2C59] to-[#0A1E3F] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Active Baltimore Fleet Tracker
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Check Live Dispatch Times in Your ZIP Code
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Select or type your 5-digit Baltimore ZIP code to view current fleet availability and estimated exterminator arrival times.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15">
              <form onSubmit={handleZipSearch} className="flex flex-col sm:flex-row gap-2 mb-4">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="Enter 5-digit ZIP (e.g. 21224)"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 text-sm font-bold outline-none focus:ring-2 focus:ring-[#E07A5F]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#E07A5F] to-[#FF4D4D] text-white font-extrabold px-5 py-2.5 rounded-lg text-sm shadow hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  Check Response Time
                </button>
              </form>

              {/* Quick ZIP Chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[11px] text-slate-300 mr-1 self-center">Popular Hubs:</span>
                {BALTIMORE_ZIPS.slice(0, 6).map((item) => (
                  <button
                    key={item.zip}
                    type="button"
                    onClick={() => {
                      setSelectedZip(item.zip);
                      setSearchedZone(item);
                    }}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all ${
                      selectedZip === item.zip
                        ? 'bg-[#E07A5F] text-white shadow'
                        : 'bg-white/15 text-slate-200 hover:bg-white/25'
                    }`}
                  >
                    {item.zip} ({item.neighborhood.split('/')[0].trim()})
                  </button>
                ))}
              </div>

              {/* Status Result Display */}
              {searchedZone && (
                <div className="bg-white/95 rounded-lg p-4 text-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#0F2C59] text-base">{searchedZone.neighborhood}</span>
                      <span className="bg-slate-200 text-slate-800 text-xs px-2 py-0.5 rounded font-bold">{searchedZone.zip}</span>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Vans in immediate vicinity • Dispatched from 4203 Erdman Ave
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Estimated Arrival</span>
                      <span className="text-lg font-black text-[#E07A5F]">{searchedZone.avgResponseMinutes} Mins</span>
                    </div>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white text-xs font-extrabold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF4D4D]" />
                      Dispatch Van
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
