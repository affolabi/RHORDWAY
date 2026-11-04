(function() {
  'use strict';

  /* --- siteConfig.js --- */
/**
 * RHORDWAY OFFICIAL COMPANY WEBSITE CONFIGURATION
 *
 * Central configuration file for brand settings, official contact lines,
 * and WhatsApp consultation routing based on Rhordway brand assets.
 */

const siteConfig = {
  brandName: 'Rhordway',
  brandWordmark: 'Rhordway™',
  brandTagline: 'We Make Travel Processing Simple And Stress-Free.',
  brandSubTagline: 'Explore the world, one breathtaking destination at a time.',

  /**
   * Official Brand Contact Information from verified Figma brand boards:
   */
  whatsappNumber: '2348164206030', // Primary WhatsApp line (+234 816 420 6030)
  primaryPhoneFormatted: '+234 816 420 6030',
  alternatePhone: '+234 901 339 7830',
  alternatePhoneClean: '2349013397830',
  contactEmail: 'Rhordway@gmail.com',
  instagram: '@Rhordway',

  colors: {
    primaryBlue: '#0080E8',
    primaryBlueHover: '#0068C2',
    jetBlack: '#0F1115',
    pureWhite: '#FFFFFF',
    softAlabaster: '#FAFAFA'
  },

  legal: {
    copyrightYear: 2026,
    disclaimer:
      'Rhordway provides professional visa advisory, student admission processing, global migration guidance, passport assistance, flight ticketing, airport & hotel transfers, and travel insurance.'
  }
};


  /* --- packagesData.js --- */
const packagesData = {
  'doha-zanzibar': {
    id: 'doha-zanzibar',
    edition: 'ISSUE 01 · DUAL ESCAPE',
    category: 'flagship',
    title: 'Doha + Zanzibar',
    subtitle: 'Two Worlds, One Seamless Journey',
    tagline: 'From the modern skyline of Doha to the turquoise shores of Zanzibar',
    dates: 'December 12–19, 2026',
    startDate: '2026-12-12',
    endDate: '2026-12-19',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights in Doha · 3 Nights in Zanzibar',
    transferBasis: 'All Tours & Airport Transfers Included',
    pricing: {
      standardFormatted: '₦4,350,000',
      standardNumeric: 4350000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/zanzibar-beach.jpg',
    secondaryImage: './assets/images/doha-skyline.jpg',
    heroImageAlt: 'Zanzibar white sand beach and turquoise Indian Ocean',
    overviewDescription: 'Experience the contrast between the architectural grandeur of Doha and the tranquil turquoise waters of the Swahili coast. Seven nights balanced between Arabian hospitality and all-inclusive tropical island relaxation.',
    magazineHighlights: [
      'Return Flights with Qatar Airways',
      '5-Star Hotel in Doha (Breakfast) & All-Inclusive Zanzibar Resort',
      'Qatar & Tanzania Visas + Zanzibar Insurance',
      'Doha City Tour, National Museum & Villaggio Gondola',
      'Desert Safari with Camel Ride in Doha',
      'Mnemba Island Dolphins, Snorkeling & Turtles Aquarium',
      'Stone Town Tour, Le Saint Tropez, Kendwa Beach & Kayaking',
      'Return Airport Pick-up, Drop-off, Tour Guide & Entrance Fees'
    ],
    inclusions: [
      { id: 'dz-inc-1', title: '5-Star Accommodation (Doha & Zanzibar)', category: 'accommodation', description: 'Five-star hotel stay in Doha (with breakfast) and all-inclusive resort in Zanzibar' },
      { id: 'dz-inc-2', title: 'Return Flights with Qatar Airways', category: 'flight', description: 'International return flights operated by Qatar Airways' },
      { id: 'dz-inc-3', title: 'Qatar & Tanzania Visas + Insurance', category: 'visa', description: 'Qatar tourist visa, Tanzania visa, and mandatory Zanzibar travel insurance' },
      { id: 'dz-inc-4', title: 'Doha Tours & Desert Safari', category: 'activity', description: 'Doha city tour, National Museum of Qatar, Villaggio Gondola ride, and Desert Safari with camel ride' },
      { id: 'dz-inc-5', title: 'Zanzibar Marine & Island Excursions', category: 'activity', description: 'Mnemba Island dolphin swim & snorkeling, Stone Town tour, Natural Aquarium swim with turtles' },
      { id: 'dz-inc-6', title: 'Kendwa Beach, Le Saint Tropez & Kayaking', category: 'activity', description: 'Beach leisure, kayaking, professional tour guide, and all entrance fees' },
      { id: 'dz-inc-7', title: 'Airport Pick-up & Drop-off Transfers', category: 'transfer', description: 'Seamless arrival and departure airport transfers in both destinations' }
    ]
  },

  'zanzibar-nairobi': {
    id: 'zanzibar-nairobi',
    edition: 'ISSUE 02 · ISLAND & SAFARI',
    category: 'flagship',
    title: 'Zanzibar + Nairobi',
    subtitle: 'Swahili Turquoise Shores & Kenyan Wildlife Safari',
    tagline: '5-Star JAZ Elite Aurora All-Inclusive & Private Nairobi Adventure',
    dates: '2026 Curated Departures (6 Nights)',
    startDate: '2026-11-15',
    endDate: '2026-11-21',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '3 Nights in Zanzibar · 3 Nights in Nairobi',
    transferBasis: 'All Tours, Transfers & Airport Transfers on Private (PVT) Basis',
    pricing: {
      standardFormatted: '₦3,850,000',
      standardNumeric: 3850000,
      occupancyTerms: 'per person sharing (PVT Basis)',
      options: [
        {
          occupancy: 'Double Occupancy (per person sharing · PVT Basis)',
          priceNumeric: 3850000,
          priceFormatted: '₦3,850,000',
          note: 'Includes 5★ JAZ Elite Aurora All-Inclusive & 3N Nairobi PVT Safari'
        }
      ]
    },
    heroImage: './assets/images/nairobi-safari.jpg',
    secondaryImage: './assets/images/zanzibar-mnemba.jpg',
    heroImageAlt: 'Rothschild giraffes in Nairobi National Park with city skyline at golden hour',
    overviewDescription: 'Three all-inclusive nights at the 5-star JAZ Elite Aurora in Zanzibar paired with three adventure-filled nights in Nairobi—featuring private game drives, giraffe encounters, and Sironka Valley thrills.',
    magazineHighlights: [
      'Return Flight Tickets + Tanzania Visa & Zanzibar/Kenya Insurance',
      '3N Zanzibar: 5-Star JAZ Elite Aurora Hotel (All-Inclusive)',
      'Mnemba Island Dolphins & Snorkeling + Aquarium Turtles Swim',
      'Stone Town Tour, Le Saint Tropez, Kendwa Beach & Kayaking',
      '3N Nairobi Accommodation with Daily Breakfast',
      'Nairobi City Tour, National Museum & Museum of Illusion',
      'Nairobi National Park Game Drive, Sheldrick Elephant Orphanage & Giraffe Centre',
      'Day Tour to Sironka Valley (Zip-Lining & Go-Kart or Sky Biking) · All PVT Basis'
    ],
    inclusions: [
      { id: 'zn-inc-1', title: 'Return Flight Tickets', category: 'flight', description: 'International and regional return flight tickets included' },
      { id: 'zn-inc-2', title: '3 Nights Zanzibar: 5★ JAZ Elite Aurora (All-Inclusive)', category: 'accommodation', description: 'Five-star all-inclusive accommodation at JAZ Elite Aurora in Zanzibar' },
      { id: 'zn-inc-3', title: '3 Nights Nairobi Accommodation with Breakfast', category: 'accommodation', description: 'Three nights luxury hotel stay in Nairobi inclusive of daily breakfast' },
      { id: 'zn-inc-4', title: 'Tanzania Visa, Zanzibar Insurance & Kenya Insurance', category: 'visa', description: 'Complete visa processing and mandatory travel insurance for both countries' },
      { id: 'zn-inc-5', title: 'Zanzibar Activities & Entrance Fees', category: 'activity', description: 'Mnemba Island dolphin swim & snorkeling, Stone Town tour, Aquarium swim with turtles, Le Saint Tropez, Kendwa Beach, kayaking & tour guide' },
      { id: 'zn-inc-6', title: 'Nairobi City Tour & Museums', category: 'activity', description: 'Guided Nairobi City Tour with visits to the National Museum and Museum of Illusion' },
      { id: 'zn-inc-7', title: 'Nairobi National Park, Elephant Orphanage & Giraffe Centre', category: 'activity', description: 'Private game drive in Nairobi National Park, Sheldrick Elephant Orphanage & Giraffe Centre' },
      { id: 'zn-inc-8', title: 'Sironka Valley Day Tour (Zip-Lining & Go-Kart / Sky Biking)', category: 'activity', description: 'Full day excursion to Sironka Valley inclusive of Zip-lining and Go-Kart or Sky Biking' },
      { id: 'zn-inc-9', title: '100% Private (PVT) Tours & Airport Transfers', category: 'transfer', description: 'All tours, ground transfers, and airport pick-up/drop-off on exclusive Private (PVT) basis' }
    ]
  },

  'doha-nairobi': {
    id: 'doha-nairobi',
    edition: 'ISSUE 03 · ARABIA & EAST AFRICA',
    category: 'flagship',
    title: 'Doha + Nairobi',
    subtitle: 'Arabian Gulf Splendour & Kenyan Wildlife Odyssey',
    tagline: 'Minimum of 2 People · All Tours & Transfers on Private (PVT) Basis',
    dates: '2026 Curated Departures (7 Nights)',
    startDate: '2026-11-20',
    endDate: '2026-11-27',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights in Doha · 3 Nights in Nairobi',
    transferBasis: 'All Tours & Airport Transfers on Private (PVT) Basis · Min. 2 Guests',
    pricing: {
      standardFormatted: '₦3,600,000',
      standardNumeric: 3600000,
      occupancyTerms: 'per person sharing (Min. 2 people)',
      options: [
        {
          occupancy: 'Double Occupancy (per person sharing · Min. 2 People)',
          priceNumeric: 3600000,
          priceFormatted: '₦3,600,000',
          note: '4 Nights in Doha + 3 Nights in Nairobi on Private (PVT) Basis'
        }
      ]
    },
    heroImage: './assets/images/doha-museum.jpg',
    secondaryImage: './assets/images/nairobi-safari.jpg',
    heroImageAlt: 'National Museum of Qatar and Doha skyline',
    overviewDescription: 'Four nights discovering the architectural wonders and desert dunes of Doha followed by three thrilling nights in Nairobi with private wildlife game drives, cultural museums, and Sironka Valley adventure.',
    magazineHighlights: [
      '4 Nights in Doha + 3 Nights in Nairobi with Daily Breakfast',
      'Qatar Visa + Kenya Travel Insurance Included',
      'Doha City Tour & National Museum of Qatar',
      'Villaggio Mall with Indoor Canal Gondola Ride',
      'Doha Desert Safari with Camel Ride',
      'Nairobi City Tour, National Museum & Museum of Illusion',
      'Nairobi National Park Game Drive, Sheldrick Elephant Orphanage & Giraffe Centre',
      'Sironka Valley Day Tour (Zip-Lining & Go-Kart / Sky Biking) · All PVT Transfers'
    ],
    inclusions: [
      { id: 'dn-inc-1', title: '4 Nights in Doha + 3 Nights in Nairobi (Daily Breakfast)', category: 'accommodation', description: 'Luxury hotel accommodations in Doha and Nairobi with daily morning breakfast' },
      { id: 'dn-inc-2', title: 'Qatar Tourist Visa & Kenya Insurance', category: 'visa', description: 'Qatar entry visa processing and comprehensive Kenya travel insurance' },
      { id: 'dn-inc-3', title: 'Doha City Tour, National Museum & Villaggio Gondola', category: 'activity', description: 'Guided Doha city tour, National Museum of Qatar entry, and Villaggio Mall gondola ride' },
      { id: 'dn-inc-4', title: 'Doha Desert Safari with Camel Ride', category: 'activity', description: 'Dune safari adventure in Doha complete with traditional camel ride' },
      { id: 'dn-inc-5', title: 'Nairobi City Tour, National Museum & Museum of Illusion', category: 'activity', description: 'Curated Nairobi city tour visiting the National Museum and Museum of Illusion' },
      { id: 'dn-inc-6', title: 'Nairobi National Park, Sheldrick Elephants & Giraffe Centre', category: 'activity', description: 'Private safari game drive, Sheldrick Elephant Orphanage, and Giraffe Centre visit' },
      { id: 'dn-inc-7', title: 'Sironka Valley Adventure (Zip-Lining & Go-Kart / Sky Biking)', category: 'activity', description: 'Day excursion to Sironka Valley inclusive of Zip-lining and Go-Kart or Sky Biking' },
      { id: 'dn-inc-8', title: 'All Tours & Airport Transfers on Private (PVT) Basis', category: 'transfer', description: 'Return airport transfers in Doha and Nairobi plus all ground tours on Private (PVT) basis' }
    ]
  },

  'doha-grand-prix': {
    id: 'doha-grand-prix',
    edition: 'ISSUE 04 · FORMULA 1 MOTORSPORT',
    category: 'flagship',
    title: 'Doha Grand Prix Experience',
    subtitle: 'Motorsport Prestige & City Sophistication',
    tagline: 'Experience Doha under the Lusail floodlights',
    dates: 'November 25 – December 1, 2026',
    startDate: '2026-11-25',
    endDate: '2026-12-01',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights in Doha · 3-Day Formula 1 Race Access',
    transferBasis: 'Private Airport Transfers & Guided Excursions',
    pricing: {
      standardFormatted: '₦3,400,000',
      standardNumeric: 3400000,
      occupancyTerms: 'from ₦3,400,000 per person (Double) / ₦4,150,000 (Single)',
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
    secondaryImage: './assets/images/doha-desert-safari.jpg',
    heroImageAlt: 'Formula 1 racing cars accelerating under floodlights in Doha',
    overviewDescription: 'Combine the high-octane spectacle of a three-day Formula 1 Grand Prix weekend with the refined luxury and architectural landmarks of Qatar’s capital.',
    magazineHighlights: [
      '6 Nights at a 5-Star Hotel in Central Doha with Daily Breakfast',
      'Official 3-Day Formula 1 Grand Prix Race Weekend Experience',
      'Return International Flights & Qatar Tourist Visa',
      'Desert Safari with Inland Sea (Khor Al Adaid) 4x4 Excursion',
      'Guided Doha City Tour & West Bay Corniche',
      'National Museum of Qatar Entry & Exploration',
      'Return Private Airport Transfers in Doha'
    ],
    inclusions: [
      { id: 'gp-inc-1', title: '6 Nights at a 5-Star Hotel', category: 'accommodation', description: 'Luxury five-star hotel stay in central Doha with daily breakfast' },
      { id: 'gp-inc-2', title: '3-Day Formula 1 Race Experience', category: 'activity', description: 'Admission to the three-day Formula 1 Grand Prix weekend' },
      { id: 'gp-inc-3', title: 'Return International Flights & Qatar Visa', category: 'flight', description: 'Return flight arrangements and Qatar tourist visa processing' },
      { id: 'gp-inc-4', title: 'Desert Safari with Inland Sea Excursion', category: 'activity', description: 'Off-road 4x4 desert adventure to Khor Al Adaid' },
      { id: 'gp-inc-5', title: 'Doha City Tour & National Museum of Qatar', category: 'activity', description: 'Guided tour covering West Bay, Corniche, and National Museum of Qatar' },
      { id: 'gp-inc-6', title: 'Return Airport Transfers', category: 'transfer', description: 'Private airport arrival and departure transfers from Doha airport' }
    ]
  },

  /* ==========================================================================
     GLOBAL LUXURY EDITIONS (CURATED MULTI-DESTINATION & SIGNATURE ESCAPES)
     ========================================================================== */
  'singapore-bali': {
    id: 'singapore-bali',
    edition: 'EDITION 05 · ASIA DUAL ESCAPE',
    category: 'global',
    title: 'Singapore + Bali',
    subtitle: 'Futuristic Gardens & Tropical Cliffside Sanctuaries',
    tagline: 'Marina Bay sophistication paired with Ubud & Uluwatu serenity',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '3 Nights in Singapore · 4 Nights in Bali',
    transferBasis: 'Private Airport Transfers & Curated Tours',
    pricing: {
      standardFormatted: '₦4,650,000',
      standardNumeric: 4650000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/bali-ubud.jpg',
    heroImageAlt: 'Luxury infinity pool in Ubud Bali overlooking emerald rice terraces and ocean',
    overviewDescription: 'Experience Singapore’s iconic Marina Bay, Gardens by the Bay, and Sentosa Island before flying to Bali for five-star cliffside resorts, sacred temples, and private beach clubs.',
    magazineHighlights: [
      'Return International & Regional Flights Included',
      '5-Star Hotels & Luxury Pool Villa in Singapore & Bali',
      'Singapore Visa & Indonesia Arrival Formalities',
      'Gardens by the Bay, Marina Bay SkyPark & Sentosa Tour',
      'Ubud Rice Terraces, Kintamani & Uluwatu Sunset Experience',
      'Private Airport Pick-up & Drop-off Transfers'
    ],
    inclusions: [
      { id: 'sb-1', title: '5-Star Accommodation in Singapore & Bali', category: 'accommodation', description: 'Luxury city hotel in Singapore and 5-star resort/villa in Bali with daily breakfast' },
      { id: 'sb-2', title: 'Return International & Inter-Asian Flights', category: 'flight', description: 'Complete flight routing between Nigeria, Singapore, and Bali' },
      { id: 'sb-3', title: 'Singapore Visa & Entry Processing', category: 'visa', description: 'Visa assistance for Singapore and Bali entry requirements' },
      { id: 'sb-4', title: 'Curated City & Island Excursions + Transfers', category: 'activity', description: 'Guided tours in Singapore and Bali with private airport transfers' }
    ]
  },

  'bali-doha': {
    id: 'bali-doha',
    edition: 'EDITION 06 · ISLAND & ARABIA',
    category: 'global',
    title: 'Bali + Doha',
    subtitle: 'Tropical Island Zen & Arabian Architectural Grandeur',
    tagline: 'From Ubud jungle infinity pools to the shimmering Doha Corniche',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights in Bali · 3 Nights in Doha',
    transferBasis: 'Private Airport Transfers & Guided Excursions',
    pricing: {
      standardFormatted: '₦4,450,000',
      standardNumeric: 4450000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/doha-villaggio.jpg',
    heroImageAlt: 'Venetian indoor canal and gondola in Doha',
    overviewDescription: 'Unwind in Bali’s tropical rainforests and coastal beach clubs before enjoying a luxury stopover in Doha with desert safaris, museum tours, and Souq Waqif dining.',
    magazineHighlights: [
      'Return Flights with Qatar Airways',
      '4 Nights 5-Star Bali Resort + 3 Nights 5-Star Doha Hotel',
      'Qatar Visa & Bali Entry Assistance',
      'Ubud, Nusa Dua Coastal Leisure & Temple Tours',
      'Doha City Tour, National Museum & Desert Safari',
      'Private Return Airport Transfers'
    ],
    inclusions: [
      { id: 'bd-1', title: '5-Star Bali & Doha Accommodations', category: 'accommodation', description: 'Four nights in Bali and three nights in Doha with daily breakfast' },
      { id: 'bd-2', title: 'Return Flights & Visa Processing', category: 'flight', description: 'International flights and Qatar/Indonesia visa support' },
      { id: 'bd-3', title: 'Guided Excursions & Private Transfers', category: 'activity', description: 'Signature tours and airport transfers in both Bali and Doha' }
    ]
  },

  'doha-singapore': {
    id: 'doha-singapore',
    edition: 'EDITION 07 · TWO ULTRAMODERN SKYLINES',
    category: 'global',
    title: 'Doha + Singapore',
    subtitle: 'Architectural Icons of the Gulf & Southeast Asia',
    tagline: 'West Bay & Lusail paired with Marina Bay & Gardens by the Bay',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '3 Nights in Doha · 4 Nights in Singapore',
    transferBasis: 'Private Airport Transfers & Guided City Tours',
    pricing: {
      standardFormatted: '₦4,500,000',
      standardNumeric: 4500000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/singapore-bay.jpg',
    heroImageAlt: 'Singapore Marina Bay Sands and Supertree Grove at twilight',
    overviewDescription: 'A cosmopolitan dual-city escape uniting two of the world’s safest, most futuristic capitals—featuring world-class shopping, Michelin-starred dining, and iconic architecture.',
    magazineHighlights: [
      'Return Flights + Qatar & Singapore Visas Included',
      '5-Star Luxury Hotels in Doha & Singapore with Breakfast',
      'Doha City Tour, National Museum, Villaggio & Desert Safari',
      'Singapore Marina Bay, Gardens by the Bay & Sentosa Island',
      'Private Chauffeur Airport Transfers in Both Cities'
    ],
    inclusions: [
      { id: 'ds-1', title: '5-Star City Hotels in Doha & Singapore', category: 'accommodation', description: 'Luxury accommodations with daily breakfast' },
      { id: 'ds-2', title: 'Return Flights & Dual Visas', category: 'visa', description: 'International flights plus Qatar and Singapore tourist visas' },
      { id: 'ds-3', title: 'City Tours, Desert Safari & Private Transfers', category: 'activity', description: 'Curated excursions and private airport pick-up/drop-off' }
    ]
  },

  'egypt-doha': {
    id: 'egypt-doha',
    edition: 'EDITION 08 · ANTIQUITY & MODERNITY',
    category: 'global',
    title: 'Egypt + Doha',
    subtitle: 'Pharaonic Wonders of Cairo & Modern Arabian Luxury',
    tagline: 'The Great Pyramids of Giza & the glittering skyline of Qatar',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '4 Nights in Egypt · 3 Nights in Doha',
    transferBasis: 'Private Guided Tours & Airport Transfers',
    pricing: {
      standardFormatted: '₦3,750,000',
      standardNumeric: 3750000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/egypt-pyramids.jpg',
    heroImageAlt: 'Great Pyramids of Giza viewed across the blue Nile with felucca sailboat',
    overviewDescription: 'Walk among the Great Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum before flying to Doha for five-star Arabian hospitality, souqs, and desert dunes.',
    magazineHighlights: [
      'Return Flights + Egypt & Qatar Visas Included',
      '5-Star Cairo Nile-View Hotel & 5-Star Doha Hotel',
      'Pyramids of Giza, Sphinx & Grand Egyptian Museum Tour',
      'Luxury Nile Dinner Cruise in Cairo',
      'Doha City Tour, Villaggio Gondola & Desert Safari',
      'All Private Airport Transfers & Egyptologist Guide'
    ],
    inclusions: [
      { id: 'ed-1', title: '5-Star Hotels in Cairo & Doha', category: 'accommodation', description: 'Luxury accommodations with daily breakfast' },
      { id: 'ed-2', title: 'Return Flights + Egypt & Qatar Visas', category: 'visa', description: 'Flights and complete visa assistance for Egypt and Qatar' },
      { id: 'ed-3', title: 'Pyramids, Nile Cruise & Doha Excursions', category: 'activity', description: 'Guided tours, entrance fees, and private airport transfers' }
    ]
  },

  'egypt': {
    id: 'egypt',
    edition: 'EDITION 09 · IMPERIAL NILE & CAIRO',
    category: 'global',
    title: 'Egypt Signature Escape',
    subtitle: 'Timeless Wonders of Cairo, Giza & The Nile',
    tagline: 'Five-star immersion into seven thousand years of history',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights in Cairo & Red Sea / Nile Luxury',
    transferBasis: 'Private Chauffeur & Certified Egyptologist Guide',
    pricing: {
      standardFormatted: '₦3,100,000',
      standardNumeric: 3100000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/egypt-pyramids.jpg',
    heroImageAlt: 'Great Pyramids of Giza and the Nile River at sunset',
    overviewDescription: 'Discover the Great Pyramids of Giza, the Sphinx, the Grand Egyptian Museum, historic Khan el-Khalili bazaar, and a private Nile felucca & dinner cruise in 5-star comfort.',
    magazineHighlights: [
      'Return International Flights & Egypt Tourist Visa',
      '6 Nights 5-Star Luxury Accommodation with Daily Breakfast',
      'Private Guided Tour of Giza Pyramids, Sphinx & Saqqara',
      'Grand Egyptian Museum & Citadel of Saladin',
      'VIP Nile Evening Dinner Cruise & Traditional Entertainment',
      'Private Airport Pick-up & Drop-off Transfers'
    ],
    inclusions: [
      { id: 'eg-1', title: '6 Nights 5-Star Hotel in Egypt', category: 'accommodation', description: 'Five-star hotel stay inclusive of daily breakfast' },
      { id: 'eg-2', title: 'Return Flights & Egypt Visa', category: 'visa', description: 'International return flights and Egypt visa processing' },
      { id: 'eg-3', title: 'Private Egyptologist Tours & Transfers', category: 'activity', description: 'All monument entrance fees, Nile dinner cruise, and private transfers' }
    ]
  },

  'doha-seychelles': {
    id: 'doha-seychelles',
    edition: 'EDITION 10 · GULF & PRIVATE ISLAND',
    category: 'global',
    title: 'Doha + Seychelles',
    subtitle: 'Arabian Sophistication & Indian Ocean Granite Atolls',
    tagline: 'Qatar Airways luxury paired with Mahé & Praslin island paradise',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 7,
    durationLabel: '7 Nights',
    destinationBreakdown: '3 Nights in Doha · 4 Nights in Seychelles',
    transferBasis: 'Private Island & Airport Transfers Included',
    pricing: {
      standardFormatted: '₦4,850,000',
      standardNumeric: 4850000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/zanzibar-mnemba.jpg',
    heroImageAlt: 'Turquoise coral lagoon and white sandbank in the Indian Ocean',
    overviewDescription: 'Pair three vibrant nights in Doha with four idyllic nights in the Seychelles—home to powder-white beaches, sculpted granite boulders, and crystal-clear marine parks.',
    magazineHighlights: [
      'Return Flights with Qatar Airways',
      '5-Star Doha Hotel + 5-Star Seychelles Beachfront Resort',
      'Qatar Tourist Visa & Seychelles Travel Authorization',
      'Doha City Tour, National Museum & Desert Safari',
      'Mahé Island Tour, Sainte Anne Marine Park & Reef Snorkeling',
      'Private Return Airport Transfers'
    ],
    inclusions: [
      { id: 'dsey-1', title: '5-Star Doha & Seychelles Resorts', category: 'accommodation', description: 'Luxury stays in Doha and Seychelles with daily breakfast' },
      { id: 'dsey-2', title: 'Return Qatar Airways Flights & Visas', category: 'flight', description: 'International flights and travel authorization processing' },
      { id: 'dsey-3', title: 'Marine Park Cruise, Doha Safari & Transfers', category: 'activity', description: 'Guided excursions and private airport transfers in both destinations' }
    ]
  },

  'south-africa': {
    id: 'south-africa',
    edition: 'EDITION 11 · CAPE & WINELANDS',
    category: 'global',
    title: 'South Africa Odyssey',
    subtitle: 'Cape Town, Table Mountain, Franschhoek & Coastal Luxury',
    tagline: 'Where dramatic mountain peaks meet two oceans',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights in Cape Town & Cape Winelands',
    transferBasis: 'Private Chauffeur Tours & Airport Transfers',
    pricing: {
      standardFormatted: '₦3,650,000',
      standardNumeric: 3650000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/south-africa-cape.jpg',
    heroImageAlt: 'Aerial view of Cape Town Table Mountain and Clifton white sand beaches',
    overviewDescription: 'Experience the best of South Africa—ascend Table Mountain by cableway, tour the Cape Peninsula & Boulders Beach penguins, savour Cape Winelands estates, and relax at V&A Waterfront.',
    magazineHighlights: [
      'Return International Flights & South Africa E-Visa Assistance',
      '6 Nights 5-Star Hotel in Cape Town with Daily Breakfast',
      'Table Mountain Aerial Cableway & Cape Town City Tour',
      'Cape Point, Chapman’s Peak & Boulders Beach Penguins',
      'Stellenbosch & Franschhoek Luxury Winelands Tram Experience',
      'Private Airport Pick-up & Drop-off Transfers'
    ],
    inclusions: [
      { id: 'sa-1', title: '6 Nights 5-Star Cape Town Accommodation', category: 'accommodation', description: 'Five-star hotel stay with daily breakfast' },
      { id: 'sa-2', title: 'Return Flights & Visa Support', category: 'flight', description: 'Return flights and South African visa processing assistance' },
      { id: 'sa-3', title: 'Table Mountain, Peninsula & Winelands Tours', category: 'activity', description: 'All curated excursions, entrance tickets, and private transfers' }
    ]
  },

  'casablanca-marrakech': {
    id: 'casablanca-marrakech',
    edition: 'EDITION 12 · MOROCCAN ROYAL CITIES',
    category: 'global',
    title: 'Casablanca + Marrakech',
    subtitle: 'Imperial Palaces, Majorelle Gardens & Atlas Foothills',
    tagline: 'Andalusian architecture, luxury riads, and Agafay desert evenings',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '2 Nights in Casablanca · 4 Nights in Marrakech',
    transferBasis: 'Private Intercity Chauffeur & Guided Tours',
    pricing: {
      standardFormatted: '₦3,550,000',
      standardNumeric: 3550000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/marrakech-riad.jpg',
    heroImageAlt: 'Luxury Moroccan riad courtyard in Marrakech with turquoise pool and lanterns',
    overviewDescription: 'From Casablanca’s monumental Hassan II Mosque over the Atlantic to Marrakech’s serene luxury riads, Jardin Majorelle, Bahia Palace, and starlit Agafay desert camps.',
    magazineHighlights: [
      'Return International Flights & Morocco Visa / E-Visa Included',
      '5-Star Casablanca Hotel & Luxury Marrakech Resort/Riad',
      'Hassan II Mosque & Casablanca Corniche Guided Tour',
      'Jardin Majorelle, YSL Museum, Bahia Palace & Medina Souks',
      'Agafay Luxury Desert Sunset Dinner, Quad & Camel Experience',
      'Private Intercity Transfers & Airport Pick-up/Drop-off'
    ],
    inclusions: [
      { id: 'cm-1', title: '5-Star Hotels in Casablanca & Marrakech', category: 'accommodation', description: 'Luxury stays with daily breakfast and Agafay dinner' },
      { id: 'cm-2', title: 'Return Flights & Morocco Visa', category: 'visa', description: 'Return flights and Moroccan visa processing' },
      { id: 'cm-3', title: 'Imperial Tours, Agafay Desert & Private Transfers', category: 'activity', description: 'Private guided excursions, monument entries, and chauffeur transfers' }
    ]
  },

  'dubai': {
    id: 'dubai',
    edition: 'EDITION 13 · EMIRATES LUXURY',
    category: 'global',
    title: 'Dubai Signature Escape',
    subtitle: 'Iconic Skylines, Private Yachting & Arabian Desert Reserve',
    tagline: 'Five-star indulgence in the city of superlatives',
    dates: '2026 Flexible Luxury Departures',
    durationNights: 6,
    durationLabel: '6 Nights',
    destinationBreakdown: '6 Nights in Downtown Dubai / Dubai Marina',
    transferBasis: 'Private Chauffeur Airport & Excursion Transfers',
    pricing: {
      standardFormatted: '₦3,350,000',
      standardNumeric: 3350000,
      occupancyTerms: 'per person sharing'
    },
    heroImage: './assets/images/dubai-marina.jpg',
    heroImageAlt: 'Dubai Marina and Burj Khalifa at twilight with luxury yacht',
    overviewDescription: 'Experience Dubai at its finest—Burj Khalifa Sky views, Museum of the Future, a sunset Marina yacht cruise, and a private desert conservation safari.',
    magazineHighlights: [
      'Return International Flights & UAE Tourist Visa Assistance',
      '6 Nights 5-Star Hotel in Dubai with Daily Breakfast',
      'Burj Khalifa At The Top & Museum of the Future Tickets',
      ' Dubai Marina Sunset Luxury Yacht Cruise',
      'Premium Desert Safari with Dune Drive & Gourmet Camp Dinner',
      'Private Chauffeur Airport Pick-up & Drop-off'
    ],
    inclusions: [
      { id: 'db-1', title: '6 Nights 5-Star Dubai Hotel', category: 'accommodation', description: 'Luxury hotel stay in Dubai with daily breakfast' },
      { id: 'db-2', title: 'Return Flights & UAE Visa Support', category: 'flight', description: 'International return flights and UAE tourist visa assistance' },
      { id: 'db-3', title: 'Burj Khalifa, Yacht Cruise & Desert Safari', category: 'activity', description: 'Curated signature experiences and private airport transfers' }
    ]
  }
};

const trustHighlights = [
  {
    title: 'Accommodation & Travel Arrangements',
    description: 'Five-star hotel accommodations (including JAZ Elite Aurora in Zanzibar) and verified return flights, coordinated from start to finish.'
  },
  {
    title: 'Visa & Insurance Assistance',
    description: 'Direct support for Qatar, Tanzania, Kenya, Egypt, Singapore, Morocco, and South Africa visas plus mandatory travel insurance.'
  },
  {
    title: 'Private (PVT) Airport & Ground Transfers',
    description: 'Exclusive private airport pick-up, drop-off, and intercity transfers in air-conditioned luxury vehicles.'
  },
  {
    title: 'Curated Guided Experiences',
    description: 'Planned excursions with verified guides and pre-arranged entrance fees—from Mnemba Atoll to Nairobi National Park and Lusail F1.'
  }
];

const bookingSteps = [
  {
    step: '01',
    title: 'Choose Your Edition',
    description: 'Select from our flagship dual-destination escapes (Doha + Zanzibar, Zanzibar + Nairobi, Doha + Nairobi, Doha F1) or our Global Collection.'
  },
  {
    step: '02',
    title: 'Enter Guest Details',
    description: 'Fill in your travel party size and preferences to calculate your estimated reservation total and generate your PDF dossier.'
  },
  {
    step: '03',
    title: 'Download PDF & Confirm on WhatsApp',
    description: 'Your official PDF dossier downloads automatically while opening a direct WhatsApp chat with your Rhordway consultant (+234 816 420 6030).'
  }
];

const faqList = [
  {
    id: 'faq-1',
    question: 'What is included in the new Zanzibar + Nairobi and Doha + Nairobi packages?',
    answer: 'Zanzibar + Nairobi (6 Nights: 3N Zanzibar, 3N Nairobi) includes return flights, Tanzania visa, 5-star all-inclusive stay at JAZ Elite Aurora in Zanzibar, Zanzibar & Kenya insurance, Mnemba Island dolphin swim & snorkeling, Stone Town, Aquarium turtles, Le Saint Tropez, Kendwa Beach kayaking, plus 3 nights in Nairobi with breakfast, Nairobi City Tour (National Museum & Museum of Illusion), Nairobi National Park game drive, Sheldrick Elephant Orphanage, Giraffe Centre, and Sironka Valley day tour (Zip-lining & Go-Kart or Sky Biking)—all on a Private (PVT) basis. Doha + Nairobi (7 Nights: 4N Doha, 3N Nairobi, ₦3,600,000 per person sharing, min. 2 people) pairs the full Doha experience (Qatar visa, city tour, National Museum, Villaggio Gondola, Desert Safari) with the complete 3-night private Nairobi itinerary.'
  },
  {
    id: 'faq-2',
    question: 'What does "All Tours & Transfers on PVT basis" mean?',
    answer: 'PVT (Private) basis means your airport pick-ups, drop-offs, and scheduled sightseeing excursions are conducted exclusively for your travel party in a private vehicle rather than a large shared coach.'
  },
  {
    id: 'faq-3',
    question: 'What does "per person sharing" mean?',
    answer: 'Per person sharing means the advertised rate applies to one individual travelling with a companion and sharing a double or twin occupancy 5-star hotel room. Minimum of 2 travellers applies to shared dual-destination packages.'
  },
  {
    id: 'faq-4',
    question: 'Can I book destinations from the Global Collection (Singapore + Bali, Egypt, Morocco, South Africa, Seychelles, Dubai)?',
    answer: 'Yes! Simply click "Reserve This Escape" on any featured or global package card. It will automatically select that package in the Official Reservation Collation form below so you can generate your bespoke PDF dossier and send it directly to our travel desk on WhatsApp.'
  },
  {
    id: 'faq-5',
    question: 'Are international flights, visas, and travel insurance included?',
    answer: 'Yes. Our packages include return flight tickets, destination visa processing (Qatar, Tanzania, Egypt, Singapore, Morocco, etc.), and mandatory travel insurance (including Zanzibar and Kenya insurance where applicable).'
  },
  {
    id: 'faq-6',
    question: 'How do I confirm my reservation?',
    answer: 'Complete the 3-step Reservation Collation form on this page. Your official PDF Reservation Dossier will download immediately to your device and you will be connected directly with our consultant on WhatsApp (+234 816 420 6030) to finalize dates and payment.'
  }
];


  /* --- whatsapp.js --- */


/**
 * Builds the pre-filled enquiry message based on package parameters.
 */
function buildWhatsAppMessage(params = {}) {
  const { packageId, packageName, occupancy, price } = params;

  if (packageId === 'doha-zanzibar' || packageName?.includes('Zanzibar')) {
    return (
      `Hello Rhordway,\n\n` +
      `I am interested in booking the Doha + Zanzibar holiday package.\n` +
      `• Travel Dates: December 12–19, 2026 (7 nights)\n` +
      `• Advertised Price: ₦4,350,000 per person sharing\n\n` +
      `Could you please share current availability, room options, and the next steps to reserve?`
    );
  }

  if (packageId === 'doha-grand-prix' || packageName?.includes('Grand Prix')) {
    const selectedOccupancy = occupancy || 'Double Occupancy (per person sharing)';
    const selectedPrice = price || (selectedOccupancy.includes('Single') ? '₦4,150,000 per person' : '₦3,400,000 per person');
    
    return (
      `Hello Rhordway,\n\n` +
      `I am interested in booking the Doha Grand Prix Experience.\n` +
      `• Travel Dates: November 25 – December 1, 2026 (6 nights)\n` +
      `• Selected Occupancy: ${selectedOccupancy}\n` +
      `• Advertised Rate: ${selectedPrice}\n\n` +
      `Could you please verify availability, race weekend details, and booking procedures?`
    );
  }

  return (
    `Hello Rhordway,\n\n` +
    `I am interested in your luxury holiday packages (Doha + Zanzibar & Doha Grand Prix 2026).\n` +
    `Please share more details on availability and how to speak with a travel consultant.`
  );
}

/**
 * Generates the official wa.me link.
 * If whatsappNumber is not configured, returns null or a placeholder flag
 * so the UI can gracefully show a configuration modal instead of opening a broken link.
 */
function getWhatsAppUrl(params = {}) {
  const messageText = buildWhatsAppMessage(params);
  const cleanNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');

  if (!cleanNumber) {
    return {
      url: null,
      messageText,
      isConfigured: false
    };
  }

  const encodedText = encodeURIComponent(messageText);
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedText}`,
    messageText,
    isConfigured: true
  };
}


  /* --- pdfGenerator.js --- */


function generateBookingReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `RHW-2026-${code}`;
}

/**
 * Generates an official client reservation PDF dossier using jsPDF (if loaded)
 * or creates a high-resolution printable reservation document as a fallback.
 */
function generateReservationPDF(data) {
  const {
    bookingRef,
    packageName,
    travelDates,
    duration,
    occupancy,
    priceFormatted,
    travellerCount,
    totalEstimated,
    leadName,
    email,
    phone,
    departureCity,
    specialRequests,
    inclusions
  } = data;

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Check if jsPDF library is available globally
  const jspdfObj = window.jspdf ? window.jspdf.jsPDF : null;

  if (jspdfObj) {
    try {
      const doc = new jspdfObj({ orientation: 'portrait', unit: 'mm', format: 'a4' });

      // Brand Blue Top Header
      doc.setFillColor(0, 132, 230); // #0084E6 Rhordway Blue
      doc.rect(0, 0, 210, 30, 'F');

      // Top Accent Red Line
      doc.setFillColor(229, 46, 46); // #E52E2E Rhordway Red
      doc.rect(0, 30, 210, 2, 'F');

      // Header Brand Text
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('RHORDWAY™', 16, 17);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('CURATED TRAVEL & TOURISM · OFFICIAL RESERVATION DOSSIER', 16, 24);

      // Dossier Meta Box (Right aligned)
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(`REFERENCE: ${bookingRef}`, 194, 15, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      doc.text(`ISSUED: ${dateFormatted}`, 194, 22, { align: 'right' });

      // Body Section 1: Lead Guest Information
      doc.setTextColor(0, 132, 230);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('1. LEAD TRAVELLER & CONTACT INFORMATION', 16, 44);

      // Divider line
      doc.setDrawColor(220, 225, 235);
      doc.line(16, 47, 194, 47);

      doc.setTextColor(40, 45, 55);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      doc.text(`Lead Guest Name:`, 16, 55);
      doc.setFont('helvetica', 'bold');
      doc.text(`${leadName}`, 60, 55);

      doc.setFont('helvetica', 'normal');
      doc.text(`WhatsApp / Phone:`, 16, 63);
      doc.setFont('helvetica', 'bold');
      doc.text(`${phone}`, 60, 63);

      doc.setFont('helvetica', 'normal');
      doc.text(`Email Address:`, 16, 71);
      doc.setFont('helvetica', 'bold');
      doc.text(`${email}`, 60, 71);

      doc.setFont('helvetica', 'normal');
      doc.text(`City of Departure:`, 16, 79);
      doc.setFont('helvetica', 'bold');
      doc.text(`${departureCity || 'Nigeria (To be confirmed)'}`, 60, 79);

      // Body Section 2: Holiday Package Selection
      doc.setTextColor(0, 132, 230);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('2. RESERVED HOLIDAY PACKAGE DETAILS', 16, 93);

      doc.setDrawColor(220, 225, 235);
      doc.line(16, 96, 194, 96);

      doc.setTextColor(40, 45, 55);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      doc.text(`Package Name:`, 16, 104);
      doc.setFont('helvetica', 'bold');
      doc.text(`${packageName}`, 60, 104);

      doc.setFont('helvetica', 'normal');
      doc.text(`Departure Dates:`, 16, 112);
      doc.setFont('helvetica', 'bold');
      doc.text(`${travelDates} (${duration})`, 60, 112);

      doc.setFont('helvetica', 'normal');
      doc.text(`Occupancy Type:`, 16, 120);
      doc.setFont('helvetica', 'bold');
      doc.text(`${occupancy}`, 60, 120);

      doc.setFont('helvetica', 'normal');
      doc.text(`Number of Guests:`, 16, 128);
      doc.setFont('helvetica', 'bold');
      doc.text(`${travellerCount} Guest(s)`, 60, 128);

      doc.setFont('helvetica', 'normal');
      doc.text(`Advertised Rate:`, 16, 136);
      doc.setFont('helvetica', 'bold');
      doc.text(`${priceFormatted}`, 60, 136);

      // Estimated total card
      doc.setFillColor(245, 248, 255);
      doc.setDrawColor(0, 132, 230);
      doc.roundedRect(16, 143, 178, 16, 2, 2, 'FD');
      doc.setTextColor(0, 132, 230);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(`Estimated Package Total: ${totalEstimated}`, 22, 154);

      // Body Section 3: Package Inclusions Summary
      doc.setTextColor(0, 132, 230);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('3. VERIFIED PACKAGE INCLUSIONS', 16, 172);

      doc.setDrawColor(220, 225, 235);
      doc.line(16, 175, 194, 175);

      doc.setTextColor(60, 65, 75);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);

      let yPos = 182;
      const displayInclusions = inclusions && inclusions.length > 0 ? inclusions : [
        '5-Star Luxury Accommodation',
        'Return International Flights',
        'Tourist Visa Processing Assistance',
        'Curated Destination Tours & Excursions',
        'Airport Transfers (Arrival & Departure)',
        'Mandatory Travel Insurance & Local Guides'
      ];

      displayInclusions.slice(0, 8).forEach((inc) => {
        const title = typeof inc === 'string' ? inc : inc.title;
        doc.text(`• ${title}`, 20, yPos);
        yPos += 6;
      });

      // Special Notes
      if (specialRequests) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.text(`Special Requests / Preferences: "${specialRequests}"`, 16, yPos + 4);
        yPos += 10;
      }

      // Footer Banner with Official Rhordway Contacts
      doc.setFillColor(16, 22, 35);
      doc.rect(0, 260, 210, 37, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text('RHORDWAY TRAVEL CONSULTANCY DESK', 16, 268);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(180, 195, 220);
      doc.text(`WhatsApp: +234 816 420 6030  |  Alternate Phone: +234 901 339 7808`, 16, 274);
      doc.text(`Email: ${siteConfig.contactEmail}  |  Instagram: ${siteConfig.instagram}`, 16, 280);

      doc.setFontSize(7);
      doc.setTextColor(140, 150, 170);
      doc.text('Note: This document confirms your initial reservation details. Final booking is completed upon consultant verification.', 16, 288);

      // Trigger automatic browser download
      const filename = `Rhordway_Reservation_${bookingRef}.pdf`;
      doc.save(filename);
      return { success: true, method: 'download', filename };
    } catch (err) {
      console.warn('jsPDF generation failed, falling back to printable dossier', err);
    }
  }

  // Fallback: Open clean printable voucher in new tab
  openPrintableVoucher(data);
  return { success: true, method: 'print_fallback' };
}

/**
 * Fallback Printable Document
 */
function openPrintableVoucher(data) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Rhordway Travel Dossier — ${data.bookingRef}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #111; max-width: 800px; margin: 0 auto; }
        .header { background: #0084E6; color: #fff; padding: 24px; border-radius: 8px; border-bottom: 4px solid #E52E2E; margin-bottom: 24px; }
        .header h1 { margin: 0 0 6px 0; font-size: 26px; }
        .header p { margin: 0; opacity: 0.9; font-size: 14px; }
        .section { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #eee; }
        .section h2 { color: #0084E6; font-size: 16px; margin-bottom: 12px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px; }
        .highlight-box { background: #f0f7ff; border: 1px solid #0084E6; padding: 14px; border-radius: 6px; font-weight: bold; margin-top: 14px; }
        .footer { background: #111; color: #fff; padding: 20px; border-radius: 8px; font-size: 12px; margin-top: 30px; }
        @media print { body { padding: 0; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>RHORDWAY™</h1>
        <p>OFFICIAL TRAVEL RESERVATION & CLIENT DOSSIER · REF: ${data.bookingRef}</p>
      </div>

      <div class="section">
        <h2>1. LEAD TRAVELLER INFORMATION</h2>
        <div class="grid">
          <div><strong>Name:</strong> ${data.leadName}</div>
          <div><strong>Phone:</strong> ${data.phone}</div>
          <div><strong>Email:</strong> ${data.email}</div>
          <div><strong>Departure City:</strong> ${data.departureCity || 'Nigeria'}</div>
        </div>
      </div>

      <div class="section">
        <h2>2. RESERVED PACKAGE</h2>
        <div class="grid">
          <div><strong>Package:</strong> ${data.packageName}</div>
          <div><strong>Dates:</strong> ${data.travelDates} (${data.duration})</div>
          <div><strong>Occupancy:</strong> ${data.occupancy}</div>
          <div><strong>Travellers:</strong> ${data.travellerCount} Person(s)</div>
        </div>
        <div class="highlight-box">Estimated Package Total: ${data.totalEstimated}</div>
      </div>

      <div class="footer">
        <strong>RHORDWAY TRAVEL CONSULTANCY</strong><br/>
        WhatsApp: +234 816 420 6030 | +234 901 339 7808 | Email: ${siteConfig.contactEmail}
      </div>
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}


  /* --- SiteHeader.js --- */


function renderSiteHeader() {
  return `
    <header class="ref-header mw-white-header" id="siteHeader">
      <div class="ref-header-container mw-header-inner">
        <a 
          href="#home" 
          class="ref-brand-logo mw-brand-logo" 
          aria-label="${siteConfig.brandName} Home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
        >
          <img 
            src="./assets/images/rhordway-logo-dark.png" 
            alt="${siteConfig.brandName}" 
            class="rhordway-brand-logo-img"
            width="150"
            height="28"
          />
        </a>

        <nav class="ref-nav-links mw-nav-links" aria-label="Main Navigation">
          <a 
            href="#home" 
            class="ref-nav-link mw-nav-link active" 
            data-page-nav="home"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
          >
            Home
          </a>
          <a 
            href="#about" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="about"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about')"
          >
            About
          </a>
          <a 
            href="#migration-services" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="migration-services"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')"
          >
            Migration Services
          </a>
          <a 
            href="#holidays" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="holidays"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays')"
          >
            Holidays
          </a>
        </nav>

        <div class="ref-header-actions mw-header-actions">
          <a 
            href="#booking-collation" 
            class="mw-black-pill-btn"
            style="letter-spacing: 0.05em; font-size: 0.78rem; padding: 12px 24px;"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            BOOK CONSULTATION
          </a>

          <button 
            type="button" 
            class="menu-toggle-btn mw-menu-toggle" 
            id="menuToggleBtn" 
            aria-label="Toggle navigation menu" 
            aria-expanded="false" 
            aria-controls="mobileNavDrawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderMobileNavigation() {
  return `
    <div class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <a 
          href="#home" 
          class="ref-brand-logo mw-brand-logo" 
          aria-label="${siteConfig.brandName} Home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home'); window.rhordwayApp.closeMobileMenu()"
        >
          <img 
            src="./assets/images/rhordway-logo-dark.png" 
            alt="${siteConfig.brandName}" 
            class="rhordway-brand-logo-img"
            width="140"
            height="26"
          />
        </a>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a 
          href="#home" 
          class="mobile-nav-link active" 
          data-page-nav="home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home'); window.rhordwayApp.closeMobileMenu()"
        >
          Home
        </a>
        <a 
          href="#about" 
          class="mobile-nav-link" 
          data-page-nav="about"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about'); window.rhordwayApp.closeMobileMenu()"
        >
          About
        </a>
        <a 
          href="#migration-services" 
          class="mobile-nav-link" 
          data-page-nav="migration-services"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services'); window.rhordwayApp.closeMobileMenu()"
        >
          Migration Services
        </a>
        <a 
          href="#holidays" 
          class="mobile-nav-link" 
          data-page-nav="holidays"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays'); window.rhordwayApp.closeMobileMenu()"
        >
          Holidays
        </a>
      </nav>

      <div style="margin-top:auto; padding-top:24px;">
        <a 
          href="#booking-collation" 
          class="mw-action-group" 
          style="width:100%; justify-content:center;" 
          onclick="event.preventDefault(); window.rhordwayApp.closeMobileMenu(); window.rhordwayApp.scrollToConsultation();"
        >
          <span class="mw-action-pill" style="flex:1; justify-content:center;">Book Consultation</span>
          <span class="mw-action-circle" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `;
}


  /* --- CampaignHero.js --- */
function renderCampaignHero() {
  return `
    <section class="mw-hero-section" id="hero">
      
      <!-- 1. Full-Screen Cinematic Hero (Centered: headline top · image breathes in middle · CTA bottom) -->
      <div class="mw-hero-frame mw-hero-centered">
        <img 
          src="./assets/images/hero-rhordway-runway.jpg" 
          alt="A traveller watching a plane take off at dawn — Rhordway makes travel processing simple and stress-free" 
          class="mw-hero-img"
          fetchpriority="high"
        />
        <div class="mw-hero-scrim"></div>

        <div class="mw-hero-inner mw-container mw-hero-centered-inner">
          <!-- Top: Two-tone headline -->
          <h1 class="mw-hero-title mw-hero-title-centered">
            Travel processing, made simple.<br />
            <span class="mw-hero-title-soft">The world, within reach.</span>
          </h1>

          <!-- Bottom: Blurb + single CTA + trust line -->
          <div class="mw-hero-bottom-stack">
            <p class="mw-hero-blurb mw-hero-blurb-centered">
              Student visas, global migration, travel visas, passports and flights — handled end to end by one dedicated team.
              <span class="mw-hero-blurb-soft">Every application is prepared with care, so you can focus on the journey.</span>
            </p>

            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill" style="background:#FFFFFF; color:#0F1115;">Book a Consultation</span>
              <span class="mw-action-circle" style="background:#FFFFFF; color:#0F1115;" aria-hidden="true">↗</span>
            </a>

            <p class="mw-hero-trust">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Embassy-ready documentation · UK · Canada · Schengen · USA
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Editorial Split Intro Section Below Hero -->
      <div class="mw-container">
        <div class="mw-explore-split">
          
          <!-- Left Text & Black Pill CTA Column -->
          <div class="mw-explore-left anim-reveal-text">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Welcome to Rhordway
            </span>

            <h2 class="mw-split-heading">
              <strong>Explore the world, one breathtaking destination at a time</strong>
              <span class="mw-text-grey">— backed by expert migration, student visa, travel visa, and passport processing.</span>
            </h2>

            <a 
              href="#services" 
              class="mw-action-group"
            >
              <span class="mw-action-pill">EXPLORE WHAT WE DO</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>

          <!-- Center Portrait Card: Student Visa & Study Abroad -->
          <div 
            class="mw-explore-card-portrait anim-reveal-text anim-delay-1" 
            onclick="window.rhordwayApp.navigateToPage('migration-services')" 
            style="cursor:pointer;"
          >
            <img 
              src="./assets/images/singapore-bay.jpg" 
              alt="Undergraduate & Postgraduate Student Visa Processing, Proof of Funds & SOP" 
              loading="lazy" 
            />
            <div class="mw-card-subtle-scrim"></div>
            <div class="mw-portrait-bottom">
              <p class="mw-portrait-caption">
                Student Visa, Proof of Funds<br />&amp; Statement of Purpose.
              </p>
              <span class="mw-white-circle-arrow" aria-hidden="true">↗</span>
            </div>
          </div>

          <!-- Right Landscape Card + Underneath Caption -->
          <div 
            class="mw-explore-card-landscape anim-reveal-text anim-delay-2" 
            onclick="window.rhordwayApp.navigateToPage('migration-services')" 
            style="cursor:pointer;"
          >
            <div class="mw-landscape-img-wrap">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Global Migration, Travel Visas, Passports, Flights & Travel Insurance" 
                loading="lazy" 
              />
              <span class="mw-top-right-pill">Migration · Visas · Passports</span>
            </div>
            <p class="mw-landscape-under-text">
              From UK, Canada, France, Germany &amp; Spain visas to passport renewals, flight booking, airport transfers, and travel insurance—every step is handled with precision.
            </p>
          </div>

        </div>
      </div>

    </section>
  `;
}


  /* --- ExperienceSelector.js --- */



/**
 * SHARED HELPER: 4-Panel Expandable Hugo Strip for Rhordway's Core Migration & Visa Services
 * (Placed on the Home Page as requested!)
 */
function renderMigrationHugoStripSection() {
  const servicePillars = [
    {
      id: 'pillar-student',
      kicker: 'UK · CANADA · EUROPE · USA',
      title: 'Student Visa & Study Abroad',
      desc: 'Undergraduate & Postgraduate admissions, visa processing, Proof of Funds, Statement of Purpose (SOP), and expert course & institution selection.',
      badgeTop: 'Edumigration Desk',
      badgeMain: 'Admissions + Visa',
      badgeSub: 'Proof of Funds & SOP Support',
      foot: 'End-to-End Professional Support',
      image: './assets/images/singapore-bay.jpg'
    },
    {
      id: 'pillar-visa',
      kicker: 'FRANCE · GERMANY · SPAIN · UK · CANADA · US',
      title: 'Travel Visas & Global Migration',
      desc: 'Tourist, business, family visit, and skilled migration visa processing with thorough embassy documentation and interview preparation.',
      badgeTop: 'Embassy Advisory',
      badgeMain: 'Global Visas',
      badgeSub: 'Schengen · UK · US · Canada · UAE',
      foot: 'Document Verification & Filing',
      image: './assets/images/doha-skyline.jpg'
    },
    {
      id: 'pillar-passport',
      kicker: 'FAST-TRACK DOCUMENTATION',
      title: 'Passports & Travel Insurance',
      desc: 'Fresh Nigerian passport applications, renewals, data-capturing coordination, and embassy-compliant international medical & travel insurance.',
      badgeTop: 'Travel Documents',
      badgeMain: 'Passports',
      badgeSub: 'Fresh Issue · Renewal · Insurance',
      foot: 'Fast & Stress-Free Processing',
      image: './assets/images/doha-museum.jpg'
    },
    {
      id: 'pillar-flights',
      kicker: 'GLOBAL AVIATION & GROUND MOBILITY',
      title: 'Flight Booking, Hotel & Airport Transfers',
      desc: 'International & domestic flight ticketing, verified hotel reservations, Hotel Transfers, and private Airport Transfers worldwide.',
      badgeTop: 'Aviation & Stays',
      badgeMain: 'Flights & PVT',
      badgeSub: 'Airport Transfer & Hotel Transfer',
      foot: '24/7 Arrival & Departure Support',
      image: './assets/images/dubai-marina.jpg'
    }
  ];

  return `
    <section class="mw-packages-section" id="home-migration-strip" style="padding-top:24px; padding-bottom:56px;">
      <div class="mw-container">
        <div class="hugo-header-row anim-reveal-text">
          <div class="hugo-header-left">
            <span class="hugo-eyebrow">
              <span class="mw-blue-dot"></span>
              RHORDWAY MIGRATION &amp; VISA SERVICES
            </span>
            <h2 class="hugo-editorial-heading">
              Expert Student Visas, Global Migration, Travel Visas, Passport Processing, Flights, Transfers &amp; Travel Insurance.
            </h2>
          </div>

          <div class="hugo-header-controls">
            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">SPEAK WITH A SPECIALIST</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <!-- Hugo 4-Panel Expandable Strip (Interactive on Hover & Click) -->
        <div class="hugo-accordion-strip" id="hugoServiceStrip">
          ${servicePillars.map((p, idx) => `
            <article 
              class="hugo-strip-card ${idx === 1 ? 'active' : ''}" 
              data-pkg-id="${p.id}"
              onclick="window.rhordwayApp.activateMagazinePanel('${p.id}')"
              onmouseenter="if(window.innerWidth >= 960) window.rhordwayApp.activateMagazinePanel('${p.id}')"
            >
              <img src="${p.image}" alt="${p.title}" class="hugo-strip-img" loading="lazy" />
              <div class="hugo-strip-scrim"></div>
              <div class="hugo-strip-content">
                <div class="hugo-strip-left">
                  <span class="hugo-strip-mini-ico" aria-hidden="true">✦</span>
                  <span class="hugo-strip-kicker">${p.kicker}</span>
                  <h3 class="hugo-strip-title">${p.title}</h3>
                  <p class="hugo-strip-desc">${p.desc}</p>
                </div>
                <div class="hugo-glass-widget">
                  <span class="hugo-widget-top">${p.badgeTop}</span>
                  <div class="hugo-widget-arc">
                    <span class="hugo-widget-big">${p.badgeMain}</span>
                    <span class="hugo-widget-sub">${p.badgeSub}</span>
                  </div>
                  <p class="hugo-widget-foot">${p.foot}</p>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * 1. HOME PAGE CONTENT:
 *    - A) Rhordway Migration & Visa Services 4-Panel Strip (moved to Home!)
 *    - B) "What We Do" Sticky Left Intro + Sticky-Stacking Right Services (01 - 06)
 *    - C) Core Processing Divisions Spotlight (TEXTS LEFT · IMAGE RIGHT as requested!)
 */
function renderExperienceSelector() {
  return `
    <!-- ====================================================================
         SECTION A: RHORDWAY MIGRATION & VISA SERVICES (4-PANEL HUGO STRIP IN HOME)
         ==================================================================== -->
    ${renderMigrationHugoStripSection()}

    <!-- ====================================================================
         SECTION B: "WHAT WE DO" — STICKY LEFT INTRO + STICKY-STACKING RIGHT SERVICES
         ==================================================================== -->
    <section class="mw-services-section" id="services">
      <div class="mw-container">
        <div class="mw-services-grid">
          
          <!-- Left Sticky Editorial Column -->
          <div class="mw-services-left">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              What We Do
            </span>
            <h2 class="mw-services-heading">
              We Make Travel Processing Simple &amp; Stress-Free<span style="color:#0080E8;">.</span>
            </h2>
            <p class="mw-services-lead">
              From Student Visas, Global Migration, Travel Visas, and Passport Processing to Flight Booking, Travel Insurance, and Airport &amp; Hotel Transfers—every document and detail is handled end to end.
            </p>
            <div style="margin-top:28px;">
              <a 
                href="#booking-collation" 
                class="mw-action-group"
                onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
              >
                <span class="mw-action-pill">BOOK A SLOT TODAY</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <!-- Right Numbered Services List (Sticky-Stacking as You Scroll to End of What We Do) -->
          <ul class="mw-services-list">
            <li class="mw-service-item" style="--item-idx: 0;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">01</span>
                  <h3 class="mw-service-name">Student Visa &amp; Study Abroad (Edumigration)</h3>
                </div>
                <p class="mw-service-desc">
                  Complete Undergraduate &amp; Postgraduate admission and student visa processing for the UK, Canada, France, Germany, Spain, USA, and Europe—including <strong>Proof of Funds</strong>, <strong>Statement of Purpose (SOP)</strong>, and expert guidance on choosing the right course and institution.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 1;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">02</span>
                  <h3 class="mw-service-name">Travel Visa &amp; Visit Visa Processing</h3>
                </div>
                <p class="mw-service-desc">
                  High-precision tourist, business, family visit, and conference visa processing for France, Germany, Spain (Schengen), UK, USA, Canada, Qatar, UAE, Tanzania, Kenya, Egypt, and South Africa. We prepare your embassy file and appointment from start to finish.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 2;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">03</span>
                  <h3 class="mw-service-name">Global Migration &amp; Relocation Pathways</h3>
                </div>
                <p class="mw-service-desc">
                  Structured migration advisory for skilled professionals, families, and graduates seeking permanent residency, work visas, or long-term relocation pathways in Canada, the UK, and Europe—backed by dedicated professional support.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 3;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">04</span>
                  <h3 class="mw-service-name">Passport Processing &amp; Renewal Assistance</h3>
                </div>
                <p class="mw-service-desc">
                  Fast, organized Nigerian passport application, renewal, biometric data-capturing coordination, and travel document support so your passport is ready well ahead of your embassy submission.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 18h8"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 4;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">05</span>
                  <h3 class="mw-service-name">Flight Booking &amp; International Ticketing</h3>
                </div>
                <p class="mw-service-desc">
                  Competitive domestic and international flight booking across leading global airlines in Economy, Business, and First Class—including verified flight reservations for visa applications and student departures.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 5;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">06</span>
                  <h3 class="mw-service-name">Airport Transfer, Hotel Transfer &amp; Travel Insurance</h3>
                </div>
                <p class="mw-service-desc">
                  Seamless private <strong>Airport Transfer</strong> pick-up and drop-off, verified international hotel reservations &amp; <strong>Hotel Transfer</strong> coordination, plus embassy-approved <strong>Travel Insurance</strong> coverage for every destination.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </section>

    <!-- ====================================================================
         SECTION C: CORE DIVISIONS SPOTLIGHT (TEXTS LEFT · IMAGE RIGHT)
         ==================================================================== -->
    <section class="mw-study-corp-section" id="study-corporate">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0; margin-bottom:40px;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Featured Divisions
            </span>
            <h2 class="mw-huge-heading">
              Student Visas, Migration<br />&amp; Global Visas
            </h2>
          </div>

          <a 
            href="#migration-services" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')"
          >
            <span class="mw-action-pill">VIEW ALL VISA CORRIDORS</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="mw-split-feature-stack">
          
          <!-- Row 1: TEXTS LEFT · IMAGE RIGHT (Student Visa & Study Abroad Processing) -->
          <article class="mw-split-feature-row anim-reveal-text">
            <div class="mw-split-feature-text">
              <span class="mw-soft-pill" style="margin-bottom:14px;">
                <span class="mw-blue-dot"></span>
                Apply For Student Visa · UK, Canada &amp; Europe
              </span>
              <h3 class="mw-division-title" style="font-size:clamp(1.55rem, 2.6vw, 2.15rem); margin-bottom:12px;">
                Student Visa &amp; Study Abroad Processing.
              </h3>
              <p class="mw-division-desc" style="max-width:520px;">
                We guide students from university selection and admission letters all the way to visa approval—with complete documentation and financial advisory support.
              </p>
              <div class="mw-division-pills">
                <span>✓ Undergraduate &amp; Visa Processing</span>
                <span>✓ Proof of Funds Assistance</span>
                <span>✓ Statement of Purpose (SOP)</span>
                <span>✓ Course &amp; Institution Guidance</span>
                <span>✓ Professional End-to-End Support</span>
              </div>
              <button 
                type="button" 
                class="mw-action-group"
                onclick="window.rhordwayApp.selectServiceAndScroll('Student Visa & Study Abroad')"
              >
                <span class="mw-action-pill">APPLY FOR STUDENT VISA</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div class="mw-split-feature-media">
              <img 
                src="./assets/images/singapore-bay.jpg" 
                alt="Apply for Student Visa — Undergraduate, Postgraduate, Proof of Funds and Statement of Purpose" 
                loading="lazy" 
              />
            </div>
          </article>

          <!-- Row 2: TEXTS LEFT · IMAGE RIGHT (Travel Visas, Migration & Passports) -->
          <article class="mw-split-feature-row anim-reveal-text anim-delay-1">
            <div class="mw-split-feature-text">
              <span class="mw-soft-pill" style="margin-bottom:14px;">
                <span class="mw-blue-dot"></span>
                Migration · Visas · Passports · Flights
              </span>
              <h3 class="mw-division-title" style="font-size:clamp(1.55rem, 2.6vw, 2.15rem); margin-bottom:12px;">
                Travel Visas, Migration &amp; Passports.
              </h3>
              <p class="mw-division-desc" style="max-width:520px;">
                Applying for a visa to France, Germany, Spain, the UK, Canada, USA, or the Middle East? We handle your visa filing, passport renewal, flight booking, travel insurance, and airport/hotel transfers.
              </p>
              <div class="mw-division-pills">
                <span>✓ Visa Processing (UK, Schengen, US, Canada)</span>
                <span>✓ Global Migration Advisory</span>
                <span>✓ Passport Processing &amp; Renewal</span>
                <span>✓ Flight Booking &amp; Travel Insurance</span>
                <span>✓ Airport &amp; Hotel Transfers</span>
              </div>
              <button 
                type="button" 
                class="mw-action-group"
                onclick="window.rhordwayApp.selectServiceAndScroll('Travel & Visit Visa Processing')"
              >
                <span class="mw-action-pill">APPLY FOR YOUR VISA</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div class="mw-split-feature-media">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Travel Visa, Global Migration, Passports, Flights, Airport Transfer & Travel Insurance" 
                loading="lazy" 
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  `;
}

/**
 * 2. DEDICATED ABOUT PAGE (#about) — Distinct Brand Story, Mission & Direct Specialist Desk
 */
function renderAboutPage() {
  return `
    <section class="mw-packages-section" style="padding-top:32px; padding-bottom:64px;">
      <div class="mw-container">
        
        <!-- Texts Left · Image Right About Hero -->
        <div class="mw-split-feature-row anim-reveal-text" style="margin-bottom:56px;">
          <div class="mw-split-feature-text">
            <span class="mw-soft-pill" style="margin-bottom:14px;">
              <span class="mw-blue-dot"></span>
              About Rhordway™
            </span>
            <h1 class="mw-huge-heading" style="margin-bottom:18px;">
              We Make Travel Processing Simple &amp; Stress-Free<span style="color:#0080E8;">.</span>
            </h1>
            <p class="mw-division-desc" style="max-width:520px; font-size:0.98rem;">
              Explore the world, one breathtaking destination at a time. Rhordway is a premier Nigerian travel, student visa, global migration, and passport processing agency built to eliminate the stress and uncertainty of international documentation.
            </p>
            <div class="mw-division-pills">
              <span>✓ 98% Documentation Accuracy</span>
              <span>✓ Dedicated Visa &amp; SOP Advisors</span>
              <span>✓ Verified Global Aviation &amp; Hotel Partners</span>
            </div>
            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">TALK TO OUR TEAM</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="mw-split-feature-media">
            <img 
              src="./assets/images/doha-museum.jpg" 
              alt="About Rhordway — Global Migration, Student Visas & Travel Processing" 
            />
          </div>
        </div>

        <!-- 3 Strategic Pillars -->
        <div class="mw-process-grid" style="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
          <div class="mw-process-card">
            <span class="mw-service-num">01 · OUR MISSION</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">Removing Documentation Friction</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65;">
              Most visa refusals happen because of poorly structured Proof of Funds, weak Statements of Purpose, or incomplete embassy files. Our specialists audit and prepare every document before submission.
            </p>
          </div>

          <div class="mw-process-card">
            <span class="mw-service-num">02 · OUR COVERAGE</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">End-to-End Global Mobility</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65;">
              We don't stop at visa approval. We coordinate your Nigerian passport renewal, international flight ticketing, embassy-approved travel insurance, hotel reservations, and private airport transfers.
            </p>
          </div>

          <div class="mw-process-card">
            <span class="mw-service-num">03 · DIRECT ACCESS</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">Speak Directly With Specialists</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65; margin-bottom:8px;">
              Reach our consultation desk directly via phone, WhatsApp, or email:
            </p>
            <div style="display:flex; flex-direction:column; gap:4px; font-size:0.86rem; font-weight:700; color:#0F1115;">
              <span>📞 ${siteConfig.primaryPhoneFormatted} · ${siteConfig.alternatePhone}</span>
              <span>✉️ ${siteConfig.contactEmail} · 📱 ${siteConfig.instagram}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

/**
 * 3. DEDICATED MIGRATION SERVICES PAGE (#migration-services)
 *    - Distinct from Home! Features:
 *      A) Texts-Left Image-Right Migration & Study Advisory Header
 *      B) 4-Step Application & Visa Processing Blueprint
 *      C) 6 Global Visa & Study Corridors (UK, Canada, France/Germany/Spain, USA, Qatar/UAE, Africa)
 */
function renderMigrationServicesPage() {
  const visaCorridors = [
    {
      id: 'uk-corridor',
      country: 'United Kingdom',
      tag: '#UK Visa & Study',
      badge: 'Student · Visit · Skilled',
      subtitle: 'Undergraduate & Postgraduate Admissions, CAS, Proof of Funds, SOP & Standard Visitor Visas.',
      image: './assets/images/doha-skyline.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'canada-corridor',
      country: 'Canada',
      tag: '#Canada Study & PR',
      badge: 'Study Permit · PR · Visit',
      subtitle: 'University/College Placement, Study Permits, Proof of Funds, SOP & Express Entry Migration.',
      image: './assets/images/singapore-bay.jpg',
      service: 'Global Migration & Relocation'
    },
    {
      id: 'schengen-corridor',
      country: 'France · Germany · Spain',
      tag: '#Schengen Visa',
      badge: '29 European Countries',
      subtitle: 'Schengen Tourist, Business & Study Visas with Embassy-Compliant Travel Insurance & Hotel Booking.',
      image: './assets/images/doha-museum.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'usa-corridor',
      country: 'United States',
      tag: '#USA F-1 & B1/B2',
      badge: 'Student · Business · Tourist',
      subtitle: 'F-1 Student Admissions, I-20 Guidance, DS-160 Filing & Consular Interview Preparation.',
      image: './assets/images/dubai-marina.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'middle-east-corridor',
      country: 'Qatar & UAE (Dubai)',
      tag: '#Gulf Visas & Flights',
      badge: 'E-Visa · Flights · Transfers',
      subtitle: 'Fast-track Qatar & UAE Visas, Return Flights, Verified Hotels & Private Airport Transfers.',
      image: './assets/images/dubai-marina.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'africa-corridor',
      country: 'East & South Africa',
      tag: '#Tanzania · Kenya · SA',
      badge: 'Visas · Flights · Insurance',
      subtitle: 'Tanzania, Kenya, Egypt & South Africa Visas, Travel Insurance & Private Airport Transfers.',
      image: './assets/images/nairobi-safari.jpg',
      service: 'Travel & Visit Visa Processing'
    }
  ];

  const processSteps = [
    {
      step: 'STEP 01',
      title: 'Eligibility & Course / Visa Audit',
      desc: 'We evaluate your academic or travel profile, recommend the right university/course or visa category, and map out your exact timeline.'
    },
    {
      step: 'STEP 02',
      title: 'Proof of Funds & SOP Structuring',
      desc: 'Our specialists guide your Proof of Funds documentation, write/review your Statement of Purpose (SOP), and verify every supporting record.'
    },
    {
      step: 'STEP 03',
      title: 'Application Filing & Travel Insurance',
      desc: 'We submit your admission/visa application, issue embassy-compliant Travel Insurance, coordinate Passport renewals, and book biometric appointments.'
    },
    {
      step: 'STEP 04',
      title: 'Visa Approval, Flights & Transfers',
      desc: 'Once approved, we handle your international Flight Booking, verified Hotel Booking/Transfer, and private Airport Transfer on arrival.'
    }
  ];

  return `
    <!-- 1. Texts-Left Image-Right Migration Services Header -->
    <section class="mw-packages-section" style="padding-top:32px; padding-bottom:56px;">
      <div class="mw-container">
        <div class="mw-split-feature-row anim-reveal-text">
          <div class="mw-split-feature-text">
            <span class="mw-soft-pill" style="margin-bottom:14px;">
              <span class="mw-blue-dot"></span>
              Migration, Visas &amp; Admissions Hub
            </span>
            <h1 class="mw-huge-heading" style="margin-bottom:16px;">
              Global Visa, Study Abroad &amp; Migration Pathways<span style="color:#0080E8;">.</span>
            </h1>
            <p class="mw-division-desc" style="max-width:520px;">
              Whether you are applying for an Undergraduate or Postgraduate Student Visa, relocating through skilled migration, filing a Schengen/UK/US travel visa, or renewing your Nigerian passport—our specialists manage your entire file.
            </p>
            <div class="mw-division-pills">
              <span>✓ Student Visa &amp; Admissions</span>
              <span>✓ Proof of Funds &amp; SOP</span>
              <span>✓ UK · Schengen · Canada · US Visas</span>
              <span>✓ Passports, Flights &amp; Insurance</span>
            </div>
            <button 
              type="button" 
              class="mw-action-group"
              onclick="window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">CHECK MY ELIGIBILITY</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>

          <div class="mw-split-feature-media">
            <img 
              src="./assets/images/singapore-bay.jpg" 
              alt="Rhordway Student Visa, Proof of Funds, Statement of Purpose & Global Migration" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. How Our 4-Step Processing Works -->
    <section class="mw-study-corp-section" style="padding:64px 0;">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0; margin-bottom:36px;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              How It Works
            </span>
            <h2 class="mw-huge-heading">
              Your 4-step processing<br />blueprint
            </h2>
          </div>
          <p class="mw-header-side-desc">
            Every student visa, migration pathway, and travel visa application follows a structured 4-stage quality review.
          </p>
        </div>

        <div class="mw-process-grid">
          ${processSteps.map((s) => `
            <div class="mw-process-card anim-reveal-text">
              <span class="mw-service-num">${s.step}</span>
              <h3 style="font-size:1.15rem; font-weight:700; color:#0F1115; margin:0;">${s.title}</h3>
              <p style="font-size:0.88rem; color:#71717A; line-height:1.6; margin:0;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 3. Global Visa & Study Corridors Grid (Exclusive to Migration Services Page) -->
    <section class="mw-packages-section" id="visa-corridors" style="padding-top:64px;">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Where We Process
            </span>
            <h2 class="mw-huge-heading">
              Global visa, study &amp;<br />migration corridors
            </h2>
          </div>

          <a 
            href="#booking-collation" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            <span class="mw-action-pill">START MY APPLICATION</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="farer-magazine-grid">
          ${visaCorridors.map((item, idx) => `
            <article 
              class="farer-mag-card anim-reveal-text anim-delay-${(idx % 3) + 1}" 
              onclick="window.rhordwayApp.selectServiceAndScroll('${item.service}', '${item.country}')"
            >
              <div class="farer-img-frame">
                <img 
                  src="${item.image}" 
                  alt="${item.country} — ${item.subtitle}" 
                  loading="lazy" 
                />
                <div class="farer-subtle-gradient"></div>

                <button 
                  type="button" 
                  class="farer-corner-arrow" 
                  aria-label="Book Consultation for ${item.country}"
                  onclick="event.stopPropagation(); window.rhordwayApp.selectServiceAndScroll('${item.service}', '${item.country}')"
                >
                  ↗
                </button>

                <div class="farer-tag-cutout">
                  <span class="farer-tag-pill">
                    <span class="mw-blue-dot"></span>
                    ${item.tag}
                  </span>
                </div>
              </div>

              <div class="farer-card-caption">
                <div class="farer-caption-top">
                  <h4 class="farer-caption-title">${item.country}</h4>
                  <span class="farer-caption-nights">${item.badge}</span>
                </div>
                <p class="farer-caption-sub">${item.subtitle}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * 4. DEDICATED HOLIDAYS PAGE (#holidays) — Vacation Escapes & Destination Showcase
 */
function renderHolidaysPage() {
  const flagshipIds = [
    'zanzibar-nairobi',
    'doha-nairobi',
    'doha-zanzibar',
    'doha-grand-prix'
  ];

  const globalIds = [
    'singapore-bali',
    'bali-doha',
    'doha-singapore',
    'egypt-doha',
    'egypt',
    'doha-seychelles',
    'south-africa',
    'casablanca-marrakech',
    'dubai'
  ];

  const renderHugoStripPanel = (id, idx) => {
    const pkg = packagesData[id];
    if (!pkg) return '';
    const isActive = idx === 0;

    return `
      <article 
        class="hugo-strip-card ${isActive ? 'active' : ''}" 
        id="hugo-panel-${pkg.id}"
        data-pkg-id="${pkg.id}"
        onclick="window.rhordwayApp.activateMagazinePanel('${pkg.id}')"
        onmouseenter="if(window.innerWidth >= 960) window.rhordwayApp.activateMagazinePanel('${pkg.id}')"
      >
        <img 
          src="${pkg.heroImage}" 
          alt="${pkg.heroImageAlt}" 
          class="hugo-strip-img"
          loading="lazy" 
        />
        <div class="hugo-strip-scrim"></div>

        <div class="hugo-strip-content">
          <div class="hugo-strip-left">
            <span class="hugo-strip-mini-ico" aria-hidden="true">✦</span>
            <span class="hugo-strip-kicker">${pkg.destinationBreakdown}</span>
            <h3 class="hugo-strip-title">${pkg.title}</h3>
            <p class="hugo-strip-desc">${pkg.overviewDescription}</p>
          </div>

          <div class="hugo-glass-widget">
            <span class="hugo-widget-top">${pkg.durationLabel} · Private Basis</span>
            <div class="hugo-widget-arc">
              <span class="hugo-widget-big">${pkg.durationLabel}</span>
              <span class="hugo-widget-sub">Flights · Visas · 5★ Hotels</span>
            </div>
            <p class="hugo-widget-foot">${pkg.transferBasis}</p>
          </div>
        </div>
      </article>
    `;
  };

  const renderGlobalFarerCard = (id, idx) => {
    const pkg = packagesData[id];
    if (!pkg) return '';
    const delayClass = `anim-delay-${(idx % 3) + 1}`;

    return `
      <article 
        class="farer-mag-card anim-reveal-text ${delayClass}" 
        onclick="window.rhordwayApp.selectServiceAndScroll('Vacation & Holiday Enquiry', '${pkg.title}')"
      >
        <div class="farer-img-frame">
          <img 
            src="${pkg.heroImage}" 
            alt="${pkg.heroImageAlt}" 
            loading="lazy" 
          />
          <div class="farer-subtle-gradient"></div>

          <button 
            type="button" 
            class="farer-corner-arrow" 
            aria-label="Enquire about ${pkg.title}"
            onclick="event.stopPropagation(); window.rhordwayApp.selectServiceAndScroll('Vacation & Holiday Enquiry', '${pkg.title}')"
          >
            ↗
          </button>

          <div class="farer-tag-cutout">
            <span class="farer-tag-pill">
              <span class="mw-blue-dot"></span>
              #${pkg.title}
            </span>
          </div>
        </div>

        <div class="farer-card-caption">
          <div class="farer-caption-top">
            <h4 class="farer-caption-title">${pkg.title}</h4>
            <span class="farer-caption-nights">${pkg.durationLabel} · PVT</span>
          </div>
          <p class="farer-caption-sub">${pkg.destinationBreakdown} — ${pkg.subtitle}</p>
        </div>
      </article>
    `;
  };

  return `
    <section class="mw-packages-section" id="hot-deals" style="padding-top:32px;">
      <div class="mw-container">
        
        <div class="hugo-header-row anim-reveal-text">
          <div class="hugo-header-left">
            <span class="hugo-eyebrow">
              <span class="mw-blue-dot"></span>
              RHORDWAY VACATION &amp; HOLIDAY ESCAPES
            </span>
            <h1 class="hugo-editorial-heading">
              Explore the world, one breathtaking destination at a time—with return flights, visas, 5-star stays, and private airport transfers.
            </h1>
          </div>

          <div class="hugo-header-controls">
            <div class="hugo-nav-arrows" aria-label="Switch featured destination">
              <button 
                type="button" 
                class="hugo-arrow-btn" 
                id="hugoPrevBtn" 
                aria-label="Previous destination"
                onclick="window.rhordwayApp.stepMagazinePanel(-1)"
              >
                ←
              </button>
              <button 
                type="button" 
                class="hugo-arrow-btn" 
                id="hugoNextBtn" 
                aria-label="Next destination"
                onclick="window.rhordwayApp.stepMagazinePanel(1)"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Hugo-Style Interactive Expandable Magazine Strip -->
        <div class="hugo-accordion-strip" id="hugoAccordionStrip">
          ${flagshipIds.map((id, idx) => renderHugoStripPanel(id, idx)).join('')}
        </div>

        <div class="mw-tours-header anim-reveal-text">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Global Holiday Collection
            </span>
            <h2 class="mw-huge-heading">
              Curated global<br />vacation destinations
            </h2>
          </div>

          <a 
            href="#booking-collation" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            <span class="mw-action-pill">PLAN MY GETAWAY</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <!-- Farer-Style Large-Image Magazine Grid (9 Global Destinations) -->
        <div class="farer-magazine-grid" id="refDealsGrid">
          ${globalIds.map((id, idx) => renderGlobalFarerCard(id, idx)).join('')}
        </div>

      </div>
    </section>
  `;
}


  /* --- DestinationFeature.js --- */
function renderDestinationFeature() {
  return `
    <section class="ref-top-destinations-section mw-destinations-section" id="top-destinations">
      <div class="mw-container">
        
        <!-- Section Header (Marwa Editorial Style) -->
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Top Destinations
            </span>
            <h2 class="mw-huge-heading">
              Iconic landmarks &<br />coastal sanctuaries
            </h2>
          </div>
          <p class="mw-header-side-desc">
            Every Rhordway itinerary blends 5-star resort comfort, private cultural access, and unforgettable natural wonders.
          </p>
        </div>

        <!-- 4-Column Bento / Mosaic Grid (With Mobile Swipe-In) -->
        <div class="ref-bento-grid" id="destinationCollageGrid">
          
          <!-- Column 1: Tall Editorial Portrait Card (Zanzibar Stone Town) -->
          <div class="ref-bento-col col-1 collage-swipe-col" data-swipe="left">
            <div class="ref-mosaic-card card-tall-editorial collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/zanzibar-stone-town.jpg" 
                alt="Historic Stone Town Zanzibar carved doors and ancient architecture" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Stone Town & JAZ Elite Aurora</h3>
                <p class="ref-mosaic-desc">
                  Ancient UNESCO-listed alleys, Mnemba Island dolphin reefs, Kendwa Beach, and 5-star all-inclusive coastal luxury.
                </p>
              </div>
            </div>
          </div>

          <!-- Column 2: 2 Stacked Cards (Doha Museum + Nairobi Safari) -->
          <div class="ref-bento-col col-2 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art reflection pool in Doha" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">DOHA · QATAR</span>
                <h3 class="ref-mosaic-landmark">National Museum & Villaggio</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/nairobi-safari.jpg" 
                alt="Rothschild giraffes and safari in Nairobi Kenya" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">NAIROBI · KENYA</span>
                <h3 class="ref-mosaic-landmark">Safari & Giraffe Sanctuary</h3>
              </div>
            </div>
          </div>

          <!-- Column 3: Extra Tall Feature Card (Doha Skyline) -->
          <div class="ref-bento-col col-3 collage-swipe-col" data-swipe="left">
            <div class="ref-mosaic-card card-tall-center collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Illuminated modern skyline along Doha Corniche" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">QATAR</span>
                <h3 class="ref-mosaic-landmark">Doha Skyline Corniche</h3>
              </div>
            </div>
          </div>

          <!-- Column 4: 2 Stacked Cards (Bali Ubud + Sea Turtle Sanctuary) -->
          <div class="ref-bento-col col-4 collage-swipe-col" data-swipe="right">
            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="left">
              <img 
                src="./assets/images/bali-ubud.jpg" 
                alt="Luxury infinity pool overlooking Ubud jungle terraces in Bali" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">BALI & SINGAPORE</span>
                <h3 class="ref-mosaic-landmark">Ubud Rainforest & Marina Bay</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half collage-card-swipe" data-swipe-mobile="right">
              <img 
                src="./assets/images/zanzibar-turtles.jpg" 
                alt="Giant sea turtles at Baraka Natural Aquarium Zanzibar" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Baraka Sea Turtles</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}


  /* --- ActivityGallery.js --- */


function renderActivityGallery() {
  const activities = packagesData['doha-zanzibar'].activities || [];

  return `
    <section class="section-padding gallery-section" id="gallery">
      <div class="container">
        <header class="section-header">
          <p class="eyebrow">Visual Monograph</p>
          <h2 class="section-title">Experiences Across Doha & Zanzibar</h2>
          <p class="section-subtitle">
            From modern architectural marvels in the Gulf to Swahili reef lagoons, glimpse the genuine moments planned across your journey.
          </p>
        </header>

        <div class="gallery-grid">
          ${activities.map((act) => `
            <figure class="gallery-item" tabindex="0">
              <img 
                src="${act.image}" 
                alt="${act.alt}" 
                loading="lazy" 
                width="800" 
                height="600"
              />
              <figcaption class="gallery-caption-overlay">
                <span class="gallery-tag">${act.location} · ${act.tag}</span>
                <h4 class="gallery-caption-title">${act.title}</h4>
                <p class="gallery-caption-text">${act.caption}</p>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}


  /* --- PriceOptionSelector.js --- */


function renderGrandPrixFeature() {
  const pkg = packagesData['doha-grand-prix'];
  const options = pkg.pricing.options || [];

  return `
    <section class="section-padding grand-prix-feature" id="doha-grand-prix">
      <div class="container">
        <div class="editorial-header-banner">
          <p class="eyebrow" style="color:#ff6b66;">Motorsport & City Monograph · November 25 – December 1, 2026</p>
          <h2 class="editorial-headline">Experience Doha beyond the ordinary.</h2>
          <p class="section-subtitle" style="max-width:720px;">
            A premier six-night journey combining Qatar’s contemporary architectural marvels, rich desert landscapes, and the spectacle of a three-day Formula 1 Grand Prix weekend.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr; gap:var(--space-12); align-items:start;" class="grand-prix-layout">
          <!-- Left: Narrative & Interactive Occupancy Selector -->
          <div>
            <div class="occupancy-selector-box">
              <span class="eyebrow" style="color:var(--text-muted);">Occupancy & Pricing Options</span>
              <h3 style="font-family:var(--font-display); font-size:1.6rem; margin-top:4px;">
                Select Your Accommodation Preference
              </h3>
              <p style="font-size:var(--text-supporting); color:var(--text-secondary); margin-top:4px;">
                Choose between double sharing or private single occupancy. Your selection dynamically adjusts your booking enquiry details.
              </p>

              <div class="occupancy-toggle-group" role="radiogroup" aria-label="Occupancy selection">
                ${options.map((opt) => {
                  const isDouble = opt.occupancy.includes('Double');
                  const optionId = isDouble ? 'double' : 'single';
                  return `
                    <button 
                      type="button" 
                      class="occupancy-card-btn" 
                      id="occupancy-btn-${optionId}" 
                      role="radio" 
                      aria-checked="false" 
                      onclick="window.rhordwayApp.selectOccupancy('${optionId}', '${opt.priceFormatted}')"
                    >
                      <span class="occupancy-label">${opt.occupancy}</span>
                      <span class="occupancy-price">${opt.priceFormatted}</span>
                      <span class="occupancy-note">${opt.note}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Selected Status Display -->
              <div id="occupancySelectionFeedback" style="margin-top:var(--space-4); padding:var(--space-3) var(--space-4); background:var(--surface-primary); border-radius:var(--radius-xs); border:1px solid var(--border-subtle); font-size:0.85rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center;">
                <span>Please select an occupancy option above to generate an enquiry.</span>
                <span id="selectedPriceDisplay" style="font-weight:600; color:var(--text-primary); font-family:var(--font-display); font-size:1.15rem;"></span>
              </div>

              <div style="margin-top:var(--space-6); display:flex; gap:var(--space-4); flex-wrap:wrap;">
                <button 
                  type="button" 
                  class="btn btn-primary" 
                  id="gpEnquiryBtn"
                  onclick="window.rhordwayApp.openEnquiryModal('doha-grand-prix')"
                >
                  Enquire for Grand Prix Experience
                </button>
              </div>
            </div>

            <!-- Inclusions List for Grand Prix -->
            <div style="margin-top:var(--space-8);">
              <h4 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:var(--space-4);">
                Package Inclusions (6 Nights)
              </h4>
              <div class="inclusions-grid">
                ${pkg.inclusions.map(inc => `
                  <div class="inclusion-card">
                    <div class="inclusion-icon-wrapper" aria-hidden="true" style="color:#ff6b66;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="inclusion-text">
                      <h4>${inc.title}</h4>
                      <p>${inc.description}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


  /* --- InformationCollation.js --- */


function renderInformationCollation() {
  return `
    <section class="mw-consultation-section" id="booking-collation">
      <div class="mw-container">
        <div class="mw-consultation-shell">
          
          <!-- Left Editorial Info Column -->
          <div class="mw-consultation-left">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Rhordway Consultation Desk
            </span>
            <h2 class="mw-services-heading" style="margin-bottom:14px;">
              Book a Consultation With Our Specialists<span style="color:#0080E8;">.</span>
            </h2>
            <p class="mw-services-lead" style="max-width:440px; margin-bottom:28px;">
              Whether you are applying for a Student Visa (Undergraduate or Postgraduate, Proof of Funds &amp; Statement of Purpose), filing a Travel or Migration Visa, processing a Passport, or booking Flights, Transfers &amp; Travel Insurance—our team is ready to assist you.
            </p>

            <div class="mw-consult-contact-cards">
              <div class="mw-consult-contact-row">
                <span class="mw-consult-dot"></span>
                <div>
                  <span class="mw-consult-label">Official Phone &amp; WhatsApp Lines</span>
                  <strong class="mw-consult-val">
                    <a href="tel:+2348164206030">${siteConfig.primaryPhoneFormatted}</a> · 
                    <a href="tel:+2349013397830">${siteConfig.alternatePhone}</a>
                  </strong>
                </div>
              </div>

              <div class="mw-consult-contact-row">
                <span class="mw-consult-dot"></span>
                <div>
                  <span class="mw-consult-label">Official Email &amp; Social Handle</span>
                  <strong class="mw-consult-val">
                    <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a> · ${siteConfig.instagram}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Clean White & Black Consultation Form -->
          <div class="mw-consultation-card">
            <form id="collationForm" onsubmit="window.rhordwayApp.handleCollationSubmit(event)">
              
              <div class="mw-form-field" style="margin-bottom:18px;">
                <label for="collationServiceType" class="mw-form-label">Service Required *</label>
                <div class="select-field-box">
                  <select id="collationServiceType" name="serviceType" class="form-select-styled">
                    <option value="Student Visa & Study Abroad" selected>Student Visa &amp; Study Abroad (Admissions, Proof of Funds &amp; SOP)</option>
                    <option value="Travel & Visit Visa Processing">Travel &amp; Visit Visa Processing (UK, Schengen, Canada, US, UAE)</option>
                    <option value="Global Migration & Relocation">Global Migration &amp; Relocation Pathways</option>
                    <option value="Passport Processing & Renewal">Passport Processing &amp; Renewal Assistance</option>
                    <option value="Flight Booking, Hotel & Airport Transfer">Flight Booking, Hotel Transfer &amp; Airport Transfer</option>
                    <option value="Travel Insurance">Comprehensive Travel Insurance</option>
                    <option value="Vacation & Holiday Enquiry">Vacation &amp; Holiday Enquiry</option>
                  </select>
                  <span class="select-chevron-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="mw-form-field">
                  <label for="guestFullName" class="mw-form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="guestFullName" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. Amara Johnson" 
                    required 
                  />
                </div>

                <div class="mw-form-field">
                  <label for="guestPhone" class="mw-form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="guestPhone" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. +234 816 420 6030" 
                    required 
                  />
                </div>
              </div>

              <div class="form-grid-2" style="margin-top:16px;">
                <div class="mw-form-field">
                  <label for="guestEmail" class="mw-form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="guestEmail" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. amara@example.com" 
                    required 
                  />
                </div>

                <div class="mw-form-field">
                  <label for="departureCity" class="mw-form-label">Target Destination Country *</label>
                  <input 
                    type="text" 
                    id="departureCity" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. UK, Canada, France, Germany, Spain" 
                    required
                  />
                </div>
              </div>

              <div class="mw-form-field" style="margin-top:16px;">
                <label for="specialRequests" class="mw-form-label">How Can We Help You? (Optional)</label>
                <input 
                  type="text" 
                  id="specialRequests" 
                  class="form-input-luxury" 
                  style="padding-left:16px;"
                  placeholder="e.g. Need Undergraduate Student Visa, Proof of Funds & Statement of Purpose" 
                />
              </div>

              <div style="margin-top:24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;">
                <button type="submit" class="mw-action-group" style="border:none; background:none; padding:0;">
                  <span class="mw-action-pill" style="padding:15px 32px; font-size:0.92rem;">SEND MY REQUEST</span>
                  <span class="mw-action-circle" style="width:48px; height:48px;" aria-hidden="true">↗</span>
                </button>

                <span style="font-size:0.78rem; color:#71717A;">
                  Connects directly with a Rhordway specialist
                </span>
              </div>

              <div id="collationSuccessAlert" class="collation-success-alert" style="display:none; margin-top:18px;">
                <div style="font-size:0.95rem; font-weight:800; color:#0F1115; margin-bottom:4px;">
                  ✓ Consultation Request Ready!
                </div>
                <p style="font-size:0.84rem; color:#52525B; line-height:1.5;">
                  Connecting you directly with a Rhordway specialist on WhatsApp (<strong>${siteConfig.primaryPhoneFormatted}</strong>).
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}


  /* --- TrustSection.js --- */
function renderTrustSection() {
  return `
    <section class="mw-magazine-section" id="responsibilities">
      <div class="mw-container">
        
        <!-- Editorial Masthead Header -->
        <div class="mw-magazine-masthead anim-reveal-text">
          <div class="mw-magazine-eyebrow-row">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              The Rhordway Dossier · Editorial Spread
            </span>
            <span class="mw-magazine-edition-label">VOL. 2026 // ISSUE 04</span>
          </div>

          <h2 class="mw-magazine-headline">
            Why Nigeria’s Most Discerning Travelers &amp; Students Choose Rhordway<span style="color:#0080E8;">.</span>
          </h2>

          <p class="mw-magazine-lead">
            Most visa refusals happen because of poorly structured Proof of Funds, weak Statements of Purpose, or incomplete embassy files. We treat global travel, university admissions, and migration as an exacting science—delivering unmatched accuracy, speed, and discretion.
          </p>
        </div>

        <!-- Magazine Spread Grid (Left: Lead Cover Story · Right: 3 Stacked Editorial Articles) -->
        <div class="mw-magazine-spread anim-reveal-text anim-delay-1">
          
          <!-- Left: Lead Feature Column (No. 01 Student Visa & POF Authority) -->
          <article class="mw-magazine-feature-card">
            <div class="mw-magazine-card-meta">
              <span class="mw-magazine-tag-pill">SPECIAL REPORT · ADMISSIONS &amp; POF DESK</span>
              <span class="mw-magazine-folio">NO. 01</span>
            </div>

            <div class="mw-magazine-feature-img-wrap">
              <img 
                src="./assets/images/responsibilities-banner.jpg" 
                alt="Rhordway Student Visa, Admissions and Proof of Funds Advisory" 
                class="mw-magazine-feature-img"
                loading="lazy"
              />
            </div>

            <div class="mw-magazine-feature-body">
              <span class="mw-magazine-category">UNDERGRADUATE &amp; POSTGRADUATE</span>
              <h3 class="mw-magazine-feature-title">
                Student Visa Experts &amp; Sovereign Proof of Funds
              </h3>
              <p class="mw-magazine-feature-desc">
                From securing direct university admissions across top institutions in the UK, Canada, France, Germany, Spain, and the US to auditing bank accounts for liquid Proof of Funds compliance. Our education desk writes and reviews authentic, refusal-proof Statements of Purpose (SOPs) tailored to consular expectations.
              </p>

              <div class="mw-magazine-pills">
                <span>✓ University Placement &amp; CAS</span>
                <span>✓ Proof of Funds Advisory</span>
                <span>✓ Bespoke Statement of Purpose</span>
              </div>
            </div>
          </article>

          <!-- Right: Stacked Editorial Articles (02, 03, 04) -->
          <div class="mw-magazine-side-stack">
            
            <!-- Article No. 02 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">02</span>
                <div>
                  <span class="mw-magazine-tag">GLOBAL MOBILITY</span>
                  <h3 class="mw-magazine-article-title">Global Visas &amp; Strategic Migration</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Embassy-compliant filing for Schengen countries (France, Germany, Spain), the UK, Canada, and the United States. We audit every financial affidavit, employment record, and ties-to-home evidence with 98% first-time accuracy.
              </p>
              <div class="mw-magazine-article-meta">
                <span>UK · Canada · Schengen · USA</span>
                <span class="mw-blue-dot"></span>
                <span>98% Accuracy</span>
              </div>
            </article>

            <!-- Article No. 03 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">03</span>
                <div>
                  <span class="mw-magazine-tag">DOCUMENTATION &amp; LOGISTICS</span>
                  <h3 class="mw-magazine-article-title">Fast-Track Passports &amp; Priority Flights</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Urgent Nigerian passport renewals and fresh booklet coordination expedited without bureaucratic stalling. Coupled with priority international flight bookings on global carriers and verified, embassy-compliant travel insurance.
              </p>
              <div class="mw-magazine-article-meta">
                <span>Fast-Track Renewals</span>
                <span class="mw-blue-dot"></span>
                <span>Embassy-Approved Insurance</span>
              </div>
            </article>

            <!-- Article No. 04 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">04</span>
                <div>
                  <span class="mw-magazine-tag">WHITE-GLOVE CONCIERGE</span>
                  <h3 class="mw-magazine-article-title">Airport Transfers &amp; 5-Star Accommodations</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Your journey extends seamlessly past airport customs. We arrange private meet-and-greet airport pickups, chauffeur drop-offs, and hand-selected luxury hotel reservations across all global destinations.
              </p>
              <div class="mw-magazine-article-meta">
                <span>VIP Airport Meet &amp; Greet</span>
                <span class="mw-blue-dot"></span>
                <span>5-Star Handpicked Stays</span>
              </div>
            </article>

          </div>

        </div>

        <!-- Editorial Bottom Verification Ribbon & CTA -->
        <div class="mw-magazine-footer-ribbon anim-reveal-text anim-delay-2">
          <div class="mw-magazine-metrics-grid">
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">98%</span>
              <span class="mw-mag-stat-lbl">Documentation Accuracy</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">14+</span>
              <span class="mw-mag-stat-lbl">Destination Countries</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">100%</span>
              <span class="mw-mag-stat-lbl">Verified Embassy Filings</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">24/7</span>
              <span class="mw-mag-stat-lbl">Direct Travel Specialist Desk</span>
            </div>
          </div>

          <div class="mw-magazine-cta-row">
            <button 
              type="button" 
              class="mw-action-group"
              onclick="window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">BOOK YOUR CONSULTATION</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderUnleashWanderlust() {
  return '';
}


  /* --- FAQAccordion.js --- */
function renderFAQAccordion() {
  const companyFaqs = [
    {
      id: 'faq-student-visa',
      question: 'What does Rhordway’s Student Visa & Study Abroad service include?',
      answer:
        'We provide end-to-end Undergraduate and Postgraduate admission and student visa processing for the UK, Canada, France, Germany, Spain, Ireland, and the USA. Our support covers course and institution selection, Statement of Purpose (SOP) writing and review, Proof of Funds advisory, admission letter/CAS processing, and full student visa filing.'
    },
    {
      id: 'faq-travel-migration',
      question: 'Which countries do you cover for Travel Visas and Global Migration?',
      answer:
        'We process tourist, business, family visit, and migration visas for France, Germany, Spain (and all 29 Schengen countries), the United Kingdom, Canada, the United States, Qatar, UAE (Dubai), Tanzania, Kenya, Egypt, and South Africa—complete with document verification and appointment booking.'
    },
    {
      id: 'faq-passport',
      question: 'Can Rhordway assist with fresh Nigerian passport applications and renewals?',
      answer:
        'Yes. We assist individuals, students, and families with fresh Nigerian passport applications, renewals, biometric capturing coordination, and travel document preparation so your passport is ready without delays.'
    },
    {
      id: 'faq-flights-transfers',
      question: 'Do you handle Flight Booking, Travel Insurance, and Airport/Hotel Transfers?',
      answer:
        'Absolutely. We book domestic and international flights across global airlines, issue embassy-compliant Travel Insurance policies, reserve verified hotels, and arrange private Airport Transfers and Hotel Transfers worldwide.'
    },
    {
      id: 'faq-consultation',
      question: 'How do I book a consultation with a Rhordway specialist?',
      answer:
        'Simply click any "Book Consultation" button on our website, select the service you need (Student Visa, Travel Visa, Migration, Passport, Flights, or Holidays), fill in your contact details, and submit. You will be connected directly with our specialist team on WhatsApp (+234 816 420 6030 / +234 901 339 7830).'
    }
  ];

  return `
    <section class="section-padding" id="faqs" style="background-color:#FFFFFF; border-top:1px solid #F1F1F3;">
      <div class="mw-container">
        <header class="section-header text-center">
          <span class="mw-soft-pill" style="margin-bottom:14px;">
            <span class="mw-blue-dot"></span>
            Clear Information
          </span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Essential answers regarding Student Visas, Proof of Funds, Statement of Purpose, Global Migration, Passports, Flights, and Travel Insurance.
          </p>
        </header>

        <div class="faq-container" role="region" aria-label="Frequently Asked Questions Accordion">
          ${companyFaqs.map((faq) => `
            <div class="faq-item" id="faq-item-${faq.id}">
              <button 
                type="button" 
                class="faq-trigger" 
                id="faq-btn-${faq.id}" 
                aria-expanded="false" 
                aria-controls="faq-panel-${faq.id}"
                onclick="window.rhordwayApp.toggleFAQ('${faq.id}')"
              >
                <span>${faq.question}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div 
                class="faq-panel" 
                id="faq-panel-${faq.id}" 
                role="region" 
                aria-labelledby="faq-btn-${faq.id}"
              >
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}


  /* --- FinalCTA.js --- */


function renderFinalCTA() {
  return '';
}

function renderSiteFooter() {
  return `
    <footer class="ref-footer">
      <div class="ref-footer-container">
        
        <div class="ref-footer-main-row">
          <!-- Col 1: Brand & Socials -->
          <div class="ref-footer-brand-col">
            <a 
              href="#home" 
              class="ref-footer-logo" 
              aria-label="${siteConfig.brandName} Home"
              onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
            >
              <img 
                src="./assets/images/rhordway-logo-dark.png" 
                alt="${siteConfig.brandName}" 
                class="rhordway-footer-logo-img"
                width="155"
                height="29"
              />
            </a>
            <p class="ref-footer-tagline">
              We Make Travel Processing Simple And Stress-Free. Explore the world, one breathtaking destination at a time.
            </p>

            <div class="ref-social-icons-row" aria-label="Social media channels">
              <!-- Facebook -->
              <a href="https://facebook.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-fb" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <!-- Twitter / X -->
              <a href="https://twitter.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-tw" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <!-- Instagram -->
              <a href="https://instagram.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-ig" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <!-- WhatsApp -->
              <a href="https://wa.me/2348164206030" target="_blank" rel="noopener" class="ref-social-icon icon-wa" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Company Pages -->
          <div class="ref-footer-links-col">
            <h4 class="ref-footer-col-title">Company &amp; Services</h4>
            <ul class="ref-footer-nav-list">
              <li><a href="#home" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')">Home</a></li>
              <li><a href="#about" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about')">About Rhordway</a></li>
              <li><a href="#migration-services" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')">Migration &amp; Visa Services</a></li>
              <li><a href="#holidays" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays')">Holidays &amp; Escapes</a></li>
              <li><a href="#booking-collation" onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()">Book Consultation</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact Us -->
          <div class="ref-footer-contact-col">
            <h4 class="ref-footer-col-title">Contact Us</h4>
            <p class="ref-footer-contact-line" style="margin-bottom:6px;">
              Phone / WhatsApp: <a href="tel:+2348164206030">${siteConfig.primaryPhoneFormatted}</a>
            </p>
            <p class="ref-footer-contact-line" style="margin-bottom:6px;">
              Alternate Line: <a href="tel:+2349013397830">${siteConfig.alternatePhone}</a>
            </p>
            <p class="ref-footer-contact-line" style="margin-bottom:14px;">
              Email: <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a>
            </p>
            <div>
              <a 
                href="#booking-collation" 
                class="mw-black-pill-btn"
                onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
              >
                BOOK CONSULTATION ↗
              </a>
            </div>
          </div>

        </div>

        <div class="ref-footer-copyright">
          Copyright &copy; 2026 Rhordway™ (${siteConfig.instagram}). All rights reserved.
        </div>

      </div>
    </footer>
  `;
}


  /* --- EnquiryModal.js --- */
function renderEnquiryModal() {
  return `
    <div 
      class="config-modal-overlay" 
      id="enquiryModalOverlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="enquiryModalTitle"
    >
      <div class="config-modal">
        <div class="config-modal-header">
          <div>
            <span class="eyebrow" id="enquiryModalEyebrow" style="color:var(--brand-secondary);">
              WhatsApp Enquiry Dispatch
            </span>
            <h3 class="config-modal-title" id="enquiryModalTitle">
              Travel Consultant Enquiry
            </h3>
          </div>
          <button 
            type="button" 
            class="modal-close-btn" 
            id="enquiryModalCloseBtn" 
            aria-label="Close enquiry dialog"
            onclick="window.rhordwayApp.closeEnquiryModal()"
          >
            &times;
          </button>
        </div>

        <p style="font-size:var(--text-supporting); color:var(--text-secondary); line-height:1.5;">
          The enquiry below will be sent directly to Rhordway’s official WhatsApp travel desk.
        </p>

        <!-- Notice if WhatsApp number is in placeholder mode -->
        <div id="whatsappPlaceholderNotice" style="margin-top:var(--space-3); padding:var(--space-3); background:rgba(201,168,117,0.1); border:1px solid var(--border-brand); border-radius:var(--radius-xs); font-size:0.75rem; color:var(--brand-secondary);">
          <strong>Note:</strong> Client WhatsApp business number is currently in configuration placeholder mode (per Section 10). You can test the formatted message below or enter a test number.
        </div>

        <div style="margin-top:var(--space-4);">
          <label style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); font-weight:600;">
            Pre-filled Message Preview:
          </label>
          <div class="config-preview-box" id="enquiryMessagePreview"></div>
        </div>

        <!-- Optional live test phone input if number not yet hardcoded -->
        <div id="liveTestNumberContainer" style="margin-bottom:var(--space-6);">
          <label for="testPhoneInput" style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:4px;">
            Test with temporary phone number (e.g. 2348012345678):
          </label>
          <input 
            type="tel" 
            id="testPhoneInput" 
            placeholder="Enter international number without +" 
            style="width:100%; padding:10px 14px; background:var(--surface-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-xs); color:#fff; font-size:0.875rem;"
          />
        </div>

        <div style="display:flex; gap:var(--space-3); justify-content:flex-end; flex-wrap:wrap;">
          <button 
            type="button" 
            class="btn btn-secondary" 
            onclick="window.rhordwayApp.copyEnquiryMessage()"
          >
            Copy Message
          </button>
          <button 
            type="button" 
            class="btn btn-whatsapp" 
            id="proceedToWhatsAppBtn"
            onclick="window.rhordwayApp.sendWhatsAppDirect()"
          >
            Open in WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;
}


  /* --- main.js --- */













class RhordwayApplication {
  constructor() {
    this.currentPage = 'home';
    this.currentEnquiryParams = {};
    this.flagshipOrder = ['zanzibar-nairobi', 'doha-nairobi', 'doha-zanzibar', 'doha-grand-prix'];
    this.activeMagazinePkgId = 'zanzibar-nairobi';
  }

  init() {
    const hash = (window.location.hash || '').replace('#', '');
    if (['home', 'about', 'migration-services', 'holidays'].includes(hash)) {
      this.currentPage = hash;
    }

    this.renderApp();
    this.bindGlobalEvents();
    this.updateActiveNavState();
    this.initScrollAnimations();
  }

  renderPageBody() {
    if (this.currentPage === 'about') {
      return `
        ${renderAboutPage()}
        ${renderTrustSection()}
        ${renderInformationCollation()}
      `;
    }

    if (this.currentPage === 'migration-services') {
      return `
        ${renderMigrationServicesPage()}
        ${renderFAQAccordion()}
        ${renderInformationCollation()}
      `;
    }

    if (this.currentPage === 'holidays') {
      return `
        ${renderHolidaysPage()}
        ${renderDestinationFeature()}
        ${renderInformationCollation()}
      `;
    }

    // Default: Home Page (Executive Overview: Hero + Migration Strip + Sticky What We Do + Texts-Left/Image-Right Divisions + Consultation)
    return `
      ${renderCampaignHero()}
      ${renderExperienceSelector()}
      ${renderInformationCollation()}
    `;
  }

  renderApp() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      <div class="site-wrapper">
        ${renderSiteHeader()}
        ${renderMobileNavigation()}
        <main id="main-content">
          ${this.renderPageBody()}
        </main>
        ${renderSiteFooter()}
      </div>
      ${renderEnquiryModal()}

      <!-- Mobile Sticky Consultation Bar -->
      <div class="mobile-sticky-bar" id="mobileStickyBar" style="position:fixed; bottom:0; left:0; right:0; z-index:90; background:rgba(255,255,255,0.96); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border-top:1px solid rgba(0,0,0,0.08); box-shadow:0 -6px 24px rgba(0,0,0,0.06); padding:10px 18px max(10px, env(safe-area-inset-bottom)); display:none; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.65rem; color:#6B7280; text-transform:uppercase; letter-spacing:0.08em; display:block; font-weight:700;">Rhordway™</span>
          <span style="font-size:0.875rem; color:#0F1115; font-weight:800; letter-spacing:-0.01em;">Migration &amp; Visa Experts</span>
        </div>
        <a 
          href="#booking-collation" 
          class="mw-black-pill-btn" 
          style="padding:10px 20px; font-size:0.82rem;"
          onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
        >
          BOOK CONSULTATION ↗
        </a>
      </div>
    `;

    this.initScrollObservers();
  }

  navigateToPage(pageName, scrollTargetId = null) {
    const validPages = ['home', 'about', 'migration-services', 'holidays'];
    const targetPage = validPages.includes(pageName) ? pageName : 'home';
    this.currentPage = targetPage;

    if (typeof window.history?.pushState === 'function') {
      window.history.pushState({ page: targetPage }, '', `#${targetPage}`);
    }

    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.innerHTML = this.renderPageBody();
    } else {
      this.renderApp();
    }

    this.updateActiveNavState();
    this.initScrollAnimations();

    if (scrollTargetId) {
      setTimeout(() => {
        document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavState() {
    document.querySelectorAll('[data-page-nav]').forEach((el) => {
      const page = el.getAttribute('data-page-nav');
      el.classList.toggle('active', page === this.currentPage);
    });
  }

  scrollToConsultation() {
    const section = document.getElementById('booking-collation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('guestFullName')?.focus();
      }, 400);
    } else {
      this.navigateToPage('home', 'booking-collation');
    }
  }

  bindGlobalEvents() {
    const menuBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('mobileNavCloseBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeMobileMenu());
    }

    window.addEventListener('popstate', () => {
      const hash = (window.location.hash || '').replace('#', '');
      if (['home', 'about', 'migration-services', 'holidays'].includes(hash)) {
        this.currentPage = hash;
        const mainEl = document.getElementById('main-content');
        if (mainEl) {
          mainEl.innerHTML = this.renderPageBody();
          this.updateActiveNavState();
          this.initScrollAnimations();
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
        this.closeEnquiryModal();
      }
    });
  }

  initScrollObservers() {
    const header = document.getElementById('siteHeader');
    const mobileBar = document.getElementById('mobileStickyBar');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (mobileBar) {
        if (window.innerWidth < 768 && scrollY > 360) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    }, { passive: true });
  }

  initScrollAnimations() {
    const animTargets = document.querySelectorAll('.collage-swipe-col, .collage-card-swipe, .anim-reveal-text, .ref-glass-card, .farer-mag-card');
    if (!animTargets.length) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      }, {
        threshold: 0.06,
        rootMargin: '20px 0px -10px 0px'
      });

      animTargets.forEach((target) => observer.observe(target));
    } else {
      animTargets.forEach((target) => target.classList.add('is-inview'));
    }
  }

  /* ---------------- Hugo Magazine Accordion Strip Controls ---------------- */
  activateMagazinePanel(pkgId) {
    this.activeMagazinePkgId = pkgId;
    document.querySelectorAll('.hugo-strip-card').forEach((card) => {
      card.classList.toggle('active', card.getAttribute('data-pkg-id') === pkgId);
    });
  }

  stepMagazinePanel(direction) {
    const idx = this.flagshipOrder.indexOf(this.activeMagazinePkgId);
    const nextIdx = (idx + direction + this.flagshipOrder.length) % this.flagshipOrder.length;
    const nextPkgId = this.flagshipOrder[nextIdx];
    this.activateMagazinePanel(nextPkgId);

    const activeCard = document.getElementById(`hugo-panel-${nextPkgId}`);
    const strip = document.getElementById('hugoAccordionStrip');
    if (activeCard && strip && window.innerWidth < 960) {
      strip.scrollTo({ left: activeCard.offsetLeft - 16, behavior: 'smooth' });
    }
  }

  /* ---------------- Mobile Menu Controls ---------------- */
  toggleMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const btn = document.getElementById('menuToggleBtn');
    if (!drawer) return;

    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      btn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const btn = document.getElementById('menuToggleBtn');
    if (!drawer) return;

    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------------- FAQ Accordion Controls ---------------- */
  toggleFAQ(id) {
    const item = document.getElementById(`faq-item-${id}`);
    const trigger = document.getElementById(`faq-btn-${id}`);
    if (!item || !trigger) return;

    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('open');
    });
    document.querySelectorAll('.faq-trigger').forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }

  /* ---------------- Consultation Form Selection & Submission ---------------- */
  selectServiceAndScroll(serviceLabel, destinationLabel = '') {
    const serviceSelect = document.getElementById('collationServiceType');
    if (serviceSelect && serviceLabel) {
      serviceSelect.value = serviceLabel;
    }

    const destInput = document.getElementById('departureCity');
    if (destInput && destinationLabel) {
      destInput.value = destinationLabel;
    }

    this.scrollToConsultation();
  }

  populateAndScrollCollation(pkgId) {
    const pkg = packagesData[pkgId];
    this.selectServiceAndScroll('Vacation & Holiday Enquiry', pkg ? pkg.title : '');
  }

  handleCollationSubmit(event) {
    event.preventDefault();

    const serviceSelect = document.getElementById('collationServiceType');
    const fullNameInput = document.getElementById('guestFullName');
    const phoneInput = document.getElementById('guestPhone');
    const emailInput = document.getElementById('guestEmail');
    const destinationInput = document.getElementById('departureCity');
    const specialRequestsInput = document.getElementById('specialRequests');
    const successAlert = document.getElementById('collationSuccessAlert');

    const serviceNeeded = serviceSelect?.value || 'Student Visa & Study Abroad';
    const fullName = fullNameInput?.value || 'Valued Client';
    const phone = phoneInput?.value || '';
    const email = emailInput?.value || '';
    const destination = destinationInput?.value || 'Global';
    const notes = specialRequestsInput?.value || '';

    const waMessage =
      `*RHORDWAY OFFICIAL CONSULTATION REQUEST*\n\n` +
      `• *Service Required:* ${serviceNeeded}\n` +
      `• *Target Destination:* ${destination}\n` +
      `• *Client Name:* ${fullName}\n` +
      `• *Phone / WhatsApp:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      (notes ? `• *Additional Details:* ${notes}\n` : '') +
      `\nHello Rhordway Team, I would like to book a consultation regarding the service above.`;

    if (successAlert) {
      successAlert.style.display = 'block';
    }

    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  }

  /* ---------------- WhatsApp Modal Controls ---------------- */
  openEnquiryModal(packageType) {
    this.scrollToConsultation();
  }

  closeEnquiryModal() {
    const modal = document.getElementById('enquiryModalOverlay');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  copyEnquiryMessage() {
    const preview = document.getElementById('enquiryMessagePreview');
    if (!preview || !preview.textContent) return;
    navigator.clipboard.writeText(preview.textContent);
  }

  sendWhatsAppDirect() {
    const preview = document.getElementById('enquiryMessagePreview');
    const message = preview?.textContent || buildWhatsAppMessage(this.currentEnquiryParams);
    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
}

const app = new RhordwayApplication();
window.rhordwayApp = app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}


})();
