import { trustHighlights, bookingSteps } from '../config/packagesData';

export function renderTrustSection(): string {
  return `
    <section class="section-padding trust-section" id="why-rhordway">
      <div class="container">
        <header class="section-header text-center">
          <p class="eyebrow">Travel Confidence</p>
          <h2 class="section-title">Seamless Coordination from Start to Finish</h2>
          <p class="section-subtitle">
            Every Rhordway package is structured around verified travel logistics, giving you full peace of mind throughout your journey.
          </p>
        </header>

        <div class="trust-grid">
          ${trustHighlights.map(item => `
            <div class="trust-card">
              <h3 class="trust-card-title">${item.title}</h3>
              <p class="trust-card-desc">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderBookingSteps(): string {
  return `
    <section class="section-padding" id="process" style="background-color:var(--page-background); border-top:1px solid var(--border-subtle);">
      <div class="container">
        <header class="section-header text-center">
          <p class="eyebrow">Simple & Transparent</p>
          <h2 class="section-title">The Booking Process</h2>
          <p class="section-subtitle">
            Three straightforward steps to secure your position on our upcoming November and December 2026 departures.
          </p>
        </header>

        <div class="steps-grid">
          ${bookingSteps.map(step => `
            <div class="step-card">
              <div class="step-num">${step.step}</div>
              <h3 class="step-title">${step.title}</h3>
              <p class="step-desc">${step.description}</p>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:var(--space-12); text-align:center;">
          <p style="font-size:0.85rem; color:var(--text-muted); max-width:620px; margin:0 auto var(--space-6);">
            Final availability, exact flight schedules, and confirmed payment arrangements are handled directly by our designated travel advisory desk.
          </p>
          <button type="button" class="btn btn-primary" onclick="window.rhordwayApp.openEnquiryModal('general')">
            Begin Your Booking Enquiry
          </button>
        </div>
      </div>
    </section>
  `;
}
