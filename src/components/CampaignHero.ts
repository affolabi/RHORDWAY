import { packagesData } from '../config/packagesData';

export function renderCampaignHero(): string {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <p class="eyebrow">Exclusive 2026 Holiday Departures</p>
          <h1 class="hero-headline">Two Destinations. One Extraordinary Escape.</h1>
          <p class="hero-copy">
            From Doha's striking skyline to Zanzibar's turquoise shores, discover two unforgettable travel experiences curated by Rhordway.
          </p>

          <div class="hero-ctas">
            <a href="#experiences" class="btn btn-primary">
              Explore the Experiences
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <button type="button" class="btn btn-secondary" onclick="window.rhordwayApp.openEnquiryModal('general')">
              Speak to a Travel Consultant
            </button>
          </div>
        </div>

        <div class="hero-packages-preview" aria-label="Featured Travel Packages Overview">
          <!-- Package 1: Doha + Zanzibar -->
          <article class="hero-package-badge-card" tabindex="0">
            <div class="hero-preview-top">
              <span class="hero-preview-dates">${pkgDZ.dates}</span>
              <span class="hero-preview-nights">${pkgDZ.durationLabel}</span>
            </div>
            <h2 class="hero-preview-title">${pkgDZ.title}</h2>
            <div class="hero-preview-price">
              ${pkgDZ.pricing.standardFormatted} <span>${pkgDZ.pricing.occupancyTerms}</span>
            </div>
            <div style="margin-top:var(--space-3); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.8rem; color:var(--text-muted);">${pkgDZ.destinationBreakdown}</span>
              <a href="#doha-zanzibar" class="btn-link" style="font-size:0.75rem;">View Journey &rarr;</a>
            </div>
          </article>

          <!-- Package 2: Doha Grand Prix Experience -->
          <article class="hero-package-badge-card grand-prix" tabindex="0">
            <div class="hero-preview-top">
              <span class="hero-preview-dates">${pkgGP.dates}</span>
              <span class="hero-preview-nights">${pkgGP.durationLabel}</span>
            </div>
            <h2 class="hero-preview-title">${pkgGP.title}</h2>
            <div class="hero-preview-price">
              ${pkgGP.pricing.standardFormatted} <span>per person on double occupancy</span>
            </div>
            <div style="margin-top:var(--space-3); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.8rem; color:var(--text-muted);">${pkgGP.destinationBreakdown}</span>
              <a href="#doha-grand-prix" class="btn-link" style="font-size:0.75rem;">View Race Weekend &rarr;</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}
