import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, MessageCircle, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialFocus = 'Diabetes Management',
}) => {
  const clinicPhoneNumber = '+91 82858 58580';
  const clinicWhatsAppNumber = '918285858580';

  const [focusArea, setFocusArea] = useState(initialFocus);
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [consultationType, setConsultationType] = useState<'clinic' | 'whatsapp'>('clinic');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const focusOptions = [
    'Diabetes Management',
    'Metabolic Health',
    'General Medical Consultation',
    'Nutrition & Lifestyle Guidance',
    'Diabetes in Pregnancy',
    'Thyroid in Pregnancy',
  ];

  const practoUrl =
    'https://www.practo.com/delhi/doctor/dr-anupama-khanna-gynecologist-obstetrician';

  const generateWhatsAppMessage = () => {
    const text = `Hello Dr. Anupama Khanna's Clinic,

I would like to request a medical consultation.

• Patient Name: ${patientName.trim()}
• Contact Number: ${contactNumber.trim()}
• Clinical Concern: ${focusArea}
• Preferred Time Slot: ${preferredTime}
${notes.trim() ? `• Notes / Symptoms: ${notes.trim()}\n` : ''}• Location: Diabetes Speciality Center, Sector 12, Dwarka

Please confirm the appointment slot. Thank you.`;
    return encodeURIComponent(text);
  };

  const openWhatsAppDirectly = () => {
    const url = `https://wa.me/${clinicWhatsAppNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !contactNumber) return;
    setSubmitted(true);
    // Forward directly to clinic WhatsApp
    openWhatsAppDirectly();
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatientName('');
    setContactNumber('');
    setNotes('');
    onClose();
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2321]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="booking-modal-card"
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E8E2D6] rounded-sm shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E8E2D6] bg-[#F5F1E8] flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#2E5A47]">
              DR. ANUPAMA KHANNA • DWARKA
            </div>
            <h3 className="font-editorial text-2xl text-[#1C2321] font-normal">
              Book a Medical Consultation
            </h3>
          </div>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-1.5 text-[#536058] hover:text-[#1C2321] rounded-xs hover:bg-[#E8E2D6]/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div id="booking-success-state" className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-[#EDF3EF] border border-[#D5E2D9] text-[#2E5A47] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h4 className="font-editorial text-2xl text-[#1C2321] font-medium mb-2">
                Consultation Request Forwarded
              </h4>
              <p className="text-sm text-[#536058] max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-[#1C2321]">{patientName}</strong>. Your consultation
                request for <strong>{focusArea}</strong> has been routed to WhatsApp at{' '}
                <strong className="text-[#1C2321]">{clinicPhoneNumber}</strong>.
              </p>

              <div className="bg-[#F5F1E8] p-4 rounded-xs border border-[#E8E2D6] text-left text-xs text-[#536058] mb-6 space-y-2">
                <div className="flex items-center justify-between text-[#1C2321] font-semibold pb-1 border-b border-[#E8E2D6]">
                  <span>Direct Reception Contact:</span>
                  <a
                    href="tel:+918285858580"
                    className="text-[#2E5A47] font-bold text-sm flex items-center gap-1 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {clinicPhoneNumber}
                  </a>
                </div>
                <div className="font-semibold text-[#1C2321]">Clinic Details:</div>
                <div>Diabetes Speciality Center</div>
                <div>Flat No. 302, Gangotri Apartments, Sector 12, Dwarka</div>
                <div className="text-[#2E5A47] font-medium">Near Dwarka International School, Delhi</div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={openWhatsAppDirectly}
                  className="w-full py-3 px-4 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Resend via WhatsApp ({clinicPhoneNumber})</span>
                </button>
                <a
                  href="tel:+918285858580"
                  className="w-full py-2.5 px-3 bg-[#FAF7F2] border border-[#2E5A47] text-[#2E5A47] text-xs font-semibold rounded-sm inline-flex items-center justify-center gap-2 hover:bg-[#EDF3EF]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Call to Reception: {clinicPhoneNumber}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-2 px-3 text-xs text-[#536058] hover:text-[#1C2321] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form id="consultation-booking-form" onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Option Switcher */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5">
                  Consultation Setting
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationType('clinic')}
                    className={`p-3 text-xs rounded-sm border text-left cursor-pointer transition-colors ${
                      consultationType === 'clinic'
                        ? 'border-[#2E5A47] bg-[#EDF3EF] text-[#1C2321] font-semibold'
                        : 'border-[#E8E2D6] bg-[#FAF7F2] text-[#536058]'
                    }`}
                  >
                    <div className="font-medium text-[#1C2321]">In-Clinic Visit</div>
                    <div className="text-[11px] text-[#536058] mt-0.5">Sector 12, Dwarka</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationType('whatsapp')}
                    className={`p-3 text-xs rounded-sm border text-left cursor-pointer transition-colors ${
                      consultationType === 'whatsapp'
                        ? 'border-[#2E5A47] bg-[#EDF3EF] text-[#1C2321] font-semibold'
                        : 'border-[#E8E2D6] bg-[#FAF7F2] text-[#536058]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[#1C2321] font-medium">
                      <span>WhatsApp Direct</span>
                      <MessageCircle className="w-3.5 h-3.5 text-[#2E5A47]" />
                    </div>
                    <div className="text-[11px] text-[#536058] mt-0.5">{clinicPhoneNumber}</div>
                  </button>
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label
                  htmlFor="focus-area-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5"
                >
                  Clinical Concern / Area of Interest
                </label>
                <select
                  id="focus-area-select"
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-sm text-[#1C2321] focus:outline-none focus:border-[#2E5A47]"
                >
                  {focusOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name */}
              <div>
                <label
                  htmlFor="patient-name-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5"
                >
                  Patient Full Name *
                </label>
                <input
                  id="patient-name-input"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-sm text-[#1C2321] focus:outline-none focus:border-[#2E5A47]"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="patient-phone-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5"
                >
                  Contact Number (Mobile) *
                </label>
                <input
                  id="patient-phone-input"
                  type="tel"
                  required
                  placeholder="e.g. 98XXXXXXXX"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-sm text-[#1C2321] focus:outline-none focus:border-[#2E5A47]"
                />
              </div>

              {/* Preferred Window */}
              <div>
                <label
                  htmlFor="preferred-window-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5"
                >
                  Preferred Time Slot
                </label>
                <select
                  id="preferred-window-select"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-sm text-[#1C2321] focus:outline-none focus:border-[#2E5A47]"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              {/* Medical Note / Reports */}
              <div>
                <label
                  htmlFor="patient-notes-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#536058] mb-1.5"
                >
                  Brief Symptoms or Medical History (Optional)
                </label>
                <textarea
                  id="patient-notes-input"
                  rows={2}
                  placeholder="e.g. Recent fasting blood sugar or HbA1c values, duration of condition"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8E2D6] rounded-xs text-sm text-[#1C2321] focus:outline-none focus:border-[#2E5A47] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="submit-booking-btn"
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Forward via WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-[#536058] text-center pt-1">
                Leads are forwarded directly to Dr. Khanna&apos;s clinic desk on {clinicPhoneNumber}.
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
