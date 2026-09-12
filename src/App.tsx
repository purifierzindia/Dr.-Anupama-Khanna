/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { SpecialInterestSection } from './components/SpecialInterestSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ClinicSection } from './components/ClinicSection';
import { ConsultationCtaSection } from './components/ConsultationCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CallClinicModal } from './components/CallClinicModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialFocus, setBookingInitialFocus] = useState('Diabetes Management');
  const [callModalOpen, setCallModalOpen] = useState(false);

  const handleOpenBooking = (focus?: string) => {
    if (focus) {
      setBookingInitialFocus(focus);
    }
    setBookingModalOpen(true);
  };

  const handleOpenCallModal = () => {
    setCallModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C2321] flex flex-col selection:bg-[#E2ECE5] selection:text-[#1C3B2E] pb-14 sm:pb-0">
      {/* Top Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenCallModal={handleOpenCallModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. IMAGE: Hero Section with Authentic Doctor Portrait & Primary CTAs */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={handleOpenCallModal}
        />

        {/* 2. TEXT: Concise About Section (2 short paragraphs + compact credentials) */}
        <AboutSection />

        {/* 3. STATISTIC: High-Impact 35+ Years of Clinical Experience */}
        <TrustStrip />

        {/* 4. EDITORIAL GRID: Diabetes & Metabolic Health (4 distinct focus areas) */}
        <SpecialInterestSection
          onOpenBooking={(focus) => handleOpenBooking(focus)}
        />

        {/* 5. TEXT / TIMELINE: Experience & Learning (MBBS, RCGP UK, Endocrine Society USA) */}
        <CredentialsSection />

        {/* 6. PRACTICE & LOCATION: Dwarka Clinic, Authentic Clinic Photos, Map & Direct Contact */}
        <ClinicSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={handleOpenCallModal}
        />

        {/* 7. CTA: Final Consultation Call to Action */}
        <ConsultationCtaSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={handleOpenCallModal}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Action Bar (CALL / BOOK) */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCallModal={handleOpenCallModal}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialFocus={bookingInitialFocus}
      />

      <CallClinicModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
