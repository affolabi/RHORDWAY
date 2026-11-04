# Product Requirements Document (PRD): Rhordway™ Official Company Website

## 1. Executive Summary
- **Product Name:** Rhordway™ Official Company Website
- **Brand Tagline:** *"We Make Travel Processing Simple And Stress-Free. Explore the world, one breathtaking destination at a time."*
- **Core Objective:** Transform Rhordway's web presence from a single-offer ad landing page into a sleek, multi-page official company website centered on Rhordway's core travel processing, visa, student admission, and migration divisions.
- **Visual Direction:** 90% Pure White (`#FFFFFF`) & Soft Alabaster (`#FAFAFA`), Crisp Jet Black (`#0F1115`) typography & pill CTAs (`Book Consultation` + `↗`), and minimal Azure Blue (`#0080E8`) micro-accents (inspired by *Alobo Travels*, *Marwa*, *Hugo*, and *Farer*).

---

## 2. Multi-Page Site Architecture
The website is structured into **4 dedicated pages** accessible via instant header, mobile drawer, and hash-based navigation (`#home`, `#about`, `#migration-services`, `#holidays`):

| Page | Route / ID | Purpose & Core Sections | Primary CTA |
| :--- | :--- | :--- | :--- |
| **1. Home** | `#home` | Framed rounded hero, Marwa-style editorial intro split, sticky *"What We Do"* 6-service stack, Student Visa & Migration spotlight, Global Visa Corridors, Why Choose Rhordway, Consultation Desk & FAQ | `Book Consultation ↗` |
| **2. About** | `#about` | Framed About hero, Who We Are & Mission, Direct Specialist Access (`+234 816 420 6030` · `+234 901 339 7830` · `Rhordway@gmail.com` · `@Rhordway`), Trust Banner, Consultation Desk & FAQ | `Book Consultation ↗` |
| **3. Migration Services** | `#migration-services` | Interactive 4-panel Hugo accordion for Rhordway's 4 Core Processing Divisions (Student Visa, Travel Visas & Migration, Passports & Insurance, Flights & Transfers), sticky *"What We Do"* breakdown, Student Visa & Migration deep dive, and Global Corridors | `Book Consultation ↗` |
| **4. Holidays** | `#holidays` | Editorial destination showcase featuring the 4-panel expandable Hugo strip (`Zanzibar + Nairobi`, `Doha + Nairobi`, `Doha + Zanzibar`, `Doha Grand Prix`), 9-card Farer global destination grid, and 4-column Bento destination mosaic (zero cluttered package-checkout calculators) | `Book Consultation ↗` |

---

## 3. Core Rhordway Service Divisions (From Official Brand Boards)
1. **Student Visa & Study Abroad (Edumigration):**
   - Undergraduate & Postgraduate Admission & Visa Processing (UK, Canada, France, Germany, Spain, Ireland, USA)
   - Proof of Funds Assistance & Financial Advisory
   - Statement of Purpose (SOP) Writing & Review
   - Expert Guidance on Choosing the Right Course & Institution
   - Professional End-to-End Support
2. **Travel Visa & Visit Visa Processing:**
   - Tourist, Business, Family Visit, and Conference Visas (France, Germany, Spain / Schengen, UK, USA, Canada, Qatar, UAE, Tanzania, Kenya, Egypt, South Africa)
3. **Global Migration & Relocation Pathways:**
   - Skilled worker migration advisory, permanent residency documentation, and family relocation pathways
4. **Passport Processing & Renewal Assistance:**
   - Fresh Nigerian passport applications, renewals, and biometric appointment coordination
5. **Flight Booking & International Ticketing:**
   - Domestic & international flight booking across global carriers
6. **Airport Transfer, Hotel Transfer & Travel Insurance:**
   - Private (`PVT`) Airport Pick-up & Drop-off Transfers, verified Hotel Bookings & Hotel Transfers, and embassy-compliant Travel Insurance

---

## 4. Key UX & Interaction Specifications
- **Sticky "What We Do" Scroll Architecture (`#services`):**
  - Uses `overflow-x: clip` on `body` so native CSS `position: sticky` operates smoothly across desktop browsers.
  - The left intro column (`.mw-services-left`) stays fixed at `top: 108px`, while the 6 numbered service cards on the right (`.mw-service-item`) cascade and lock in a sticky stack (`top: calc(104px + var(--item-idx) * 58px)`) until the user scrolls to the end of *"What We Do"*.
- **Clean Company Consultation Desk (`#booking-collation`):**
  - Replaces the removed package-checkout price calculator with a sleek White & Black consultation form where clients select their required service (*Student Visa & Study Abroad*, *Travel & Visit Visa Processing*, *Global Migration & Relocation*, *Passport Processing & Renewal*, *Flight Booking, Hotel & Airport Transfer*, *Travel Insurance*, or *Vacation & Holiday Enquiry*), enter their contact details and target country, and dispatch directly to Rhordway's specialist WhatsApp desk (`+234 816 420 6030`).
