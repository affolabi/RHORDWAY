'use client';

import React from 'react';
import { useApp } from '../context/AppContext';

export default function AboutHero() {
  const { scrollToConsultation } = useApp();

  return (
    <div className="mw-split-feature-row anim-reveal-text" style={{ marginBottom: '56px' }}>
      <div className="mw-split-feature-text anim-reveal-text">
        <span className="mw-soft-pill" style={{ marginBottom: '14px' }}>
          <span className="mw-blue-dot"></span>
          About Rhordway™
        </span>
        <h1 className="mw-huge-heading" style={{ marginBottom: '18px' }}>
          We Make Travel Processing Simple &amp; Stress-Free<span style={{ color: '#0080E8' }}>.</span>
        </h1>
        <p className="mw-division-desc" style={{ maxWidth: '520px', fontSize: '0.98rem' }}>
          Explore the world, one breathtaking destination at a time. Rhordway is a premier Nigerian travel, student visa, global migration, and passport processing agency built to eliminate the stress and uncertainty of international documentation.
        </p>
        <div className="mw-division-pills">
          <span>✓ 98% Documentation Accuracy</span>
          <span>✓ Dedicated Visa &amp; SOP Advisors</span>
          <span>✓ Verified Global Aviation &amp; Hotel Partners</span>
        </div>
        <button 
          type="button" 
          className="mw-action-group"
          onClick={scrollToConsultation}
        >
          <span className="mw-action-pill">TALK TO OUR TEAM</span>
          <span className="mw-action-circle" aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="mw-split-feature-media anim-reveal-text anim-delay-2">
        <img 
          src="/assets/images/doha-museum.jpg" 
          alt="About Rhordway — Global Migration, Student Visas & Travel Processing" 
          loading="lazy"
        />
      </div>
    </div>
  );
}
