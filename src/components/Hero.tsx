import React from 'react';
import { Calendar, Phone, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCallModal }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Subtle warm accent glow for soft depth without dark mode/neon */}
      <div
        className="absolute top-12 right-0 w-96 h-96 bg-[#EDF3EF]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#F3EFE6]/70 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Clinical Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#2E5A47]" />
              <span
                id="hero-eyebrow"
                className="text-xs sm:text-[13px] font-semibold tracking-widest text-[#2E5A47] uppercase"
              >
                GENERAL PHYSICIAN • DWARKA, NEW DELHI
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1C2321] font-normal leading-[1.12] tracking-tight mb-6"
            >
              Experienced Care.{' '}
              <span className="italic font-light block text-[#2E5A47]">
                Personalised for You.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-supporting-copy"
              className="text-base sm:text-lg text-[#536058] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              With more than three decades of clinical experience, Dr. Anupama Khanna provides
              thoughtful medical care with a special interest in diabetes and metabolic health.
            </p>

            {/* Trust Line */}
            <div
              id="hero-trust-line"
              className="flex flex-wrap items-center gap-6 sm:gap-8 py-4 px-5 bg-[#F5F1E8]/70 border-l-2 border-[#2E5A47] rounded-r-sm mb-9 max-w-xl"
            >
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#536058] font-medium">
                  Qualification
                </span>
                <span className="font-editorial text-lg font-semibold text-[#1C2321]">
                  MBBS
                </span>
              </div>
              
              <div className="h-8 w-px bg-[#E8E2D6]" />

              <div>
                <span className="block text-xs uppercase tracking-wider text-[#536058] font-medium">
                  Experience
                </span>
                <span className="font-editorial text-lg font-semibold text-[#1C2321]">
                  35+ Years Experience
                </span>
              </div>

              <div className="h-8 w-px bg-[#E8E2D6] hidden sm:block" />

              <div className="hidden sm:block">
                <span className="block text-xs uppercase tracking-wider text-[#536058] font-medium">
                  Clinical Focus
                </span>
                <span className="text-sm font-medium text-[#2E5A47]">
                  Diabetes & Metabolism
                </span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#E2ECE5]" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                id="hero-secondary-cta"
                href="tel:+918285858580"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 82858 58580</span>
              </a>
            </div>

            {/* Micro location stamp */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#536058]">
              <MapPin className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
              <span>
                Diabetes Speciality Center • Flat No. 302, Gangotri Apartments, Sector 12, Dwarka
              </span>
            </div>
          </div>

          {/* Right Column: Large Editorial Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Refined offset background panel */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 bg-[#E4EDE6] border border-[#D5E2D9] rounded-sm -z-10"
                aria-hidden="true"
              />

              {/* Authentic Doctor Portrait Container */}
              <div
                id="doctor-hero-portrait-frame"
                className="relative bg-[#FAF7F2] p-2.5 sm:p-3 border border-[#E8E2D6] rounded-sm shadow-[0_12px_32px_-12px_rgba(28,35,33,0.12)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EDF3EF] rounded-xs">
                  <img
                    id="doctor-main-photo"
                    src="/assets/dr-anupama-khanna.jpeg"
                    alt="Dr. Anupama Khanna, MBBS - General Physician & Diabetologist in Dwarka, New Delhi"
                    className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette gradient at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C2321]/70 via-[#1C2321]/20 to-transparent pointer-events-none" />

                  {/* Doctor badge overlay on photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-medium tracking-widest uppercase text-[#E2ECE5] block">
                      General Physician
                    </span>
                    <span className="font-editorial text-lg sm:text-xl font-medium text-white block">
                      Dr. Anupama Khanna
                    </span>
                    <span className="text-[11px] text-white/90">
                      MBBS • 35+ Years of Clinical Care
                    </span>
                  </div>
                </div>

                {/* Editorial Caption below portrait */}
                <div className="pt-3 px-1.5 flex items-center justify-between text-xs text-[#536058]">
                  <span className="font-medium">Dwarka Sector 12 Practice</span>
                  <span className="inline-flex items-center gap-1 text-[#2E5A47] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Practitioner
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
