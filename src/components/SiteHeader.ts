import { siteConfig } from '../config/siteConfig';

export function renderSiteHeader(): string {
  return `
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a href="#" class="brand-logo" aria-label="${siteConfig.brandName} Home">
          <span class="brand-title">${siteConfig.brandWordmark}</span>
          <span class="brand-subtitle">${siteConfig.brandTagline}</span>
        </a>

        <nav class="nav-desktop" aria-label="Main Navigation">
          <a href="#experiences" class="nav-link">Packages</a>
          <a href="#doha-zanzibar" class="nav-link">Doha + Zanzibar</a>
          <a href="#doha-grand-prix" class="nav-link">Doha Grand Prix</a>
          <a href="#process" class="nav-link">How to Book</a>
          <a href="#faqs" class="nav-link">FAQs</a>
          <button type="button" class="btn btn-primary" onclick="window.rhordwayApp.openEnquiryModal('general')">
            Enquire Now
          </button>
        </nav>

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
    </header>
  `;
}

export function renderMobileNavigation(): string {
  return `
    <div class="mobile-nav-drawer" id="mobileNavDrawer" aria-hidden="true">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="brand-title" style="font-size:1.35rem;">${siteConfig.brandWordmark}</span>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a href="#experiences" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Experiences</a>
        <a href="#doha-zanzibar" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Doha + Zanzibar</a>
        <a href="#doha-grand-prix" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">Doha Grand Prix</a>
        <a href="#process" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">How to Book</a>
        <a href="#faqs" class="mobile-nav-link" onclick="window.rhordwayApp.closeMobileMenu()">FAQs</a>
      </nav>

      <div style="margin-top:auto; padding-top:var(--space-8); border-top:1px solid var(--border-subtle);">
        <button 
          type="button" 
          class="btn btn-primary" 
          style="width:100%;" 
          onclick="window.rhordwayApp.closeMobileMenu(); window.rhordwayApp.openEnquiryModal('general');"
        >
          Enquire Now
        </button>
      </div>
    </div>
  `;
}
