import { packagesData } from '../config/packagesData';

export function renderExperienceSelector(): string {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="section-padding selector-section" id="experiences">
      <div class="container">
        <header class="section-header text-center">
          <p class="eyebrow">Curated Itineraries</p>
          <h2 class="section-title">Two Distinct Experiences</h2>
          <p class="section-subtitle">
            Whether seeking the rhythm of twin iconic destinations or the thrill of world championship motorsport, choose the journey crafted for you.
          </p>
        </header>

        <div class="selector-grid">
          <!-- Card 1: Doha + Zanzibar -->
          <article class="package-card" id="card-doha-zanzibar">
            <div class="package-card-media">
              <img 
                src="${pkgDZ.heroImage}" 
                alt="${pkgDZ.heroImageAlt}" 
                loading="lazy" 
                width="800" 
                height="500"
              />
              <span class="package-card-tag">${pkgDZ.durationLabel} · Dual Destination</span>
            </div>

            <div class="package-card-body">
              <div class="package-dates-meta">
                <span><strong>Departure:</strong> ${pkgDZ.dates}</span>
                <span>${pkgDZ.destinationBreakdown}</span>
              </div>

              <h3 class="package-card-title">${pkgDZ.title}</h3>
              <p class="package-card-desc">${pkgDZ.overviewDescription}</p>

              <div class="package-card-pricing">
                <div class="pricing-amount">${pkgDZ.pricing.standardFormatted}</div>
                <div class="pricing-terms">${pkgDZ.pricing.occupancyTerms}</div>
              </div>

              <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:auto;">
                <a href="#doha-zanzibar" class="btn btn-secondary" style="flex:1;">
                  Explore Itinerary
                </a>
                <button 
                  type="button" 
                  class="btn btn-primary" 
                  onclick="window.rhordwayApp.openEnquiryModal('doha-zanzibar')"
                  style="flex:1;"
                >
                  Enquire Package
                </button>
              </div>
            </div>
          </article>

          <!-- Card 2: Doha Grand Prix -->
          <article class="package-card" id="card-doha-grand-prix">
            <div class="package-card-media">
              <img 
                src="${pkgGP.heroImage}" 
                alt="${pkgGP.heroImageAlt}" 
                loading="lazy" 
                width="800" 
                height="500"
              />
              <span class="package-card-tag" style="color:#ff5a54;">${pkgGP.durationLabel} · Formula 1 Weekend</span>
            </div>

            <div class="package-card-body">
              <div class="package-dates-meta">
                <span style="color:#ff8e8a;"><strong>Departure:</strong> ${pkgGP.dates}</span>
                <span>${pkgGP.durationBreakdown}</span>
              </div>

              <h3 class="package-card-title">${pkgGP.title}</h3>
              <p class="package-card-desc">${pkgGP.overviewDescription}</p>

              <div class="package-card-pricing">
                <div class="pricing-amount">${pkgGP.pricing.standardFormatted}</div>
                <div class="pricing-terms">${pkgGP.pricing.occupancyTerms}</div>
              </div>

              <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; margin-top:auto;">
                <a href="#doha-grand-prix" class="btn btn-secondary" style="flex:1;">
                  Explore Weekend
                </a>
                <button 
                  type="button" 
                  class="btn btn-primary" 
                  onclick="window.rhordwayApp.openEnquiryModal('doha-grand-prix')"
                  style="flex:1;"
                >
                  Enquire Package
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}
