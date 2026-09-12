import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenCallModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenCallModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Diabetes & Metabolic Health', href: '#special-interest' },
    { label: 'Experience & Learning', href: '#credentials' },
    { label: 'Clinic & Location', href: '#clinic' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D6] py-3 shadow-[0_4px_20px_-8px_rgba(28,35,33,0.06)]'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Doctor Brand Identity */}
          <a
            id="brand-logo-link"
            href="#"
            className="group flex flex-col focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-[#1C2321] group-hover:text-[#2E5A47] transition-colors">
                Dr. Anupama Khanna
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#2E5A47] bg-[#E2ECE5] px-2 py-0.5 rounded-full">
                MBBS
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-[#536058] tracking-wider uppercase font-medium mt-0.5">
              General Physician • Dwarka
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                className="text-sm font-medium text-[#536058] hover:text-[#1C2321] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#2E5A47] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-clinic-btn"
              href="tel:+918285858580"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#2E5A47] hover:text-[#1C3B2E] bg-[#EDF3EF] hover:bg-[#E2ECE5] transition-colors rounded-sm border border-[#D5E2D9]"
              title="Call +91 82858 58580"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: +91 82858 58580</span>
            </a>
            <button
              id="header-book-consultation-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#2E5A47] hover:bg-[#1C3B2E] transition-colors rounded-sm shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-book-header-btn"
              onClick={onOpenBooking}
              className="px-2.5 py-1.5 text-xs font-semibold text-[#FAF7F2] bg-[#2E5A47] rounded-sm"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#1C2321] hover:bg-[#EDF3EF] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D6] px-4 pt-4 pb-6 shadow-lg transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1C2321] py-2 border-b border-[#F0EBE1] hover:text-[#2E5A47]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                id="mobile-drawer-call-btn"
                href="tel:+918285858580"
                className="w-full py-2.5 px-4 text-sm font-semibold text-[#2E5A47] bg-[#EDF3EF] border border-[#D5E2D9] rounded-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call: +91 82858 58580
              </a>
              <a
                id="mobile-drawer-whatsapp-btn"
                href="https://wa.me/918285858580?text=Hello%20Dr.%20Anupama%20Khanna%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-sm font-semibold text-[#2E5A47] bg-[#FAF7F2] border border-[#2E5A47] rounded-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: +91 82858 58580
              </a>
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-[#FAF7F2] bg-[#2E5A47] rounded-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
            <div className="pt-2 text-xs text-[#536058] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2E5A47]" />
              <span>Diabetes Speciality Center, Sector 12, Dwarka</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
