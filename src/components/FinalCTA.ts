import { siteConfig } from '../config/siteConfig';

export function renderFinalCTA(): string {
  return `
    <section class="section-padding final-cta-section" id="final-cta">
      <div class="container container-narrow">
        <div class="final-cta-content">
          <p class="eyebrow">Your 2026 Journey Awaits</p>
          <h2 class="editorial-headline" style="font-size:var(--text-display-l);">
            Your next unforgettable experience starts here.
          </h2>
          <p class="section-subtitle" style="max-width:600px;">
            Choose your escape and let the Rhordway team help you plan the next step. Departure dates for both experiences are strictly limited.
          </p>

          <div style="display:flex; gap:var(--space-4); flex-wrap:wrap; justify-content:center; margin-top:var(--space-4);">
            <button 
              type="button" 
              class="btn btn-primary" 
              onclick="window.rhordwayApp.openEnquiryModal('general')"
            >
              Enquire About Your Trip
            </button>
            <a href="#experiences" class="btn btn-secondary">
              Explore the Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderSiteFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <span class="brand-title" style="font-size:1.5rem;">${siteConfig.brandWordmark}</span>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
              ${siteConfig.brandTagline} · Luxury Holiday Packages
            </p>
          </div>

          <div style="display:flex; gap:var(--space-6); flex-wrap:wrap;">
            <a href="#experiences" class="nav-link" style="font-size:0.85rem;">Packages</a>
            <a href="#doha-zanzibar" class="nav-link" style="font-size:0.85rem;">Doha + Zanzibar</a>
            <a href="#doha-grand-prix" class="nav-link" style="font-size:0.85rem;">Doha Grand Prix</a>
            <a href="#faqs" class="nav-link" style="font-size:0.85rem;">FAQs</a>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${siteConfig.legal.copyrightYear} ${siteConfig.brandName}. All rights reserved.
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); max-width:600px; text-align:right;">
            ${siteConfig.legal.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  `;
}
