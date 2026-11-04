'use client';

import React from 'react';
import HolidaysHero from '../../components/HolidaysHero';
import HolidaysGrid from '../../components/HolidaysGrid';
import ConsultationDesk from '../../components/ConsultationDesk';

export default function HolidaysPage() {
  return (
    <>
      <HolidaysHero />
      <HolidaysGrid />
      <ConsultationDesk />
    </>
  );
}
