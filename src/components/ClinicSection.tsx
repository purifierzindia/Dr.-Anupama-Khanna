import React from 'react';
import { MapPin, Navigation, Calendar, Phone, CheckCircle2, Clock, Building } from 'lucide-react';

interface ClinicSectionProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = ({ onOpenBooking, onOpenCallModal }) => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Diabetes+Speciality+Center+Gangotri+Apartments+Sector+12+Dwarka+Delhi';

  return (
    <section
      id="clinic"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              PRACTICE LOCATION
            </span>
          </div>
          <h2
            id="clinic-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-tight"
          >
            Visit the Clinic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536058] leading-relaxed">
            In-person consultations are conducted in a quiet, dedicated clinic setting at Sector 12,
            Dwarka, offering unhurried clinical evaluations for diabetes and metabolic wellness.
          </p>
        </div>

        {/* Editorial Layout: Authentic Clinic Photography + Structured Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Clinic Photos */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Photo 1 */}
              <div className="bg-[#FAF7F2] p-2.5 border border-[#E8E2D6] rounded-sm shadow-xs">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#EDF3EF]">
                  <img
                    id="clinic-photo-1"
                    src="/assets/clinic-1.jpeg"
                    alt="Diabetes Speciality Center - Consultation Suite Sector 12 Dwarka"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 px-1 text-xs text-[#536058] flex items-center justify-between">
                  <span className="font-medium text-[#1C2321]">Clinical Consultation Area</span>
                  <span>Sector 12, Dwarka</span>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="bg-[#FAF7F2] p-2.5 border border-[#E8E2D6] rounded-sm shadow-xs">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#EDF3EF]">
                  <img
                    id="clinic-photo-2"
                    src="/assets/clinic-2.jpeg"
                    alt="Diabetes Speciality Center - Reception & Waiting Area"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 px-1 text-xs text-[#536058] flex items-center justify-between">
                  <span className="font-medium text-[#1C2321]">Reception & Patient Waiting</span>
                  <span>Gangotri Apartments</span>
                </div>
              </div>

            </div>

            {/* Key Clinical Amenities Note */}
            <div className="p-5 bg-[#F5F1E8] border border-[#E8E2D6] rounded-sm">
              <div className="font-editorial text-base font-medium text-[#1C2321] mb-2">
                Consultation Environment
              </div>
              <p className="text-xs sm:text-sm text-[#536058] leading-relaxed">
                Diabetes Speciality Center provides a serene, private clinical setting designed for
                meticulous diagnostic reviews, blood glucose discussions, and thoughtful lifestyle
                guidance without crowded hospital waiting halls.
              </p>
            </div>
          </div>

          {/* Right Column: Address & Direct Action Card */}
          <div className="lg:col-span-5">
            <div
              id="clinic-details-card"
              className="bg-[#FAF7F2] border-2 border-[#E2DACD] p-8 sm:p-9 rounded-sm shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E5A47] mb-2">
                <Building className="w-4 h-4 text-[#2E5A47]" />
                <span>Dwarka Clinic Address</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C2321] font-medium mb-4">
                Diabetes Speciality Center
              </h3>

              {/* Exact Address from verified details */}
              <div className="p-4 bg-[#F5F1E8] rounded-xs border border-[#E8E2D6] text-sm text-[#1C2321] leading-relaxed mb-4 font-normal">
                <p className="font-medium">Flat No. 302, Gangotri Apartments,</p>
                <p>Sector 12, Dwarka,</p>
                <p className="text-[#536058] mt-1 text-xs">
                  Near Dwarka International School,
                </p>
                <p className="text-[#1C2321] font-medium">New Delhi, Delhi 110075</p>
              </div>

              {/* Direct Phone & WhatsApp Box */}
              <div className="p-4 bg-[#EDF3EF] rounded-xs border border-[#D5E2D9] mb-6 space-y-1.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2E5A47]">
                  Clinic Telephone & WhatsApp
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+918285858580"
                    className="font-editorial text-xl font-bold text-[#1C2321] hover:text-[#2E5A47] transition-colors"
                  >
                    +91 82858 58580
                  </a>
                  <a
                    href="https://wa.me/918285858580?text=Hello%20Dr.%20Anupama%20Khanna%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#2E5A47] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#D5E2D9] hover:bg-white"
                  >
                    WhatsApp Chat
                  </a>
                </div>
                <p className="text-xs text-[#536058]">
                  Direct line for patient appointments, questions & follow-ups.
                </p>
              </div>

              {/* Location Highlights */}
              <div className="space-y-2.5 text-xs text-[#536058] mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
                  <span>Landmark: Immediately near Dwarka International School</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
                  <span>Accessible from Dwarka Sector 12 Metro Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
                  <span>Elevator access available to Flat No. 302</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  id="clinic-get-directions-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    id="clinic-book-consult-btn"
                    onClick={onOpenBooking}
                    className="py-3 px-3 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-xs font-semibold tracking-wide rounded-sm transition-colors text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                  </button>

                  <a
                    id="clinic-call-desk-btn"
                    href="tel:+918285858580"
                    className="py-3 px-3 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-xs font-semibold tracking-wide rounded-sm transition-colors text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: +91 82858 58580</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
