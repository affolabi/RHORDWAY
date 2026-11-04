'use client';

import React from 'react';
import { useApp } from '../context/AppContext';

export default function MigrationHero() {
  const { scrollToConsultation } = useApp();

  return (
    <section className="mw-packages-section" style={{ paddingTop: '32px', paddingBottom: '56px' }}>
      <div className="mw-container">
        <div className="mw-split-feature-row anim-reveal-text is-inview">
          <div className="mw-split-feature-text">
            <span className="mw-soft-pill" style={{ marginBottom: '14px' }}>
              <span className="mw-blue-dot"></span>
              Migration, Visas &amp; Admissions Hub
            </span>
            <h1 className="mw-huge-heading" style={{ marginBottom: '16px' }}>
              Global Visa, Study Abroad &amp; Migration Pathways<span style={{ color: '#0080E8' }}>.</span>
            </h1>
            <p className="mw-division-desc" style={{ maxWidth: '520px' }}>
              Whether you are applying for an Undergraduate or Postgraduate Student Visa, relocating through skilled migration, filing a Schengen/UK/US travel visa, or renewing your Nigerian passport—our specialists manage your entire file.
            </p>
            <div className="mw-division-pills">
              <span>✓ Student Visa &amp; Admissions</span>
              <span>✓ Proof of Funds &amp; SOP</span>
              <span>✓ UK · Schengen · Canada · US Visas</span>
              <span>✓ Passports, Flights &amp; Insurance</span>
            </div>
            <button 
              type="button" 
              className="mw-action-group"
              onClick={scrollToConsultation}
            >
              <span className="mw-action-pill">CHECK MY ELIGIBILITY</span>
              <span className="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="mw-split-feature-media">
            <img 
              src="/assets/images/singapore-bay.jpg" 
              alt="Rhordway Student Visa, Proof of Funds, Statement of Purpose & Global Migration" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
