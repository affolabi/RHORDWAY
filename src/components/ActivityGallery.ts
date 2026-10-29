import { packagesData } from '../config/packagesData';

export function renderActivityGallery(): string {
  const activities = packagesData['doha-zanzibar'].activities || [];

  return `
    <section class="section-padding gallery-section" id="gallery">
      <div class="container">
        <header class="section-header">
          <p class="eyebrow">Visual Monograph</p>
          <h2 class="section-title">Experiences Across Doha & Zanzibar</h2>
          <p class="section-subtitle">
            From modern architectural marvels in the Gulf to Swahili reef lagoons, glimpse the genuine moments planned across your journey.
          </p>
        </header>

        <div class="gallery-grid">
          ${activities.map((act) => `
            <figure class="gallery-item" tabindex="0">
              <img 
                src="${act.image}" 
                alt="${act.alt}" 
                loading="lazy" 
                width="800" 
                height="600"
              />
              <figcaption class="gallery-caption-overlay">
                <span class="gallery-tag">${act.location} · ${act.tag}</span>
                <h4 class="gallery-caption-title">${act.title}</h4>
                <p class="gallery-caption-text">${act.caption}</p>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
