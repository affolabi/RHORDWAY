'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for reveal animations
    const targetSelectors = [
      '.anim-reveal-text',
      '.anim-reveal-hero',
      '.anim-reveal-blurb',
      '.anim-reveal-cta',
      '.anim-reveal-trust',
      '.anim-fade-up',
      '.anim-fade-in',
      '.anim-scale-up',
      '.anim-slide-left',
      '.anim-slide-right',
      '.mw-split-feature-row',
      '.mw-process-card',
      '.farer-mag-card',
      '.mw-magazine-feature-card',
      '.mw-magazine-article-item',
      '.hugo-strip-card',
      '.faq-item',
      '.mw-consultation-shell',
      '.mw-consultation-left',
      '.mw-consultation-card',
      '.mw-hero-title',
      '.mw-hero-bottom-stack',
      '.mw-explore-split'
    ];

    const elements = document.querySelectorAll(targetSelectors.join(', '));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));

    // 3. Trigger immediate entrance for hero elements and top of page
    const immediateTimer = setTimeout(() => {
      document.querySelectorAll(
        '.mw-hero-frame, .mw-hero-title, .mw-hero-bottom-stack, .mw-hero-img, .anim-reveal-hero, .anim-reveal-blurb, .anim-reveal-cta, .anim-reveal-trust'
      ).forEach((el) => {
        el.classList.add('is-inview');
      });
    }, 60);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(immediateTimer);
    };
  }, [pathname]);

  return null;
}
