/**
 * RHORDWAY CAMPAIGN CONFIGURATION
 * 
 * Central configuration file for brand settings, contact options,
 * and official WhatsApp integration.
 */

export const siteConfig = {
  brandName: 'RHORDWAY',
  brandWordmark: 'RHORDWAY',
  brandTagline: 'Curated Travel & Tourism',
  
  /**
   * WhatsApp Business Number:
   * Leave empty or set to empty string '' if client number has not yet been confirmed.
   * When empty, the system displays an accessible modal/notice asking the site administrator
   * or client to configure their verified official WhatsApp number, rather than linking to a fake number.
   * Example format when confirmed: '2348000000000'
   */
  whatsappNumber: '', // Awaiting client confirmed WhatsApp business number

  legal: {
    copyrightYear: 2026,
    disclaimer: 'Rhordway facilitates travel arrangements and visa applications based on verified service partner terms. Final availability, payment schedules, and airline policies are confirmed prior to booking.'
  }
};
