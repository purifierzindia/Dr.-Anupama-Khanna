import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onOpenCallModal,
}) => {
  const clinicPhoneNumber = '+91 82858 58580';
  const rawTelNumber = '+918285858580';
  const clinicWhatsAppNumber = '918285858580';
  const whatsappGreeting = encodeURIComponent(
    "Hello Dr. Anupama Khanna's Clinic (Dwarka), I would like to book a consultation."
  );

  return (
    <div
      id="mobile-fixed-bottom-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8E2D6] px-2.5 py-2 shadow-[0_-4px_16px_rgba(28,35,33,0.08)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          id="mobile-bar-call-btn"
          href={`tel:${rawTelNumber}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#FAF7F2] text-[#2E5A47] border border-[#2E5A47]/50 rounded-sm text-[11px] font-semibold tracking-wider uppercase active:bg-[#EDF3EF] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>CALL</span>
        </a>

        <a
          id="mobile-bar-whatsapp-btn"
          href={`https://wa.me/${clinicWhatsAppNumber}?text=${whatsappGreeting}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#EDF3EF] text-[#2E5A47] border border-[#2E5A47] rounded-sm text-[11px] font-semibold tracking-wider uppercase active:bg-[#E2ECE5] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        <button
          id="mobile-bar-book-btn"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#2E5A47] text-[#FAF7F2] rounded-sm text-[11px] font-semibold tracking-wider uppercase active:bg-[#1C3B2E] transition-colors shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK</span>
        </button>
      </div>
    </div>
  );
};
