'use client';

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function MigrationHugoStrip() {
  const [activePanelId, setActivePanelId] = useState('pillar-visa');
  const { scrollToConsultation, selectServiceAndScroll } = useApp();

  const servicePillars = [
    {
      id: 'pillar-student',
      serviceType: 'Student Visa & Study Abroad',
      kicker: 'UK · CANADA · EUROPE · USA',
      title: 'Student Visa & Study Abroad',
      desc: 'Undergraduate & Postgraduate admissions, visa processing, Proof of Funds, Statement of Purpose (SOP), and expert course & institution selection.',
      badgeTop: 'Edumigration Desk',
      badgeMain: 'Admissions + Visa',
      badgeSub: 'Proof of Funds & SOP Support',
      foot: 'End-to-End Professional Support',
      image: '/assets/images/singapore-bay.jpg'
    },
    {
      id: 'pillar-visa',
      serviceType: 'Travel & Visit Visa Processing',
      kicker: 'FRANCE · GERMANY · SPAIN · UK · CANADA · US',
      title: 'Travel Visas & Global Migration',
      desc: 'Tourist, business, family visit, and skilled migration visa processing with thorough embassy documentation and interview preparation.',
      badgeTop: 'Embassy Advisory',
      badgeMain: 'Global Visas',
      badgeSub: 'Schengen · UK · US · Canada · UAE',
      foot: 'Document Verification & Filing',
      image: '/assets/images/doha-skyline.jpg'
    },
    {
      id: 'pillar-passport',
      serviceType: 'Passport Processing & Renewal',
      kicker: 'FAST-TRACK DOCUMENTATION',
      title: 'Passports & Travel Insurance',
      desc: 'Fresh Nigerian passport applications, renewals, data-capturing coordination, and embassy-compliant international medical & travel insurance.',
      badgeTop: 'Travel Documents',
      badgeMain: 'Passports',
      badgeSub: 'Fresh Issue · Renewal · Insurance',
      foot: 'Fast & Stress-Free Processing',
      image: '/assets/images/doha-museum.jpg'
    },
    {
      id: 'pillar-flights',
      serviceType: 'Flight Booking, Hotel & Airport Transfer',
      kicker: 'GLOBAL AVIATION & GROUND MOBILITY',
      title: 'Flight Booking, Hotel & Airport Transfers',
      desc: 'International & domestic flight ticketing, verified hotel reservations, Hotel Transfers, and private Airport Transfers worldwide.',
      badgeTop: 'Aviation & Stays',
      badgeMain: 'Flights & PVT',
      badgeSub: 'Airport Transfer & Hotel Transfer',
      foot: '24/7 Arrival & Departure Support',
      image: '/assets/images/dubai-marina.jpg'
    }
  ];

  return (
    <section className="mw-packages-section" id="home-migration-strip" style={{ paddingTop: '24px', paddingBottom: '56px' }}>
      <div className="mw-container">
        
        {/* Header Row */}
        <div className="hugo-header-row anim-reveal-text">
          <div className="hugo-header-left">
            <span className="hugo-eyebrow">
              <span className="mw-blue-dot"></span>
              RHORDWAY MIGRATION &amp; VISA SERVICES
            </span>
            <h2 className="hugo-editorial-heading">
              Expert Student Visas, Global Migration, Travel Visas, Passport Processing, Flights, Transfers &amp; Travel Insurance.
            </h2>
          </div>

          <div className="hugo-header-controls">
            <button 
              type="button" 
              className="mw-action-group"
              onClick={scrollToConsultation}
            >
              <span className="mw-action-pill">SPEAK WITH A SPECIALIST</span>
              <span className="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {/* Hugo 4-Panel Expandable Strip */}
        <div className="hugo-accordion-strip" id="hugoServiceStrip">
          {servicePillars.map((p) => {
            const isActive = activePanelId === p.id;
            return (
              <article 
                key={p.id}
                className={`hugo-strip-card ${isActive ? 'active' : ''}`}
                onClick={() => setActivePanelId(p.id)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 960) {
                    setActivePanelId(p.id);
                  }
                }}
              >
                <img src={p.image} alt={p.title} className="hugo-strip-img" loading="lazy" />
                <div className="hugo-strip-scrim"></div>
                <div className="hugo-strip-content">
                  <div className="hugo-strip-left">
                    <span className="hugo-strip-mini-ico" aria-hidden="true">✦</span>
                    <span className="hugo-strip-kicker">{p.kicker}</span>
                    <h3 className="hugo-strip-title">{p.title}</h3>
                    <p className="hugo-strip-desc">{p.desc}</p>
                  </div>
                  <div className="hugo-glass-widget">
                    <span className="hugo-glass-label">{p.badgeTop}</span>
                    <span className="hugo-glass-price">{p.badgeMain}</span>
                    <span className="hugo-glass-sub">{p.badgeSub}</span>
                  </div>
                </div>
                <div className="hugo-strip-footer">
                  <span className="hugo-strip-foot-meta">{p.foot}</span>
                  <button 
                    type="button" 
                    className="hugo-strip-cta-pill" 
                    aria-label={`Select ${p.title} and consult`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectServiceAndScroll(p.serviceType);
                    }}
                  >
                    <span>CONSULT NOW</span>
                    <span className="hugo-strip-arrow" aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
