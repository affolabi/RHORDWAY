import { siteConfig } from '../config/siteConfig.js';

export function generateBookingReference() {
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
export function generateReservationPDF(data) {
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
