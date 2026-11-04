'use client';

import React from 'react';

export default function StepBlueprint() {
  const processSteps = [
    {
      step: 'STEP 01',
      title: 'Eligibility & Course / Visa Audit',
      desc: 'We evaluate your academic or travel profile, recommend the right university/course or visa category, and map out your exact timeline.'
    },
    {
      step: 'STEP 02',
      title: 'Proof of Funds & SOP Structuring',
      desc: 'Our specialists guide your Proof of Funds documentation, write/review your Statement of Purpose (SOP), and verify every supporting record.'
    },
    {
      step: 'STEP 03',
      title: 'Application Filing & Travel Insurance',
      desc: 'We submit your admission/visa application, issue embassy-compliant Travel Insurance, coordinate Passport renewals, and book biometric appointments.'
    },
    {
      step: 'STEP 04',
      title: 'Visa Approval, Flights & Transfers',
      desc: 'Once approved, we handle your international Flight Booking, verified Hotel Booking/Transfer, and private Airport Transfer on arrival.'
    }
  ];

  return (
    <section className="mw-study-corp-section" style={{ padding: '64px 0' }}>
      <div className="mw-container">
        <div className="mw-tours-header anim-reveal-text is-inview" style={{ marginTop: 0, marginBottom: '36px' }}>
          <div>
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              How It Works
            </span>
            <h2 className="mw-huge-heading">
              Your 4-step processing<br />blueprint
            </h2>
          </div>
          <p className="mw-header-side-desc">
            Every student visa, migration pathway, and travel visa application follows a structured 4-stage quality review.
          </p>
        </div>

        <div className="mw-process-grid">
          {processSteps.map((s) => (
            <div key={s.step} className="mw-process-card anim-reveal-text is-inview">
              <span className="mw-service-num">{s.step}</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F1115', margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#71717A', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
