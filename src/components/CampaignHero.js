export function renderCampaignHero() {
  return `
    <section class="mw-hero-section" id="hero">
      
      <!-- 1. Full-Screen Cinematic Hero (Centered: headline top · image breathes in middle · CTA bottom) -->
      <div class="mw-hero-frame mw-hero-centered">
        <img 
          src="./assets/images/hero-rhordway-runway.jpg" 
          alt="A traveller watching a plane take off at dawn — Rhordway makes travel processing simple and stress-free" 
          class="mw-hero-img"
          fetchpriority="high"
        />
        <div class="mw-hero-scrim"></div>

        <div class="mw-hero-inner mw-container mw-hero-centered-inner">
          <!-- Top: Two-tone headline -->
          <h1 class="mw-hero-title mw-hero-title-centered">
            Travel processing, made simple.<br />
            <span class="mw-hero-title-soft">The world, within reach.</span>
          </h1>

          <!-- Bottom: Blurb + single CTA + trust line -->
          <div class="mw-hero-bottom-stack">
            <p class="mw-hero-blurb mw-hero-blurb-centered">
              Student visas, global migration, travel visas, passports and flights — handled end to end by one dedicated team.
              <span class="mw-hero-blurb-soft">Every application is prepared with care, so you can focus on the journey.</span>
            </p>

            <a 
              href="#booking-collation" 
              class="mw-action-group"
              onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill" style="background:#FFFFFF; color:#0F1115;">Book a Consultation</span>
              <span class="mw-action-circle" style="background:#FFFFFF; color:#0F1115;" aria-hidden="true">↗</span>
            </a>

            <p class="mw-hero-trust">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Embassy-ready documentation · UK · Canada · Schengen · USA
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Editorial Split Intro Section Below Hero -->
      <div class="mw-container">
        <div class="mw-explore-split">
          
          <!-- Left Text & Black Pill CTA Column -->
          <div class="mw-explore-left anim-reveal-text">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Welcome to Rhordway
            </span>

            <h2 class="mw-split-heading">
              <strong>Explore the world, one breathtaking destination at a time</strong>
              <span class="mw-text-grey">— backed by expert migration, student visa, travel visa, and passport processing.</span>
            </h2>

            <a 
              href="#services" 
              class="mw-action-group"
            >
              <span class="mw-action-pill">EXPLORE WHAT WE DO</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </a>
          </div>

          <!-- Center Portrait Card: Student Visa & Study Abroad -->
          <div 
            class="mw-explore-card-portrait anim-reveal-text anim-delay-1" 
            onclick="window.rhordwayApp.navigateToPage('migration-services')" 
            style="cursor:pointer;"
          >
            <img 
              src="./assets/images/singapore-bay.jpg" 
              alt="Undergraduate & Postgraduate Student Visa Processing, Proof of Funds & SOP" 
              loading="lazy" 
            />
            <div class="mw-card-subtle-scrim"></div>
            <div class="mw-portrait-bottom">
              <p class="mw-portrait-caption">
                Student Visa, Proof of Funds<br />&amp; Statement of Purpose.
              </p>
              <span class="mw-white-circle-arrow" aria-hidden="true">↗</span>
            </div>
          </div>

          <!-- Right Landscape Card + Underneath Caption -->
          <div 
            class="mw-explore-card-landscape anim-reveal-text anim-delay-2" 
            onclick="window.rhordwayApp.navigateToPage('migration-services')" 
            style="cursor:pointer;"
          >
            <div class="mw-landscape-img-wrap">
              <img 
                src="./assets/images/doha-skyline.jpg" 
                alt="Global Migration, Travel Visas, Passports, Flights & Travel Insurance" 
                loading="lazy" 
              />
              <span class="mw-top-right-pill">Migration · Visas · Passports</span>
            </div>
            <p class="mw-landscape-under-text">
              From UK, Canada, France, Germany &amp; Spain visas to passport renewals, flight booking, airport transfers, and travel insurance—every step is handled with precision.
            </p>
          </div>

        </div>
      </div>

    </section>
  `;
}
