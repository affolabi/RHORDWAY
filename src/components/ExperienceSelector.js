import { packagesData } from '../config/packagesData.js';

export function renderExperienceSelector() {
  const pkgDZ = packagesData['doha-zanzibar'];
  const pkgGP = packagesData['doha-grand-prix'];

  return `
    <section class="ref-hot-deals-section" id="hot-deals">
      <div class="ref-deals-wrapper">
        
        <!-- Section Header Bar (Reference style) -->
        <div class="ref-deals-header">
          <div class="ref-deals-title-box">
            <h2 class="ref-section-heading">HOT DEALS</h2>
            <p class="ref-section-subheading">Fire up your savings with our hot deals</p>
          </div>

          <div class="ref-nav-arrows-box" aria-label="Carousel navigation">
            <button type="button" class="ref-arrow-circle" id="dealPrevBtn" aria-label="Previous deal">&larr;</button>
            <button type="button" class="ref-arrow-circle" id="dealNextBtn" aria-label="Next deal">&rarr;</button>
          </div>
        </div>

        <!-- 4 Hot Deals Cards (Reference Grid / Mobile Swipe Carousel) -->
        <div class="ref-deals-grid" id="refDealsGrid">
          
          <!-- Deal 1: Doha + Zanzibar -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar tropical beach and turquoise ocean" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

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
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                    <span>All-Inclusive Meals</span>
                  </li>
                </ul>

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 2: Doha Grand Prix -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 night race cars in Doha" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

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

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 3: Zanzibar Coral Atoll -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/zanzibar-mnemba.jpg" 
                alt="Zanzibar Mnemba Atoll turquoise reef" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Mnemba Island</h3>
                
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

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-zanzibar')"
                >
                  Discover Now
                </button>
              </div>
            </div>
          </article>

          <!-- Deal 4: Doha Desert Safari & Skyline -->
          <article class="ref-deal-card">
            <div class="ref-deal-img-box">
              <img 
                src="./assets/images/doha-desert-safari.jpg" 
                alt="Doha Desert Dunes Safari to the Inland Sea" 
                loading="lazy" 
              />
              <div class="ref-deal-gradient-scrim"></div>

              <div class="ref-deal-overlay-content">
                <h3 class="ref-deal-card-title">Doha Safari & City</h3>
                
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

                <button 
                  type="button" 
                  class="ref-deal-btn"
                  onclick="window.rhordwayApp.populateAndScrollCollation('doha-grand-prix')"
                >
                  Discover Now
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
