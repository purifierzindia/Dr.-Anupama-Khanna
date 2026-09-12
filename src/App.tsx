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
import { AreasOfCareSection } from './components/AreasOfCareSection';
import { CredentialsSection } from './components/CredentialsSection';
import { PatientTrustSection } from './components/PatientTrustSection';
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
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={handleOpenCallModal}
        />

        {/* Horizontal Trust Metric Strip */}
        <TrustStrip />

        {/* About Section */}
        <AboutSection />

        {/* Special Interest: Diabetes & Metabolic Health */}
        <SpecialInterestSection
          onOpenBooking={(focus) => handleOpenBooking(focus)}
        />

        {/* Areas of Care (Typographic Expertise) */}
        <AreasOfCareSection
          onOpenBooking={(focus) => handleOpenBooking(focus)}
        />

        {/* Experience & Continuing Learning (Credentials) */}
        <CredentialsSection />

        {/* Patient Trust (Practo Verified) */}
        <PatientTrustSection />

        {/* Clinic & Practice Location with authentic photos */}
        <ClinicSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCallModal={handleOpenCallModal}
        />

        {/* Consultation Call to Action */}
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
