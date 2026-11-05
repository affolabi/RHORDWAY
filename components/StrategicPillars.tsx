'use client';

import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function StrategicPillars() {
  return (
    <div className="mw-process-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      
      {/* Pillar 1 */}
      <div className="mw-process-card anim-reveal-text anim-delay-1">
        <span className="mw-service-num">01 · OUR MISSION</span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F1115' }}>Removing Documentation Friction</h3>
        <p style={{ fontSize: '0.9rem', color: '#71717A', lineHeight: 1.65 }}>
          Most visa refusals happen because of poorly structured Proof of Funds, weak Statements of Purpose, or incomplete embassy files. Our specialists audit and prepare every document before submission.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="mw-process-card anim-reveal-text anim-delay-2">
        <span className="mw-service-num">02 · OUR COVERAGE</span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F1115' }}>End-to-End Global Mobility</h3>
        <p style={{ fontSize: '0.9rem', color: '#71717A', lineHeight: 1.65 }}>
          We don't stop at visa approval. We coordinate your Nigerian passport renewal, international flight ticketing, embassy-approved travel insurance, hotel reservations, and private airport transfers.
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="mw-process-card anim-reveal-text anim-delay-3">
        <span className="mw-service-num">03 · DIRECT ACCESS</span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F1115' }}>Speak Directly With Specialists</h3>
        <p style={{ fontSize: '0.9rem', color: '#71717A', lineHeight: 1.65, marginBottom: '8px' }}>
          Reach our consultation desk directly via phone, WhatsApp, or email:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem', fontWeight: 700, color: '#0F1115' }}>
          <span>📞 <a href={`tel:+${siteConfig.whatsappNumber}`} style={{ color: 'inherit', textDecoration: 'none' }}>{siteConfig.primaryPhoneFormatted}</a> · <a href={`tel:+${siteConfig.alternatePhoneClean}`} style={{ color: 'inherit', textDecoration: 'none' }}>{siteConfig.alternatePhone}</a></span>
          <span>✉️ <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: '#0080E8', textDecoration: 'none' }}>{siteConfig.contactEmail}</a> · 📱 {siteConfig.instagram}</span>
        </div>
      </div>

    </div>
  );
}
