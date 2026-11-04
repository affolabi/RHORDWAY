import { siteConfig } from '../config/siteConfig';

export function generateBookingReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `RHW-2026-${code}`;
}

export async function generateReservationPDF(data: any) {
  const {
    bookingRef = generateBookingReference(),
    packageName = 'Rhordway Consultation Dossier',
    travelDates = '2026 Departures',
    duration = 'Flexible',
    occupancy = 'Direct Client',
    priceFormatted = 'Custom Quote',
    travellerCount = 1,
    totalEstimated = 'Standard Verification',
    leadName = 'Valued Client',
    email = '',
    phone = '',
    departureCity = 'Nigeria',
    specialRequests = '',
    inclusions = []
  } = data;

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  try {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Brand Blue Top Header
    doc.setFillColor(0, 128, 232); // #0080E8 Rhordway Brand Blue
    doc.rect(0, 0, 210, 30, 'F');

    // Header Brand Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('RHORDWAY™', 16, 17);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('WE MAKE TRAVEL PROCESSING SIMPLE AND STRESS-FREE', 16, 24);

    // Dossier Meta Box (Right aligned)
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`REFERENCE: ${bookingRef}`, 194, 15, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.text(`ISSUED: ${dateFormatted}`, 194, 22, { align: 'right' });

    // Section 1: Lead Information
    doc.setTextColor(0, 128, 232);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('1. CLIENT & CONTACT INFORMATION', 16, 44);

    doc.setDrawColor(220, 225, 235);
    doc.line(16, 47, 194, 47);

    doc.setTextColor(40, 45, 55);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    doc.text(`Lead Name:`, 16, 55);
    doc.setFont('helvetica', 'bold');
    doc.text(`${leadName}`, 60, 55);

    doc.setFont('helvetica', 'normal');
    doc.text(`WhatsApp / Phone:`, 16, 63);
    doc.setFont('helvetica', 'bold');
    doc.text(`${phone}`, 60, 63);

    doc.setFont('helvetica', 'normal');
    doc.text(`Email Address:`, 16, 71);
    doc.setFont('helvetica', 'bold');
    doc.text(`${email || 'N/A'}`, 60, 71);

    doc.setFont('helvetica', 'normal');
    doc.text(`Destination / Country:`, 16, 79);
    doc.setFont('helvetica', 'bold');
    doc.text(`${departureCity || 'Global (To be confirmed)'}`, 60, 79);

    // Section 2: Service Details
    doc.setTextColor(0, 128, 232);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('2. REQUESTED SERVICE & TRAVEL DETAILS', 16, 93);

    doc.setDrawColor(220, 225, 235);
    doc.line(16, 96, 194, 96);

    doc.setTextColor(40, 45, 55);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    doc.text(`Service / Package:`, 16, 104);
    doc.setFont('helvetica', 'bold');
    doc.text(`${packageName}`, 60, 104);

    doc.setFont('helvetica', 'normal');
    doc.text(`Travel Timeline:`, 16, 112);
    doc.setFont('helvetica', 'bold');
    doc.text(`${travelDates} (${duration})`, 60, 112);

    doc.setFont('helvetica', 'normal');
    doc.text(`Category / Plan:`, 16, 120);
    doc.setFont('helvetica', 'bold');
    doc.text(`${occupancy}`, 60, 120);

    doc.setFont('helvetica', 'normal');
    doc.text(`Party Size:`, 16, 128);
    doc.setFont('helvetica', 'bold');
    doc.text(`${travellerCount} Applicant(s)`, 60, 128);

    doc.setFont('helvetica', 'normal');
    doc.text(`Rate / Estimate:`, 16, 136);
    doc.setFont('helvetica', 'bold');
    doc.text(`${priceFormatted}`, 60, 136);

    // Highlight Box
    doc.setFillColor(240, 247, 255);
    doc.setDrawColor(0, 128, 232);
    doc.roundedRect(16, 143, 178, 16, 2, 2, 'FD');
    doc.setTextColor(0, 128, 232);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(`Dossier Status: ${totalEstimated}`, 22, 154);

    // Section 3: Verified Scope
    doc.setTextColor(0, 128, 232);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('3. DOCUMENTATION & ADVISORY SCOPE', 16, 172);

    doc.setDrawColor(220, 225, 235);
    doc.line(16, 175, 194, 175);

    doc.setTextColor(60, 65, 75);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);

    let yPos = 182;
    const defaultInclusions = [
      'Official Embassy-Ready Document Audit',
      'Proof of Funds (POF) Liquidity Guidance',
      'Statement of Purpose (SOP) Drafting & Review',
      'Direct University Admissions & CAS Support',
      'Nigerian Passport Processing / Renewal Desk',
      'International Flight Bookings & Embassy Insurance',
      'Private Airport Pick-up & 5-Star Accommodations'
    ];
    const displayInclusions = inclusions && inclusions.length > 0 ? inclusions : defaultInclusions;

    displayInclusions.slice(0, 7).forEach((inc: any) => {
      const title = typeof inc === 'string' ? inc : inc.title;
      doc.text(`• ${title}`, 20, yPos);
      yPos += 6;
    });

    if (specialRequests) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.text(`Client Notes / Objectives: "${specialRequests}"`, 16, yPos + 4);
    }

    // Footer
    doc.setFillColor(15, 17, 21);
    doc.rect(0, 260, 210, 37, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('RHORDWAY TRAVEL & MIGRATION DESK', 16, 268);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(180, 195, 220);
    doc.text(`WhatsApp: ${siteConfig.primaryPhoneFormatted}  |  Phone: ${siteConfig.alternatePhone}`, 16, 274);
    doc.text(`Email: ${siteConfig.contactEmail}  |  Instagram: ${siteConfig.instagram}`, 16, 280);

    doc.setFontSize(7);
    doc.setTextColor(140, 150, 170);
    doc.text('Note: This document confirms your initial dossier submission. Our consultant will reach out via WhatsApp/Phone.', 16, 288);

    const filename = `Rhordway_Dossier_${bookingRef}.pdf`;
    doc.save(filename);
    return { success: true, method: 'download', filename };
  } catch (err) {
    console.warn('PDF generation fallback', err);
    return { success: false, error: err };
  }
}
