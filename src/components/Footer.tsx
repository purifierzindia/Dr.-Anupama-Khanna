import React from 'react';
import { MapPin, ShieldCheck, ArrowUp, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C2321] text-[#FAF7F2] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C3632]">
          
          {/* Doctor Info */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white block">
                Dr. Anupama Khanna
              </span>
              <span className="text-sm font-semibold text-[#8EB89D] uppercase tracking-wider block mt-1">
                General Physician
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#A2B1A8]">
              <span className="bg-[#2A3631] px-2.5 py-1 rounded-xs border border-[#3A4942]">
                MBBS
              </span>
              <span className="bg-[#2A3631] px-2.5 py-1 rounded-xs border border-[#3A4942]">
                35+ Years Experience
              </span>
              <span className="bg-[#2A3631] px-2.5 py-1 rounded-xs border border-[#3A4942]">
                Diabetes & Metabolic Health
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A2B1A8] max-w-md leading-relaxed">
              Providing thoughtful, individualized medical care with over three decades of clinical practice
              in general medicine, diabetes management, and metabolic health.
            </p>
          </div>

          {/* Clinic Address & Practice */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8EB89D]">
              Practice Location
            </div>
            <div className="text-sm text-[#E2ECE5] leading-relaxed">
              <p className="font-medium text-white">Diabetes Speciality Center</p>
              <p>Flat No. 302, Gangotri Apartments,</p>
              <p>Sector 12, Dwarka,</p>
              <p className="text-[#A2B1A8] text-xs mt-0.5">Near Dwarka International School,</p>
              <p className="text-white">New Delhi, Delhi 110075</p>
            </div>

            <div className="pt-2 border-t border-[#2C3632] space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8EB89D]">
                Contact & WhatsApp
              </div>
              <a
                href="tel:+918285858580"
                className="text-white hover:text-[#8EB89D] font-semibold text-sm flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8EB89D]" />
                <span>+91 82858 58580</span>
              </a>
              <a
                href="https://wa.me/918285858580?text=Hello%20Dr.%20Anupama%20Khanna%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A2B1A8] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8EB89D]" />
                <span>WhatsApp Consultation Booking</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8EB89D]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#A2B1A8]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#special-interest" className="hover:text-white transition-colors">
                  Diabetes & Metabolic Health
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition-colors">
                  Experience & Learning
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Clinic & Location
                </a>
              </li>
              <li>
                <a
                  href="https://www.practo.com/delhi/doctor/dr-anupama-khanna-gynecologist-obstetrician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Practo Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer as strictly specified */}
        <div id="footer-medical-disclaimer" className="py-6 border-b border-[#2C3632]">
          <div className="p-4 bg-[#232D29] rounded-xs border border-[#2F3D37] text-xs text-[#A2B1A8] leading-relaxed">
            <span className="font-semibold text-[#8EB89D] uppercase tracking-wider block mb-1">
              Medical Disclaimer
            </span>
            &ldquo;This website is for informational purposes only and does not replace professional
            medical consultation.&rdquo;
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B8B82] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Dr. Anupama Khanna, MBBS. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
