import { ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: "Pest Control Baltimore Solution",
  tagline: "Baltimore's Most Trusted 24/7 Extermination & Pest Removal Fleet",
  address: "4203 Erdman Ave, Baltimore, MD 21213, USA",
  phone: "+1 (443) 899-4845",
  phoneDisplay: "(443) 899-4845",
  phoneTel: "tel:+14438994845",
  email: "dispatch@pestcontrolbaltimoresolution.com",
  domain: "pestcontrolbaltimoresolution.com",
  hours: "24/7 Emergency Dispatch Available 365 Days/Year",
  license: "MD Dept of Agriculture Lic #58392",
  rating: 4.9,
  reviewsCount: 284,
  guarantee: "100% Satisfaction or Free Re-Treatment Guarantee"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "rodent-control",
    title: "Emergency Rodent & Mouse Control",
    category: "rodent",
    shortDesc: "Complete elimination of Norway rats, roof rats, and mice with structural exclusion and winter/summer infestation prevention.",
    fullDesc: "Baltimore's historic brick rowhomes and commercial basements are prime targets for aggressive rodent intrusions. Our specialized rodent team combines rapid-action knockdown trapping, digital ultrasonic monitors, burrow baiting, and structural mastic exclusion sealing to keep rats and mice out for good.",
    image: "https://i.postimg.cc/2yyxtbC6/pest-2.webp",
    imageAlt: "Emergency Rodent & Ant Removal professional technician inspecting entry point in Baltimore MD",
    features: [
      "Full structural entry-point exclusion & heavy-gauge mesh sealing",
      "Sanitization and pheromone odor neutralizer",
      "Tamper-proof, child-and-pet-safe exterior bait stations",
      "Winter & summer seasonal surge prevention plans"
    ],
    responseTime: "Under 60 Minutes",
    warranty: "90-Day Money-Back Guarantee",
    startingPrice: "From $149",
    recommendedFor: "Rowhomes, single-family homes, restaurants & warehouses"
  },
  {
    id: "termite-treatments",
    title: "Termite & Wood-Destroying Insect Treatments",
    category: "termite",
    shortDesc: "Advanced subterranean termite inspections, non-invasive acoustic detection, and long-lasting liquid chemical barrier treatments.",
    fullDesc: "Protect your Baltimore property's structural foundation from costly subterranean termite damage. We utilize Termidor® non-repellent liquid soil treatments and Hex-Pro localized monitoring stations to eradicate existing colonies and provide an impenetrable perimeter defense.",
    image: "https://i.postimg.cc/JnPqKcCC/1.avif",
    imageAlt: "Termite & Bed Bug Inspection technician conducting detailed structural analysis",
    features: [
      "Official MD Real Estate HUD/VA termite inspection certifications",
      "Sub-slab pressure injection & soil barrier barriers",
      "Non-invasive moisture and acoustic detection sensors",
      "Annual warranty renewal & re-inspection program"
    ],
    responseTime: "Same-Day Priority Booking",
    warranty: "5-Year Renewable Structural Warranty",
    startingPrice: "From $249",
    recommendedFor: "Home buyers, historic wood framing & commercial facilities"
  },
  {
    id: "bed-bug-removal",
    title: "Bed Bug Thermal Heat & Precision Removal",
    category: "bedbug",
    shortDesc: "One-day whole-structure thermal remediation and precision chemical treatments targeting eggs, nymphs, and adult bed bugs.",
    fullDesc: "Bed bugs require a ruthless, scientific elimination approach. Our high-temperature convective thermal heat systems reach 140°F inside mattresses, wall voids, and baseboards, instantly destroying all lifecycle stages in a single visit without damaging your furniture.",
    image: "https://i.postimg.cc/DZBg5d3K/1.avif",
    imageAlt: "Eco-friendly Pest Treatments for complete Bed Bug and insect extermination",
    features: [
      "Single-day thermal heat treatment (no discarded furniture)",
      "Hospital-grade residual growth regulators (IGR)",
      "Pre-treatment preparation guide & post-clearance inspection",
      "Discreet, unmarked service options available upon request"
    ],
    responseTime: "Immediate Emergency Dispatch",
    warranty: "60-Day 100% Eradication Guarantee",
    startingPrice: "From $299",
    recommendedFor: "Apartments, hotels, rental properties & family residences"
  },
  {
    id: "insect-elimination",
    title: "General Household Insect Elimination",
    category: "insects",
    shortDesc: "Fast extermination of German cockroaches, carpenter ants, black widow spiders, yellow jackets, and stinging wasps.",
    fullDesc: "Don't let creeping pests compromise the sanitation and comfort of your home. We utilize targeted micro-encapsulated sprays, targeted insect baits, and botanical dusting to eliminate aggressive infestations at their nesting roots.",
    image: "https://i.postimg.cc/fLBK5jQZ/3.avif",
    imageAlt: "Residential Pest Barrier and insect control treatment application in Baltimore",
    features: [
      "Targeted German cockroach gel-baiting and crack injection",
      "Exterior wasp, hornet, and yellow jacket nest removal",
      "Eco-friendly botanical formulations safe for dogs & cats",
      "Quarterly seasonal maintenance barriers"
    ],
    responseTime: "Within 2 Hours",
    warranty: "30-Day Re-treatment Free Guarantee",
    startingPrice: "From $99",
    recommendedFor: "Kitchens, basements, attics & outdoor entertaining areas"
  },
  {
    id: "residential-barrier",
    title: "Eco-Friendly Residential Pest Barrier",
    category: "barrier",
    shortDesc: "Multi-tier perimeter defense shielding your home exterior, foundation, eaves, and landscaping from seasonal invaders.",
    fullDesc: "Our 360-degree residential perimeter defense establishes an invisible, odorless bio-barrier around your home's foundation, windows, doors, and crawlspaces. Prevents ants, crickets, spiders, millipedes, and beetles from ever breaching your indoor living space.",
    image: "https://i.postimg.cc/fLBK5jQZ/3.avif",
    imageAlt: "Residential Pest Barrier protective shield applied to Baltimore home perimeter",
    features: [
      "10-foot perimeter foundation treatment band",
      "De-webbing of exterior eaves, gutters, and light fixtures",
      "Granular moisture-resistant barrier for landscaped beds",
      "Pet-safe, botanically derived essential oil formulations"
    ],
    responseTime: "Next-Day Scheduled Service",
    warranty: "Continuous 365-Day Protection Plan",
    startingPrice: "From $79 / mo",
    recommendedFor: "Single-family homes, townhouses & waterfront properties"
  },
  {
    id: "commercial-pest-control",
    title: "Commercial & Property Management Pest Control",
    category: "commercial",
    shortDesc: "Audited IPM pest management programs for Baltimore restaurants, multi-family housing, food processing, and offices.",
    fullDesc: "Protect your business reputation, brand equity, and health inspection scores. We deliver rigorous Integrated Pest Management (IPM), barcode-scanned digital trap monitoring, electronic compliance logs, and after-hours discreet treatments designed for strict Baltimore Health Department compliance.",
    image: "https://i.postimg.cc/MTdDtbJq/pest-image-1.jpg",
    imageAlt: "Commercial Pest Elimination and facility inspection in Baltimore MD",
    features: [
      "Custom Integrated Pest Management (IPM) compliance binders",
      "Barcode digital station tracking & trend analysis reports",
      "Night & weekend stealth service hours",
      "Dedicated Baltimore account manager & priority 24/7 hotline"
    ],
    responseTime: "Rapid 45-Minute Emergency Response",
    warranty: "Zero-Infestation Health Score Guarantee",
    startingPrice: "Custom Commercial Proposal",
    recommendedFor: "Restaurants, property managers, healthcare & retail"
  }
];
