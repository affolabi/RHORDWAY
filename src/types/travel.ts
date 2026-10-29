export interface PackageInclusion {
  id: string;
  title: string;
  category: 'accommodation' | 'flight' | 'visa' | 'activity' | 'transfer' | 'insurance';
  description?: string;
}

export interface DestinationActivity {
  id: string;
  title: string;
  location: 'Doha' | 'Zanzibar';
  image: string;
  alt: string;
  caption?: string;
  tag: string;
}

export interface PricingOption {
  occupancy: 'Double Occupancy (per person sharing)' | 'Single Occupancy';
  priceNumeric: number;
  priceFormatted: string;
  note: string;
}

export interface TravelPackage {
  id: 'doha-zanzibar' | 'doha-grand-prix';
  title: string;
  subtitle: string;
  tagline: string;
  dates: string;
  startDate: string;
  endDate: string;
  durationNights: number;
  durationLabel: string;
  destinationBreakdown?: string;
  pricing: {
    standardFormatted: string;
    standardNumeric: number;
    occupancyTerms: string;
    options?: PricingOption[];
  };
  heroImage: string;
  heroImageAlt: string;
  overviewDescription: string;
  itinerarySummary?: {
    location: string;
    duration: string;
    highlights: string[];
  }[];
  inclusions: PackageInclusion[];
  activities?: DestinationActivity[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  // WhatsApp phone number without spaces or symbols (e.g., '2348012345678')
  // If undefined or empty, a clear development placeholder is shown
  whatsappNumber: string;
  contactEmail?: string;
  bookingSupportHours?: string;
}
