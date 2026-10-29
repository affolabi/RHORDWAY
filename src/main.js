import { siteConfig } from './config/siteConfig.js';
import { packagesData } from './config/packagesData.js';
import { buildWhatsAppMessage } from './utils/whatsapp.js';
import { generateBookingReference, generateReservationPDF } from './utils/pdfGenerator.js';
import { renderSiteHeader, renderMobileNavigation } from './components/SiteHeader.js';
import { renderCampaignHero } from './components/CampaignHero.js';
import { renderExperienceSelector } from './components/ExperienceSelector.js';
import { renderDestinationFeature } from './components/DestinationFeature.js';
import { renderActivityGallery } from './components/ActivityGallery.js';
import { renderGrandPrixFeature } from './components/PriceOptionSelector.js';
import { renderInformationCollation } from './components/InformationCollation.js';
import { renderTrustSection, renderUnleashWanderlust } from './components/TrustSection.js';
import { renderFAQAccordion } from './components/FAQAccordion.js';
import { renderFinalCTA, renderSiteFooter } from './components/FinalCTA.js';
import { renderEnquiryModal } from './components/EnquiryModal.js';

class RhordwayApplication {
  constructor() {
    this.currentEnquiryParams = {};
    this.selectedGrandPrixOccupancy = null;
    this.selectedGrandPrixPrice = null;
    this.selectedCollationPackageId = 'doha-zanzibar';
  }

  init() {
    this.renderApp();
    this.bindGlobalEvents();
    this.updateCollationPackage('doha-zanzibar');
    this.initScrollAnimations();
    this.initDealsCarousel();
  }

  renderApp() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      <div class="site-wrapper">
        ${renderSiteHeader()}
        ${renderMobileNavigation()}
        <main id="main-content">
          ${renderCampaignHero()}
          ${renderExperienceSelector()}
          ${renderDestinationFeature()}
          ${renderTrustSection()}
          ${renderInformationCollation()}
          ${renderFAQAccordion()}
        </main>
        ${renderSiteFooter()}
      </div>
      ${renderEnquiryModal()}

      <!-- Mobile Sticky Enquiry Bar -->
      <div class="mobile-sticky-bar" id="mobileStickyBar" style="position:fixed; bottom:0; left:0; right:0; z-index:90; background:rgba(255,255,255,0.96); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-top:1px solid var(--border-medium); box-shadow:0 -4px 20px rgba(0,0,0,0.06); padding:10px 16px; display:none; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.7rem; color:var(--brand-primary); text-transform:uppercase; letter-spacing:0.05em; display:block; font-weight:700;">Rhordway 2026</span>
          <span style="font-size:0.85rem; color:var(--text-primary); font-weight:700;">November & December Holidays</span>
        </div>
        <a href="#booking-collation" class="btn btn-primary" style="min-height:36px; font-size:0.75rem; padding:0 14px;">
          Reserve Now
        </a>
      </div>
    `;

    this.initScrollObservers();
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
    const hero = document.getElementById('hero');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (mobileBar && hero) {
        if (window.innerWidth < 768 && scrollY > 400) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    }, { passive: true });
  }

  /* ---------------- Scroll Animations (Bidirectional: Scrolling Down & Up) ---------------- */
  initScrollAnimations() {
    const animTargets = document.querySelectorAll('.collage-swipe-col, .collage-card-swipe, .anim-reveal-text, .ref-glass-card');
    if (!animTargets.length) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          } else {
            // Remove class so it re-triggers smoothly when scrolling up from footer
            entry.target.classList.remove('is-inview');
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '20px 0px -20px 0px'
      });

      animTargets.forEach((target) => observer.observe(target));
    } else {
      animTargets.forEach((target) => target.classList.add('is-inview'));
    }
  }

  /* ---------------- Hot Deals Mobile Carousel Controls & Touch Swiping ---------------- */
  initDealsCarousel() {
    const grid = document.getElementById('refDealsGrid');
    const prevBtn = document.getElementById('dealPrevBtn');
    const nextBtn = document.getElementById('dealNextBtn');
    const dots = document.querySelectorAll('.ref-deal-dot');
    if (!grid) return;

    const getScrollStep = () => {
      const firstCard = grid.querySelector('.ref-deal-card');
      return firstCard ? firstCard.offsetWidth + 14 : 300;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      });
    }

    // Synchronize active dot indicator on scroll
    grid.addEventListener('scroll', () => {
      if (!dots.length) return;
      const scrollPos = grid.scrollLeft;
      const step = getScrollStep();
      const activeIdx = Math.min(dots.length - 1, Math.max(0, Math.round(scrollPos / step)));
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }, { passive: true });

    // Click dot to jump directly
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        const step = getScrollStep();
        grid.scrollTo({ left: idx * step, behavior: 'smooth' });
      });
    });

    // Mobile touch swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;

    grid.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    grid.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
          } else {
            grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
          }
        }
      }
    }, { passive: true });
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

  /* ---------------- Grand Prix Occupancy Selector ---------------- */
  selectOccupancy(option, priceFormatted) {
    this.selectedGrandPrixOccupancy = option === 'double' ? 'Double Occupancy (per person sharing)' : 'Single Occupancy';
    this.selectedGrandPrixPrice = priceFormatted;

    const btnDouble = document.getElementById('occupancy-btn-double');
    const btnSingle = document.getElementById('occupancy-btn-single');

    btnDouble?.classList.toggle('active', option === 'double');
    btnDouble?.setAttribute('aria-checked', option === 'double' ? 'true' : 'false');

    btnSingle?.classList.toggle('active', option === 'single');
    btnSingle?.setAttribute('aria-checked', option === 'single' ? 'true' : 'false');

    const feedback = document.getElementById('occupancySelectionFeedback');
    const priceDisplay = document.getElementById('selectedPriceDisplay');
    if (feedback && priceDisplay) {
      feedback.style.borderColor = 'var(--brand-primary)';
      feedback.style.background = 'rgba(0, 132, 230, 0.08)';
      feedback.children[0].textContent = `Selected: ${this.selectedGrandPrixOccupancy}`;
      priceDisplay.textContent = priceFormatted;
    }
  }

  /* ---------------- Information Collation & Reservation ---------------- */
  updateCollationPackage(pkgId) {
    this.selectedCollationPackageId = pkgId;
    const labelDZ = document.getElementById('label-pick-dz');
    const labelGP = document.getElementById('label-pick-gp');
    const occupancySelect = document.getElementById('collationOccupancySelect');

    labelDZ?.classList.toggle('active', pkgId === 'doha-zanzibar');
    labelGP?.classList.toggle('active', pkgId === 'doha-grand-prix');

    if (occupancySelect) {
      if (pkgId === 'doha-zanzibar') {
        occupancySelect.innerHTML = `
          <option value="Double Occupancy (per person sharing)" data-rate="4350000" selected>
            Double Occupancy (per person sharing) — ₦4,350,000 / person
          </option>
        `;
      } else {
        occupancySelect.innerHTML = `
          <option value="Double Occupancy (per person sharing)" data-rate="3400000" selected>
            Double Occupancy (per person sharing) — ₦3,400,000 / person
          </option>
          <option value="Single Occupancy" data-rate="4150000">
            Single Occupancy — ₦4,150,000 / person
          </option>
        `;
      }
    }

    this.updateCollationCalculation();
  }

  updateCollationCalculation() {
    const occupancySelect = document.getElementById('collationOccupancySelect');
    const guestSelect = document.getElementById('guestCount');
    const totalDisplay = document.getElementById('collationTotalAmount');
    const noteDisplay = document.getElementById('collationCalculationNote');

    if (!occupancySelect || !guestSelect || !totalDisplay) return;

    const selectedOption = occupancySelect.options[occupancySelect.selectedIndex];
    const unitRate = parseInt(selectedOption?.getAttribute('data-rate') || '4350000', 10);
    const guestCount = parseInt(guestSelect.value || '2', 10);

    const total = unitRate * guestCount;
    const formattedTotal = '₦' + total.toLocaleString('en-NG');
    const formattedUnit = '₦' + unitRate.toLocaleString('en-NG');

    totalDisplay.textContent = formattedTotal;
    if (noteDisplay) {
      noteDisplay.textContent = `${guestCount} Person(s) × ${formattedUnit}`;
    }
  }

  populateAndScrollCollation(pkgId) {
    const radio = document.querySelector(`input[name="selectedPackage"][value="${pkgId}"]`);
    if (radio) {
      radio.checked = true;
    }
    this.updateCollationPackage(pkgId);

    const section = document.getElementById('booking-collation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      document.getElementById('guestFullName')?.focus();
    }, 400);
  }

  handleCollationSubmit(event) {
    event.preventDefault();

    const fullNameInput = document.getElementById('guestFullName');
    const phoneInput = document.getElementById('guestPhone');
    const emailInput = document.getElementById('guestEmail');
    const departureCityInput = document.getElementById('departureCity');
    const guestCountSelect = document.getElementById('guestCount');
    const occupancySelect = document.getElementById('collationOccupancySelect');
    const specialRequestsInput = document.getElementById('specialRequests');
    const successAlert = document.getElementById('collationSuccessAlert');

    const pkg = packagesData[this.selectedCollationPackageId];
    const selectedOption = occupancySelect?.options[occupancySelect.selectedIndex];
    const unitRate = parseInt(selectedOption?.getAttribute('data-rate') || '4350000', 10);
    const guestCount = parseInt(guestCountSelect?.value || '2', 10);
    const total = unitRate * guestCount;
    const formattedTotal = '₦' + total.toLocaleString('en-NG');
    const formattedUnit = '₦' + unitRate.toLocaleString('en-NG');

    const bookingRef = generateBookingReference();

    const dossierData = {
      bookingRef,
      packageName: pkg.title,
      travelDates: pkg.dates,
      duration: pkg.durationLabel,
      occupancy: selectedOption?.value || 'Double Occupancy (per person sharing)',
      priceFormatted: formattedUnit + ' per person',
      travellerCount: guestCount,
      totalEstimated: formattedTotal,
      leadName: fullNameInput?.value || 'Valued Guest',
      email: emailInput?.value || 'Awaiting email',
      phone: phoneInput?.value || 'Awaiting phone',
      departureCity: departureCityInput?.value || 'Nigeria',
      specialRequests: specialRequestsInput?.value || '',
      inclusions: pkg.inclusions
    };

    // 1. Generate and automatically download the official PDF
    generateReservationPDF(dossierData);

    // 2. Build structured WhatsApp dossier message
    const waMessage = 
      `*RHORDWAY TRAVEL RESERVATION DOSSIER*\n` +
      `*Booking Reference:* ${bookingRef}\n\n` +
      `*Selected Package:* ${pkg.title}\n` +
      `*Travel Dates:* ${pkg.dates} (${pkg.durationLabel})\n` +
      `*Occupancy:* ${dossierData.occupancy}\n` +
      `*Travellers:* ${guestCount} Person(s)\n` +
      `*Estimated Package Total:* ${formattedTotal}\n\n` +
      `*LEAD GUEST DETAILS:*\n` +
      `• *Name:* ${dossierData.leadName}\n` +
      `• *Phone/WhatsApp:* ${dossierData.phone}\n` +
      `• *Email:* ${dossierData.email}\n` +
      `• *Departure City:* ${dossierData.departureCity}\n` +
      (dossierData.specialRequests ? `• *Special Notes:* ${dossierData.specialRequests}\n` : '') +
      `\n📄 *Official Reservation PDF has been generated and saved.* I am sending this alongside the attached PDF for room confirmation and payment scheduling.`;

    // 3. Show confirmation feedback
    if (successAlert) {
      successAlert.style.display = 'block';
    }

    // 4. Open verified WhatsApp consultant line (+2348164206030)
    const targetNumber = siteConfig.whatsappNumber || '2348164206030';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  }

  /* ---------------- WhatsApp Modal Controls ---------------- */
  openEnquiryModal(packageType) {
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

  closeEnquiryModal() {
    const modal = document.getElementById('enquiryModalOverlay');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  copyEnquiryMessage() {
    const preview = document.getElementById('enquiryMessagePreview');
    if (!preview || !preview.textContent) return;

    navigator.clipboard.writeText(preview.textContent).then(() => {
      alert('Enquiry message copied to clipboard!');
    }).catch(() => {
      prompt('Copy your enquiry message below:', preview.textContent);
    });
  }

  sendWhatsAppDirect() {
    const preview = document.getElementById('enquiryMessagePreview');
    const testInput = document.getElementById('testPhoneInput');
    const message = preview?.textContent || buildWhatsAppMessage(this.currentEnquiryParams);

    const configuredNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
    const userNumber = (testInput?.value || '').replace(/[^0-9]/g, '');

    const targetNumber = userNumber || configuredNumber || '2348164206030';

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
