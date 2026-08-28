import { ReviewItem, FAQItem, CoverageZone } from '../types';

export const MEDIA_ASSETS = {
  heroCover: "https://i.postimg.cc/85V3xbYJ/Pest-Control-Baltimore-Solution-cover.jpg",
  storefront: "https://i.postimg.cc/R0tyPYXD/Pest-Control-Baltimore-Solution-front.jpg",
  fleetVan1: "https://i.postimg.cc/rmLb79HJ/vain.jpg",
  fleetVan2: "https://i.postimg.cc/4yy107X4/vain.jpg",
  equipment: "https://i.postimg.cc/0yFh0vdp/equipment.jpg",
  inspection1: "https://i.postimg.cc/JnPqKcCC/1.avif",
  ecoTreatments: "https://i.postimg.cc/DZBg5d3K/1.avif",
  residentialBarrier: "https://i.postimg.cc/fLBK5jQZ/3.avif",
  emergencyRodent: "https://i.postimg.cc/2yyxtbC6/pest-2.webp",
  commercialPest: "https://i.postimg.cc/MTdDtbJq/pest-image-1.jpg"
};

export const BALTIMORE_ZIPS: CoverageZone[] = [
  { zip: "21213", neighborhood: "Erdman Ave / Clifton / Belair-Edison (HQ)", avgResponseMinutes: 20, availableNow: true },
  { zip: "21224", neighborhood: "Canton / Highlandtown / Patterson Park", avgResponseMinutes: 25, availableNow: true },
  { zip: "21230", neighborhood: "Federal Hill / Locust Point / South Baltimore", avgResponseMinutes: 30, availableNow: true },
  { zip: "21211", neighborhood: "Hampden / Woodberry / Remington", avgResponseMinutes: 25, availableNow: true },
  { zip: "21201", neighborhood: "Downtown Baltimore / Mount Vernon", avgResponseMinutes: 25, availableNow: true },
  { zip: "21202", neighborhood: "Inner Harbor / Little Italy", avgResponseMinutes: 25, availableNow: true },
  { zip: "21218", neighborhood: "Charles Village / Waverly / Johns Hopkins", avgResponseMinutes: 20, availableNow: true },
  { zip: "21212", neighborhood: "Govans / Homeland / Northwood", avgResponseMinutes: 30, availableNow: true },
  { zip: "21231", neighborhood: "Fells Point / Upper Fells Point", avgResponseMinutes: 25, availableNow: true },
  { zip: "21239", neighborhood: "Loch Raven / Ramblewood / Hillen", avgResponseMinutes: 25, availableNow: true },
  { zip: "21204", neighborhood: "Towson / Riderwood", avgResponseMinutes: 35, availableNow: true },
  { zip: "21222", neighborhood: "Dundalk / Eastpoint", avgResponseMinutes: 30, availableNow: true },
  { zip: "21228", neighborhood: "Catonsville / West Baltimore", avgResponseMinutes: 40, availableNow: true }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    neighborhood: "Belair-Edison, Baltimore (Near Erdman Ave)",
    rating: 5,
    date: "August 2026",
    service: "Emergency Rodent & Rat Exclusion",
    comment: "Called their emergency hotline after hearing scratching inside our basement drywall. A service van arrived from their Erdman Ave location in less than 35 minutes. They identified where rats were slipping through an old coal chute, sealed it with steel mesh, and set up tamper-proof stations. Zero mice or rats since!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    neighborhood: "Canton, Baltimore 21224",
    rating: 5,
    date: "July 2026",
    service: "Eco-Friendly Bed Bug Thermal Treatment",
    comment: "We manage three rental apartments near Patterson Park. One tenant reported bed bugs and we needed an immediate, guaranteed solution. Pest Control Baltimore Solution brought in their thermal convection heaters and treated the entire unit in a single day. Passed the follow-up inspection with flying colors.",
    verified: true
  },
  {
    id: "rev-3",
    author: "David & Sarah Miller",
    neighborhood: "Hampden, Baltimore 21211",
    rating: 5,
    date: "August 2026",
    service: "Termite Soil Treatment & Real Estate Certification",
    comment: "We were in the middle of closing on our 1920s rowhouse and needed a rush HUD termite inspection certificate. Their certified inspector arrived the next morning, performed thermal moisture detection, and provided an official MD report within 3 hours. Outstanding service and fair pricing.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Chef Antoine Laurent",
    neighborhood: "Fells Point, Baltimore 21231",
    rating: 5,
    date: "June 2026",
    service: "Commercial Restaurant IPM & Roach Control",
    comment: "As a busy seafood bistro near the water, pest management is critical. Their team comes after closing hours with barcode scanners and hospital-grade organic products. We maintain a 100/100 health department score thanks to their weekly inspections and meticulous log books.",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "safety",
    question: "Are your pest control chemicals safe for my children and pets?",
    answer: "Yes, absolutely. We prioritize family and pet safety by exclusively applying EPA-registered, hospital-grade, and botanically derived pest solutions. Once the micro-encapsulated treatments dry (typically 30–45 minutes), there are zero harmful airborne fumes or residue risks for dogs, cats, or infants."
  },
  {
    category: "emergency",
    question: "How fast can an exterminator van arrive at my Baltimore address?",
    answer: "Our main fleet hub is strategically located at 4203 Erdman Ave, Baltimore, MD 21213. We maintain rapid-response vans on active patrol throughout Baltimore City and Baltimore County, allowing us to arrive at your door within 30 to 60 minutes for urgent emergencies."
  },
  {
    category: "process",
    question: "What is included in your Free Property Inspection?",
    answer: "Our certified Maryland pest technician performs a comprehensive 40-point interior and exterior inspection. We examine foundation gaps, crawlspaces, attic voids, plumbing penetrations, and outdoor nesting harborages, followed by a written eradication plan with transparent, upfront pricing."
  },
  {
    category: "pricing",
    question: "Do you offer warranties or free re-treatments if pests return?",
    answer: "Yes! Every standard service comes backed by our 100% Pest-Free Guarantee. If any covered pests reappear between your scheduled service intervals, our dispatch team will return and re-treat your home at zero additional charge."
  },
  {
    category: "process",
    question: "Do you provide official Termite Inspection Certificates (MD-1 / HUD) for home sales?",
    answer: "Yes. Our licensed inspectors are certified to conduct WDIR (Wood-Destroying Insect Reports) required by MD mortgage lenders, VA, FHA, and conventional real estate closings, complete with same-day digital report delivery."
  }
];

export const EQUIPMENT_SPECS = [
  {
    title: "FLIR® High-Resolution Thermal Imaging",
    description: "Detects hidden termite colonies, rodent wall nests, and moisture pockets behind drywall without causing any wall damage."
  },
  {
    title: "Ultra-Low Volume (ULV) Cold Fogging",
    description: "Dispenses microscopic botanical treatment droplets that penetrate deep into crawlspaces, attics, and hard-to-reach pest voids."
  },
  {
    title: "High-Temp Convective Thermal Heaters",
    description: "Reaches lethal 135°F–145°F temperatures for 100% eradication of bed bug adults, nymphs, and eggs in a single 6-hour cycle."
  },
  {
    title: "Sub-Slab High-Pressure Termite Injectors",
    description: "Precision-calibrated flow meters deliver non-repellent Termidor® liquid barriers deep beneath foundation slabs and footings."
  },
  {
    title: "HEPA-Filtered Rodent Biosecurity Vacuums",
    description: "Safely extracts rodent droppings, nesting insulation, and hazardous allergens with zero cross-contamination into living areas."
  },
  {
    title: "Eco-Friendly EPA Reduced-Risk Formulations",
    description: "Targeted synthetic pyrethroids and essential botanical oils engineered to target insect biology while remaining harmless to humans and domestic pets."
  }
];
