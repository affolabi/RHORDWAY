import { siteConfig } from '../config/siteConfig';

export function renderEnquiryModal(): string {
  return `
    <div 
      class="config-modal-overlay" 
      id="enquiryModalOverlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="enquiryModalTitle"
    >
      <div class="config-modal">
        <div class="config-modal-header">
          <div>
            <span class="eyebrow" id="enquiryModalEyebrow" style="color:var(--brand-secondary);">
              WhatsApp Enquiry Dispatch
            </span>
            <h3 class="config-modal-title" id="enquiryModalTitle">
              Travel Consultant Enquiry
            </h3>
          </div>
          <button 
            type="button" 
            class="modal-close-btn" 
            id="enquiryModalCloseBtn" 
            aria-label="Close enquiry dialog"
            onclick="window.rhordwayApp.closeEnquiryModal()"
          >
            &times;
          </button>
        </div>

        <p style="font-size:var(--text-supporting); color:var(--text-secondary); line-height:1.5;">
          The enquiry below will be sent directly to Rhordway’s official WhatsApp travel desk.
        </p>

        <!-- Notice if WhatsApp number is in placeholder mode -->
        <div id="whatsappPlaceholderNotice" style="margin-top:var(--space-3); padding:var(--space-3); background:rgba(201,168,117,0.1); border:1px solid var(--border-brand); border-radius:var(--radius-xs); font-size:0.75rem; color:var(--brand-secondary);">
          <strong>Note:</strong> Client WhatsApp business number is currently in configuration placeholder mode (per Section 10). You can test the formatted message below or enter a test number.
        </div>

        <div style="margin-top:var(--space-4);">
          <label style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); font-weight:600;">
            Pre-filled Message Preview:
          </label>
          <div class="config-preview-box" id="enquiryMessagePreview"></div>
        </div>

        <!-- Optional live test phone input if number not yet hardcoded -->
        <div id="liveTestNumberContainer" style="margin-bottom:var(--space-6);">
          <label for="testPhoneInput" style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:4px;">
            Test with temporary phone number (e.g. 2348012345678):
          </label>
          <input 
            type="tel" 
            id="testPhoneInput" 
            placeholder="Enter international number without +" 
            style="width:100%; padding:10px 14px; background:var(--surface-secondary); border:1px solid var(--border-subtle); border-radius:var(--radius-xs); color:#fff; font-size:0.875rem;"
          />
        </div>

        <div style="display:flex; gap:var(--space-3); justify-content:flex-end; flex-wrap:wrap;">
          <button 
            type="button" 
            class="btn btn-secondary" 
            onclick="window.rhordwayApp.copyEnquiryMessage()"
          >
            Copy Message
          </button>
          <button 
            type="button" 
            class="btn btn-whatsapp" 
            id="proceedToWhatsAppBtn"
            onclick="window.rhordwayApp.sendWhatsAppDirect()"
          >
            Open in WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;
}
