import { siteConfig } from '../config/siteConfig.js';
import { packagesData } from '../config/packagesData.js';

export function renderInformationCollation() {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="section-padding collation-section" id="booking-collation">
      <div class="container collation-container">
        
        <header class="section-header text-center" style="margin-bottom:var(--space-8);">
          <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
            <span class="collation-eyebrow-pill">
              <span class="pulse-dot" aria-hidden="true"></span>
              Official Reservation Collation
            </span>
          </div>
          <h2 class="section-title anim-reveal-text">Collate Your Details & Receive Your Official Travel Dossier</h2>
          <p class="section-subtitle anim-reveal-text anim-delay-1">
            Choose your package, enter your travel details below, and generate your official PDF reservation dossier to send directly to our consultant on WhatsApp.
          </p>
        </header>

        <div class="luxury-collation-card">
          <form id="collationForm" onsubmit="window.rhordwayApp.handleCollationSubmit(event)">
            
            <!-- ===============================================================
                 STEP 01: SELECT PACKAGE & OCCUPANCY
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">01</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Select Holiday Package & Departure Date</h3>
                <p class="collation-step-desc">Pick your preferred 2026 holiday escape to dynamically update inclusions and rates.</p>

                <div class="package-pick-grid">
                  <!-- Option 1: Doha + Zanzibar -->
                  <label class="package-pick-card active" id="label-pick-dz">
                    <input 
                      type="radio" 
                      name="selectedPackage" 
                      value="doha-zanzibar" 
                      checked 
                      onchange="window.rhordwayApp.updateCollationPackage('doha-zanzibar')"
                      class="sr-only"
                    />
                    <div class="pick-card-thumb">
                      <img src="./assets/images/zanzibar-beach.jpg" alt="Zanzibar Beach" loading="lazy" />
                      <span class="pick-card-tag">Dual Escape</span>
                    </div>
                    <div class="pick-card-body">
                      <div class="pick-card-top-row">
                        <span class="pick-badge">${pkgDZ.dates} · ${pkgDZ.durationLabel}</span>
                        <div class="pick-radio-indicator" aria-hidden="true">
                          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="pick-card-title">${pkgDZ.title}</h4>
                      <p class="pick-card-desc">Qatar Airways flights, 5-Star Doha hotel & all-inclusive Zanzibar coastal resort.</p>
                      <div class="pick-card-price-row">
                        <span class="pick-rate-value">${pkgDZ.pricing.standardFormatted}</span>
                        <span class="pick-rate-sub">per person sharing</span>
                      </div>
                    </div>
                  </label>

                  <!-- Option 2: Doha Grand Prix -->
                  <label class="package-pick-card" id="label-pick-gp">
                    <input 
                      type="radio" 
                      name="selectedPackage" 
                      value="doha-grand-prix" 
                      onchange="window.rhordwayApp.updateCollationPackage('doha-grand-prix')"
                      class="sr-only"
                    />
                    <div class="pick-card-thumb">
                      <img src="./assets/images/doha-f1-grand-prix.jpg" alt="Doha Formula 1 Grand Prix" loading="lazy" />
                      <span class="pick-card-tag">Formula 1 GP</span>
                    </div>
                    <div class="pick-card-body">
                      <div class="pick-card-top-row">
                        <span class="pick-badge">${pkgGP.dates} · ${pkgGP.durationLabel}</span>
                        <div class="pick-radio-indicator" aria-hidden="true">
                          <svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="pick-card-title">${pkgGP.title}</h4>
                      <p class="pick-card-desc">3-Day Formula 1 race weekend, 5-star Doha accommodation & desert dune safari.</p>
                      <div class="pick-card-price-row">
                        <span class="pick-rate-value">From ₦3,400,000</span>
                        <span class="pick-rate-sub">per person</span>
                      </div>
                    </div>
                  </label>
                </div>

                <!-- Occupancy Tier Selection -->
                <div class="occupancy-pick-wrapper" id="collationOccupancyContainer">
                  <label class="input-field-label" for="collationOccupancySelect">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Accommodation & Occupancy Tier
                  </label>
                  <div class="select-field-box">
                    <select 
                      id="collationOccupancySelect" 
                      class="form-select-styled" 
                      onchange="window.rhordwayApp.updateCollationCalculation()"
                    >
                      <option value="Double Occupancy (per person sharing)" data-rate="4350000" selected>
                        Double Occupancy (per person sharing) — ₦4,350,000 / person
                      </option>
                    </select>
                    <div class="select-chevron-icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===============================================================
                 STEP 02: GUEST & CONTACT DETAILS
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">02</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Guest & Contact Information</h3>
                <p class="collation-step-desc">Used exclusively for generating your reservation PDF and travel briefing.</p>
                
                <div class="form-grid-2">
                  <!-- Name -->
                  <div class="form-group-luxury">
                    <label for="guestFullName" class="input-field-label">Lead Traveller Full Name *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input 
                        type="text" 
                        id="guestFullName" 
                        class="form-input-luxury" 
                        placeholder="e.g. Amara Johnson" 
                        required 
                      />
                    </div>
                  </div>

                  <!-- WhatsApp -->
                  <div class="form-group-luxury">
                    <label for="guestPhone" class="input-field-label">WhatsApp / Phone Number *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input 
                        type="tel" 
                        id="guestPhone" 
                        class="form-input-luxury" 
                        placeholder="e.g. +234 816 420 6030" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div class="form-grid-2" style="margin-top:var(--space-4);">
                  <!-- Email -->
                  <div class="form-group-luxury">
                    <label for="guestEmail" class="input-field-label">Email Address *</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input 
                        type="email" 
                        id="guestEmail" 
                        class="form-input-luxury" 
                        placeholder="e.g. amara@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <!-- Departure City -->
                  <div class="form-group-luxury">
                    <label for="departureCity" class="input-field-label">Departure City (Nigeria/International)</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <input 
                        type="text" 
                        id="departureCity" 
                        class="form-input-luxury" 
                        placeholder="e.g. Lagos, Abuja, London" 
                      />
                    </div>
                  </div>
                </div>

                <div class="form-grid-2" style="margin-top:var(--space-4);">
                  <!-- Travellers -->
                  <div class="form-group-luxury">
                    <label for="guestCount" class="input-field-label">Number of Travellers</label>
                    <div class="select-field-box">
                      <select 
                        id="guestCount" 
                        class="form-select-styled" 
                        onchange="window.rhordwayApp.updateCollationCalculation()"
                      >
                        <option value="1">1 Person</option>
                        <option value="2" selected>2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5+ Persons (Group Booking)</option>
                      </select>
                      <div class="select-chevron-icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Special Requests -->
                  <div class="form-group-luxury">
                    <label for="specialRequests" class="input-field-label">Special Requests / Preferences (Optional)</label>
                    <div class="input-icon-wrapper">
                      <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                      <input 
                        type="text" 
                        id="specialRequests" 
                        class="form-input-luxury" 
                        placeholder="e.g. Honeymoon suite, vegetarian, twin beds" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===============================================================
                 STEP 03: REVIEW & WHATSAPP DISPATCH
                 =============================================================== -->
            <div class="collation-step-block">
              <div class="collation-step-num">03</div>
              <div class="collation-step-content">
                <h3 class="collation-step-title">Review & Dispatch Reservation Dossier</h3>
                <p class="collation-step-desc">Your official travel summary PDF will generate and download immediately upon sending.</p>

                <div class="dossier-receipt-card">
                  <div class="receipt-header-row">
                    <div>
                      <span class="receipt-label">ESTIMATED RESERVATION TOTAL</span>
                      <div id="collationTotalAmount" class="receipt-total-amount">
                        ₦8,700,000
                      </div>
                    </div>
                    <div class="receipt-breakdown-box">
                      <span id="collationCalculationNote" class="receipt-note-badge">2 Persons × ₦4,350,000</span>
                      <span class="receipt-sub-note">Verified Partner Rates · No Hidden Booking Fees</span>
                    </div>
                  </div>
                </div>

                <div style="margin-top:var(--space-6); display:flex; flex-direction:column; gap:var(--space-3);">
                  <button type="submit" class="btn-dossier-submit">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                    Generate Official PDF & Send to WhatsApp Consultant
                  </button>
                </div>

                <!-- Success notification box -->
                <div id="collationSuccessAlert" class="collation-success-alert" style="display:none;">
                  <div style="font-size:1.05rem; font-weight:800; color:var(--brand-primary); margin-bottom:6px;">
                    ✅ Official Reservation Dossier Generated Successfully!
                  </div>
                  <p style="font-size:0.875rem; color:var(--text-body); line-height:1.6;">
                    Your official reservation PDF has been saved to your downloads. Redirecting you to WhatsApp to connect directly with your dedicated Rhordway consultant at <strong>+234 816 420 6030</strong>.
                  </p>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  `;
}

