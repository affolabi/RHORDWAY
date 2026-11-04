export const packagesData = {
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

export const trustHighlights = [
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

export const bookingSteps = [
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

export const faqList = [
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
