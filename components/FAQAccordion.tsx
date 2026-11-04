'use client';

import React, { useState } from 'react';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-student-visa');

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

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" id="faqs" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #F1F1F3' }}>
      <div className="mw-container">
        <header className="section-header text-center">
          <span className="mw-soft-pill" style={{ marginBottom: '14px' }}>
            <span className="mw-blue-dot"></span>
            Clear Information
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Essential answers regarding Student Visas, Proof of Funds, Statement of Purpose, Global Migration, Passports, Flights, and Travel Insurance.
          </p>
        </header>

        <div className="faq-container" role="region" aria-label="Frequently Asked Questions Accordion">
          {companyFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`} id={`faq-item-${faq.id}`}>
                <button 
                  type="button" 
                  className="faq-trigger" 
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div 
                  className="faq-panel" 
                  id={`faq-panel-${faq.id}`}
                  role="region" 
                  aria-labelledby={`faq-btn-${faq.id}`}
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
