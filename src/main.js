import { siteConfig } from './config/siteConfig.js';
import { packagesData } from './config/packagesData.js';
import { buildWhatsAppMessage } from './utils/whatsapp.js';
import { renderSiteHeader, renderMobileNavigation } from './components/SiteHeader.js';
import { renderCampaignHero } from './components/CampaignHero.js';
import {
  renderExperienceSelector,
  renderAboutPage,
  renderMigrationServicesPage,
  renderHolidaysPage
} from './components/ExperienceSelector.js';
import { renderDestinationFeature } from './components/DestinationFeature.js';
import { renderInformationCollation } from './components/InformationCollation.js';
import { renderTrustSection } from './components/TrustSection.js';
import { renderFAQAccordion } from './components/FAQAccordion.js';
import { renderSiteFooter } from './components/FinalCTA.js';
import { renderEnquiryModal } from './components/EnquiryModal.js';

class RhordwayApplication {
  constructor() {
    this.currentPage = 'home';
    this.currentEnquiryParams = {};
    this.flagshipOrder = ['zanzibar-nairobi', 'doha-nairobi', 'doha-zanzibar', 'doha-grand-prix'];
    this.activeMagazinePkgId = 'zanzibar-nairobi';
  }

  init() {
    const hash = (window.location.hash || '').replace('#', '');
    if (['home', 'about', 'migration-services', 'holidays'].includes(hash)) {
      this.currentPage = hash;
    }

    this.renderApp();
    this.bindGlobalEvents();
    this.updateActiveNavState();
    this.initScrollAnimations();
  }

  renderPageBody() {
    if (this.currentPage === 'about') {
      return `
        ${renderAboutPage()}
        ${renderTrustSection()}
        ${renderInformationCollation()}
      `;
    }

    if (this.currentPage === 'migration-services') {
      return `
        ${renderMigrationServicesPage()}
        ${renderFAQAccordion()}
        ${renderInformationCollation()}
      `;
    }

    if (this.currentPage === 'holidays') {
      return `
        ${renderHolidaysPage()}
        ${renderDestinationFeature()}
        ${renderInformationCollation()}
      `;
    }

    // Default: Home Page (Executive Overview: Hero + Migration Strip + Sticky What We Do + Texts-Left/Image-Right Divisions + Consultation)
    return `
      ${renderCampaignHero()}
      ${renderExperienceSelector()}
      ${renderInformationCollation()}
    `;
  }

  renderApp() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      <div class="site-wrapper">
        ${renderSiteHeader()}
        ${renderMobileNavigation()}
        <main id="main-content">
          ${this.renderPageBody()}
        </main>
        ${renderSiteFooter()}
      </div>
      ${renderEnquiryModal()}

      <!-- Mobile Sticky Consultation Bar -->
      <div class="mobile-sticky-bar" id="mobileStickyBar" style="position:fixed; bottom:0; left:0; right:0; z-index:90; background:rgba(255,255,255,0.96); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border-top:1px solid rgba(0,0,0,0.08); box-shadow:0 -6px 24px rgba(0,0,0,0.06); padding:10px 18px max(10px, env(safe-area-inset-bottom)); display:none; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.65rem; color:#6B7280; text-transform:uppercase; letter-spacing:0.08em; display:block; font-weight:700;">Rhordway™</span>
          <span style="font-size:0.875rem; color:#0F1115; font-weight:800; letter-spacing:-0.01em;">Migration &amp; Visa Experts</span>
        </div>
        <a 
          href="#booking-collation" 
          class="mw-black-pill-btn" 
          style="padding:10px 20px; font-size:0.82rem;"
          onclick="event.preventDefault(); window.rhordwayApp.scrollToConsultation()"
        >
          BOOK CONSULTATION ↗
        </a>
      </div>
    `;

    this.initScrollObservers();
  }

  navigateToPage(pageName, scrollTargetId = null) {
    const validPages = ['home', 'about', 'migration-services', 'holidays'];
    const targetPage = validPages.includes(pageName) ? pageName : 'home';
    this.currentPage = targetPage;

    if (typeof window.history?.pushState === 'function') {
      window.history.pushState({ page: targetPage }, '', `#${targetPage}`);
    }

    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.innerHTML = this.renderPageBody();
    } else {
      this.renderApp();
    }

    this.updateActiveNavState();
    this.initScrollAnimations();

    if (scrollTargetId) {
      setTimeout(() => {
        document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavState() {
    document.querySelectorAll('[data-page-nav]').forEach((el) => {
      const page = el.getAttribute('data-page-nav');
      el.classList.toggle('active', page === this.currentPage);
    });
  }

  scrollToConsultation() {
    const section = document.getElementById('booking-collation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('guestFullName')?.focus();
      }, 400);
    } else {
      this.navigateToPage('home', 'booking-collation');
    }
  }

  bindGlobalEvents() {
    const menuBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('mobileNavCloseBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeMobileMenu());
    }

    window.addEventListener('popstate', () => {
      const hash = (window.location.hash || '').replace('#', '');
      if (['home', 'about', 'migration-services', 'holidays'].includes(hash)) {
        this.currentPage = hash;
        const mainEl = document.getElementById('main-content');
        if (mainEl) {
          mainEl.innerHTML = this.renderPageBody();
          this.updateActiveNavState();
          this.initScrollAnimations();
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
        this.closeEnquiryModal();
      }
    });
  }

  initScrollObservers() {
    const header = document.getElementById('siteHeader');
    const mobileBar = document.getElementById('mobileStickyBar');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (mobileBar) {
        if (window.innerWidth < 768 && scrollY > 360) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    }, { passive: true });
  }

  initScrollAnimations() {
    const animTargets = document.querySelectorAll('.collage-swipe-col, .collage-card-swipe, .anim-reveal-text, .ref-glass-card, .farer-mag-card');
    if (!animTargets.length) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      }, {
        threshold: 0.06,
        rootMargin: '20px 0px -10px 0px'
      });

      animTargets.forEach((target) => observer.observe(target));
    } else {
      animTargets.forEach((target) => target.classList.add('is-inview'));
    }
  }

  /* ---------------- Hugo Magazine Accordion Strip Controls ---------------- */
  activateMagazinePanel(pkgId) {
    this.activeMagazinePkgId = pkgId;
    document.querySelectorAll('.hugo-strip-card').forEach((card) => {
      card.classList.toggle('active', card.getAttribute('data-pkg-id') === pkgId);
    });
  }

  stepMagazinePanel(direction) {
    const idx = this.flagshipOrder.indexOf(this.activeMagazinePkgId);
    const nextIdx = (idx + direction + this.flagshipOrder.length) % this.flagshipOrder.length;
    const nextPkgId = this.flagshipOrder[nextIdx];
    this.activateMagazinePanel(nextPkgId);

    const activeCard = document.getElementById(`hugo-panel-${nextPkgId}`);
    const strip = document.getElementById('hugoAccordionStrip');
    if (activeCard && strip && window.innerWidth < 960) {
      strip.scrollTo({ left: activeCard.offsetLeft - 16, behavior: 'smooth' });
    }
  }

  /* ---------------- Mobile Menu Controls ---------------- */
  toggleMobileMenu() {
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

  closeMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const btn = document.getElementById('menuToggleBtn');
    if (!drawer) return;

    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    btn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------------- FAQ Accordion Controls ---------------- */
  toggleFAQ(id) {
    const item = document.getElementById(`faq-item-${id}`);
    const trigger = document.getElementById(`faq-btn-${id}`);
    if (!item || !trigger) return;

    const isOpen = item.classList.contains('open');

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

  /* ---------------- Consultation Form Selection & Submission ---------------- */
  selectServiceAndScroll(serviceLabel, destinationLabel = '') {
    const serviceSelect = document.getElementById('collationServiceType');
    if (serviceSelect && serviceLabel) {
      serviceSelect.value = serviceLabel;
    }

    const destInput = document.getElementById('departureCity');
    if (destInput && destinationLabel) {
      destInput.value = destinationLabel;
    }

    this.scrollToConsultation();
  }

  populateAndScrollCollation(pkgId) {
    const pkg = packagesData[pkgId];
    this.selectServiceAndScroll('Vacation & Holiday Enquiry', pkg ? pkg.title : '');
  }

  handleCollationSubmit(event) {
    event.preventDefault();

    const serviceSelect = document.getElementById('collationServiceType');
    const fullNameInput = document.getElementById('guestFullName');
    const phoneInput = document.getElementById('guestPhone');
    const emailInput = document.getElementById('guestEmail');
    const destinationInput = document.getElementById('departureCity');
    const specialRequestsInput = document.getElementById('specialRequests');
    const successAlert = document.getElementById('collationSuccessAlert');

    const serviceNeeded = serviceSelect?.value || 'Student Visa & Study Abroad';
    const fullName = fullNameInput?.value || 'Valued Client';
    const phone = phoneInput?.value || '';
    const email = emailInput?.value || '';
    const destination = destinationInput?.value || 'Global';
    const notes = specialRequestsInput?.value || '';

    const waMessage =
      `*RHORDWAY OFFICIAL CONSULTATION REQUEST*\n\n` +
      `• *Service Required:* ${serviceNeeded}\n` +
      `• *Target Destination:* ${destination}\n` +
      `• *Client Name:* ${fullName}\n` +
      `• *Phone / WhatsApp:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      (notes ? `• *Additional Details:* ${notes}\n` : '') +
      `\nHello Rhordway Team, I would like to book a consultation regarding the service above.`;

    if (successAlert) {
      successAlert.style.display = 'block';
    }

    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  }

  /* ---------------- WhatsApp Modal Controls ---------------- */
  openEnquiryModal(packageType) {
    this.scrollToConsultation();
  }

  closeEnquiryModal() {
    const modal = document.getElementById('enquiryModalOverlay');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  copyEnquiryMessage() {
    const preview = document.getElementById('enquiryMessagePreview');
    if (!preview || !preview.textContent) return;
    navigator.clipboard.writeText(preview.textContent);
  }

  sendWhatsAppDirect() {
    const preview = document.getElementById('enquiryMessagePreview');
    const message = preview?.textContent || buildWhatsAppMessage(this.currentEnquiryParams);
    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
}

const app = new RhordwayApplication();
window.rhordwayApp = app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
