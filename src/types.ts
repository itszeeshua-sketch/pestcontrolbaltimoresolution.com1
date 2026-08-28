export interface ServiceItem {
  id: string;
  title: string;
  category: 'rodent' | 'termite' | 'bedbug' | 'insects' | 'commercial' | 'barrier';
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  features: string[];
  responseTime: string;
  warranty: string;
  startingPrice: string;
  recommendedFor: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  zipCode: string;
  serviceType: string;
  urgency: 'emergency' | 'today' | 'flexible';
  propertyType: 'residential' | 'commercial';
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'safety' | 'pricing' | 'emergency' | 'process';
}

export interface CoverageZone {
  zip: string;
  neighborhood: string;
  avgResponseMinutes: number;
  availableNow: boolean;
}
