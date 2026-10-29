import { faqList } from '../config/packagesData';

export function renderFAQAccordion(): string {
  return `
    <section class="section-padding" id="faqs" style="background-color:var(--surface-primary); border-top:1px solid var(--border-subtle);">
      <div class="container">
        <header class="section-header text-center">
          <p class="eyebrow">Clear Information</p>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Essential facts regarding inclusions, visas, flight arrangements, and booking steps.
          </p>
        </header>

        <div class="faq-container" role="region" aria-label="Frequently Asked Questions Accordion">
          ${faqList.map((faq, index) => `
            <div class="faq-item" id="faq-item-${faq.id}">
              <button 
                type="button" 
                class="faq-trigger" 
                id="faq-btn-${faq.id}" 
                aria-expanded="false" 
                aria-controls="faq-panel-${faq.id}"
                onclick="window.rhordwayApp.toggleFAQ('${faq.id}')"
              >
                <span>${faq.question}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div 
                class="faq-panel" 
                id="faq-panel-${faq.id}" 
                role="region" 
                aria-labelledby="faq-btn-${faq.id}"
              >
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
