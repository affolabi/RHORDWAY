import { siteConfig } from '../config/siteConfig.js';

export function renderSiteHeader() {
  return `
    <header class="ref-header" id="siteHeader">
      <div class="ref-header-container">
        <a href="#" class="ref-brand-logo" aria-label="${siteConfig.brandName} Home">
          <span class="ref-brand-chevron">&gt;&gt;</span>
          <span class="ref-brand-name">Rhordway</span>
        </a>

        <nav class="ref-nav-links" aria-label="Main Navigation">
          <a href="#" class="ref-nav-link active">Home</a>
          <a href="#hot-deals" class="ref-nav-link">Packages Tour</a>
          <a href="#top-destinations" class="ref-nav-link">Top Destinations</a>
          <a href="#responsibilities" class="ref-nav-link">Our Commitments</a>
          <a href="#booking-collation" class="ref-nav-link ref-nav-highlight">Reservation Collation</a>
        </nav>

        <div class="ref-header-actions">
          <a href="#booking-collation" class="ref-header-cta-btn">
            Book Trip
          </a>

          <button 
            type="button" 
            class="menu-toggle-btn" 
            id="menuToggleBtn" 
            aria-label="Toggle navigation menu" 
            aria-expanded="false" 
            aria-controls="mobileNavDrawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function renderMobileNavigation() {
  return `
    <div class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div class="brand-wrap">
          <div class="brand-circle-icon"></div>
          <span class="brand-text">RHORDWAY</span>
        </div>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a href="#about" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">About</a>
        <a href="#experiences" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Tour</a>
        <a href="#packages" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Package</a>
        <a href="#booking-collation" class="mobile-nav-link" style="color:var(--brand-primary);" onclick="window.rhordwayApp.closeMobileMenu()">Collation & PDF</a>
        <a href="#contact" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Contact</a>
      </nav>

      <div style="margin-top:auto; padding-top:24px;">
        <a 
          href="#booking-collation" 
          class="btn-pill-dark" 
          style="display:block; text-align:center; padding:16px;" 
          onclick="window.rhordwayApp.closeMobileMenu();"
        >
          Book Trip Now
        </a>
      </div>
    </div>
  `;
}
