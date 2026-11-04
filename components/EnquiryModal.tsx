'use client';

import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { buildWhatsAppMessage } from '../utils/whatsapp';

export default function EnquiryModal() {
  const { isEnquiryModalOpen, closeEnquiryModal, enquiryModalData } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isEnquiryModalOpen) return null;

  const message = buildWhatsAppMessage(enquiryModalData);
  const cleanNumber = (siteConfig.whatsappNumber || '').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    closeEnquiryModal();
  };

  return (
    <div 
      className="config-modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="enquiryModalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiryModal();
      }}
    >
      <div className="config-modal">
        <div className="config-modal-header">
          <div>
            <span className="eyebrow" style={{ color: '#0080E8' }}>
              WhatsApp Consultation Desk
            </span>
            <h3 className="config-modal-title" id="enquiryModalTitle">
              Travel &amp; Migration Specialist Enquiry
            </h3>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            aria-label="Close enquiry dialog"
            onClick={closeEnquiryModal}
          >
            &times;
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>
          The pre-formatted message below will be sent directly to Rhordway’s official WhatsApp travel desk (+{siteConfig.whatsappNumber}).
        </p>

        <div style={{ marginTop: '16px' }}>
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', fontWeight: 600 }}>
            Pre-filled Message Preview:
          </label>
          <div className="config-preview-box" style={{ whiteSpace: 'pre-wrap', maxHeight: '180px', overflowY: 'auto' }}>
            {message}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: '24px' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={handleCopy}
          >
            {copied ? '✓ Copied!' : 'Copy Message'}
          </button>
          <button 
            type="button" 
            className="btn btn-whatsapp" 
            onClick={handleOpenWhatsApp}
          >
            Open in WhatsApp ↗
          </button>
        </div>
      </div>
    </div>
  );
}
