import React from 'react';
import { X, Phone, MapPin, Building, ExternalLink, Calendar, MessageCircle } from 'lucide-react';

interface CallClinicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CallClinicModal: React.FC<CallClinicModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const clinicPhoneNumber = '+91 82858 58580';
  const rawTelNumber = '+918285858580';
  const clinicWhatsAppNumber = '918285858580';
  const whatsappGreeting = encodeURIComponent(
    "Hello Dr. Anupama Khanna's Clinic (Diabetes Speciality Center, Dwarka), I would like to inquire about a consultation appointment."
  );

  if (!isOpen) return null;

  const practoUrl =
    'https://www.practo.com/delhi/doctor/dr-anupama-khanna-gynecologist-obstetrician';
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Diabetes+Speciality+Center+Gangotri+Apartments+Sector+12+Dwarka+Delhi';

  return (
    <div
      id="call-clinic-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2321]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="call-clinic-modal-card"
        className="relative w-full max-w-md bg-[#FAF7F2] border border-[#E8E2D6] rounded-sm shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E2D6] bg-[#F5F1E8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xs bg-[#EDF3EF] text-[#2E5A47]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#2E5A47]">
                CLINIC CONTACT & WHATSAPP
              </div>
              <h3 className="font-editorial text-xl text-[#1C2321] font-normal">
                Direct Clinic Inquiries
              </h3>
            </div>
          </div>
          <button
            id="call-modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#536058] hover:text-[#1C2321] rounded-xs hover:bg-[#E8E2D6]/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Verified Phone & WhatsApp Highlight */}
          <div className="p-4 bg-[#EDF3EF] border border-[#D5E2D9] rounded-xs text-center">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2E5A47] mb-1">
              Official Clinic Phone & WhatsApp
            </div>
            <a
              href={`tel:${rawTelNumber}`}
              className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C2321] hover:text-[#2E5A47] transition-colors block"
            >
              {clinicPhoneNumber}
            </a>
            <div className="text-xs text-[#536058] mt-1">
              Available for direct calls, inquiries & WhatsApp consultation booking
            </div>
          </div>

          <div className="p-4 bg-[#F5F1E8] border border-[#E8E2D6] rounded-xs text-xs text-[#1C2321] leading-relaxed">
            <div className="font-semibold text-sm mb-1 text-[#2E5A47]">
              Diabetes Speciality Center
            </div>
            <p className="text-[#536058]">
              Flat No. 302, Gangotri Apartments, Sector 12, Dwarka, Near Dwarka International School,
              New Delhi, Delhi 110075
            </p>
          </div>

          <div className="space-y-2.5">
            <a
              id="call-modal-direct-call-btn"
              href={`tel:${rawTelNumber}`}
              className="w-full py-3.5 px-4 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {clinicPhoneNumber}</span>
            </a>

            <a
              id="call-modal-whatsapp-btn"
              href={`https://wa.me/${clinicWhatsAppNumber}?text=${whatsappGreeting}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp ({clinicPhoneNumber})</span>
            </a>

            <button
              id="call-modal-request-form-btn"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47]/40 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Fill Consultation Form</span>
            </button>

            <a
              id="call-modal-maps-link"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-xs font-medium text-[#536058] hover:text-[#1C2321] transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2E5A47]" />
              <span>Open Clinic in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
