import { TravelPackage, FAQItem } from '../types/travel';

export const packagesData: Record<string, TravelPackage> = {
  'doha-zanzibar': {
    id: 'doha-zanzibar',
    title: 'Doha + Zanzibar',
    subtitle: 'Two Worlds, One Seamless Journey',
    tagline: 'From the energy of Doha to the shores of Zanzibar',
    dates: 'December 12–19, 2026',
    startDate: '2026-12-12',
    endDate: '2026-12-19',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights in Doha · 3 Nights in Zanzibar',
    pricing: {
      standardFormatted: '₦4,350,000',
      standardNumeric: 4350000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/doha-skyline.jpg',
    heroImageAlt: 'Doha modern skyline illuminated at twilight over the Arabian Gulf',
    overviewDescription: 'Experience the contrast between the architectural grandeur of Doha and the tranquil turquoise waters of the Swahili coast. Seven nights balanced between Arabian hospitality and tropical island relaxation.',
    itinerarySummary: [
      {
        location: 'Doha, Qatar',
        duration: '4 Nights',
        highlights: [
          'Doha architectural city tour',
          'National Museum of Qatar',
          'Villaggio Mall with canal gondola ride',
          'Desert safari with camel ride'
        ]
      },
      {
        location: 'Zanzibar, Tanzania',
        duration: '3 Nights',
        highlights: [
          'All-inclusive resort coastal relaxation',
          'Historic Stone Town guided tour',
          'Mnemba Island sandbank excursion',
          'Dolphin swimming and snorkelling',
          'Natural aquarium swim with turtles',
          'Kendwa Beach, Le Saint Tropez & kayaking'
        ]
      }
    ],
    inclusions: [
      {
        id: 'dz-inc-1',
        title: '5-Star Accommodation',
        category: 'accommodation',
        description: 'Five-star hotel accommodation in Doha and Zanzibar'
      },
      {
        id: 'dz-inc-2',
        title: 'Return Flights with Qatar Airways',
        category: 'flight',
        description: 'International flights operated by Qatar Airways'
      },
      {
        id: 'dz-inc-3',
        title: 'Daily Breakfast in Doha',
        category: 'accommodation',
        description: 'Daily morning breakfast throughout your Doha stay'
      },
      {
        id: 'dz-inc-4',
        title: 'All-Inclusive Resort in Zanzibar',
        category: 'accommodation',
        description: 'All-inclusive meals and refreshments at Zanzibar resort'
      },
      {
        id: 'dz-inc-5',
        title: 'Qatar Tourist Visa',
        category: 'visa',
        description: 'Qatar entry visa processing assistance'
      },
      {
        id: 'dz-inc-6',
        title: 'Tanzania Tourist Visa',
        category: 'visa',
        description: 'Tanzania visitor visa processing assistance'
      },
      {
        id: 'dz-inc-7',
        title: 'Zanzibar Travel Insurance',
        category: 'insurance',
        description: 'Mandatory Zanzibar travel coverage included'
      },
      {
        id: 'dz-inc-8',
        title: 'Professional Tour Guide',
        category: 'activity',
        description: 'Dedicated tour guide for curated excursions'
      },
      {
        id: 'dz-inc-9',
        title: 'Airport Pick-up & Drop-off',
        category: 'transfer',
        description: 'Seamless arrival and departure transfers in both destinations'
      },
      {
        id: 'dz-inc-10',
        title: 'All Scheduled Entrance Fees',
        category: 'activity',
        description: 'Entry fees included for all listed itinerary locations'
      }
    ],
    activities: [
      {
        id: 'dz-act-1',
        title: 'National Museum of Qatar',
        location: 'Doha',
        image: './assets/images/doha-museum.jpg',
        alt: 'National Museum of Qatar modern desert rose architectural interlocking discs',
        caption: 'Jean Nouvel’s iconic desert rose architecture reflecting over tranquil museum waters.',
        tag: 'Culture & Design'
      },
      {
        id: 'dz-act-2',
        title: 'Mnemba Atoll Sandbank',
        location: 'Zanzibar',
        image: './assets/images/zanzibar-mnemba.jpg',
        alt: 'Aerial view of turquoise waters surrounding Mnemba atoll sandbar in Zanzibar',
        caption: 'Pristine white sandbar surrounded by electric turquoise waters and offshore dhows.',
        tag: 'Island Exploration'
      },
      {
        id: 'dz-act-3',
        title: 'Doha Desert Safari & Camel Ride',
        location: 'Doha',
        image: './assets/images/doha-desert-safari.jpg',
        alt: 'Rolling golden desert sand dunes at sunset meeting the inland sea',
        caption: 'Dramatic sculpted dunes and sunset vistas where the desert meets the sea.',
        tag: 'Desert Excursion'
      },
      {
        id: 'dz-act-4',
        title: 'Historic Stone Town Tour',
        location: 'Zanzibar',
        image: './assets/images/zanzibar-stone-town.jpg',
        alt: 'Narrow stone alleyway in Stone Town Zanzibar with carved wooden door',
        caption: 'UNESCO World Heritage alleys, coral stone architecture, and intricate carved doorways.',
        tag: 'Heritage & Culture'
      },
      {
        id: 'dz-act-5',
        title: 'Villaggio Gondola Experience',
        location: 'Doha',
        image: './assets/images/doha-villaggio.jpg',
        alt: 'Ornate gondola boat cruising indoor Venetian canal under painted sky',
        caption: 'Venetian-inspired indoor canals with relaxing gondola waterway cruises.',
        tag: 'Urban Leisure'
      },
      {
        id: 'dz-act-6',
        title: 'Natural Aquarium Sea Turtles',
        location: 'Zanzibar',
        image: './assets/images/zanzibar-turtles.jpg',
        alt: 'Sea turtles gliding peacefully in clear sunlit turquoise water',
        caption: 'Encounter rescued green sea turtles in their protected natural coastal tidal lagoon.',
        tag: 'Marine Life'
      },
      {
        id: 'dz-act-7',
        title: 'Kendwa Beach & Clear Kayaking',
        location: 'Zanzibar',
        image: './assets/images/zanzibar-kayak.jpg',
        alt: 'Kayaker in clear transparent kayak floating over turquoise coral water',
        caption: 'Crystal-clear calm waters along Kendwa beach, ideal for coastal paddle excursions.',
        tag: 'Coastal Recreation'
      }
    ]
  },

  'doha-grand-prix': {
    id: 'doha-grand-prix',
    title: 'Doha Grand Prix Experience',
    subtitle: 'Motorsport Prestige & City Sophistication',
    tagline: 'Experience Doha beyond the ordinary',
    dates: 'November 25 – December 1, 2026',
    startDate: '2026-11-25',
    endDate: '2026-12-01',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights in Doha · 3-Day Formula 1 Race Access',
    pricing: {
      standardFormatted: '₦3,400,000',
      standardNumeric: 3400000,
      occupancyTerms: 'from ₦3,400,000 per person on double occupancy',
      options: [
        {
          occupancy: 'Double Occupancy (per person sharing)',
          priceNumeric: 3400000,
          priceFormatted: '₦3,400,000',
          note: 'Price per person sharing a 5-star double room'
        },
        {
          occupancy: 'Single Occupancy',
          priceNumeric: 4150000,
          priceFormatted: '₦4,150,000',
          note: 'Private single room occupancy in a 5-star hotel'
        }
      ]
    },
    heroImage: './assets/images/doha-f1-grand-prix.jpg',
    heroImageAlt: 'Formula 1 racing cars accelerating under brilliant floodlights on a night race circuit',
    overviewDescription: 'Combine the high-octane spectacle of a three-day Formula 1 Grand Prix weekend with the refined luxury and architectural landmarks of Qatar’s capital.',
    inclusions: [
      {
        id: 'gp-inc-1',
        title: '6 Nights at a 5-Star Hotel',
        category: 'accommodation',
        description: 'Luxury five-star hotel stay in central Doha'
      },
      {
        id: 'gp-inc-2',
        title: '3-Day Formula 1 Race Experience',
        category: 'activity',
        description: 'Admission to the three-day Formula 1 Grand Prix weekend'
      },
      {
        id: 'gp-inc-3',
        title: 'Return Flights',
        category: 'flight',
        description: 'Return international flight arrangements'
      },
      {
        id: 'gp-inc-4',
        title: 'Daily Breakfast',
        category: 'accommodation',
        description: 'Complimentary morning breakfast throughout your 6-night stay'
      },
      {
        id: 'gp-inc-5',
        title: 'Qatar Tourist Visa',
        category: 'visa',
        description: 'Entry visa processing assistance for Qatar'
      },
      {
        id: 'gp-inc-6',
        title: 'Desert Safari with Inland Sea Excursion',
        category: 'activity',
        description: 'Off-road 4x4 desert adventure to Khor Al Adaid'
      },
      {
        id: 'gp-inc-7',
        title: 'Doha City Tour',
        category: 'activity',
        description: 'Guided tour covering West Bay, Corniche, and city highlights'
      },
      {
        id: 'gp-inc-8',
        title: 'National Museum of Qatar',
        category: 'activity',
        description: 'Exploration of Jean Nouvel’s desert rose masterpiece'
      },
      {
        id: 'gp-inc-9',
        title: 'Return Airport Transfers',
        category: 'transfer',
        description: 'Private airport arrival and departure transfers from Doha airport'
      }
    ]
  }
};

export const trustHighlights = [
  {
    title: 'Accommodation & Travel Arrangements',
    description: 'Five-star hotel accommodations and verified return flights with reputable airlines, coordinated from start to finish.'
  },
  {
    title: 'Visa Assistance & Preparation',
    description: 'Direct support and document guidance for Qatar tourist visas and Tanzania/Zanzibar visitor entry requirements.'
  },
  {
    title: 'Dedicated Airport Transfers',
    description: 'Scheduled airport pick-up and drop-off in air-conditioned private vehicles upon your arrival and departure.'
  },
  {
    title: 'Curated Guided Experiences',
    description: 'Planned excursions with verified guides and pre-arranged entrance fees so your time on the ground is seamless.'
  }
];

export const bookingSteps = [
  {
    step: '01',
    title: 'Choose Your Experience',
    description: 'Select between the dual-destination Doha + Zanzibar holiday or the Doha Formula 1 Grand Prix experience.'
  },
  {
    step: '02',
    title: 'Speak with Rhordway',
    description: 'Connect directly with our travel advisory team on WhatsApp to confirm real-time room availability, travel dates, and exact booking terms.'
  },
  {
    step: '03',
    title: 'Review & Confirm',
    description: 'Review your complete itinerary summary and proceed through verified booking and payment instructions provided by Rhordway.'
  }
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in the package price?',
    answer: 'Each Rhordway package is comprehensive. For Doha + Zanzibar, the package covers 5-star accommodation, return Qatar Airways flights, daily breakfast in Doha, all-inclusive resort amenities in Zanzibar, tourist visas (Qatar & Tanzania), Zanzibar mandatory insurance, guided tours, airport transfers, and entrance fees. For the Doha Grand Prix, it covers 6 nights in a 5-star hotel, return flights, 3-day F1 race pass, daily breakfast, Qatar visa, desert safari to the inland sea, city tour, museum entry, and airport transfers.'
  },
  {
    id: 'faq-2',
    question: 'What does "per person sharing" mean?',
    answer: 'Per person sharing means the advertised price applies to one individual travelling with a companion and sharing a double or twin occupancy hotel room. If travelling solo, a single occupancy rate applies.'
  },
  {
    id: 'faq-3',
    question: 'What is the difference between single and double occupancy?',
    answer: 'For the Doha Grand Prix package, double occupancy (₦3,400,000 per person) applies when two guests share one hotel room. Single occupancy (₦4,150,000 per person) provides a private room exclusively for one guest throughout the six-night stay.'
  },
  {
    id: 'faq-4',
    question: 'Are international flights and airport transfers included?',
    answer: 'Yes. Return flights are included in both packages (featuring Qatar Airways on the Doha + Zanzibar itinerary). Scheduled airport arrival and departure transfers between the international airports and your hotels are also provided.'
  },
  {
    id: 'faq-5',
    question: 'Are entry visas included?',
    answer: 'Yes. Both packages include tourist visa processing assistance (Qatar visa for both packages, plus the Tanzania tourist visa and mandatory Zanzibar insurance for the dual-destination package). Please ensure your international passport has at least six months validity from the travel date.'
  },
  {
    id: 'faq-6',
    question: 'How do I reserve a spot?',
    answer: 'Because availability is strictly limited for both departure dates (November 25 and December 12, 2026), reservations are made by contacting the Rhordway team via WhatsApp. Our consultants will verify cabin and hotel availability and guide you through the reservation process.'
  },
  {
    id: 'faq-7',
    question: 'What are the payment and cancellation terms?',
    answer: 'Payment schedules, instalment milestones, and cancellation guidelines will be confirmed directly by the Rhordway team during your enquiry, in alignment with airline ticket ticketing rules and luxury hotel partner terms.'
  },
  {
    id: 'faq-8',
    question: 'How do I receive the full day-by-day itinerary?',
    answer: 'A comprehensive, hour-by-hour travel brief detailing flight schedules, transfer times, resort check-in, and activity meeting points will be delivered directly to you by your Rhordway travel consultant upon booking confirmation.'
  }
];
