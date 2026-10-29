import { siteConfig } from '../config/siteConfig.js';

/**
 * Builds the pre-filled enquiry message based on package parameters.
 */
export function buildWhatsAppMessage(params = {}) {
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
export function getWhatsAppUrl(params = {}) {
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
