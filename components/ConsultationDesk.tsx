'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { buildWhatsAppMessage } from '../utils/whatsapp';
import { generateReservationPDF, generateBookingReference } from '../utils/pdfGenerator';

export default function ConsultationDesk() {
  const { selectedService, selectedDestination } = useApp();

  const [serviceType, setServiceType] = useState('Student Visa & Study Abroad');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travellerCount, setTravellerCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedDestination) {
      setDestination(selectedDestination);
    }
  }, [selectedDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText =
      `*RHORDWAY OFFICIAL CONSULTATION REQUEST*\n\n` +
      `• *Client Name:* ${fullName || 'Valued Client'}\n` +
      `• *Service Needed:* ${serviceType}\n` +
      `• *Phone/WhatsApp:* ${phone}\n` +
      `• *Email:* ${email || 'N/A'}\n` +
      `• *Destination / Country:* ${destination || 'Global Corridors'}\n` +
      `• *Party Size:* ${travellerCount} Applicant(s)\n` +
      (notes ? `• *Notes / Objectives:* ${notes}\n` : '') +
      `\nHello Rhordway Desk, I have submitted my consultation details through your official portal and would like to proceed with my application review.`;

    const cleanNum = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNum}?text=${encodeURIComponent(waText)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      await generateReservationPDF({
        bookingRef: generateBookingReference(),
        packageName: serviceType,
        travelDates: '2026 Season',
        duration: 'Personalized Advisory',
        occupancy: 'Verified Dossier',
        priceFormatted: 'Advisory Consultation',
        travellerCount,
        totalEstimated: 'Verified by Travel Specialist',
        leadName: fullName || 'Valued Client',
        email,
        phone,
        departureCity: destination || 'Nigeria',
        specialRequests: notes,
        inclusions: [
          'Pre-submission Document & Refusal Audit',
          'Proof of Funds (POF) Liquidity Compliance Advisory',
          'Tailored Statement of Purpose (SOP) Drafting',
          'Direct University Placement & CAS Management',
          'Fast-Track Nigerian Passport Coordination',
          'Priority Flight Booking & Embassy-Approved Insurance',
          'VIP Airport Meet-and-Greet & 5-Star Hotel Reservation'
        ]
      });
    } catch (err) {
      console.error('PDF generation error', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section className="mw-consultation-section" id="booking-collation">
      <div className="mw-container">
        <div className="mw-consultation-shell">
          
          {/* Left Editorial Info Column */}
          <div className="mw-consultation-left anim-reveal-text">
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              Rhordway Consultation Desk
            </span>
            <h2 className="mw-services-heading" style={{ marginBottom: '14px' }}>
              Book a Consultation With Our Specialists<span style={{ color: '#0080E8' }}>.</span>
            </h2>
            <p className="mw-services-lead" style={{ maxWidth: '440px', marginBottom: '28px' }}>
              Whether you are applying for a Student Visa (Undergraduate or Postgraduate, Proof of Funds &amp; Statement of Purpose), filing a Travel or Migration Visa, processing a Passport, or booking Flights, Transfers &amp; Travel Insurance—our team is ready to assist you.
            </p>

            <div className="mw-consult-contact-cards">
              <div className="mw-consult-contact-row">
                <span className="mw-consult-dot"></span>
                <div>
                  <span className="mw-consult-label">Official Phone &amp; WhatsApp Lines</span>
                  <strong className="mw-consult-val">
                    <a href={`tel:+${siteConfig.whatsappNumber}`}>{siteConfig.primaryPhoneFormatted}</a> ·{' '}
                    <a href={`tel:+${siteConfig.alternatePhoneClean}`}>{siteConfig.alternatePhone}</a>
                  </strong>
                </div>
              </div>

              <div className="mw-consult-contact-row">
                <span className="mw-consult-dot"></span>
                <div>
                  <span className="mw-consult-label">Official Email &amp; Social Handle</span>
                  <strong className="mw-consult-val">
                    <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> · {siteConfig.instagram}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Clean Consultation Form */}
          <div className="mw-consultation-card anim-reveal-text anim-delay-2">
            <form id="collationForm" onSubmit={handleSubmit}>
              
              <div className="mw-form-field" style={{ marginBottom: '18px' }}>
                <label htmlFor="collationServiceType" className="mw-form-label">Service Required *</label>
                <div className="select-field-box">
                  <select 
                    id="collationServiceType" 
                    name="serviceType" 
                    className="form-select-styled"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option value="Student Visa & Study Abroad">Student Visa &amp; Study Abroad (Admissions, Proof of Funds &amp; SOP)</option>
                    <option value="Travel & Visit Visa Processing">Travel &amp; Visit Visa Processing (UK, Schengen, Canada, US, UAE)</option>
                    <option value="Global Migration & Relocation">Global Migration &amp; Relocation Pathways</option>
                    <option value="Passport Processing & Renewal">Passport Processing &amp; Renewal Assistance</option>
                    <option value="Flight Booking, Hotel & Airport Transfer">Flight Booking, Hotel Transfer &amp; Airport Transfer</option>
                    <option value="Travel Insurance">Comprehensive Travel Insurance</option>
                    <option value="Vacation & Holiday Enquiry">Vacation &amp; Holiday Enquiry</option>
                  </select>
                  <span className="select-chevron-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="mw-form-field">
                  <label htmlFor="guestFullName" className="mw-form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="guestFullName" 
                    className="form-input-luxury" 
                    style={{ paddingLeft: '16px' }}
                    placeholder="e.g. Amara Johnson" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                  />
                </div>

                <div className="mw-form-field">
                  <label htmlFor="guestPhone" className="mw-form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="guestPhone" 
                    className="form-input-luxury" 
                    style={{ paddingLeft: '16px' }}
                    placeholder="e.g. +234 816 420 6030" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-grid-2" style={{ marginTop: '16px' }}>
                <div className="mw-form-field">
                  <label htmlFor="guestEmail" className="mw-form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="guestEmail" 
                    className="form-input-luxury" 
                    style={{ paddingLeft: '16px' }}
                    placeholder="e.g. amara@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>

                <div className="mw-form-field">
                  <label htmlFor="departureCity" className="mw-form-label">Destination / Country of Interest</label>
                  <input 
                    type="text" 
                    id="departureCity" 
                    className="form-input-luxury" 
                    style={{ paddingLeft: '16px' }}
                    placeholder="e.g. UK, Canada, France, Qatar, Zanzibar" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              {/* Number of Travelers / Applicants */}
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#FAFAFA', borderRadius: '12px', border: '1px solid #E4E4E7' }}>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F1115', display: 'block' }}>Applicants / Travellers</span>
                  <span style={{ fontSize: '0.72rem', color: '#71717A' }}>Number of persons included in enquiry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    type="button" 
                    onClick={() => setTravellerCount(c => Math.max(1, c - 1))}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #CBD5E1', background: '#FFFFFF', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', minWidth: '16px', textAlign: 'center' }}>
                    {travellerCount}
                  </span>
                  <button 
                    type="button" 
                    onClick={() => setTravellerCount(c => c + 1)}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #CBD5E1', background: '#FFFFFF', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mw-form-field" style={{ marginTop: '16px' }}>
                <label htmlFor="specialRequests" className="mw-form-label">Application Notes or Objectives</label>
                <textarea 
                  id="specialRequests" 
                  rows={3} 
                  className="form-textarea-luxury"
                  placeholder="e.g. Need urgent visa renewal, Proof of Funds verification, or specific semester admission."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              {submitted && (
                <div className="collation-success-box" style={{ marginTop: '16px', display: 'block' }}>
                  <div className="collation-success-title">✓ Enquiry Dispatched to WhatsApp Desk</div>
                  <p className="collation-success-text">
                    Your details were routed to Rhordway’s official consultant desk. You can also download your official reservation summary dossier below.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                <button 
                  type="submit" 
                  className="mw-black-pill-btn"
                  style={{ flex: 1, minWidth: '220px', padding: '14px 24px', fontSize: '0.85rem' }}
                >
                  SEND VIA WHATSAPP ↗
                </button>

                <button 
                  type="button" 
                  className="mw-action-pill"
                  style={{ background: '#EFF6FF', color: '#0080E8', border: '1.5px solid #0080E8', padding: '14px 20px', fontSize: '0.85rem', cursor: 'pointer', borderRadius: '100px', fontWeight: 700 }}
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf}
                >
                  {isGeneratingPdf ? 'GENERATING PDF...' : 'DOWNLOAD DOSSIER (PDF)'}
                </button>
              </div>

              <p style={{ fontSize: '0.75rem', color: '#71717A', marginTop: '12px', textAlign: 'center' }}>
                Direct consultation with our official Lagos advisory desk. Confidential &amp; verified.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
