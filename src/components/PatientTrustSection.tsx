import React from 'react';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const PatientTrustSection: React.FC = () => {
  const practoProfileUrl =
    'https://www.practo.com/delhi/doctor/dr-anupama-khanna-gynecologist-obstetrician';

  return (
    <section
      id="patient-trust"
      className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EDF3EF]/70 border border-[#D5E2D9] rounded-sm p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Key Metrics */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#2E5A47]" />
                <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
                  VERIFIED PATIENT FEEDBACK
                </span>
              </div>

              <h2
                id="patient-trust-heading"
                className="font-editorial text-3xl sm:text-4xl text-[#1C2321] font-normal leading-tight mb-4"
              >
                Patient feedback on Practo
              </h2>

              <p className="text-sm sm:text-base text-[#536058] leading-relaxed mb-6 max-w-xl">
                Patient stories and recommendation metrics are independently hosted on Practo,
                reflecting verified consultations across decades of medical practice in Dwarka.
              </p>

              <div>
                <a
                  id="practo-profile-cta-btn"
                  href={practoProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors cursor-pointer shadow-xs"
                >
                  <span>View Patient Feedback on Practo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Restrained Verified Stats Display */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Metric 1 */}
                <div
                  id="practo-recommendation-metric"
                  className="bg-[#FAF7F2] p-6 sm:p-8 border border-[#D5E2D9] rounded-sm"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-editorial text-4xl sm:text-5xl font-semibold text-[#1C2321]">
                      95%
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#2E5A47] mt-2">
                    Recommendation Rate
                  </div>
                  <p className="text-xs text-[#536058] mt-1 leading-relaxed">
                    Based on verified patient feedback published on Practo.
                  </p>
                </div>

                {/* Metric 2 */}
                <div
                  id="practo-stories-metric"
                  className="bg-[#FAF7F2] p-6 sm:p-8 border border-[#D5E2D9] rounded-sm"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-editorial text-4xl sm:text-5xl font-semibold text-[#1C2321]">
                      40+
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#2E5A47] mt-2">
                    Patient Stories
                  </div>
                  <p className="text-xs text-[#536058] mt-1 leading-relaxed">
                    Documented patient consultation experiences on Practo.
                  </p>
                </div>

              </div>

              {/* Integrity Statement */}
              <div className="mt-4 text-[11px] text-[#536058] flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#2E5A47] shrink-0" />
                <span>
                  Ratings and reviews are maintained externally on Practo. We do not edit or fabricate testimonials.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
