'use client';

import React from 'react';
import MigrationHero from '../../components/MigrationHero';
import StepBlueprint from '../../components/StepBlueprint';
import CorridorsGrid from '../../components/CorridorsGrid';
import FAQAccordion from '../../components/FAQAccordion';
import ConsultationDesk from '../../components/ConsultationDesk';

export default function MigrationServicesPage() {
  return (
    <>
      <MigrationHero />
      <StepBlueprint />
      <CorridorsGrid />
      <FAQAccordion />
      <ConsultationDesk />
    </>
  );
}
