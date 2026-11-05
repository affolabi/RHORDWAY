'use client';

import React, { useState } from 'react';
import { packagesData } from '../config/packagesData';
import { useApp } from '../context/AppContext';

export default function HolidaysHero() {
  const [activePkgId, setActivePkgId] = useState('zanzibar-nairobi');
  const { selectServiceAndScroll, scrollToConsultation } = useApp();

  const flagshipIds = [
    'zanzibar-nairobi',
    'doha-nairobi',
    'doha-zanzibar',
    'doha-grand-prix'
  ];

  return (
    <section className="mw-packages-section" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
      <div className="mw-container">
        
        {/* Header Row */}
        <div className="hugo-header-row anim-reveal-text">
          <div className="hugo-header-left">
            <span className="hugo-eyebrow">
              <span className="mw-blue-dot"></span>
              CURATED HOLIDAY ESCAPES
            </span>
            <h1 className="hugo-editorial-heading">
              Two Worlds, One Seamless Journey. Private luxury holiday packages.
            </h1>
          </div>

          <div className="hugo-header-controls">
            <button 
              type="button" 
              className="mw-action-group"
              onClick={scrollToConsultation}
            >
              <span className="mw-action-pill">CUSTOMIZE MY VACATION</span>
              <span className="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        {/* 4-Panel Flagship Strip */}
        <div className="hugo-accordion-strip" id="hugoAccordionStrip">
          {flagshipIds.map((id) => {
            const pkg = (packagesData as any)[id];
            if (!pkg) return null;
            const isActive = activePkgId === pkg.id;

            return (
              <article 
                key={pkg.id}
                className={`hugo-strip-card ${isActive ? 'active' : ''}`}
                onClick={() => setActivePkgId(pkg.id)}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 960) {
                    setActivePkgId(pkg.id);
                  }
                }}
              >
                <img 
                  src={pkg.heroImage} 
                  alt={pkg.heroImageAlt || pkg.title} 
                  className="hugo-strip-img"
                  loading="lazy" 
                />
                <div className="hugo-strip-scrim"></div>

                <div className="hugo-strip-content">
                  <div className="hugo-strip-left">
                    <span className="hugo-strip-mini-ico" aria-hidden="true">✦</span>
                    <span className="hugo-strip-kicker">{pkg.destinationBreakdown}</span>
                    <h3 className="hugo-strip-title">{pkg.title}</h3>
                    <p className="hugo-strip-desc">{pkg.overviewDescription}</p>
                  </div>

                  <div className="hugo-glass-widget">
                    <span className="hugo-widget-top">{pkg.durationLabel} · Private Basis</span>
                    <div className="hugo-widget-arc">
                      <span className="hugo-widget-big">{pkg.durationLabel}</span>
                      <span className="hugo-widget-sub">Flights · Visas · 5★ Hotels</span>
                    </div>
                    <p className="hugo-widget-foot">{pkg.transferBasis}</p>
                  </div>
                </div>

                <div className="hugo-strip-footer">
                  <span className="hugo-strip-foot-meta">{pkg.transferBasis}</span>
                  <button 
                    type="button" 
                    className="hugo-strip-cta-pill" 
                    aria-label={`Enquire about ${pkg.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectServiceAndScroll('Vacation & Holiday Enquiry', pkg.title);
                    }}
                  >
                    <span>ENQUIRE NOW</span>
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
