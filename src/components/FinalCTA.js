import { siteConfig } from '../config/siteConfig.js';

export function renderFinalCTA() {
  return ''; // Replaced by reference layout flow
}

export function renderSiteFooter() {
  return `
    <footer class="ref-footer">
      <div class="ref-footer-container">
        
        <div class="ref-footer-main-row">
          <!-- Col 1: Brand & Socials -->
          <div class="ref-footer-brand-col">
            <a href="#" class="ref-footer-logo" aria-label="Rhordway Home">
              <span class="ref-brand-chevron">&gt;&gt;</span>
              <span class="ref-brand-name">Rhordway</span>
            </a>
            <p class="ref-footer-tagline">
              Escape the ordinary with<br />our travel experiences
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
              <!-- YouTube -->
              <a href="https://youtube.com/@Rhordway" target="_blank" rel="noopener" class="ref-social-icon icon-yt" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"></polygon>
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

          <!-- Col 2: Quick Links -->
          <div class="ref-footer-links-col">
            <h4 class="ref-footer-col-title">Quick Links</h4>
            <ul class="ref-footer-nav-list">
              <li><a href="#hot-deals">Packages Tour</a></li>
              <li><a href="#top-destinations">Top Destinations</a></li>
              <li><a href="#responsibilities">Family Holiday</a></li>
              <li><a href="#booking-collation">Reservation Collation</a></li>
            </ul>
          </div>

          <!-- Col 3: Contact Us -->
          <div class="ref-footer-contact-col">
            <h4 class="ref-footer-col-title">Contact Us</h4>
            <p class="ref-footer-contact-line">
              Landline: <a href="tel:+2348164206030">+234 816 420 6030</a>
            </p>
            <div style="margin-top:14px;">
              <span class="ref-footer-contact-line" style="display:block; margin-bottom:8px;">Newsletter Registration:</span>
              <a href="#booking-collation" class="ref-newsletter-btn">
                Register now
              </a>
            </div>
          </div>

        </div>

        <div class="ref-footer-copyright">
          Copyright: &copy; 2026 Rhordway Travels. All rights reserved
        </div>

      </div>
    </footer>
  `;
}
