(function() {
  'use strict';

  /* --- siteConfig.js --- */
/**
 * RHORDWAY CAMPAIGN CONFIGURATION
 * 
 * Central configuration file for brand settings, contact options,
 * and official WhatsApp integration based on official brand collateral.
 */

const siteConfig = {
  brandName: 'Rhordway',
  brandWordmark: 'Rhordway™',
  brandTagline: 'Curated Travel & Tourism',
  
  /**
   * Official Brand Contact Information from verified marketing assets:
   */
  whatsappNumber: '2348164206030', // Primary WhatsApp business line (+2348164206030)
  alternatePhone: '+2349013397808',
  contactEmail: 'Rhordway@gmail.com',
  instagram: '@Rhordway',

  /**
   * Brand Design System Palette:
   * Sourced directly from Rhordway brand flyers:
   * - Rhordway Azure Blue: #0084E6 / #0090F0
   * - Rhordway Crimson Red: #E52E2E (Action CTA "Book A Slot Today!")
   * - Sunburst Gold: #FFC72C
   */
  colors: {
    primaryBlue: '#0084E6',
    primaryBlueHover: '#0070C5',
    accentRed: '#E52E2E',
    accentRedHover: '#C61E1E',
    sunburstGold: '#FFC72C',
    darkNavy: '#0B0F19',
    surfaceCard: '#131A29',
  },

  legal: {
    copyrightYear: 2026,
    disclaimer: 'Rhordway facilitates travel arrangements and visa applications based on verified service partner terms. Final availability, payment schedules, and airline policies are confirmed prior to booking.'
  }
};


  /* --- packagesData.js --- */
const packagesData = {
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

const trustHighlights = [
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

const bookingSteps = [
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

const faqList = [
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
    <header class="ref-header" id="siteHeader">
      <div class="ref-header-container">
        <a href="#" class="ref-brand-logo" aria-label="${siteConfig.brandName} Home">
          <span class="ref-brand-chevron">&gt;&gt;</span>
          <span class="ref-brand-name">Rhordway</span>
        </a>

        <nav class="ref-nav-links" aria-label="Main Navigation">
          <a href="#" class="ref-nav-link active">Home</a>
          <a href="#hot-deals" class="ref-nav-link">Packages Tour</a>
          <a href="#top-destinations" class="ref-nav-link">Top Destinations</a>
          <a href="#responsibilities" class="ref-nav-link">Our Commitments</a>
          <a href="#booking-collation" class="ref-nav-link ref-nav-highlight">Reservation Collation</a>
        </nav>

        <div class="ref-header-actions">
          <a href="#booking-collation" class="ref-header-cta-btn">
            Book Trip
          </a>

          <button 
            type="button" 
            class="menu-toggle-btn" 
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
        <div class="brand-wrap">
          <div class="brand-circle-icon"></div>
          <span class="brand-text">RHORDWAY</span>
        </div>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a href="#about" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">About</a>
        <a href="#experiences" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Tour</a>
        <a href="#packages" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Package</a>
        <a href="#booking-collation" class="mobile-nav-link" style="color:var(--brand-primary);" onclick="window.rhordwayApp.closeMobileMenu()">Collation & PDF</a>
        <a href="#contact" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Contact</a>
      </nav>

      <div style="margin-top:auto; padding-top:24px;">
        <a 
          href="#booking-collation" 
          class="btn-pill-dark" 
          style="display:block; text-align:center; padding:16px;" 
          onclick="window.rhordwayApp.closeMobileMenu();"
        >
          Book Trip Now
        </a>
      </div>
    </div>
  `;
}


  /* --- CampaignHero.js --- */
function renderCampaignHero() {
  return `
    <section class="ref-hero-section" id="hero">
      <div class="ref-hero-bg-wrap">
        <img 
          src="./assets/images/hero-reference-bridge.jpg" 
          alt="Pont Alexandre III bridge illuminated at twilight with golden lamps" 
          class="ref-hero-bg-img"
          fetchpriority="high"
        />
        <div class="ref-hero-scrim"></div>
      </div>

      <div class="ref-hero-container">
        <div class="ref-hero-grid">
          
          <!-- Left Column: Display Typography & CTA -->
          <div class="ref-hero-content">
            <h1 class="ref-hero-title">
              EXPLORE<br />
              BEAUTIFUL<br />
              WORLD WITH US
            </h1>

            <p class="ref-hero-subtitle">
              &ldquo;Let us take the hassle out of travel planning, so you can focus on the adventure ahead.&rdquo;
            </p>

            <div class="ref-hero-btn-row">
              <a href="#hot-deals" class="ref-hero-discover-btn">
                Discover Now
              </a>
            </div>
          </div>

          <!-- Right Column: 3 Staggered Floating Cards (Exact Reference Style) -->
          <div class="ref-hero-cards-cluster" aria-label="Featured Holiday Destinations">
            <!-- Card 1: Large / Left (Doha Architectural Heritage) -->
            <div class="ref-floating-card card-tall">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art illuminated at twilight" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Doha</div>
            </div>

            <!-- Card 2: Medium / Center (Zanzibar Turquoise Coast) -->
            <div class="ref-floating-card card-mid">
              <img 
                src="./assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar white sand beach and dhow boat" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Zanzibar</div>
            </div>

            <!-- Card 3: Compact / Right (Doha Formula 1 Grand Prix) -->
            <div class="ref-floating-card card-compact">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 night race in Doha" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Formula 1</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}


  /* --- ExperienceSelector.js --- */


function renderExperienceSelector() {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="ref-hot-deals-section" id="hot-deals">
      <div class="ref-deals-wrapper">
        
        <!-- Section Header Bar (Reference style) -->
        <div class="ref-deals-header">
          <div class="ref-deals-title-box">
            <h2 class="ref-section-heading">HOT DEALS</h2>
            <p class="ref-section-subheading">Fire up your savings with our hot deals</p>
          </div>

          <div class="ref-nav-arrows-box" aria-hidden="true">
            <button type="button" class="ref-arrow-circle" aria-label="Previous deal">&larr;</button>
            <button type="button" class="ref-arrow-circle" aria-label="Next deal">&rarr;</button>
          </div>
        </div>

        <!-- 4 Hot Deals Cards (Reference Grid) -->
        <div class="ref-deals-grid">
          
          <!-- Deal 1: Doha + Zanzibar -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar tropical beach and turquoise ocean" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha + Zanzibar</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>7 Days (Dec 12–19)</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span>5-Star Luxury Hotels</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                    <span>All-Inclusive Meals</span>
                  </li>
                </ul>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 2: Doha Grand Prix -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 night race cars in Doha" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha Grand Prix</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>6 Days (Nov 25 – Dec 1)</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    <span>3-Day F1 Race Access</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>5-Star Hotel & Safari</span>
                  </li>
                </ul>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 3: Zanzibar Coral Atoll -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-mnemba.jpg" 
                alt="Zanzibar Mnemba Atoll turquoise reef" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Mnemba Island</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                    </svg>
                    <span>7 Days Coastal Tour</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span>Private Villa Resort</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>Snorkel & Dhow Cruise</span>
                  </li>
                </ul>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 4: Doha Desert Safari & Skyline -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-desert-safari.jpg" 
                alt="Doha Desert Dunes Safari to the Inland Sea" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha Safari & City</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                    </svg>
                    <span>6 Days Adventure</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Desert Dune Bashing</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>Museum & VIP Souq</span>
                  </li>
                </ul>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  `;
}


  /* --- DestinationFeature.js --- */
function renderDestinationFeature() {
  return `
    <section class="ref-top-destinations-section" id="top-destinations">
      <div class="ref-container">
        
        <!-- Section Header -->
        <div class="ref-destinations-header text-center">
          <h2 class="ref-section-heading">TOP DESTINATION</h2>
          <p class="ref-section-subheading">Experience the world's top destinations like never before</p>
        </div>

        <!-- 4-Column Bento / Mosaic Grid (Exact Reference Composition) -->
        <div class="ref-bento-grid">
          
          <!-- Column 1: Tall Editorial Portrait Card (Zanzibar Stone Town) -->
          <div class="ref-bento-col col-1">
            <div class="ref-mosaic-card card-tall-editorial">
              <img 
                src="./assets/images/zanzibar-stone-town.jpg" 
                alt="Historic Stone Town Zanzibar carved doors and ancient architecture" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Stone Town Heritage</h3>
                <p class="ref-mosaic-desc">
                  Ancient UNESCO-listed labyrinthine alleys, brass-studded carved doors, fragrant clove bazaars, and pristine shores along the turquoise Indian Ocean.
                </p>
              </div>
            </div>
          </div>

          <!-- Column 2: 2 Stacked Cards (Doha Museum + Zanzibar Lagoons) -->
          <div class="ref-bento-col col-2">
            <div class="ref-mosaic-card card-half">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art reflection pool in Doha" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">DOHA</span>
                <h3 class="ref-mosaic-landmark">Museum of Islamic Art</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half">
              <img 
                src="./assets/images/zanzibar-kayak.jpg" 
                alt="Crystal clear sea kayaking in Zanzibar" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">ZANZIBAR</span>
                <h3 class="ref-mosaic-landmark">Kendwa Coral Lagoons</h3>
              </div>
            </div>
          </div>

          <!-- Column 3: Extra Tall Feature Card (Doha Skyline) -->
          <div class="ref-bento-col col-3">
            <div class="ref-mosaic-card card-tall-center">
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

          <!-- Column 4: 2 Stacked Cards (Formula 1 Lusail + Sea Turtle Sanctuary) -->
          <div class="ref-bento-col col-4">
            <div class="ref-mosaic-card card-half">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Lusail International Circuit Formula 1 night racing" 
                loading="lazy" 
              />
              <div class="ref-mosaic-scrim"></div>
              <div class="ref-mosaic-content">
                <span class="ref-mosaic-country">QATAR</span>
                <h3 class="ref-mosaic-landmark">Lusail F1 Circuit</h3>
              </div>
            </div>

            <div class="ref-mosaic-card card-half">
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
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="section-padding collation-section" id="booking-collation">
      <div class="container collation-container">
        
        <header class="section-header text-center" style="margin-bottom:var(--space-8);">
          <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
            <span class="collation-eyebrow-pill">
              <span class="pulse-dot" aria-hidden="true"></span>
              Official Reservation Collation
            </span>
          </div>
          <h2 class="section-title">Collate Your Details & Receive Your Official Travel Dossier</h2>
          <p class="section-subtitle">
            Choose your package, enter your travel details below, and generate your official PDF reservation dossier to send directly to our consultant on WhatsApp.
          </p>
        </header>

        <div class="luxury-collation-card">
          <form id="collationForm" onsubmit="window.rhordwayApp.handleCollationSubmit(event)">
            
            <!-- ===============================================================
                 STEP 01: SELECT PACKAGE & OCCUPANCY
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">01</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Select Holiday Package & Departure Date</h3>
                <p class="collation-step-desc">Pick your preferred 2026 holiday escape to dynamically update inclusions and rates.</p>

                <div class="package-pick-grid">
                  <!-- Option 1: Doha + Zanzibar -->
                  <label class="package-pick-card active" id="label-pick-dz">
                    <input 
                      type="radio" 
                      name="selectedPackage" 
                      value="doha-zanzibar" 
                      checked 
                      onchange="window.rhordwayApp.updateCollationPackage('doha-zanzibar')"
                      class="sr-only"
                    />
                    <div class="pick-card-thumb">
                      <img src="./assets/images/zanzibar-beach.jpg" alt="Zanzibar Beach" loading="lazy" />
                      <span class="pick-card-tag">Dual Escape</span>
                    </div>
                    <div class="pick-card-body">
                      <div class="pick-card-top-row">
                        <span class="pick-badge">${pkgDZ.dates} · ${pkgDZ.durationLabel}</span>
                        <div class="pick-radio-indicator" aria-hidden="true">
                          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="pick-card-title">${pkgDZ.title}</h4>
                      <p class="pick-card-desc">Qatar Airways flights, 5-Star Doha hotel & all-inclusive Zanzibar coastal resort.</p>
                      <div class="pick-card-price-row">
                        <span class="pick-rate-value">${pkgDZ.pricing.standardFormatted}</span>
                        <span class="pick-rate-sub">per person sharing</span>
                      </div>
                    </div>
                  </label>

                  <!-- Option 2: Doha Grand Prix -->
                  <label class="package-pick-card" id="label-pick-gp">
                    <input 
                      type="radio" 
                      name="selectedPackage" 
                      value="doha-grand-prix" 
                      onchange="window.rhordwayApp.updateCollationPackage('doha-grand-prix')"
                      class="sr-only"
                    />
                    <div class="pick-card-thumb">
                      <img src="./assets/images/doha-f1-grand-prix.jpg" alt="Doha Formula 1 Grand Prix" loading="lazy" />
                      <span class="pick-card-tag">Formula 1 GP</span>
                    </div>
                    <div class="pick-card-body">
                      <div class="pick-card-top-row">
                        <span class="pick-badge">${pkgGP.dates} · ${pkgGP.durationLabel}</span>
                        <div class="pick-radio-indicator" aria-hidden="true">
                          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="pick-card-title">${pkgGP.title}</h4>
                      <p class="pick-card-desc">3-Day Formula 1 race weekend, 5-star Doha accommodation & desert dune safari.</p>
                      <div class="pick-card-price-row">
                        <span class="pick-rate-value">From ₦3,400,000</span>
                        <span class="pick-rate-sub">per person</span>
                      </div>
                    </div>
                  </label>
                </div>

                <!-- Occupancy Tier Selection -->
                <div class="occupancy-pick-wrapper" id="collationOccupancyContainer">
                  <label class="input-field-label" for="collationOccupancySelect">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Accommodation & Occupancy Tier
                  </label>
                  <div class="select-field-box">
                    <select 
                      id="collationOccupancySelect" 
                      class="form-select-styled" 
                      onchange="window.rhordwayApp.updateCollationCalculation()"
                    >
                      <option value="Double Occupancy (per person sharing)" data-rate="4350000" selected>
                        Double Occupancy (per person sharing) — ₦4,350,000 / person
                      </option>
                    </select>
                    <div class="select-chevron-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===============================================================
                 STEP 02: GUEST & CONTACT DETAILS
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">02</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Guest & Contact Information</h3>
                <p class="collation-step-desc">Used exclusively for generating your reservation PDF and travel briefing.</p>
                
                <div class="form-grid-2">
                  <!-- Name -->
                  <div class="form-group-luxury">
                    <label for="guestFullName" class="input-field-label">Lead Traveller Full Name *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input 
                        type="text" 
                        id="guestFullName" 
                        class="form-input-luxury" 
                        placeholder="e.g. Amara Johnson" 
                        required 
                      />
                    </div>
                  </div>

                  <!-- WhatsApp -->
                  <div class="form-group-luxury">
                    <label for="guestPhone" class="input-field-label">WhatsApp / Phone Number *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input 
                        type="tel" 
                        id="guestPhone" 
                        class="form-input-luxury" 
                        placeholder="e.g. +234 816 420 6030" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div class="form-grid-2" style="margin-top:var(--space-4);">
                  <!-- Email -->
                  <div class="form-group-luxury">
                    <label for="guestEmail" class="input-field-label">Email Address *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input 
                        type="email" 
                        id="guestEmail" 
                        class="form-input-luxury" 
                        placeholder="e.g. amara@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <!-- Departure City -->
                  <div class="form-group-luxury">
                    <label for="departureCity" class="input-field-label">Departure City (Nigeria/International)</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <input 
                        type="text" 
                        id="departureCity" 
                        class="form-input-luxury" 
                        placeholder="e.g. Lagos, Abuja, London" 
                      />
                    </div>
                  </div>
                </div>

                <div class="form-grid-2" style="margin-top:var(--space-4);">
                  <!-- Travellers -->
                  <div class="form-group-luxury">
                    <label for="guestCount" class="input-field-label">Number of Travellers</label>
                    <div class="select-field-box">
                      <select 
                        id="guestCount" 
                        class="form-select-styled" 
                        onchange="window.rhordwayApp.updateCollationCalculation()"
                      >
                        <option value="1">1 Person</option>
                        <option value="2" selected>2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5+ Persons (Group Booking)</option>
                      </select>
                      <div class="select-chevron-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Special Requests -->
                  <div class="form-group-luxury">
                    <label for="specialRequests" class="input-field-label">Special Requests / Preferences (Optional)</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                      <input 
                        type="text" 
                        id="specialRequests" 
                        class="form-input-luxury" 
                        placeholder="e.g. Honeymoon suite, vegetarian, twin beds" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===============================================================
                 STEP 03: REVIEW & WHATSAPP DISPATCH
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">03</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Review & Dispatch Reservation Dossier</h3>
                <p class="collation-step-desc">Your official travel summary PDF will generate and download immediately upon sending.</p>

                <div class="dossier-receipt-card">
                  <div class="receipt-header-row">
                    <div>
                      <span class="receipt-label">ESTIMATED RESERVATION TOTAL</span>
                      <div id="collationTotalAmount" class="receipt-total-amount">
                        ₦8,700,000
                      </div>
                    </div>
                    <div class="receipt-breakdown-box">
                      <span id="collationCalculationNote" class="receipt-note-badge">2 Persons × ₦4,350,000</span>
                      <span class="receipt-sub-note">Verified Partner Rates · No Hidden Booking Fees</span>
                    </div>
                  </div>
                </div>

                <div style="margin-top:var(--space-6); display:flex; flex-direction:column; gap:var(--space-3);">
                  <button type="submit" class="btn-dossier-submit">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    Generate Official PDF & Send to WhatsApp Consultant
                  </button>
                </div>

                <!-- Success notification box -->
                <div id="collationSuccessAlert" class="collation-success-alert" style="display:none;">
                  <div style="font-size:1.05rem; font-weight:800; color:var(--brand-primary); margin-bottom:6px;">
                    ✅ Official Reservation Dossier Generated Successfully!
                  </div>
                  <p style="font-size:0.875rem; color:var(--text-body); line-height:1.6;">
                    Your official reservation PDF has been saved to your downloads. Redirecting you to WhatsApp to connect directly with your dedicated Rhordway consultant at <strong>+234 816 420 6030</strong>.
                  </p>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  `;
}



  /* --- TrustSection.js --- */
function renderTrustSection() {
  return `
    <section class="ref-responsibilities-section" id="responsibilities">
      <div class="ref-container">
        
        <div class="ref-responsibilities-banner">
          <img 
            src="./assets/images/responsibilities-banner.jpg" 
            alt="Golden sand dunes meeting turquoise ocean at sunset" 
            class="ref-responsibilities-bg"
            loading="lazy"
          />
          <div class="ref-responsibilities-scrim"></div>

          <div class="ref-responsibilities-content">
            <h2 class="ref-responsibilities-title">Our Responsibilities</h2>

            <div class="ref-glass-cards-grid">
              
              <!-- Card 1 -->
              <div class="ref-glass-card">
                <div class="ref-glass-check-badge" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 class="ref-glass-card-title">Always Available</h3>
                <p class="ref-glass-card-desc">Dedicated WhatsApp Travel Desk</p>
              </div>

              <!-- Card 2 -->
              <div class="ref-glass-card">
                <div class="ref-glass-check-badge" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 class="ref-glass-card-title">Cancel Free of Charge</h3>
                <p class="ref-glass-card-desc">Flexible 2026 Reservation Terms</p>
              </div>

              <!-- Card 3 -->
              <div class="ref-glass-card">
                <div class="ref-glass-check-badge" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 class="ref-glass-card-title">Flight to Hotel</h3>
                <p class="ref-glass-card-desc">Qatar Airways & VIP Chauffeurs</p>
              </div>

              <!-- Card 4 -->
              <div class="ref-glass-card">
                <div class="ref-glass-check-badge" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 class="ref-glass-card-title">Instant PDF Dossier</h3>
                <p class="ref-glass-card-desc">Direct Client WhatsApp Dispatch</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderUnleashWanderlust() {
  return ''; // Replaced by reference layout sections
}


  /* --- FAQAccordion.js --- */


function renderFAQAccordion() {
  return `
    <section class="section-padding" id="faqs" style="background-color:var(--surface-primary); border-top:1px solid var(--border-subtle);">
      <div class="container">
        <header class="section-header text-center">
          <p class="eyebrow">Clear Information</p>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Essential facts regarding inclusions, visas, flight arrangements, and booking steps.
          </p>
        </header>

        <div class="faq-container" role="region" aria-label="Frequently Asked Questions Accordion">
          ${faqList.map((faq) => `
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
  return ''; // Replaced by reference layout flow
}

function renderSiteFooter() {
  return `
    <footer class="ref-footer">
      <div class="ref-footer-container">
        
        <div class="ref-footer-main-row">
          <!-- Col 1: Brand & Socials -->
          <div class="ref-footer-brand-col">
            <a href="#" class="ref-footer-logo" aria-label="Rhordway Home">
              <span class="ref-brand-chevron">&gt;&gt;</span>
              <span class="ref-brand-name">Rhordway</span>
            </a>
            <p class="ref-footer-tagline">
              Escape the ordinary with<br />our travel experiences
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
              <!-- YouTube -->
              <a href="https://youtube.com/@Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-yt" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"></polygon>
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

          <!-- Col 2: Quick Links -->
          <div class="ref-footer-links-col">
            <h4 class="ref-footer-col-title">Quick Links</h4>
            <ul class="ref-footer-nav-list">
              <li><a href="#hot-deals">Packages Tour</a></li>
              <li><a href="#top-destinations">Top Destinations</a></li>
              <li><a href="#responsibilities">Family Holiday</a></li>
              <li><a href="#booking-collation">Reservation Collation</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact Us -->
          <div class="ref-footer-contact-col">
            <h4 class="ref-footer-col-title">Contact Us</h4>
            <p class="ref-footer-contact-line">
              Landline: <a href="tel:+2348164206030">+234 816 420 6030</a>
            </p>
            <div style="margin-top:14px;">
              <span class="ref-footer-contact-line" style="display:block; margin-bottom:8px;">Newsletter Registration:</span>
              <a href="#booking-collation" class="ref-newsletter-btn">
                Register now
              </a>
            </div>
          </div>

        </div>

        <div class="ref-footer-copyright">
          Copyright: &copy; 2026 Rhordway Travels. All rights reserved
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
    this.currentEnquiryParams = {};
    this.selectedGrandPrixOccupancy = null;
    this.selectedGrandPrixPrice = null;
    this.selectedCollationPackageId = 'doha-zanzibar';
  }

  init() {
    this.renderApp();
    this.bindGlobalEvents();
    this.updateCollationPackage('doha-zanzibar');
  }

  renderApp() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      <div class="site-wrapper">
        ${renderSiteHeader()}
        ${renderMobileNavigation()}
        <main id="main-content">
          ${renderCampaignHero()}
          ${renderExperienceSelector()}
          ${renderDestinationFeature()}
          ${renderTrustSection()}
          ${renderInformationCollation()}
          ${renderFAQAccordion()}
        </main>
        ${renderSiteFooter()}
      </div>
      ${renderEnquiryModal()}

      <!-- Mobile Sticky Enquiry Bar -->
      <div class="mobile-sticky-bar" id="mobileStickyBar" style="position:fixed; bottom:0; left:0; right:0; z-index:90; background:rgba(255,255,255,0.96); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-top:1px solid var(--border-medium); box-shadow:0 -4px 20px rgba(0,0,0,0.06); padding:10px 16px; display:none; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.7rem; color:var(--brand-primary); text-transform:uppercase; letter-spacing:0.05em; display:block; font-weight:700;">Rhordway 2026</span>
          <span style="font-size:0.85rem; color:var(--text-primary); font-weight:700;">November & December Holidays</span>
        </div>
        <a href="#booking-collation" class="btn btn-primary" style="min-height:36px; font-size:0.75rem; padding:0 14px;">
          Reserve Now
        </a>
      </div>
    `;

    this.initScrollObservers();
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
    const hero = document.getElementById('hero');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (mobileBar && hero) {
        if (window.innerWidth < 768 && scrollY > 400) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    }, { passive: true });
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

  /* ---------------- Grand Prix Occupancy Selector ---------------- */
  selectOccupancy(option, priceFormatted) {
    this.selectedGrandPrixOccupancy = option === 'double' ? 'Double Occupancy (per person sharing)' : 'Single Occupancy';
    this.selectedGrandPrixPrice = priceFormatted;

    const btnDouble = document.getElementById('occupancy-btn-double');
    const btnSingle = document.getElementById('occupancy-btn-single');

    btnDouble?.classList.toggle('active', option === 'double');
    btnDouble?.setAttribute('aria-checked', option === 'double' ? 'true' : 'false');

    btnSingle?.classList.toggle('active', option === 'single');
    btnSingle?.setAttribute('aria-checked', option === 'single' ? 'true' : 'false');

    const feedback = document.getElementById('occupancySelectionFeedback');
    const priceDisplay = document.getElementById('selectedPriceDisplay');
    if (feedback && priceDisplay) {
      feedback.style.borderColor = 'var(--brand-primary)';
      feedback.style.background = 'rgba(0, 132, 230, 0.08)';
      feedback.children[0].textContent = `Selected: ${this.selectedGrandPrixOccupancy}`;
      priceDisplay.textContent = priceFormatted;
    }
  }

  /* ---------------- Information Collation & Reservation ---------------- */
  updateCollationPackage(pkgId) {
    this.selectedCollationPackageId = pkgId;
    const labelDZ = document.getElementById('label-pick-dz');
    const labelGP = document.getElementById('label-pick-gp');
    const occupancySelect = document.getElementById('collationOccupancySelect');

    labelDZ?.classList.toggle('active', pkgId === 'doha-zanzibar');
    labelGP?.classList.toggle('active', pkgId === 'doha-grand-prix');

    if (occupancySelect) {
      if (pkgId === 'doha-zanzibar') {
        occupancySelect.innerHTML = `
          <option value="Double Occupancy (per person sharing)" data-rate="4350000" selected>
            Double Occupancy (per person sharing) — ₦4,350,000 / person
          </option>
        `;
      } else {
        occupancySelect.innerHTML = `
          <option value="Double Occupancy (per person sharing)" data-rate="3400000" selected>
            Double Occupancy (per person sharing) — ₦3,400,000 / person
          </option>
          <option value="Single Occupancy" data-rate="4150000">
            Single Occupancy — ₦4,150,000 / person
          </option>
        `;
      }
    }

    this.updateCollationCalculation();
  }

  updateCollationCalculation() {
    const occupancySelect = document.getElementById('collationOccupancySelect');
    const guestSelect = document.getElementById('guestCount');
    const totalDisplay = document.getElementById('collationTotalAmount');
    const noteDisplay = document.getElementById('collationCalculationNote');

    if (!occupancySelect || !guestSelect || !totalDisplay) return;

    const selectedOption = occupancySelect.options[occupancySelect.selectedIndex];
    const unitRate = parseInt(selectedOption?.getAttribute('data-rate') || '4350000', 10);
    const guestCount = parseInt(guestSelect.value || '2', 10);

    const total = unitRate * guestCount;
    const formattedTotal = '₦' + total.toLocaleString('en-NG');
    const formattedUnit = '₦' + unitRate.toLocaleString('en-NG');

    totalDisplay.textContent = formattedTotal;
    if (noteDisplay) {
      noteDisplay.textContent = `${guestCount} Person(s) × ${formattedUnit}`;
    }
  }

  populateAndScrollCollation(pkgId) {
    const radio = document.querySelector(`input[name="selectedPackage"][value="${pkgId}"]`);
    if (radio) {
      radio.checked = true;
    }
    this.updateCollationPackage(pkgId);

    const section = document.getElementById('booking-collation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      document.getElementById('guestFullName')?.focus();
    }, 400);
  }

  handleCollationSubmit(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById('guestFullName');
    const phoneInput = document.getElementById('guestPhone');
    const emailInput = document.getElementById('guestEmail');
    const departureCityInput = document.getElementById('departureCity');
    const guestCountSelect = document.getElementById('guestCount');
    const occupancySelect = document.getElementById('collationOccupancySelect');
    const specialRequestsInput = document.getElementById('specialRequests');
    const successAlert = document.getElementById('collationSuccessAlert');

    const pkg = packagesData[this.selectedCollationPackageId];
    const selectedOption = occupancySelect?.options[occupancySelect.selectedIndex];
    const unitRate = parseInt(selectedOption?.getAttribute('data-rate') || '4350000', 10);
    const guestCount = parseInt(guestCountSelect?.value || '2', 10);
    const total = unitRate * guestCount;
    const formattedTotal = '₦' + total.toLocaleString('en-NG');
    const formattedUnit = '₦' + unitRate.toLocaleString('en-NG');

    const bookingRef = generateBookingReference();

    const dossierData = {
      bookingRef,
      packageName: pkg.title,
      travelDates: pkg.dates,
      duration: pkg.durationLabel,
      occupancy: selectedOption?.value || 'Double Occupancy (per person sharing)',
      priceFormatted: formattedUnit + ' per person',
      travellerCount: guestCount,
      totalEstimated: formattedTotal,
      leadName: fullNameInput?.value || 'Valued Guest',
      email: emailInput?.value || 'Awaiting email',
      phone: phoneInput?.value || 'Awaiting phone',
      departureCity: departureCityInput?.value || 'Nigeria',
      specialRequests: specialRequestsInput?.value || '',
      inclusions: pkg.inclusions
    };

    // 1. Generate and automatically download the official PDF
    generateReservationPDF(dossierData);

    // 2. Build structured WhatsApp dossier message
    const waMessage = 
      `*RHORDWAY TRAVEL RESERVATION DOSSIER*\n` +
      `*Booking Reference:* ${bookingRef}\n\n` +
      `*Selected Package:* ${pkg.title}\n` +
      `*Travel Dates:* ${pkg.dates} (${pkg.durationLabel})\n` +
      `*Occupancy:* ${dossierData.occupancy}\n` +
      `*Travellers:* ${guestCount} Person(s)\n` +
      `*Estimated Package Total:* ${formattedTotal}\n\n` +
      `*LEAD GUEST DETAILS:*\n` +
      `• *Name:* ${dossierData.leadName}\n` +
      `• *Phone/WhatsApp:* ${dossierData.phone}\n` +
      `• *Email:* ${dossierData.email}\n` +
      `• *Departure City:* ${dossierData.departureCity}\n` +
      (dossierData.specialRequests ? `• *Special Notes:* ${dossierData.specialRequests}\n` : '') +
      `\n📄 *Official Reservation PDF has been generated and saved.* I am sending this alongside the attached PDF for room confirmation and payment scheduling.`;

    // 3. Show confirmation feedback
    if (successAlert) {
      successAlert.style.display = 'block';
    }

    // 4. Open verified WhatsApp consultant line (+2348164206030)
    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  }

  /* ---------------- WhatsApp Modal Controls ---------------- */
  openEnquiryModal(packageType) {
    const modal = document.getElementById('enquiryModalOverlay');
    const preview = document.getElementById('enquiryMessagePreview');
    const title = document.getElementById('enquiryModalTitle');
    const eyebrow = document.getElementById('enquiryModalEyebrow');
    if (!modal || !preview) return;

    if (packageType === 'doha-zanzibar') {
      this.currentEnquiryParams = {
        packageId: 'doha-zanzibar',
        packageName: 'Doha + Zanzibar',
        travelDates: 'December 12–19, 2026',
        price: '₦4,350,000 per person sharing'
      };
      if (title) title.textContent = 'Doha + Zanzibar Enquiry';
      if (eyebrow) eyebrow.textContent = 'Package Reservation Details';
    } else if (packageType === 'doha-grand-prix') {
      const occupancy = this.selectedGrandPrixOccupancy || 'Double Occupancy (per person sharing)';
      const price = this.selectedGrandPrixPrice || '₦3,400,000 per person';
      this.currentEnquiryParams = {
        packageId: 'doha-grand-prix',
        packageName: 'Doha Grand Prix Experience',
        travelDates: 'November 25 – December 1, 2026',
        occupancy,
        price
      };
      if (title) title.textContent = 'Doha Grand Prix Enquiry';
      if (eyebrow) eyebrow.textContent = 'Motorsport Package Reservation';
    } else {
      this.currentEnquiryParams = {
        packageId: 'general',
        packageName: 'Rhordway Luxury Holiday Packages'
      };
      if (title) title.textContent = 'Speak with a Travel Consultant';
      if (eyebrow) eyebrow.textContent = 'Rhordway Enquiry Desk';
    }

    const message = buildWhatsAppMessage(this.currentEnquiryParams);
    preview.textContent = message;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
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

    navigator.clipboard.writeText(preview.textContent).then(() => {
      alert('Enquiry message copied to clipboard!');
    }).catch(() => {
      prompt('Copy your enquiry message below:', preview.textContent);
    });
  }

  sendWhatsAppDirect() {
    const preview = document.getElementById('enquiryMessagePreview');
    const testInput = document.getElementById('testPhoneInput');
    const message = preview?.textContent || buildWhatsAppMessage(this.currentEnquiryParams);

    const configuredNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
    const userNumber = (testInput?.value || '').replace(/[^0-9]/g, '');

    const targetNumber = userNumber || configuredNumber || '2348164206030';

    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
}

// Instantiate and expose globally
const app = new RhordwayApplication();
window.rhordwayApp = app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}


})();
