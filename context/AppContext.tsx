'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  isEnquiryModalOpen: boolean;
  enquiryModalData: any;
  openEnquiryModal: (data?: any) => void;
  closeEnquiryModal: () => void;
  selectedService: string;
  selectedDestination: string;
  selectServiceAndScroll: (service: string, destination?: string) => void;
  scrollToConsultation: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalData, setEnquiryModalData] = useState<any>({});
  const [selectedService, setSelectedService] = useState('Student Visa & Study Abroad');
  const [selectedDestination, setSelectedDestination] = useState('');

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openEnquiryModal = (data: any = {}) => {
    setEnquiryModalData(data);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const scrollToConsultation = () => {
    const el = document.getElementById('booking-collation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('guestFullName')?.focus();
      }, 450);
    } else {
      window.location.href = '/#booking-collation';
    }
  };

  const selectServiceAndScroll = (service: string, destination: string = '') => {
    setSelectedService(service);
    if (destination) {
      setSelectedDestination(destination);
    }
    scrollToConsultation();
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isEnquiryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen, isEnquiryModalOpen]);

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        isEnquiryModalOpen,
        enquiryModalData,
        openEnquiryModal,
        closeEnquiryModal,
        selectedService,
        selectedDestination,
        selectServiceAndScroll,
        scrollToConsultation
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
