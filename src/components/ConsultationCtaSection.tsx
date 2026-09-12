import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface ConsultationCtaSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const ConsultationCtaSection: React.FC<ConsultationCtaSectionProps> = ({
  onOpenBooking,
  onOpenCallModal,
}) => {
  return (
    <section
      id="consultation-cta-section"
      className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border-2 border-[#2E5A47]/30 rounded-sm p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center max-w-4xl mx-auto shadow-xs">
          
          {/* Subtle background ornamentation */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-[#EDF3EF] rounded-full blur-3xl -z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              DR. ANUPAMA KHANNA • GENERAL PHYSICIAN
            </span>
            <span className="h-px w-6 bg-[#2E5A47]" />
          </div>

          {/* Requested Exact Headline */}
          <h2
            id="consultation-cta-headline"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-tight mb-4"
          >
            Good Health Begins With the Right Conversation.
          </h2>

          {/* Requested Exact Supporting Text */}
          <p
            id="consultation-cta-subtext"
            className="text-base sm:text-lg text-[#536058] max-w-xl mx-auto mb-8 leading-relaxed font-normal"
          >
            Book a consultation for personalised medical guidance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-book-consultation-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-sm font-semibold tracking-wide rounded-sm transition-all shadow-xs hover:shadow-md cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-[#E2ECE5]" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              id="cta-call-clinic-btn"
              href="tel:+918285858580"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-sm font-semibold tracking-wide rounded-sm transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 82858 58580</span>
            </a>
          </div>

          {/* Practice Location Micro-Note */}
          <div className="mt-8 pt-6 border-t border-[#E8E2D6] flex items-center justify-center gap-2 text-xs text-[#536058]">
            <MapPin className="w-3.5 h-3.5 text-[#2E5A47]" />
            <span>Diabetes Speciality Center • Sector 12, Dwarka, New Delhi</span>
          </div>

        </div>
      </div>
    </section>
  );
};
