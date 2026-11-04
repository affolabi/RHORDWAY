import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '../context/AppContext';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import EnquiryModal from '../components/EnquiryModal';

export const viewport: Viewport = {
  themeColor: '#0080E8',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rhordway.com'),
  title: 'Rhordway™ — We Make Travel & Visa Processing Simple and Stress-Free.',
  description:
    'Rhordway is Nigeria’s trusted agency for Student Visas (Undergraduate & Postgraduate, Proof of Funds, Statement of Purpose), Global Migration, Travel Visas, Passport Processing, Flight Booking, Airport & Hotel Transfers, and Travel Insurance.',
  keywords: [
    'Rhordway',
    'student visa Nigeria',
    'global migration',
    'travel visa processing',
    'passport renewal Nigeria',
    'flight booking',
    'travel insurance',
    'study abroad UK Canada Europe'
  ],
  authors: [{ name: 'Rhordway' }],
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/rhordway-icon.png'
  },
  openGraph: {
    type: 'website',
    title: 'Rhordway™ — We Make Travel & Visa Processing Simple and Stress-Free.',
    description:
      'Explore the world, one breathtaking destination at a time. Student Visas, Global Migration, Travel Visas, Passports, Flights, Transfers & Travel Insurance.',
    images: ['/assets/images/doha-skyline.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhordway™ — We Make Travel & Visa Processing Simple and Stress-Free.',
    description: 'Student Visas, Global Migration, Travel Visas, Passports, Flights, Transfers & Travel Insurance.',
    images: ['/assets/images/doha-skyline.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/images/hero-rhordway-runway.jpg" fetchPriority="high" />
      </head>
      <body>
        <AppProvider>
          {/* Accessible skip link */}
          <a href="#main-content" className="sr-only-focusable">
            Skip to main content
          </a>

          <SiteHeader />
          <main id="main-content">
            {children}
          </main>
          <SiteFooter />
          <EnquiryModal />
        </AppProvider>
      </body>
    </html>
  );
}
