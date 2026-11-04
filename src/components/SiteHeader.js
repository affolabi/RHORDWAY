import { siteConfig } from '../config/siteConfig.js';

export function renderSiteHeader() {
  return `
    <header class="ref-header mw-white-header" id="siteHeader">
      <div class="ref-header-container mw-header-inner">
        <a 
          href="#home" 
          class="ref-brand-logo mw-brand-logo" 
          aria-label="${siteConfig.brandName} Home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
        >
          <img 
            src="./assets/images/rhordway-logo-dark.png" 
            alt="${siteConfig.brandName}" 
            class="rhordway-brand-logo-img"
            width="150"
            height="28"
          />
        </a>

        <nav class="ref-nav-links mw-nav-links" aria-label="Main Navigation">
          <a 
            href="#home" 
            class="ref-nav-link mw-nav-link active" 
            data-page-nav="home"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
          >
            Home
          </a>
          <a 
            href="#about" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="about"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about')"
          >
            About
          </a>
          <a 
            href="#migration-services" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="migration-services"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')"
          >
            Migration Services
          </a>
          <a 
            href="#holidays" 
            class="ref-nav-link mw-nav-link" 
            data-page-nav="holidays"
            onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays')"
          >
            Holidays
          </a>
        </nav>

        <div class="ref-header-actions mw-header-actions">
          <a 
            href="#booking-collation" 
            class="mw-black-pill-btn"
            style="letter-spacing: 0.05em; font-size: 0.78rem; padding: 12px 24px;"
            onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
          >
            BOOK CONSULTATION
          </a>

          <button 
            type="button" 
            class="menu-toggle-btn mw-menu-toggle" 
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
        <a 
          href="#home" 
          class="ref-brand-logo mw-brand-logo" 
          aria-label="${siteConfig.brandName} Home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home'); window.rhordwayApp.closeMobileMenu()"
        >
          <img 
            src="./assets/images/rhordway-logo-dark.png" 
            alt="${siteConfig.brandName}" 
            class="rhordway-brand-logo-img"
            width="140"
            height="26"
          />
        </a>
        <button type="button" class="modal-close-btn" id="mobileNavCloseBtn" aria-label="Close menu">&times;</button>
      </div>

      <nav class="mobile-nav-links" aria-label="Mobile Navigation">
        <a 
          href="#home" 
          class="mobile-nav-link active" 
          data-page-nav="home"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home'); window.rhordwayApp.closeMobileMenu()"
        >
          Home
        </a>
        <a 
          href="#about" 
          class="mobile-nav-link" 
          data-page-nav="about"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about'); window.rhordwayApp.closeMobileMenu()"
        >
          About
        </a>
        <a 
          href="#migration-services" 
          class="mobile-nav-link" 
          data-page-nav="migration-services"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services'); window.rhordwayApp.closeMobileMenu()"
        >
          Migration Services
        </a>
        <a 
          href="#holidays" 
          class="mobile-nav-link" 
          data-page-nav="holidays"
          onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays'); window.rhordwayApp.closeMobileMenu()"
        >
          Holidays
        </a>
      </nav>

      <div style="margin-top:auto; padding-top:24px;">
        <a 
          href="#booking-collation" 
          class="mw-action-group" 
          style="width:100%; justify-content:center;" 
          onclick="event.preventDefault(); window.rhordwayApp.closeMobileMenu(); window.rhordwayApp.scrollToConsultation();"
        >
          <span class="mw-action-pill" style="flex:1; justify-content:center;">Book Consultation</span>
          <span class="mw-action-circle" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `;
}
