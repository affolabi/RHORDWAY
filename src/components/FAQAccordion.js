export function renderFAQAccordion() {
  const companyFaqs = [
    {
      id: 'faq-student-visa',
      question: 'What does Rhordway’s Student Visa & Study Abroad service include?',
      answer:
        'We provide end-to-end Undergraduate and Postgraduate admission and student visa processing for the UK, Canada, France, Germany, Spain, Ireland, and the USA. Our support covers course and institution selection, Statement of Purpose (SOP) writing and review, Proof of Funds advisory, admission letter/CAS processing, and full student visa filing.'
    },
    {
      id: 'faq-travel-migration',
      question: 'Which countries do you cover for Travel Visas and Global Migration?',
      answer:
        'We process tourist, business, family visit, and migration visas for France, Germany, Spain (and all 29 Schengen countries), the United Kingdom, Canada, the United States, Qatar, UAE (Dubai), Tanzania, Kenya, Egypt, and South Africa—complete with document verification and appointment booking.'
    },
    {
      id: 'faq-passport',
      question: 'Can Rhordway assist with fresh Nigerian passport applications and renewals?',
      answer:
        'Yes. We assist individuals, students, and families with fresh Nigerian passport applications, renewals, biometric capturing coordination, and travel document preparation so your passport is ready without delays.'
    },
    {
      id: 'faq-flights-transfers',
      question: 'Do you handle Flight Booking, Travel Insurance, and Airport/Hotel Transfers?',
      answer:
        'Absolutely. We book domestic and international flights across global airlines, issue embassy-compliant Travel Insurance policies, reserve verified hotels, and arrange private Airport Transfers and Hotel Transfers worldwide.'
    },
    {
      id: 'faq-consultation',
      question: 'How do I book a consultation with a Rhordway specialist?',
      answer:
        'Simply click any "Book Consultation" button on our website, select the service you need (Student Visa, Travel Visa, Migration, Passport, Flights, or Holidays), fill in your contact details, and submit. You will be connected directly with our specialist team on WhatsApp (+234 816 420 6030 / +234 901 339 7830).'
    }
  ];

  return `
    <section class="section-padding" id="faqs" style="background-color:#FFFFFF; border-top:1px solid #F1F1F3;">
      <div class="mw-container">
        <header class="section-header text-center">
          <span class="mw-soft-pill" style="margin-bottom:14px;">
            <span class="mw-blue-dot"></span>
            Clear Information
          </span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Essential answers regarding Student Visas, Proof of Funds, Statement of Purpose, Global Migration, Passports, Flights, and Travel Insurance.
          </p>
        </header>

        <div class="faq-container" role="region" aria-label="Frequently Asked Questions Accordion">
          ${companyFaqs.map((faq) => `
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
