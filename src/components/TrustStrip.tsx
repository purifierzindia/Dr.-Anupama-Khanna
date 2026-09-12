import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section
      id="experience-moment"
      className="border-y border-[#E8E2D6] bg-[#F5F1E8]/80 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Typographic Visual Moment */}
        <div className="flex flex-col items-center">
          <div
            id="experience-number"
            className="font-editorial text-6xl sm:text-7xl lg:text-8xl font-normal text-[#1C2321] tracking-tight leading-none"
          >
            35+
          </div>
          
          <div
            id="experience-label"
            className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#2E5A47] uppercase"
          >
            YEARS OF EXPERIENCE
          </div>

          {/* Thin decorative separator */}
          <div className="w-12 h-px bg-[#2E5A47]/40 my-6" aria-hidden="true" />

          {/* Authoritative Subtext */}
          <p
            id="experience-subtext"
            className="font-editorial text-lg sm:text-xl lg:text-2xl text-[#2C3632] leading-relaxed max-w-2xl font-normal"
          >
            Decades of clinical experience in general medicine, with a special interest in diabetes and metabolic health.
          </p>
        </div>
      </div>
    </section>
  );
};

