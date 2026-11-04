import { siteConfig } from '../config/siteConfig.js';

export function renderFinalCTA() {
  return '';
}

export function renderSiteFooter() {
  return `
    <footer class="ref-footer">
      <div class="ref-footer-container">
        
        <div class="ref-footer-main-row">
          <!-- Col 1: Brand & Socials -->
          <div class="ref-footer-brand-col">
            <a 
              href="#home" 
              class="ref-footer-logo" 
              aria-label="${siteConfig.brandName} Home"
              onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')"
            >
              <img 
                src="./assets/images/rhordway-logo-dark.png" 
                alt="${siteConfig.brandName}" 
                class="rhordway-footer-logo-img"
                width="155"
                height="29"
              />
            </a>
            <p class="ref-footer-tagline">
              We Make Travel Processing Simple And Stress-Free. Explore the world, one breathtaking destination at a time.
            </p>

            <div class="ref-social-icons-row" aria-label="Social media channels">
              <!-- Facebook -->
              <a href="https://facebook.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-fb" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <!-- Twitter / X -->
              <a href="https://twitter.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-tw" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <!-- Instagram -->
              <a href="https://instagram.com/Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-ig" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <!-- WhatsApp -->
              <a href="https://wa.me/2348164206030" target="_blank" rel="noopener" class="ref-social-icon icon-wa" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Company Pages -->
          <div class="ref-footer-links-col">
            <h4 class="ref-footer-col-title">Company &amp; Services</h4>
            <ul class="ref-footer-nav-list">
              <li><a href="#home" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('home')">Home</a></li>
              <li><a href="#about" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('about')">About Rhordway</a></li>
              <li><a href="#migration-services" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('migration-services')">Migration &amp; Visa Services</a></li>
              <li><a href="#holidays" onclick="event.preventDefault(); window.rhordwayApp.navigateToPage('holidays')">Holidays &amp; Escapes</a></li>
              <li><a href="#booking-collation" onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()">Book Consultation</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact Us -->
          <div class="ref-footer-contact-col">
            <h4 class="ref-footer-col-title">Contact Us</h4>
            <p class="ref-footer-contact-line" style="margin-bottom:6px;">
              Phone / WhatsApp: <a href="tel:+2348164206030">${siteConfig.primaryPhoneFormatted}</a>
            </p>
            <p class="ref-footer-contact-line" style="margin-bottom:6px;">
              Alternate Line: <a href="tel:+2349013397830">${siteConfig.alternatePhone}</a>
            </p>
            <p class="ref-footer-contact-line" style="margin-bottom:14px;">
              Email: <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a>
            </p>
            <div>
              <a 
                href="#booking-collation" 
                class="mw-black-pill-btn"
                onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
              >
                BOOK CONSULTATION ↗
              </a>
            </div>
          </div>

        </div>

        <div class="ref-footer-copyright">
          Copyright &copy; 2026 Rhordway™ (${siteConfig.instagram}). All rights reserved.
        </div>

      </div>
    </footer>
  `;
}
