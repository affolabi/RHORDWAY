export function renderTrustSection() {
  return `
    <section class="mw-magazine-section" id="responsibilities">
      <div class="mw-container">
        
        <!-- Editorial Masthead Header -->
        <div class="mw-magazine-masthead anim-reveal-text">
          <div class="mw-magazine-eyebrow-row">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              The Rhordway Dossier · Editorial Spread
            </span>
            <span class="mw-magazine-edition-label">VOL. 2026 // ISSUE 04</span>
          </div>

          <h2 class="mw-magazine-headline">
            Why Nigeria’s Most Discerning Travelers &amp; Students Choose Rhordway<span style="color:#0080E8;">.</span>
          </h2>

          <p class="mw-magazine-lead">
            Most visa refusals happen because of poorly structured Proof of Funds, weak Statements of Purpose, or incomplete embassy files. We treat global travel, university admissions, and migration as an exacting science—delivering unmatched accuracy, speed, and discretion.
          </p>
        </div>

        <!-- Magazine Spread Grid (Left: Lead Cover Story · Right: 3 Stacked Editorial Articles) -->
        <div class="mw-magazine-spread anim-reveal-text anim-delay-1">
          
          <!-- Left: Lead Feature Column (No. 01 Student Visa & POF Authority) -->
          <article class="mw-magazine-feature-card">
            <div class="mw-magazine-card-meta">
              <span class="mw-magazine-tag-pill">SPECIAL REPORT · ADMISSIONS &amp; POF DESK</span>
              <span class="mw-magazine-folio">NO. 01</span>
            </div>

            <div class="mw-magazine-feature-img-wrap">
              <img 
                src="./assets/images/responsibilities-banner.jpg" 
                alt="Rhordway Student Visa, Admissions and Proof of Funds Advisory" 
                class="mw-magazine-feature-img"
                loading="lazy"
              />
            </div>

            <div class="mw-magazine-feature-body">
              <span class="mw-magazine-category">UNDERGRADUATE &amp; POSTGRADUATE</span>
              <h3 class="mw-magazine-feature-title">
                Student Visa Experts &amp; Sovereign Proof of Funds
              </h3>
              <p class="mw-magazine-feature-desc">
                From securing direct university admissions across top institutions in the UK, Canada, France, Germany, Spain, and the US to auditing bank accounts for liquid Proof of Funds compliance. Our education desk writes and reviews authentic, refusal-proof Statements of Purpose (SOPs) tailored to consular expectations.
              </p>

              <div class="mw-magazine-pills">
                <span>✓ University Placement &amp; CAS</span>
                <span>✓ Proof of Funds Advisory</span>
                <span>✓ Bespoke Statement of Purpose</span>
              </div>
            </div>
          </article>

          <!-- Right: Stacked Editorial Articles (02, 03, 04) -->
          <div class="mw-magazine-side-stack">
            
            <!-- Article No. 02 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">02</span>
                <div>
                  <span class="mw-magazine-tag">GLOBAL MOBILITY</span>
                  <h3 class="mw-magazine-article-title">Global Visas &amp; Strategic Migration</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Embassy-compliant filing for Schengen countries (France, Germany, Spain), the UK, Canada, and the United States. We audit every financial affidavit, employment record, and ties-to-home evidence with 98% first-time accuracy.
              </p>
              <div class="mw-magazine-article-meta">
                <span>UK · Canada · Schengen · USA</span>
                <span class="mw-blue-dot"></span>
                <span>98% Accuracy</span>
              </div>
            </article>

            <!-- Article No. 03 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">03</span>
                <div>
                  <span class="mw-magazine-tag">DOCUMENTATION &amp; LOGISTICS</span>
                  <h3 class="mw-magazine-article-title">Fast-Track Passports &amp; Priority Flights</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Urgent Nigerian passport renewals and fresh booklet coordination expedited without bureaucratic stalling. Coupled with priority international flight bookings on global carriers and verified, embassy-compliant travel insurance.
              </p>
              <div class="mw-magazine-article-meta">
                <span>Fast-Track Renewals</span>
                <span class="mw-blue-dot"></span>
                <span>Embassy-Approved Insurance</span>
              </div>
            </article>

            <!-- Article No. 04 -->
            <article class="mw-magazine-article-item">
              <div class="mw-magazine-article-header">
                <span class="mw-magazine-num">04</span>
                <div>
                  <span class="mw-magazine-tag">WHITE-GLOVE CONCIERGE</span>
                  <h3 class="mw-magazine-article-title">Airport Transfers &amp; 5-Star Accommodations</h3>
                </div>
              </div>
              <p class="mw-magazine-article-desc">
                Your journey extends seamlessly past airport customs. We arrange private meet-and-greet airport pickups, chauffeur drop-offs, and hand-selected luxury hotel reservations across all global destinations.
              </p>
              <div class="mw-magazine-article-meta">
                <span>VIP Airport Meet &amp; Greet</span>
                <span class="mw-blue-dot"></span>
                <span>5-Star Handpicked Stays</span>
              </div>
            </article>

          </div>

        </div>

        <!-- Editorial Bottom Verification Ribbon & CTA -->
        <div class="mw-magazine-footer-ribbon anim-reveal-text anim-delay-2">
          <div class="mw-magazine-metrics-grid">
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">98%</span>
              <span class="mw-mag-stat-lbl">Documentation Accuracy</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">14+</span>
              <span class="mw-mag-stat-lbl">Destination Countries</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">100%</span>
              <span class="mw-mag-stat-lbl">Verified Embassy Filings</span>
            </div>
            <div class="mw-magazine-metric">
              <span class="mw-mag-stat">24/7</span>
              <span class="mw-mag-stat-lbl">Direct Travel Specialist Desk</span>
            </div>
          </div>

          <div class="mw-magazine-cta-row">
            <button 
              type="button" 
              class="mw-action-group"
              onclick="window.rhordwayApp.scrollToConsultation()"
            >
              <span class="mw-action-pill">BOOK YOUR CONSULTATION</span>
              <span class="mw-action-circle" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function renderUnleashWanderlust() {
  return '';
}
