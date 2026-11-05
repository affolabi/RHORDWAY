'use client';

import React from 'react';
import { packagesData } from '../config/packagesData';
import { useApp } from '../context/AppContext';

export default function HolidaysGrid() {
  const { selectServiceAndScroll, scrollToConsultation } = useApp();

  const globalIds = [
    'singapore-bali',
    'bali-doha',
    'doha-singapore',
    'egypt-doha',
    'egypt',
    'doha-seychelles',
    'south-africa',
    'casablanca-marrakech',
    'dubai'
  ];

  return (
    <section className="mw-packages-section" id="curated-holidays" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
      <div className="mw-container">
        
        <div className="mw-tours-header anim-reveal-text" style={{ marginTop: 0 }}>
          <div>
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              Global Destinations
            </span>
            <h2 className="mw-huge-heading">
              Curated holiday escapes &amp;<br />private itineraries
            </h2>
          </div>

          <button 
            type="button" 
            className="mw-action-group"
            onClick={scrollToConsultation}
          >
            <span className="mw-action-pill">CUSTOMIZE YOUR TRIP</span>
            <span className="mw-action-circle" aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="farer-magazine-grid">
          {globalIds.map((id, idx) => {
            const pkg = (packagesData as any)[id];
            if (!pkg) return null;

            return (
              <article 
                key={pkg.id}
                className={`farer-mag-card anim-reveal-text anim-delay-${(idx % 3) + 1}`}
                onClick={() => selectServiceAndScroll('Vacation & Holiday Enquiry', pkg.title)}
                style={{ cursor: 'pointer' }}
              >
                <div className="farer-img-frame">
                  <img 
                    src={pkg.heroImage} 
                    alt={pkg.heroImageAlt || pkg.title} 
                    loading="lazy" 
                  />
                  <div className="farer-subtle-gradient"></div>

                  <button 
                    type="button" 
                    className="farer-corner-arrow" 
                    aria-label={`Enquire about ${pkg.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectServiceAndScroll('Vacation & Holiday Enquiry', pkg.title);
                    }}
                  >
                    ↗
                  </button>

                  <div className="farer-tag-cutout">
                    <span className="farer-tag-pill">
                      <span className="mw-blue-dot"></span>
                      #{pkg.title}
                    </span>
                  </div>
                </div>

                <div className="farer-card-caption">
                  <div className="farer-caption-top">
                    <h4 className="farer-caption-title">{pkg.title}</h4>
                    <span className="farer-caption-nights">{pkg.durationLabel} · PVT</span>
                  </div>
                  <p className="farer-caption-sub">{pkg.destinationBreakdown} — {pkg.subtitle}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
