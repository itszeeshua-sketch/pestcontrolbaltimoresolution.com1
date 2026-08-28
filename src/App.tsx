import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustFleetSection } from './components/TrustFleetSection';
import { ServicesGrid } from './components/ServicesGrid';
import { EquipmentSection } from './components/EquipmentSection';
import { PestCostCalculator } from './components/PestCostCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { BaltimoreMapSection } from './components/BaltimoreMapSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string>('rodent-control');

  const handleOpenQuote = (serviceId?: string) => {
    if (serviceId) {
      setQuoteServiceId(serviceId);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#E07A5F] selection:text-white">
      {/* Header with Navigation and Emergency Dispatch Strip */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section B: Hero with Background Cover & Dual CTA Form */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Section C: Local Trust & Fleet Section (Storefront & Vans) */}
        <TrustFleetSection />

        {/* Section D: Core Services Grid with Assigned Image Assets */}
        <ServicesGrid 
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuote={handleOpenQuote}
        />

        {/* Section E: Advanced Equipment & Safe Solutions */}
        <EquipmentSection />

        {/* Interactive Cost Estimator & Quote Calculator */}
        <PestCostCalculator onOpenBooking={handleOpenQuote} />

        {/* Why Choose Us & Comparison Matrix */}
        <WhyChooseUs />

        {/* Verified Baltimore Local Reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Section F: Local SEO, Map & NAP Footer Section */}
        <BaltimoreMapSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Mobile Sticky 1-Tap CTA Bar */}
      <MobileStickyCallBar onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={handleOpenQuote}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        initialService={quoteServiceId}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
