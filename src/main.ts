import { siteConfig } from './config/siteConfig';
import { packagesData } from './config/packagesData';
import { buildWhatsAppMessage, getWhatsAppUrl, WhatsAppEnquiryParams } from './utils/whatsapp';
import { renderSiteHeader, renderMobileNavigation } from './components/SiteHeader';
import { renderCampaignHero } from './components/CampaignHero';
import { renderExperienceSelector } from './components/ExperienceSelector';
import { renderDestinationFeature } from './components/DestinationFeature';
import { renderActivityGallery } from './components/ActivityGallery';
import { renderGrandPrixFeature } from './components/PriceOptionSelector';
import { renderTrustSection, renderBookingSteps } from './components/TrustSection';
import { renderFAQAccordion } from './components/FAQAccordion';
import { renderFinalCTA, renderSiteFooter } from './components/FinalCTA';
import { renderEnquiryModal } from './components/EnquiryModal';

// Extend window interface for application controller
declare global {
  interface Window {
    rhordwayApp: any;
  }
}

class RhordwayApplication {
  private currentEnquiryParams: WhatsAppEnquiryParams = {};
  private selectedGrandPrixOccupancy: string | null = null;
  private selectedGrandPrixPrice: string | null = null;

  public init(): void {
    this.renderApp();
    this.bindGlobalEvents();
  }

  private renderApp(): void {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      ${renderSiteHeader()}
      ${renderMobileNavigation()}
      <main id="main-content">
        ${renderCampaignHero()}
        ${renderExperienceSelector()}
        ${renderDestinationFeature()}
        ${renderActivityGallery()}
        ${renderGrandPrixFeature()}
        ${renderTrustSection()}
        ${renderBookingSteps()}
        ${renderFAQAccordion()}
        ${renderFinalCTA()}
      </main>
      ${renderSiteFooter()}
      ${renderEnquiryModal()}

      <!-- Mobile Sticky Enquiry Bar -->
      <div class="mobile-sticky-bar" id="mobileStickyBar" style="position:fixed; bottom:0; left:0; right:0; z-index:90; background:rgba(9,11,14,0.95); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border-top:1px solid var(--border-subtle); padding:12px 16px; display:none; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.75rem; color:var(--brand-secondary); text-transform:uppercase; letter-spacing:0.05em; display:block; font-weight:600;">Rhordway 2026</span>
          <span style="font-size:0.875rem; color:#fff; font-weight:500;">Limited Holiday Packages</span>
        </div>
        <button type="button" class="btn btn-primary" style="min-height:38px; font-size:0.75rem; padding:0 14px;" onclick="window.rhordwayApp.openEnquiryModal('general')">
          Enquire
        </button>
      </div>
    `;

    // Apply header scroll observer
    this.initScrollObservers();
  }

  private bindGlobalEvents(): void {
    // Menu toggle listener
    const menuBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('mobileNavCloseBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeMobileMenu());
    }

    // Escape key listener for modals
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
        this.closeEnquiryModal();
      }
    });
  }

  private initScrollObservers(): void {
    const header = document.getElementById('siteHeader');
    const mobileBar = document.getElementById('mobileStickyBar');
    const hero = document.getElementById('hero');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Header scrolled state
      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Mobile sticky bar (show past hero on screens under 768px)
      if (mobileBar && hero) {
        if (window.innerWidth < 768 && scrollY > 400) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    }, { passive: true });
  }

  /* ---------------- Mobile Menu Controls ---------------- */
  public toggleMobileMenu(): void {
    const drawer = document.getElementById('mobileNavDrawer');
    const btn = document.getElementById('menuToggleBtn');
    if (!drawer) return;

    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      btn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  public closeMobileMenu(): void {
    const drawer = document.getElementById('mobileNavDrawer');
    const btn = document.getElementById('menuToggleBtn');
    if (!drawer) return;

    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------------- FAQ Accordion Controls ---------------- */
  public toggleFAQ(id: string): void {
    const item = document.getElementById(`faq-item-${id}`);
    const trigger = document.getElementById(`faq-btn-${id}`);
    if (!item || !trigger) return;

    const isOpen = item.classList.contains('open');

    // Close all other FAQs for clean editorial focus
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('open');
    });
    document.querySelectorAll('.faq-trigger').forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }

  /* ---------------- Occupancy Selector Controls ---------------- */
  public selectOccupancy(option: 'double' | 'single', priceFormatted: string): void {
    this.selectedGrandPrixOccupancy = option === 'double' ? 'Double Occupancy (per person sharing)' : 'Single Occupancy';
    this.selectedGrandPrixPrice = priceFormatted;

    // Toggle button active classes
    const btnDouble = document.getElementById('occupancy-btn-double');
    const btnSingle = document.getElementById('occupancy-btn-single');

    btnDouble?.classList.toggle('active', option === 'double');
    btnDouble?.setAttribute('aria-checked', option === 'double' ? 'true' : 'false');

    btnSingle?.classList.toggle('active', option === 'single');
    btnSingle?.setAttribute('aria-checked', option === 'single' ? 'true' : 'false');

    // Update feedback box
    const feedback = document.getElementById('occupancySelectionFeedback');
    const priceDisplay = document.getElementById('selectedPriceDisplay');
    if (feedback && priceDisplay) {
      feedback.style.borderColor = 'var(--brand-secondary)';
      feedback.style.background = 'rgba(201, 168, 117, 0.05)';
      feedback.children[0].textContent = `Selected: ${this.selectedGrandPrixOccupancy}`;
      priceDisplay.textContent = priceFormatted;
    }
  }

  /* ---------------- WhatsApp Enquiry Modal Controls ---------------- */
  public openEnquiryModal(packageType: 'doha-zanzibar' | 'doha-grand-prix' | 'general'): void {
    const modal = document.getElementById('enquiryModalOverlay');
    const preview = document.getElementById('enquiryMessagePreview');
    const title = document.getElementById('enquiryModalTitle');
    const eyebrow = document.getElementById('enquiryModalEyebrow');
    if (!modal || !preview) return;

    if (packageType === 'doha-zanzibar') {
      this.currentEnquiryParams = {
        packageId: 'doha-zanzibar',
        packageName: 'Doha + Zanzibar',
        travelDates: 'December 12–19, 2026',
        price: '₦4,350,000 per person sharing'
      };
      if (title) title.textContent = 'Doha + Zanzibar Enquiry';
      if (eyebrow) eyebrow.textContent = 'Package Reservation Details';
    } else if (packageType === 'doha-grand-prix') {
      const occupancy = this.selectedGrandPrixOccupancy || 'Double Occupancy (per person sharing)';
      const price = this.selectedGrandPrixPrice || '₦3,400,000 per person';
      this.currentEnquiryParams = {
        packageId: 'doha-grand-prix',
        packageName: 'Doha Grand Prix Experience',
        travelDates: 'November 25 – December 1, 2026',
        occupancy,
        price
      };
      if (title) title.textContent = 'Doha Grand Prix Enquiry';
      if (eyebrow) eyebrow.textContent = 'Motorsport Package Reservation';
    } else {
      this.currentEnquiryParams = {
        packageId: 'general',
        packageName: 'Rhordway Luxury Holiday Packages'
      };
      if (title) title.textContent = 'Speak with a Travel Consultant';
      if (eyebrow) eyebrow.textContent = 'Rhordway Enquiry Desk';
    }

    const message = buildWhatsAppMessage(this.currentEnquiryParams);
    preview.textContent = message;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  public closeEnquiryModal(): void {
    const modal = document.getElementById('enquiryModalOverlay');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  public copyEnquiryMessage(): void {
    const preview = document.getElementById('enquiryMessagePreview');
    if (!preview || !preview.textContent) return;

    navigator.clipboard.writeText(preview.textContent).then(() => {
      alert('Enquiry message copied to clipboard!');
    }).catch(() => {
      prompt('Copy your enquiry message below:', preview.textContent);
    });
  }

  public sendWhatsAppDirect(): void {
    const preview = document.getElementById('enquiryMessagePreview');
    const testInput = document.getElementById('testPhoneInput') as HTMLInputElement | null;
    const message = preview?.textContent || buildWhatsAppMessage(this.currentEnquiryParams);

    const configuredNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
    const userNumber = (testInput?.value || '').replace(/[^0-9]/g, '');

    const targetNumber = userNumber || configuredNumber;

    if (!targetNumber) {
      alert('Please enter a WhatsApp number in the test field or configure siteConfig.whatsappNumber in src/config/siteConfig.ts.');
      testInput?.focus();
      return;
    }

    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
}

// Instantiate and expose globally
const app = new RhordwayApplication();
window.rhordwayApp = app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
