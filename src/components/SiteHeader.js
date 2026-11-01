import { siteConfig } from '../config/siteConfig.js';

export function renderSiteHeader() {
  return `
    <header class="ref-header" id="siteHeader">
      <div class="ref-header-container">
        <a href="#" class="ref-brand-logo" aria-label="${siteConfig.brandName} Home">
          <span class="ref-brand-name">Rhordway<span class="ref-brand-dot">.</span></span>
        </a>

        <nav class="ref-nav-links" aria-label="Main Navigation">
          <a href="#" class="ref-nav-link active">Home</a>
          <a href="#hot-deals" class="ref-nav-link">Packages</a>
          <a href="#top-destinations" class="ref-nav-link">Destinations</a>
          <a href="#responsibilities" class="ref-nav-link">Why Us</a>
          <a href="#booking-collation" class="ref-nav-link ref-nav-highlight">Reservation</a>
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
        <a href="#" class="ref-brand-logo" onclick="window.rhordwayApp.closeMobileMenu()">
          <span class="ref-brand-name" style="color:var(--brand-dark);">Rhordway<span class="ref-brand-dot">.</span></span>
        </a>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a href="#" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Home</a>
        <a href="#hot-deals" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Holiday Packages</a>
        <a href="#top-destinations" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Destinations</a>
        <a href="#responsibilities" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Why Rhordway</a>
        <a href="#booking-collation" class="mobile-nav-link" style="color:var(--brand-primary); font-weight:700;" onclick="window.rhordwayApp.closeMobileMenu()">Official Reservation</a>
      </nav>

      <div style="margin-top:auto; padding-top:24px;">
        <a 
          href="#booking-collation" 
          class="ref-hero-discover-btn ref-btn-primary" 
          style="display:flex; text-align:center; padding:15px; width:100%; justify-content:center;" 
          onclick="window.rhordwayApp.closeMobileMenu();"
        >
          Book Your Trip
        </a>
      </div>
    </div>
  `;
}
