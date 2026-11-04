'use client';

import React from 'react';
import CampaignHero from '../components/CampaignHero';
import MigrationHugoStrip from '../components/MigrationHugoStrip';
import SplitFeatures from '../components/SplitFeatures';
import ConsultationDesk from '../components/ConsultationDesk';

export default function HomePage() {
  return (
    <>
      <CampaignHero />
      <MigrationHugoStrip />
      <SplitFeatures />
      <ConsultationDesk />
    </>
  );
}
