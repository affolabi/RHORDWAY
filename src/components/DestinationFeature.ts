import { packagesData } from '../config/packagesData';

export function renderDestinationFeature(): string {
  const pkg = packagesData['doha-zanzibar'];

  return `
    <section class="section-padding editorial-feature" id="doha-zanzibar">
      <div class="container">
        <div class="editorial-header-banner">
          <p class="eyebrow">Dual Destination Itinerary · December 12–19, 2026</p>
          <h2 class="editorial-headline">From the energy of Doha to the shores of Zanzibar.</h2>
          <p class="section-subtitle" style="max-width:720px;">
            A seven-night escape curated to seamlessly bridge two distinct worlds. Begin amidst the bold geometric architecture and rich Arabian desert of Qatar, then fly south with Qatar Airways to unwind along the white sand reefs and spice heritage of Zanzibar.
          </p>
        </div>

        <!-- 7-Night Destination Sequence -->
        <div class="itinerary-sequence-grid">
          <!-- Part 1: Doha -->
          <article class="itinerary-column">
            <span class="itinerary-location-badge">Part One · 4 Nights</span>
            <h3 class="itinerary-title">Doha, Qatar</h3>
            <p class="itinerary-duration">Urban Exploration & Arabian Heritage</p>
            
            <ul class="itinerary-highlights-list">
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>5-Star Doha Hotel:</strong> Premium accommodation with daily morning breakfast included.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Doha City Tour:</strong> Guided journey through West Bay, the Corniche, and the capital's historic landmarks.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>National Museum of Qatar:</strong> Jean Nouvel’s architectural desert rose showcasing centuries of culture.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Villaggio Gondola Experience:</strong> Italianate canal cruise through the city's premier shopping destination.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Desert Safari & Camel Ride:</strong> 4x4 dune excursion out to where dramatic golden sands meet the coastline.</span>
              </li>
            </ul>
          </article>

          <!-- Part 2: Zanzibar -->
          <article class="itinerary-column">
            <span class="itinerary-location-badge">Part Two · 3 Nights</span>
            <h3 class="itinerary-title">Zanzibar, Tanzania</h3>
            <p class="itinerary-duration">Tropical Reefs & Historic Stone Town</p>

            <ul class="itinerary-highlights-list">
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>All-Inclusive Coastal Resort:</strong> 5-star beachfront hospitality with all meals and refreshments.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Mnemba Island Sandbank:</strong> Marine reserve boat expedition for snorkelling and dolphin encounters.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Stone Town Guided Tour:</strong> UNESCO-listed winding coral stone lanes and storied Zanzibari doors.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Natural Aquarium Sea Turtles:</strong> Swim alongside rescued green sea turtles in their tidal sanctuary.</span>
              </li>
              <li class="itinerary-highlight-item">
                <span class="highlight-bullet">&bull;</span>
                <span><strong>Kendwa Beach & Clear Kayaking:</strong> Crystal water paddling and leisure at Le Saint Tropez.</span>
              </li>
            </ul>
          </article>
        </div>

        <!-- Package Inclusions Module -->
        <div class="inclusions-container">
          <div class="inclusions-header">
            <div>
              <p class="eyebrow" style="color:var(--text-muted);">Comprehensive Travel Value</p>
              <h3 style="font-family:var(--font-display); font-size:1.85rem; margin-top:4px;">
                Everything Included in Your Package
              </h3>
            </div>
            <div style="text-align:right;">
              <span style="font-family:var(--font-display); font-size:2rem; color:#ffffff; font-weight:500;">
                ${pkg.pricing.standardFormatted}
              </span>
              <p style="font-size:0.8rem; color:var(--text-muted);">${pkg.pricing.occupancyTerms}</p>
            </div>
          </div>

          <div class="inclusions-grid">
            ${pkg.inclusions.map(inc => `
              <div class="inclusion-card">
                <div class="inclusion-icon-wrapper" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div class="inclusion-text">
                  <h4>${inc.title}</h4>
                  <p>${inc.description}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="margin-top:var(--space-8); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-4); border-top:1px solid var(--border-subtle); padding-top:var(--space-6);">
            <div style="font-size:0.85rem; color:var(--text-muted);">
              Departure Window: <strong>December 12–19, 2026</strong> · 7 Nights
            </div>
            <button 
              type="button" 
              class="btn btn-primary" 
              onclick="window.rhordwayApp.openEnquiryModal('doha-zanzibar')"
            >
              Enquire for Doha + Zanzibar
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
