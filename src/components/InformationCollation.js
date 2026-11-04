import { siteConfig } from '../config/siteConfig.js';

export function renderInformationCollation() {
  return `
    <section class="mw-consultation-section" id="booking-collation">
      <div class="mw-container">
        <div class="mw-consultation-shell">
          
          <!-- Left Editorial Info Column -->
          <div class="mw-consultation-left">
            <span class="mw-soft-pill">
              <span class="mw-blue-dot"></span>
              Rhordway Consultation Desk
            </span>
            <h2 class="mw-services-heading" style="margin-bottom:14px;">
              Book a Consultation With Our Specialists<span style="color:#0080E8;">.</span>
            </h2>
            <p class="mw-services-lead" style="max-width:440px; margin-bottom:28px;">
              Whether you are applying for a Student Visa (Undergraduate or Postgraduate, Proof of Funds &amp; Statement of Purpose), filing a Travel or Migration Visa, processing a Passport, or booking Flights, Transfers &amp; Travel Insurance—our team is ready to assist you.
            </p>

            <div class="mw-consult-contact-cards">
              <div class="mw-consult-contact-row">
                <span class="mw-consult-dot"></span>
                <div>
                  <span class="mw-consult-label">Official Phone &amp; WhatsApp Lines</span>
                  <strong class="mw-consult-val">
                    <a href="tel:+2348164206030">${siteConfig.primaryPhoneFormatted}</a> · 
                    <a href="tel:+2349013397830">${siteConfig.alternatePhone}</a>
                  </strong>
                </div>
              </div>

              <div class="mw-consult-contact-row">
                <span class="mw-consult-dot"></span>
                <div>
                  <span class="mw-consult-label">Official Email &amp; Social Handle</span>
                  <strong class="mw-consult-val">
                    <a href="mailto:${siteConfig.contactEmail}">${siteConfig.contactEmail}</a> · ${siteConfig.instagram}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Clean White & Black Consultation Form -->
          <div class="mw-consultation-card">
            <form id="collationForm" onsubmit="window.rhordwayApp.handleCollationSubmit(event)">
              
              <div class="mw-form-field" style="margin-bottom:18px;">
                <label for="collationServiceType" class="mw-form-label">Service Required *</label>
                <div class="select-field-box">
                  <select id="collationServiceType" name="serviceType" class="form-select-styled">
                    <option value="Student Visa & Study Abroad" selected>Student Visa &amp; Study Abroad (Admissions, Proof of Funds &amp; SOP)</option>
                    <option value="Travel & Visit Visa Processing">Travel &amp; Visit Visa Processing (UK, Schengen, Canada, US, UAE)</option>
                    <option value="Global Migration & Relocation">Global Migration &amp; Relocation Pathways</option>
                    <option value="Passport Processing & Renewal">Passport Processing &amp; Renewal Assistance</option>
                    <option value="Flight Booking, Hotel & Airport Transfer">Flight Booking, Hotel Transfer &amp; Airport Transfer</option>
                    <option value="Travel Insurance">Comprehensive Travel Insurance</option>
                    <option value="Vacation & Holiday Enquiry">Vacation &amp; Holiday Enquiry</option>
                  </select>
                  <span class="select-chevron-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="mw-form-field">
                  <label for="guestFullName" class="mw-form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="guestFullName" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. Amara Johnson" 
                    required 
                  />
                </div>

                <div class="mw-form-field">
                  <label for="guestPhone" class="mw-form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="guestPhone" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. +234 816 420 6030" 
                    required 
                  />
                </div>
              </div>

              <div class="form-grid-2" style="margin-top:16px;">
                <div class="mw-form-field">
                  <label for="guestEmail" class="mw-form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="guestEmail" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. amara@example.com" 
                    required 
                  />
                </div>

                <div class="mw-form-field">
                  <label for="departureCity" class="mw-form-label">Target Destination Country *</label>
                  <input 
                    type="text" 
                    id="departureCity" 
                    class="form-input-luxury" 
                    style="padding-left:16px;"
                    placeholder="e.g. UK, Canada, France, Germany, Spain" 
                    required
                  />
                </div>
              </div>

              <div class="mw-form-field" style="margin-top:16px;">
                <label for="specialRequests" class="mw-form-label">How Can We Help You? (Optional)</label>
                <input 
                  type="text" 
                  id="specialRequests" 
                  class="form-input-luxury" 
                  style="padding-left:16px;"
                  placeholder="e.g. Need Undergraduate Student Visa, Proof of Funds & Statement of Purpose" 
                />
              </div>

              <div style="margin-top:24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;">
                <button type="submit" class="mw-action-group" style="border:none; background:none; padding:0;">
                  <span class="mw-action-pill" style="padding:15px 32px; font-size:0.92rem;">SEND MY REQUEST</span>
                  <span class="mw-action-circle" style="width:48px; height:48px;" aria-hidden="true">↗</span>
                </button>

                <span style="font-size:0.78rem; color:#71717A;">
                  Connects directly with a Rhordway specialist
                </span>
              </div>

              <div id="collationSuccessAlert" class="collation-success-alert" style="display:none; margin-top:18px;">
                <div style="font-size:0.95rem; font-weight:800; color:#0F1115; margin-bottom:4px;">
                  ✓ Consultation Request Ready!
                </div>
                <p style="font-size:0.84rem; color:#52525B; line-height:1.5;">
                  Connecting you directly with a Rhordway specialist on WhatsApp (<strong>${siteConfig.primaryPhoneFormatted}</strong>).
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}
