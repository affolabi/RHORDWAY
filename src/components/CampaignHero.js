export function renderCampaignHero() {
  return `
    <section class="ref-hero-section" id="hero">
      <div class="ref-hero-bg-wrap">
        <img 
          src="./assets/images/hero-reference-bridge.jpg" 
          alt="Pont Alexandre III bridge illuminated at twilight with golden lamps" 
          class="ref-hero-bg-img"
          fetchpriority="high"
        />
        <div class="ref-hero-scrim"></div>
      </div>

      <div class="ref-hero-container">
        <div class="ref-hero-grid">
          
          <!-- Left Column: Display Typography & CTA -->
          <div class="ref-hero-content">
            <span class="ref-hero-eyebrow anim-reveal-text">✦ EXCLUSIVE 2026 HOLIDAYS</span>

            <h1 class="ref-hero-title anim-reveal-text anim-delay-1">
              Explore Beautiful<br />
              World With Us
            </h1>

            <p class="ref-hero-subtitle anim-reveal-text anim-delay-2">
              &ldquo;Let us take the hassle out of travel planning, so you can focus on the extraordinary adventure ahead.&rdquo;
            </p>

            <div class="ref-hero-btn-row anim-reveal-text anim-delay-3">
              <a href="#hot-deals" class="ref-hero-discover-btn">
                <span>Discover Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Column: 3 Staggered Floating Cards (Exact Reference Style) -->
          <div class="ref-hero-cards-cluster" aria-label="Featured Holiday Destinations">
            <!-- Card 1: Large / Left (Doha Architectural Heritage) -->
            <div class="ref-floating-card card-tall">
              <img 
                src="./assets/images/doha-museum.jpg" 
                alt="Museum of Islamic Art illuminated at twilight" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Doha</div>
            </div>

            <!-- Card 2: Medium / Center (Zanzibar Turquoise Coast) -->
            <div class="ref-floating-card card-mid">
              <img 
                src="./assets/images/zanzibar-beach.jpg" 
                alt="Zanzibar white sand beach and dhow boat" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Zanzibar</div>
            </div>

            <!-- Card 3: Compact / Right (Doha Formula 1 Grand Prix) -->
            <div class="ref-floating-card card-compact">
              <img 
                src="./assets/images/doha-f1-grand-prix.jpg" 
                alt="Formula 1 night race in Doha" 
                loading="eager"
              />
              <div class="ref-card-glass-tag">Formula 1</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
