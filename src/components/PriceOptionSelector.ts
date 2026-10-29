import { packagesData } from '../config/packagesData';

export function renderGrandPrixFeature(): string {
  const pkg = packagesData['doha-grand-prix'];
  const options = pkg.pricing.options || [];

  return `
    <section class="section-padding grand-prix-feature" id="doha-grand-prix">
      <div class="container">
        <div class="editorial-header-banner">
          <p class="eyebrow" style="color:#ff6b66;">Motorsport & City Monograph · November 25 – December 1, 2026</p>
          <h2 class="editorial-headline">Experience Doha beyond the ordinary.</h2>
          <p class="section-subtitle" style="max-width:720px;">
            A premier six-night journey combining Qatar’s contemporary architectural marvels, rich desert landscapes, and the spectacle of a three-day Formula 1 Grand Prix weekend.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr; gap:var(--space-12); align-items:start;" class="grand-prix-layout">
          <!-- Left: Narrative & Interactive Occupancy Selector -->
          <div>
            <div class="occupancy-selector-box">
              <span class="eyebrow" style="color:var(--text-muted);">Occupancy & Pricing Options</span>
              <h3 style="font-family:var(--font-display); font-size:1.6rem; margin-top:4px;">
                Select Your Accommodation Preference
              </h3>
              <p style="font-size:var(--text-supporting); color:var(--text-secondary); margin-top:4px;">
                Choose between double sharing or private single occupancy. Your selection dynamically adjusts your booking enquiry details.
              </p>

              <div class="occupancy-toggle-group" role="radiogroup" aria-label="Occupancy selection">
                ${options.map((opt, index) => {
                  const isDouble = opt.occupancy.includes('Double');
                  const optionId = isDouble ? 'double' : 'single';
                  return `
                    <button 
                      type="button" 
                      class="occupancy-card-btn" 
                      id="occupancy-btn-${optionId}" 
                      role="radio" 
                      aria-checked="false" 
                      onclick="window.rhordwayApp.selectOccupancy('${optionId}', '${opt.priceFormatted}')"
                    >
                      <span class="occupancy-label">${opt.occupancy}</span>
                      <span class="occupancy-price">${opt.priceFormatted}</span>
                      <span class="occupancy-note">${opt.note}</span>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Selected Status Display -->
              <div id="occupancySelectionFeedback" style="margin-top:var(--space-4); padding:var(--space-3) var(--space-4); background:var(--surface-primary); border-radius:var(--radius-xs); border:1px solid var(--border-subtle); font-size:0.85rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center;">
                <span>Please select an occupancy option above to generate an enquiry.</span>
                <span id="selectedPriceDisplay" style="font-weight:600; color:var(--text-primary); font-family:var(--font-display); font-size:1.15rem;"></span>
              </div>

              <div style="margin-top:var(--space-6); display:flex; gap:var(--space-4); flex-wrap:wrap;">
                <button 
                  type="button" 
                  class="btn btn-primary" 
                  id="gpEnquiryBtn"
                  onclick="window.rhordwayApp.openEnquiryModal('doha-grand-prix')"
                >
                  Enquire for Grand Prix Experience
                </button>
              </div>
            </div>

            <!-- Inclusions List for Grand Prix -->
            <div style="margin-top:var(--space-8);">
              <h4 style="font-family:var(--font-display); font-size:1.35rem; margin-bottom:var(--space-4);">
                Package Inclusions (6 Nights)
              </h4>
              <div class="inclusions-grid">
                ${pkg.inclusions.map(inc => `
                  <div class="inclusion-card">
                    <div class="inclusion-icon-wrapper" aria-hidden="true" style="color:#ff6b66;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div class="inclusion-text">
                      <h4>${inc.title}</h4>
                      <p>${inc.description}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
