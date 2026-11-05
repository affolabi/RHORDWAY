'use client';

import React from 'react';
import { useApp } from '../context/AppContext';

export default function SplitFeatures() {
  const { selectServiceAndScroll } = useApp();

  return (
    <section className="mw-packages-section" id="services" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
      <div className="mw-container">
        
        {/* Sticky What We Do Sub-header */}
        <div className="mw-tours-header anim-reveal-text" style={{ marginTop: 0, marginBottom: '40px' }}>
          <div>
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              Rhordway Services Overview
            </span>
            <h2 className="mw-huge-heading">
              Dedicated divisions for student admissions,<br />global migration &amp; travel logistics.
            </h2>
          </div>
        </div>

        <div className="mw-split-features-wrap">
          
          {/* Row 1: TEXTS LEFT · IMAGE RIGHT (Student Visa & Study Abroad) */}
          <article className="mw-split-feature-row anim-reveal-text">
            <div className="mw-split-feature-text">
              <span className="mw-soft-pill" style={{ marginBottom: '14px' }}>
                <span className="mw-blue-dot"></span>
                Undergraduate · Postgraduate · Proof of Funds · SOP
              </span>
              <h3 className="mw-division-title" style={{ fontSize: 'clamp(1.55rem, 2.6vw, 2.15rem)', marginBottom: '12px' }}>
                Student Visa &amp; Study Abroad Advisory.
              </h3>
              <p className="mw-division-desc" style={{ maxWidth: '520px' }}>
                Complete Undergraduate &amp; Postgraduate admission and student visa processing for the UK, Canada, France, Germany, Spain, USA, and Europe—including <strong>Proof of Funds</strong>, <strong>Statement of Purpose (SOP)</strong>, and expert guidance on choosing the right course and institution.
              </p>
              <div className="mw-division-pills">
                <span>✓ Undergraduate &amp; Visa Processing</span>
                <span>✓ Proof of Funds Assistance</span>
                <span>✓ Statement of Purpose (SOP)</span>
                <span>✓ Course &amp; Institution Guidance</span>
                <span>✓ Professional End-to-End Support</span>
              </div>
              <button 
                type="button" 
                className="mw-action-group"
                onClick={() => selectServiceAndScroll('Student Visa & Study Abroad')}
              >
                <span className="mw-action-pill">APPLY FOR STUDENT VISA</span>
                <span className="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="mw-split-feature-media">
              <img 
                src="/assets/images/singapore-bay.jpg" 
                alt="Apply for Student Visa — Undergraduate, Postgraduate, Proof of Funds and Statement of Purpose" 
                loading="lazy" 
              />
            </div>
          </article>

          {/* Row 2: TEXTS LEFT · IMAGE RIGHT (Travel Visas, Migration & Passports) */}
          <article className="mw-split-feature-row anim-reveal-text anim-delay-1">
            <div className="mw-split-feature-text">
              <span className="mw-soft-pill" style={{ marginBottom: '14px' }}>
                <span className="mw-blue-dot"></span>
                Migration · Visas · Passports · Flights
              </span>
              <h3 className="mw-division-title" style={{ fontSize: 'clamp(1.55rem, 2.6vw, 2.15rem)', marginBottom: '12px' }}>
                Travel Visas, Migration &amp; Passports.
              </h3>
              <p className="mw-division-desc" style={{ maxWidth: '520px' }}>
                Applying for a visa to France, Germany, Spain, the UK, Canada, USA, or the Middle East? We handle your visa filing, passport renewal, flight booking, travel insurance, and airport/hotel transfers.
              </p>
              <div className="mw-division-pills">
                <span>✓ Visa Processing (UK, Schengen, US, Canada)</span>
                <span>✓ Global Migration Advisory</span>
                <span>✓ Passport Processing &amp; Renewal</span>
                <span>✓ Flight Booking &amp; Travel Insurance</span>
                <span>✓ Airport &amp; Hotel Transfers</span>
              </div>
              <button 
                type="button" 
                className="mw-action-group"
                onClick={() => selectServiceAndScroll('Travel & Visit Visa Processing')}
              >
                <span className="mw-action-pill">APPLY FOR YOUR VISA</span>
                <span className="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="mw-split-feature-media">
              <img 
                src="/assets/images/doha-skyline.jpg" 
                alt="Travel Visa, Global Migration, Passports, Flights, Airport Transfer & Travel Insurance" 
                loading="lazy" 
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
