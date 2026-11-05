'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '../context/AppContext';

export default function CampaignHero() {
  const { scrollToConsultation } = useApp();

  return (
    <section className="mw-hero-section" id="hero">
      
      {/* 1. Full-Screen Cinematic Hero */}
      <div className="mw-hero-frame mw-hero-centered">
        <img 
          src="/assets/images/hero-rhordway-runway.jpg" 
          alt="A traveller watching a plane take off at dawn — Rhordway makes travel processing simple and stress-free" 
          className="mw-hero-img"
          fetchPriority="high"
        />
        <div className="mw-hero-scrim"></div>

        <div className="mw-hero-inner mw-container mw-hero-centered-inner">
          {/* Top: Two-tone headline */}
          <h1 className="mw-hero-title mw-hero-title-centered anim-reveal-hero">
            <span className="hero-stage-1">Travel processing,</span>
            <span className="hero-stage-2">made simple &amp; seamless.</span>
            <span className="mw-hero-title-soft hero-stage-3">The world, within your reach.</span>
          </h1>

          {/* Bottom: Blurb + single CTA + trust line */}
          <div className="mw-hero-bottom-stack anim-reveal-blurb">
            <p className="mw-hero-blurb mw-hero-blurb-centered">
              Student visas, global migration, travel visas, passports and flights — handled end to end by one dedicated team.
              <span className="mw-hero-blurb-soft"> Every application is prepared with care, so you can focus on the&nbsp;journey.</span>
            </p>

            <button 
              type="button" 
              className="mw-action-group anim-reveal-cta"
              onClick={scrollToConsultation}
            >
              <span className="mw-action-pill" style={{ background: '#FFFFFF', color: '#0F1115' }}>
                Book a Consultation
              </span>
              <span className="mw-action-circle" style={{ background: '#FFFFFF', color: '#0F1115' }} aria-hidden="true">
                ↗
              </span>
            </button>

            <p className="mw-hero-trust anim-reveal-trust">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Embassy-ready documentation · UK · Canada · Schengen · USA
            </p>
          </div>
        </div>
      </div>

      {/* 2. Editorial Split Intro Section Below Hero */}
      <div className="mw-container">
        <div className="mw-explore-split">
          
          {/* Left Text & Action Column */}
          <div className="mw-explore-left anim-reveal-text">
            <span className="mw-soft-pill">
              <span className="mw-blue-dot"></span>
              Welcome to Rhordway
            </span>

            <h2 className="mw-split-heading">
              <strong>Explore the world, one breathtaking destination at a time</strong>
              <span className="mw-text-grey"> — backed by expert migration, student visa, travel visa, and passport processing.</span>
            </h2>

            <Link 
              href="/migration-services" 
              className="mw-action-group"
            >
              <span className="mw-action-pill">EXPLORE WHAT WE DO</span>
              <span className="mw-action-circle" aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Center Portrait Card: Student Visa & Study Abroad */}
          <Link 
            href="/migration-services" 
            className="mw-explore-card-portrait anim-reveal-text anim-delay-1" 
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <img 
              src="/assets/images/singapore-bay.jpg" 
              alt="Undergraduate & Postgraduate Student Visa Processing, Proof of Funds & SOP" 
              loading="lazy" 
            />
            <div className="mw-card-subtle-scrim"></div>
            <div className="mw-portrait-bottom">
              <p className="mw-portrait-caption">
                Student Visa, Proof of Funds<br />&amp; Statement of Purpose.
              </p>
              <span className="mw-white-circle-arrow" aria-hidden="true">↗</span>
            </div>
          </Link>

          {/* Right Landscape Card + Underneath Caption */}
          <Link 
            href="/migration-services" 
            className="mw-explore-card-landscape anim-reveal-text anim-delay-2" 
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="mw-landscape-img-wrap">
              <img 
                src="/assets/images/doha-skyline.jpg" 
                alt="Global Migration, Travel Visas, Passports, Flights & Travel Insurance" 
                loading="lazy" 
              />
              <span className="mw-top-right-pill">Migration · Visas · Passports</span>
            </div>
            <p className="mw-landscape-under-text">
              From UK, Canada, France, Germany &amp; Spain visas to passport renewals, flight booking, airport transfers, and travel insurance—every step is handled with precision.
            </p>
          </Link>

        </div>
      </div>

    </section>
  );
}
