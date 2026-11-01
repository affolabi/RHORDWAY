import { packagesData } from '../config/packagesData.js';

export function renderExperienceSelector() {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="ref-hot-deals-section" id="hot-deals">
      <div class="ref-deals-wrapper">
        
        <!-- Section Header Bar -->
        <div class="ref-deals-header">
          <div class="ref-deals-title-box anim-reveal-text">
            <h2 class="ref-section-heading">Featured Packages</h2>
            <p class="ref-section-subheading">Handpicked luxury itineraries with all-inclusive 5-star experiences</p>
          </div>

          <div class="ref-nav-arrows-box" aria-label="Carousel navigation">
            <button type="button" class="ref-arrow-circle" id="dealPrevBtn" aria-label="Previous deal">&larr;</button>
            <button type="button" class="ref-arrow-circle" id="dealNextBtn" aria-label="Next deal">&rarr;</button>
          </div>
        </div>

        <!-- 4 Hot Deals Cards (Reference Grid / Mobile Swipe Carousel) -->
        <div class="ref-deals-grid" id="refDealsGrid">
          
          <!-- Deal 1: Doha + Zanzibar -->
          <article class="ref-deal-card anim-reveal-text anim-delay-1">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar tropical beach and turquoise ocean" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>
              <span class="ref-deal-badge">Dual Escape</span>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha + Zanzibar</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>7 Days (Dec 12–19)</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span>5-Star Luxury Hotels</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>All-Inclusive Meals</span>
                  </li>
                </ul>

                <div class="ref-deal-price-bar">
                  <span class="ref-deal-price-val">₦4,350,000</span>
                  <span class="ref-deal-price-note">per person sharing</span>
                </div>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  <span>Explore Package</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 2: Doha Grand Prix -->
          <article class="ref-deal-card anim-reveal-text anim-delay-2">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 night race cars in Doha" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>
              <span class="ref-deal-badge">Formula 1 GP</span>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha Grand Prix</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>6 Days (Nov 25 – Dec 1)</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    <span>3-Day F1 Race Access</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>5-Star Hotel & Safari</span>
                  </li>
                </ul>

                <div class="ref-deal-price-bar">
                  <span class="ref-deal-price-val">From ₦3,400,000</span>
                  <span class="ref-deal-price-note">Double / ₦4,150,000 Single</span>
                </div>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  <span>Explore Package</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 3: Zanzibar Coral Atoll -->
          <article class="ref-deal-card anim-reveal-text anim-delay-3">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-mnemba.jpg" 
                alt="Zanzibar Mnemba Atoll turquoise reef" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>
              <span class="ref-deal-badge">Island Escape</span>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Mnemba Island Reefs</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                    </svg>
                    <span>7 Days Coastal Tour</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span>Private Villa Resort</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>Snorkel & Dhow Cruise</span>
                  </li>
                </ul>

                <div class="ref-deal-price-bar">
                  <span class="ref-deal-price-val">₦4,350,000</span>
                  <span class="ref-deal-price-note">All-Inclusive Dual Tour</span>
                </div>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  <span>Explore Package</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 4: Doha Desert Safari & Skyline -->
          <article class="ref-deal-card anim-reveal-text anim-delay-4">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-desert-safari.jpg" 
                alt="Doha Desert Dunes Safari to the Inland Sea" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>
              <span class="ref-deal-badge">Desert & Safari</span>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha Safari & Culture</h3>
                
                <ul class="ref-deal-amenities-list">
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                    </svg>
                    <span>6 Days Adventure</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Desert Dune Bashing</span>
                  </li>
                  <li class="ref-amenity-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    </svg>
                    <span>Museum & VIP Souq</span>
                  </li>
                </ul>

                <div class="ref-deal-price-bar">
                  <span class="ref-deal-price-val">From ₦3,400,000</span>
                  <span class="ref-deal-price-note">VIP Safari & F1 Access</span>
                </div>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  <span>Explore Package</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </article>

        </div>

        <!-- Mobile Carousel Pagination Dots -->
        <div class="ref-deals-dots" id="dealsDots" aria-hidden="true">
          <span class="ref-deal-dot active" data-index="0"></span>
          <span class="ref-deal-dot" data-index="1"></span>
          <span class="ref-deal-dot" data-index="2"></span>
          <span class="ref-deal-dot" data-index="3"></span>
        </div>
      </div>
    </section>
  `;
}
