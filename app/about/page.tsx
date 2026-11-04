'use client';

import React from 'react';
import AboutHero from '../../components/AboutHero';
import StrategicPillars from '../../components/StrategicPillars';
import MagazineSpread from '../../components/MagazineSpread';
import ConsultationDesk from '../../components/ConsultationDesk';

export default function AboutPage() {
  return (
    <>
      <section className="mw-packages-section" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
        <div className="mw-container">
          <AboutHero />
          <StrategicPillars />
        </div>
      </section>

      {/* The Magazine Layout Dossier: Why Choose Rhordway */}
      <MagazineSpread />

      {/* Consultation Booking Desk */}
      <ConsultationDesk />
    </>
  );
}
