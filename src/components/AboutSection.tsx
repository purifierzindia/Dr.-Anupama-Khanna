import React from 'react';
import { Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const credentials = [
    '35+ Years of Clinical Experience',
    'MBBS',
    'General Physician',
    'Special Interest in Diabetes & Metabolic Health',
  ];

  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              ABOUT DR. ANUPAMA KHANNA
            </span>
          </div>

          {/* Heading */}
          <h2
            id="about-heading"
            className="font-editorial text-3xl sm:text-4xl text-[#1C2321] font-normal leading-tight mb-6"
          >
            Three Decades of Clinical Experience
          </h2>

          {/* Concise 2 Short Paragraphs (Readable in ~10 seconds on mobile) */}
          <div className="space-y-4 text-base sm:text-lg text-[#536058] leading-relaxed mb-8 max-w-3xl">
            <p>
              Dr. Anupama Khanna is an MBBS qualified General Physician with over 35 years of clinical practice in Dwarka, New Delhi. She provides attentive medical consultations rooted in longitudinal care and methodical clinical evaluation.
            </p>
            <p>
              With specialized postgraduate learning from the UK and USA, her practice focuses on personalized diabetes management, metabolic disorders, and practical lifestyle guidance.
            </p>
          </div>

          {/* Compact Credentials List */}
          <div
            id="about-credentials-list"
            className="pt-6 border-t border-[#E8E2D6]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 px-3 bg-[#F5F1E8]/60 border border-[#E8E2D6] rounded-xs"
                >
                  <span className="w-5 h-5 rounded-full bg-[#EDF3EF] border border-[#D5E2D9] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#2E5A47]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#1C2321]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

