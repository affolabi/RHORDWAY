'use client';

import React from 'react';
import { useApp } from '../context/AppContext';

export default function CorridorsGrid() {
  const { selectServiceAndScroll, scrollToConsultation } = useApp();

  const visaCorridors = [
    {
      id: 'uk-corridor',
      country: 'United Kingdom',
      tag: '#UK Visa & Study',
      badge: 'Student · Visit · Skilled',
      subtitle: 'Undergraduate & Postgraduate Admissions, CAS, Proof of Funds, SOP & Standard Visitor Visas.',
      image: '/assets/images/doha-skyline.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'canada-corridor',
      country: 'Canada',
      tag: '#Canada Study & PR',
      badge: 'Study Permit · PR · Visit',
      subtitle: 'University/College Placement, Study Permits, Proof of Funds, SOP & Express Entry Migration.',
      image: '/assets/images/singapore-bay.jpg',
      service: 'Global Migration & Relocation'
    },
    {
      id: 'schengen-corridor',
      country: 'France · Germany · Spain',
      tag: '#Schengen Visa',
      badge: '29 European Countries',
      subtitle: 'Schengen Tourist, Business & Study Visas with Embassy-Compliant Travel Insurance & Hotel Booking.',
      image: '/assets/images/doha-museum.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'usa-corridor',
      country: 'United States',
      tag: '#USA F-1 & B1/B2',
      badge: 'Student · Business · Tourist',
      subtitle: 'F-1 Student Admissions, I-20 Guidance, DS-160 Filing & Consular Interview Preparation.',
      image: '/assets/images/dubai-marina.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'middle-east-corridor',
      country: 'Qatar & UAE (Dubai)',
      tag: '#Gulf Visas & Flights',
      badge: 'E-Visa · Flights · Transfers',
      subtitle: 'Fast-track Qatar & UAE Visas, Return Flights, Verified Hotels & Private Airport Transfers.',
      image: '/assets/images/dubai-marina.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'africa-corridor',
      country: 'East & South Africa',
      tag: '#Tanzania · Kenya · SA',
      badge: 'Visas · Flights · Insurance',
      subtitle: 'Tanzania, Kenya, Egypt & South Africa Visas, Travel Insurance & Private Airport Transfers.',
      image: '/assets/images/nairobi-safari.jpg',
      service: 'Travel & Visit Visa Processing'
    }
  ];

  return (
    <section className="mw-packages-section" id="visa-corridors" style={{ paddingTop: '64px' }}>
      <div className="mw-container">
        <div className="mw-tours-header anim-reveal-text" style={{ marginTop: 0 }}>
          <div>
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              Where We Process
            </span>
            <h2 className="mw-huge-heading">
              Global visa, study &amp;<br />migration corridors
            </h2>
          </div>

          <button 
            type="button" 
            className="mw-action-group"
            onClick={scrollToConsultation}
          >
            <span className="mw-action-pill">START MY APPLICATION</span>
            <span className="mw-action-circle" aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="farer-magazine-grid">
          {visaCorridors.map((item, idx) => (
            <article 
              key={item.id}
              className={`farer-mag-card anim-reveal-text anim-delay-${(idx % 3) + 1}`}
              onClick={() => selectServiceAndScroll(item.service, item.country)}
              style={{ cursor: 'pointer' }}
            >
              <div className="farer-img-frame">
                <img 
                  src={item.image} 
                  alt={`${item.country} — ${item.subtitle}`} 
                  loading="lazy" 
                />
                <div className="farer-subtle-gradient"></div>

                <button 
                  type="button" 
                  className="farer-corner-arrow" 
                  aria-label={`Book Consultation for ${item.country}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectServiceAndScroll(item.service, item.country);
                  }}
                >
                  ↗
                </button>

                <div className="farer-tag-cutout">
                  <span className="farer-tag-pill">
                    <span className="mw-blue-dot"></span>
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="farer-card-caption">
                <div className="farer-caption-top">
                  <h4 className="farer-caption-title">{item.country}</h4>
                  <span className="farer-caption-nights">{item.badge}</span>
                </div>
                <p className="farer-caption-sub">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
