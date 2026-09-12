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
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Refined Editorial Typography & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                id="hero-eyebrow"
                className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase bg-[#EDF3EF] px-2.5 py-1 rounded-xs border border-[#D5E2D9]"
              >
                GENERAL PHYSICIAN • DWARKA
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#1C2321] bg-[#F5F1E8] px-2.5 py-1 rounded-xs border border-[#E8E2D6]">
                MBBS
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#2E5A47] bg-[#EDF3EF] px-2.5 py-1 rounded-xs border border-[#D5E2D9]">
                35+ YEARS EXPERIENCE
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#1C2321] font-normal leading-[1.12] tracking-tight mb-4"
            >
              Experienced Care.{' '}
              <span className="italic font-light block text-[#2E5A47]">
                Personalised for You.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-supporting-copy"
              className="text-sm sm:text-base lg:text-lg text-[#536058] leading-relaxed max-w-xl mb-6 font-normal"
            >
              Dr. Anupama Khanna brings more than 35 years of clinical practice in Dwarka, providing patient-centered care with a special interest in diabetes and metabolic health.
            </p>

            {/* CTAs (Min 44px touch targets on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                id="hero-primary-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 shadow-xs cursor-pointer group min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-[#E2ECE5]" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                id="hero-secondary-cta"
                href="tel:+918285858580"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer min-h-[44px]"
                title="Call Clinic at +91 82858 58580"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Micro location stamp */}
            <div className="flex items-center gap-2 text-xs text-[#536058]">
              <MapPin className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
              <span className="truncate">
                Sector 12, Dwarka, New Delhi • +91 82858 58580
              </span>
            </div>
          </div>

          {/* Right Column: Key Authentic Doctor Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Authentic Doctor Portrait Container */}
              <div
                id="doctor-hero-portrait-frame"
                className="relative bg-[#FAF7F2] p-2 sm:p-2.5 border border-[#E8E2D6] rounded-xs shadow-[0_8px_24px_-8px_rgba(28,35,33,0.1)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EDF3EF] rounded-xs">
                  <img
                    id="doctor-main-photo"
                    src="/assets/dr-anupama-khanna.jpeg"
                    alt="Dr. Anupama Khanna, MBBS - General Physician & Diabetologist in Dwarka, New Delhi"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C2321]/70 via-[#1C2321]/20 to-transparent pointer-events-none" />

                  {/* Doctor badge overlay on photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-[#E2ECE5] block">
                      General Physician
                    </span>
                    <span className="font-editorial text-base sm:text-lg font-medium text-white block">
                      Dr. Anupama Khanna
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-white/90">
                      MBBS • 35+ Years of Clinical Care
                    </span>
                  </div>
                </div>

                {/* Editorial Caption below portrait */}
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] sm:text-xs text-[#536058]">
                  <span className="font-medium">Dwarka Sector 12 Practice</span>
                  <span className="inline-flex items-center gap-1 text-[#2E5A47] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Physician
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

