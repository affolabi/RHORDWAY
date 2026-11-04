import { packagesData } from '../config/packagesData.js';
import { siteConfig } from '../config/siteConfig.js';

/**
 * SHARED HELPER: 4-Panel Expandable Hugo Strip for Rhordway's Core Migration & Visa Services
 * (Placed on the Home Page as requested!)
 */
function renderMigrationHugoStripSection() {
  const servicePillars = [
    {
      id: 'pillar-student',
      kicker: 'UK · CANADA · EUROPE · USA',
      title: 'Student Visa & Study Abroad',
      desc: 'Undergraduate & Postgraduate admissions, visa processing, Proof of Funds, Statement of Purpose (SOP), and expert course & institution selection.',
      badgeTop: 'Edumigration Desk',
      badgeMain: 'Admissions + Visa',
      badgeSub: 'Proof of Funds & SOP Support',
      foot: 'End-to-End Professional Support',
      image: './assets/images/singapore-bay.jpg'
    },
    {
      id: 'pillar-visa',
      kicker: 'FRANCE · GERMANY · SPAIN · UK · CANADA · US',
      title: 'Travel Visas & Global Migration',
      desc: 'Tourist, business, family visit, and skilled migration visa processing with thorough embassy documentation and interview preparation.',
      badgeTop: 'Embassy Advisory',
      badgeMain: 'Global Visas',
      badgeSub: 'Schengen · UK · US · Canada · UAE',
      foot: 'Document Verification & Filing',
      image: './assets/images/doha-skyline.jpg'
    },
    {
      id: 'pillar-passport',
      kicker: 'FAST-TRACK DOCUMENTATION',
      title: 'Passports & Travel Insurance',
      desc: 'Fresh Nigerian passport applications, renewals, data-capturing coordination, and embassy-compliant international medical & travel insurance.',
      badgeTop: 'Travel Documents',
      badgeMain: 'Passports',
      badgeSub: 'Fresh Issue · Renewal · Insurance',
      foot: 'Fast & Stress-Free Processing',
      image: './assets/images/doha-museum.jpg'
    },
    {
      id: 'pillar-flights',
      kicker: 'GLOBAL AVIATION & GROUND MOBILITY',
      title: 'Flight Booking, Hotel & Airport Transfers',
      desc: 'International & domestic flight ticketing, verified hotel reservations, Hotel Transfers, and private Airport Transfers worldwide.',
      badgeTop: 'Aviation & Stays',
      badgeMain: 'Flights & PVT',
      badgeSub: 'Airport Transfer & Hotel Transfer',
      foot: '24/7 Arrival & Departure Support',
      image: './assets/images/dubai-marina.jpg'
    }
  ];

  return `
    <section class="mw-packages-section" id="home-migration-strip" style="padding-top:24px; padding-bottom:56px;">
      <div class="mw-container">
        <div class="hugo-header-row anim-reveal-text">
          <div class="hugo-header-left">
            <span class="hugo-eyebrow">
              <span class="mw-blue-dot"></span>
              RHORDWAY MIGRATION &amp; VISA SERVICES
            </span>
            <h2 class="hugo-editorial-heading">
              Expert Student Visas, Global Migration, Travel Visas, Passport Processing, Flights, Transfers &amp; Travel Insurance.
            </h2>
          </div>

          <div class="hugo-header-controls">
            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">SPEAK WITH A SPECIALIST</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <!-- Hugo 4-Panel Expandable Strip (Interactive on Hover & Click) -->
        <div class="hugo-accordion-strip" id="hugoServiceStrip">
          ${servicePillars.map((p, idx) => `
            <article 
              class="hugo-strip-card ${idx === 1 ? 'active' : ''}" 
              data-pkg-id="${p.id}"
              onclick="window.rhordwayApp.activateMagazinePanel('${p.id}')"
              onmouseenter="if(window.innerWidth >= 960) window.rhordwayApp.activateMagazinePanel('${p.id}')"
            >
              <img src="${p.image}" alt="${p.title}" class="hugo-strip-img" loading="lazy" />
              <div class="hugo-strip-scrim"></div>
              <div class="hugo-strip-content">
                <div class="hugo-strip-left">
                  <span class="hugo-strip-mini-ico" aria-hidden="true">✦</span>
                  <span class="hugo-strip-kicker">${p.kicker}</span>
                  <h3 class="hugo-strip-title">${p.title}</h3>
                  <p class="hugo-strip-desc">${p.desc}</p>
                </div>
                <div class="hugo-glass-widget">
                  <span class="hugo-widget-top">${p.badgeTop}</span>
                  <div class="hugo-widget-arc">
                    <span class="hugo-widget-big">${p.badgeMain}</span>
                    <span class="hugo-widget-sub">${p.badgeSub}</span>
                  </div>
                  <p class="hugo-widget-foot">${p.foot}</p>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * 1. HOME PAGE CONTENT:
 *    - A) Rhordway Migration & Visa Services 4-Panel Strip (moved to Home!)
 *    - B) "What We Do" Sticky Left Intro + Sticky-Stacking Right Services (01 - 06)
 *    - C) Core Processing Divisions Spotlight (TEXTS LEFT · IMAGE RIGHT as requested!)
 */
export function renderExperienceSelector() {
  return `
    <!-- ====================================================================
         SECTION A: RHORDWAY MIGRATION & VISA SERVICES (4-PANEL HUGO STRIP IN HOME)
         ==================================================================== -->
    ${renderMigrationHugoStripSection()}

    <!-- ====================================================================
         SECTION B: "WHAT WE DO" — STICKY LEFT INTRO + STICKY-STACKING RIGHT SERVICES
         ==================================================================== -->
    <section class="mw-services-section" id="services">
      <div class="mw-container">
        <div class="mw-services-grid">
          
          <!-- Left Sticky Editorial Column -->
          <div class="mw-services-left">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              What We Do
            </span>
            <h2 class="mw-services-heading">
              We Make Travel Processing Simple &amp; Stress-Free<span style="color:#0080E8;">.</span>
            </h2>
            <p class="mw-services-lead">
              From Student Visas, Global Migration, Travel Visas, and Passport Processing to Flight Booking, Travel Insurance, and Airport &amp; Hotel Transfers—every document and detail is handled end to end.
            </p>
            <div style="margin-top:28px;">
              <a 
                href="#booking-collation" 
                class="mw-action-group"
                onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
              >
                <span class="mw-action-pill">BOOK A SLOT TODAY</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <!-- Right Numbered Services List (Sticky-Stacking as You Scroll to End of What We Do) -->
          <ul class="mw-services-list">
            <li class="mw-service-item" style="--item-idx: 0;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">01</span>
                  <h3 class="mw-service-name">Student Visa &amp; Study Abroad (Edumigration)</h3>
                </div>
                <p class="mw-service-desc">
                  Complete Undergraduate &amp; Postgraduate admission and student visa processing for the UK, Canada, France, Germany, Spain, USA, and Europe—including <strong>Proof of Funds</strong>, <strong>Statement of Purpose (SOP)</strong>, and expert guidance on choosing the right course and institution.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 1;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">02</span>
                  <h3 class="mw-service-name">Travel Visa &amp; Visit Visa Processing</h3>
                </div>
                <p class="mw-service-desc">
                  High-precision tourist, business, family visit, and conference visa processing for France, Germany, Spain (Schengen), UK, USA, Canada, Qatar, UAE, Tanzania, Kenya, Egypt, and South Africa. We prepare your embassy file and appointment from start to finish.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 2;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">03</span>
                  <h3 class="mw-service-name">Global Migration &amp; Relocation Pathways</h3>
                </div>
                <p class="mw-service-desc">
                  Structured migration advisory for skilled professionals, families, and graduates seeking permanent residency, work visas, or long-term relocation pathways in Canada, the UK, and Europe—backed by dedicated professional support.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 3;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">04</span>
                  <h3 class="mw-service-name">Passport Processing &amp; Renewal Assistance</h3>
                </div>
                <p class="mw-service-desc">
                  Fast, organized Nigerian passport application, renewal, biometric data-capturing coordination, and travel document support so your passport is ready well ahead of your embassy submission.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 18h8"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 4;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">05</span>
                  <h3 class="mw-service-name">Flight Booking &amp; International Ticketing</h3>
                </div>
                <p class="mw-service-desc">
                  Competitive domestic and international flight booking across leading global airlines in Economy, Business, and First Class—including verified flight reservations for visa applications and student departures.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
            </li>

            <li class="mw-service-item" style="--item-idx: 5;">
              <div class="mw-service-text">
                <div class="mw-service-title-row">
                  <span class="mw-service-num">06</span>
                  <h3 class="mw-service-name">Airport Transfer, Hotel Transfer &amp; Travel Insurance</h3>
                </div>
                <p class="mw-service-desc">
                  Seamless private <strong>Airport Transfer</strong> pick-up and drop-off, verified international hotel reservations &amp; <strong>Hotel Transfer</strong> coordination, plus embassy-approved <strong>Travel Insurance</strong> coverage for every destination.
                </p>
              </div>
              <div class="mw-service-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </section>

    <!-- ====================================================================
         SECTION C: CORE DIVISIONS SPOTLIGHT (TEXTS LEFT · IMAGE RIGHT)
         ==================================================================== -->
    <section class="mw-study-corp-section" id="study-corporate">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0; margin-bottom:40px;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Featured Divisions
            </span>
            <h2 class="mw-huge-heading">
              Student Visas, Migration<br />&amp; Global Visas
            </h2>
          </div>

          <a 
            href="#migration-services" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')"
          >
            <span class="mw-action-pill">VIEW ALL VISA CORRIDORS</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="mw-split-feature-stack">
          
          <!-- Row 1: TEXTS LEFT · IMAGE RIGHT (Student Visa & Study Abroad Processing) -->
          <article class="mw-split-feature-row anim-reveal-text">
            <div class="mw-split-feature-text">
              <span class="mw-soft-pill" style="margin-bottom:14px;">
                <span class="mw-blue-dot"></span>
                Apply For Student Visa · UK, Canada &amp; Europe
              </span>
              <h3 class="mw-division-title" style="font-size:clamp(1.55rem, 2.6vw, 2.15rem); margin-bottom:12px;">
                Student Visa &amp; Study Abroad Processing.
              </h3>
              <p class="mw-division-desc" style="max-width:520px;">
                We guide students from university selection and admission letters all the way to visa approval—with complete documentation and financial advisory support.
              </p>
              <div class="mw-division-pills">
                <span>✓ Undergraduate &amp; Visa Processing</span>
                <span>✓ Proof of Funds Assistance</span>
                <span>✓ Statement of Purpose (SOP)</span>
                <span>✓ Course &amp; Institution Guidance</span>
                <span>✓ Professional End-to-End Support</span>
              </div>
              <button 
                type="button" 
                class="mw-action-group"
                onclick="window.rhordwayApp.selectServiceAndScroll('Student Visa & Study Abroad')"
              >
                <span class="mw-action-pill">APPLY FOR STUDENT VISA</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div class="mw-split-feature-media">
              <img 
                src="./assets/images/singapore-bay.jpg" 
                alt="Apply for Student Visa — Undergraduate, Postgraduate, Proof of Funds and Statement of Purpose" 
                loading="lazy" 
              />
            </div>
          </article>

          <!-- Row 2: TEXTS LEFT · IMAGE RIGHT (Travel Visas, Migration & Passports) -->
          <article class="mw-split-feature-row anim-reveal-text anim-delay-1">
            <div class="mw-split-feature-text">
              <span class="mw-soft-pill" style="margin-bottom:14px;">
                <span class="mw-blue-dot"></span>
                Migration · Visas · Passports · Flights
              </span>
              <h3 class="mw-division-title" style="font-size:clamp(1.55rem, 2.6vw, 2.15rem); margin-bottom:12px;">
                Travel Visas, Migration &amp; Passports.
              </h3>
              <p class="mw-division-desc" style="max-width:520px;">
                Applying for a visa to France, Germany, Spain, the UK, Canada, USA, or the Middle East? We handle your visa filing, passport renewal, flight booking, travel insurance, and airport/hotel transfers.
              </p>
              <div class="mw-division-pills">
                <span>✓ Visa Processing (UK, Schengen, US, Canada)</span>
                <span>✓ Global Migration Advisory</span>
                <span>✓ Passport Processing &amp; Renewal</span>
                <span>✓ Flight Booking &amp; Travel Insurance</span>
                <span>✓ Airport &amp; Hotel Transfers</span>
              </div>
              <button 
                type="button" 
                class="mw-action-group"
                onclick="window.rhordwayApp.selectServiceAndScroll('Travel & Visit Visa Processing')"
              >
                <span class="mw-action-pill">APPLY FOR YOUR VISA</span>
                <span class="mw-action-circle" aria-hidden="true">↗</span>
              </button>
            </div>

            <div class="mw-split-feature-media">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Travel Visa, Global Migration, Passports, Flights, Airport Transfer & Travel Insurance" 
                loading="lazy" 
              />
            </div>
          </article>

        </div>
      </div>
    </section>
  `;
}

/**
 * 2. DEDICATED ABOUT PAGE (#about) — Distinct Brand Story, Mission & Direct Specialist Desk
 */
export function renderAboutPage() {
  return `
    <section class="mw-packages-section" style="padding-top:32px; padding-bottom:64px;">
      <div class="mw-container">
        
        <!-- Texts Left · Image Right About Hero -->
        <div class="mw-split-feature-row anim-reveal-text" style="margin-bottom:56px;">
          <div class="mw-split-feature-text">
            <span class="mw-soft-pill" style="margin-bottom:14px;">
              <span class="mw-blue-dot"></span>
              About Rhordway™
            </span>
            <h1 class="mw-huge-heading" style="margin-bottom:18px;">
              We Make Travel Processing Simple &amp; Stress-Free<span style="color:#0080E8;">.</span>
            </h1>
            <p class="mw-division-desc" style="max-width:520px; font-size:0.98rem;">
              Explore the world, one breathtaking destination at a time. Rhordway is a premier Nigerian travel, student visa, global migration, and passport processing agency built to eliminate the stress and uncertainty of international documentation.
            </p>
            <div class="mw-division-pills">
              <span>✓ 98% Documentation Accuracy</span>
              <span>✓ Dedicated Visa &amp; SOP Advisors</span>
              <span>✓ Verified Global Aviation &amp; Hotel Partners</span>
            </div>
            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">TALK TO OUR TEAM</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="mw-split-feature-media">
            <img 
              src="./assets/images/doha-museum.jpg" 
              alt="About Rhordway — Global Migration, Student Visas & Travel Processing" 
            />
          </div>
        </div>

        <!-- 3 Strategic Pillars -->
        <div class="mw-process-grid" style="grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
          <div class="mw-process-card">
            <span class="mw-service-num">01 · OUR MISSION</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">Removing Documentation Friction</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65;">
              Most visa refusals happen because of poorly structured Proof of Funds, weak Statements of Purpose, or incomplete embassy files. Our specialists audit and prepare every document before submission.
            </p>
          </div>

          <div class="mw-process-card">
            <span class="mw-service-num">02 · OUR COVERAGE</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">End-to-End Global Mobility</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65;">
              We don't stop at visa approval. We coordinate your Nigerian passport renewal, international flight ticketing, embassy-approved travel insurance, hotel reservations, and private airport transfers.
            </p>
          </div>

          <div class="mw-process-card">
            <span class="mw-service-num">03 · DIRECT ACCESS</span>
            <h3 style="font-size:1.25rem; font-weight:700; color:#0F1115;">Speak Directly With Specialists</h3>
            <p style="font-size:0.9rem; color:#71717A; line-height:1.65; margin-bottom:8px;">
              Reach our consultation desk directly via phone, WhatsApp, or email:
            </p>
            <div style="display:flex; flex-direction:column; gap:4px; font-size:0.86rem; font-weight:700; color:#0F1115;">
              <span>📞 ${siteConfig.primaryPhoneFormatted} · ${siteConfig.alternatePhone}</span>
              <span>✉️ ${siteConfig.contactEmail} · 📱 ${siteConfig.instagram}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

/**
 * 3. DEDICATED MIGRATION SERVICES PAGE (#migration-services)
 *    - Distinct from Home! Features:
 *      A) Texts-Left Image-Right Migration & Study Advisory Header
 *      B) 4-Step Application & Visa Processing Blueprint
 *      C) 6 Global Visa & Study Corridors (UK, Canada, France/Germany/Spain, USA, Qatar/UAE, Africa)
 */
export function renderMigrationServicesPage() {
  const visaCorridors = [
    {
      id: 'uk-corridor',
      country: 'United Kingdom',
      tag: '#UK Visa & Study',
      badge: 'Student · Visit · Skilled',
      subtitle: 'Undergraduate & Postgraduate Admissions, CAS, Proof of Funds, SOP & Standard Visitor Visas.',
      image: './assets/images/doha-skyline.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'canada-corridor',
      country: 'Canada',
      tag: '#Canada Study & PR',
      badge: 'Study Permit · PR · Visit',
      subtitle: 'University/College Placement, Study Permits, Proof of Funds, SOP & Express Entry Migration.',
      image: './assets/images/singapore-bay.jpg',
      service: 'Global Migration & Relocation'
    },
    {
      id: 'schengen-corridor',
      country: 'France · Germany · Spain',
      tag: '#Schengen Visa',
      badge: '29 European Countries',
      subtitle: 'Schengen Tourist, Business & Study Visas with Embassy-Compliant Travel Insurance & Hotel Booking.',
      image: './assets/images/doha-museum.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'usa-corridor',
      country: 'United States',
      tag: '#USA F-1 & B1/B2',
      badge: 'Student · Business · Tourist',
      subtitle: 'F-1 Student Admissions, I-20 Guidance, DS-160 Filing & Consular Interview Preparation.',
      image: './assets/images/dubai-marina.jpg',
      service: 'Student Visa & Study Abroad'
    },
    {
      id: 'middle-east-corridor',
      country: 'Qatar & UAE (Dubai)',
      tag: '#Gulf Visas & Flights',
      badge: 'E-Visa · Flights · Transfers',
      subtitle: 'Fast-track Qatar & UAE Visas, Return Flights, Verified Hotels & Private Airport Transfers.',
      image: './assets/images/dubai-marina.jpg',
      service: 'Travel & Visit Visa Processing'
    },
    {
      id: 'africa-corridor',
      country: 'East & South Africa',
      tag: '#Tanzania · Kenya · SA',
      badge: 'Visas · Flights · Insurance',
      subtitle: 'Tanzania, Kenya, Egypt & South Africa Visas, Travel Insurance & Private Airport Transfers.',
      image: './assets/images/nairobi-safari.jpg',
      service: 'Travel & Visit Visa Processing'
    }
  ];

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

  return `
    <!-- 1. Texts-Left Image-Right Migration Services Header -->
    <section class="mw-packages-section" style="padding-top:32px; padding-bottom:56px;">
      <div class="mw-container">
        <div class="mw-split-feature-row anim-reveal-text">
          <div class="mw-split-feature-text">
            <span class="mw-soft-pill" style="margin-bottom:14px;">
              <span class="mw-blue-dot"></span>
              Migration, Visas &amp; Admissions Hub
            </span>
            <h1 class="mw-huge-heading" style="margin-bottom:16px;">
              Global Visa, Study Abroad &amp; Migration Pathways<span style="color:#0080E8;">.</span>
            </h1>
            <p class="mw-division-desc" style="max-width:520px;">
              Whether you are applying for an Undergraduate or Postgraduate Student Visa, relocating through skilled migration, filing a Schengen/UK/US travel visa, or renewing your Nigerian passport—our specialists manage your entire file.
            </p>
            <div class="mw-division-pills">
              <span>✓ Student Visa &amp; Admissions</span>
              <span>✓ Proof of Funds &amp; SOP</span>
              <span>✓ UK · Schengen · Canada · US Visas</span>
              <span>✓ Passports, Flights &amp; Insurance</span>
            </div>
            <button 
              type="button" 
              class="mw-action-group"
              onclick="window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">CHECK MY ELIGIBILITY</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>

          <div class="mw-split-feature-media">
            <img 
              src="./assets/images/singapore-bay.jpg" 
              alt="Rhordway Student Visa, Proof of Funds, Statement of Purpose & Global Migration" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. How Our 4-Step Processing Works -->
    <section class="mw-study-corp-section" style="padding:64px 0;">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0; margin-bottom:36px;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              How It Works
            </span>
            <h2 class="mw-huge-heading">
              Your 4-step processing<br />blueprint
            </h2>
          </div>
          <p class="mw-header-side-desc">
            Every student visa, migration pathway, and travel visa application follows a structured 4-stage quality review.
          </p>
        </div>

        <div class="mw-process-grid">
          ${processSteps.map((s) => `
            <div class="mw-process-card anim-reveal-text">
              <span class="mw-service-num">${s.step}</span>
              <h3 style="font-size:1.15rem; font-weight:700; color:#0F1115; margin:0;">${s.title}</h3>
              <p style="font-size:0.88rem; color:#71717A; line-height:1.6; margin:0;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 3. Global Visa & Study Corridors Grid (Exclusive to Migration Services Page) -->
    <section class="mw-packages-section" id="visa-corridors" style="padding-top:64px;">
      <div class="mw-container">
        <div class="mw-tours-header anim-reveal-text" style="margin-top:0;">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Where We Process
            </span>
            <h2 class="mw-huge-heading">
              Global visa, study &amp;<br />migration corridors
            </h2>
          </div>

          <a 
            href="#booking-collation" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            <span class="mw-action-pill">START MY APPLICATION</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="farer-magazine-grid">
          ${visaCorridors.map((item, idx) => `
            <article 
              class="farer-mag-card anim-reveal-text anim-delay-${(idx % 3) + 1}" 
              onclick="window.rhordwayApp.selectServiceAndScroll('${item.service}', '${item.country}')"
            >
              <div class="farer-img-frame">
                <img 
                  src="${item.image}" 
                  alt="${item.country} — ${item.subtitle}" 
                  loading="lazy" 
                />
                <div class="farer-subtle-gradient"></div>

                <button 
                  type="button" 
                  class="farer-corner-arrow" 
                  aria-label="Book Consultation for ${item.country}"
                  onclick="event.stopPropagation(); window.rhordwayApp.selectServiceAndScroll('${item.service}', '${item.country}')"
                >
                  ↗
                </button>

                <div class="farer-tag-cutout">
                  <span class="farer-tag-pill">
                    <span class="mw-blue-dot"></span>
                    ${item.tag}
                  </span>
                </div>
              </div>

              <div class="farer-card-caption">
                <div class="farer-caption-top">
                  <h4 class="farer-caption-title">${item.country}</h4>
                  <span class="farer-caption-nights">${item.badge}</span>
                </div>
                <p class="farer-caption-sub">${item.subtitle}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * 4. DEDICATED HOLIDAYS PAGE (#holidays) — Vacation Escapes & Destination Showcase
 */
export function renderHolidaysPage() {
  const flagshipIds = [
    'zanzibar-nairobi',
    'doha-nairobi',
    'doha-zanzibar',
    'doha-grand-prix'
  ];

  const globalIds = [
    'singapore-bali',
    'bali-doha',
    'doha-singapore',
    'egypt-doha',
    'egypt',
    'doha-seychelles',
    'south-africa',
    'casablanca-marrakech',
    'dubai'
  ];

  const renderHugoStripPanel = (id, idx) => {
    const pkg = packagesData[id];
    if (!pkg) return '';
    const isActive = idx === 0;

    return `
      <article 
        class="hugo-strip-card ${isActive ? 'active' : ''}" 
        id="hugo-panel-${pkg.id}"
        data-pkg-id="${pkg.id}"
        onclick="window.rhordwayApp.activateMagazinePanel('${pkg.id}')"
        onmouseenter="if(window.innerWidth >= 960) window.rhordwayApp.activateMagazinePanel('${pkg.id}')"
      >
        <img 
          src="${pkg.heroImage}" 
          alt="${pkg.heroImageAlt}" 
          class="hugo-strip-img"
          loading="lazy" 
        />
        <div class="hugo-strip-scrim"></div>

        <div class="hugo-strip-content">
          <div class="hugo-strip-left">
            <span class="hugo-strip-mini-ico" aria-hidden="true">✦</span>
            <span class="hugo-strip-kicker">${pkg.destinationBreakdown}</span>
            <h3 class="hugo-strip-title">${pkg.title}</h3>
            <p class="hugo-strip-desc">${pkg.overviewDescription}</p>
          </div>

          <div class="hugo-glass-widget">
            <span class="hugo-widget-top">${pkg.durationLabel} · Private Basis</span>
            <div class="hugo-widget-arc">
              <span class="hugo-widget-big">${pkg.durationLabel}</span>
              <span class="hugo-widget-sub">Flights · Visas · 5★ Hotels</span>
            </div>
            <p class="hugo-widget-foot">${pkg.transferBasis}</p>
          </div>
        </div>
      </article>
    `;
  };

  const renderGlobalFarerCard = (id, idx) => {
    const pkg = packagesData[id];
    if (!pkg) return '';
    const delayClass = `anim-delay-${(idx % 3) + 1}`;

    return `
      <article 
        class="farer-mag-card anim-reveal-text ${delayClass}" 
        onclick="window.rhordwayApp.selectServiceAndScroll('Vacation & Holiday Enquiry', '${pkg.title}')"
      >
        <div class="farer-img-frame">
          <img 
            src="${pkg.heroImage}" 
            alt="${pkg.heroImageAlt}" 
            loading="lazy" 
          />
          <div class="farer-subtle-gradient"></div>

          <button 
            type="button" 
            class="farer-corner-arrow" 
            aria-label="Enquire about ${pkg.title}"
            onclick="event.stopPropagation(); window.rhordwayApp.selectServiceAndScroll('Vacation & Holiday Enquiry', '${pkg.title}')"
          >
            ↗
          </button>

          <div class="farer-tag-cutout">
            <span class="farer-tag-pill">
              <span class="mw-blue-dot"></span>
              #${pkg.title}
            </span>
          </div>
        </div>

        <div class="farer-card-caption">
          <div class="farer-caption-top">
            <h4 class="farer-caption-title">${pkg.title}</h4>
            <span class="farer-caption-nights">${pkg.durationLabel} · PVT</span>
          </div>
          <p class="farer-caption-sub">${pkg.destinationBreakdown} — ${pkg.subtitle}</p>
        </div>
      </article>
    `;
  };

  return `
    <section class="mw-packages-section" id="hot-deals" style="padding-top:32px;">
      <div class="mw-container">
        
        <div class="hugo-header-row anim-reveal-text">
          <div class="hugo-header-left">
            <span class="hugo-eyebrow">
              <span class="mw-blue-dot"></span>
              RHORDWAY VACATION &amp; HOLIDAY ESCAPES
            </span>
            <h1 class="hugo-editorial-heading">
              Explore the world, one breathtaking destination at a time—with return flights, visas, 5-star stays, and private airport transfers.
            </h1>
          </div>

          <div class="hugo-header-controls">
            <div class="hugo-nav-arrows" aria-label="Switch featured destination">
              <button 
                type="button" 
                class="hugo-arrow-btn" 
                id="hugoPrevBtn" 
                aria-label="Previous destination"
                onclick="window.rhordwayApp.stepMagazinePanel(-1)"
              >
                ←
              </button>
              <button 
                type="button" 
                class="hugo-arrow-btn" 
                id="hugoNextBtn" 
                aria-label="Next destination"
                onclick="window.rhordwayApp.stepMagazinePanel(1)"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Hugo-Style Interactive Expandable Magazine Strip -->
        <div class="hugo-accordion-strip" id="hugoAccordionStrip">
          ${flagshipIds.map((id, idx) => renderHugoStripPanel(id, idx)).join('')}
        </div>

        <div class="mw-tours-header anim-reveal-text">
          <div>
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Global Holiday Collection
            </span>
            <h2 class="mw-huge-heading">
              Curated global<br />vacation destinations
            </h2>
          </div>

          <a 
            href="#booking-collation" 
            class="mw-action-group"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            <span class="mw-action-pill">PLAN MY GETAWAY</span>
            <span class="mw-action-circle" aria-hidden="true">↗</span>
          </a>
        </div>

        <!-- Farer-Style Large-Image Magazine Grid (9 Global Destinations) -->
        <div class="farer-magazine-grid" id="refDealsGrid">
          ${globalIds.map((id, idx) => renderGlobalFarerCard(id, idx)).join('')}
        </div>

      </div>
    </section>
  `;
}
