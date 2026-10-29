/**
 * RHORDWAY CAMPAIGN CONFIGURATION
 * 
 * Central configuration file for brand settings, contact options,
 * and official WhatsApp integration based on official brand collateral.
 */

export const siteConfig = {
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
