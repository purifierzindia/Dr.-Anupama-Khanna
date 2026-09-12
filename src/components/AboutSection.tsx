import React from 'react';
import { Award, CheckCircle2, Clock, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Close Portrait Crop & Editorial Detail */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Asymmetric sage background accent */}
              <div
                className="absolute -top-4 -left-4 w-full h-full bg-[#E2ECE5] rounded-sm -z-10"
                aria-hidden="true"
              />

              {/* Close Portrait Crop */}
              <div
                id="about-portrait-container"
                className="relative bg-[#FAF7F2] p-3 border border-[#E8E2D6] rounded-sm shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#EDF3EF]">
                  <img
                    id="about-doctor-photo"
                    src="/assets/dr-anupama-khanna.jpeg"
                    alt="Dr. Anupama Khanna - 35+ Years Experience General Physician"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2321]/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-[#FAF7F2]">
                    <div className="font-editorial text-base sm:text-lg font-medium">
                      Dr. Anupama Khanna
                    </div>
                    <div className="text-xs text-[#E2ECE5] font-light">
                      MBBS • General Physician
                    </div>
                  </div>
                </div>

                {/* Key Verification Points */}
                <div className="mt-4 pt-3 border-t border-[#E8E2D6] space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#536058]">
                    <Clock className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>35+ years of active clinical practice in Delhi</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#536058]">
                    <Award className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Masterclass & Diploma in Diabetes Management (UK & USA)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#536058]">
                    <MapPin className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Practicing at Diabetes Speciality Center, Dwarka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-2xl">
              
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
                className="font-editorial text-3xl sm:text-4xl lg:text-4xl text-[#1C2321] font-normal leading-tight mb-6"
              >
                Three Decades of Clinical Experience
              </h2>

              {/* Narrative based strictly on verified information */}
              <div className="space-y-4 text-base text-[#536058] leading-relaxed">
                <p>
                  Dr. Anupama Khanna is an MBBS qualified General Physician with more than 35 years
                  of clinical experience. Practicing in Dwarka, New Delhi, she provides thoughtful
                  general medical consultations with a dedicated professional focus on diabetes and
                  metabolic disorders.
                </p>
                <p>
                  Her clinical approach emphasizes understanding the individual physiological context
                  of each patient. Recognizing that chronic metabolic conditions cannot be addressed
                  with quick fixes, she integrates evidence-informed medical guidance with practical
                  nutrition and lifestyle modifications.
                </p>
                <p>
                  Dr. Khanna’s clinical interests encompass adult diabetes management, metabolic
                  disorders, as well as specialized medical monitoring for diabetes in pregnancy
                  and thyroid disorders during pregnancy.
                </p>
              </div>

              {/* Verified Qualifications Callout */}
              <div className="mt-8 p-5 bg-[#EDF3EF]/60 border border-[#D8E4DC] rounded-sm">
                <div className="font-editorial text-lg text-[#1C2321] font-medium mb-2">
                  Clinical Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1C2321]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>General Medical Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Adult Diabetes Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Metabolic Health & Disorders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Nutrition & Lifestyle in Diabetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Diabetes in Pregnancy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5A47] shrink-0" />
                    <span>Thyroid Concerns in Pregnancy</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
