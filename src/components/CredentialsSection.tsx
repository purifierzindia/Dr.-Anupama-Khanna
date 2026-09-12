import React from 'react';
import { Award, GraduationCap, Clock, BookOpen, ShieldCheck } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const credentials = [
    {
      id: 'cred-experience',
      title: '35+ Years',
      subtitle: 'Clinical Experience',
      institution: 'Active Medical Practice in Delhi',
      description:
        'More than three decades of continuous clinical practice diagnosing, managing, and guiding patients across general medicine and metabolic health.',
      icon: Clock,
      badge: 'Decades of Practice',
    },
    {
      id: 'cred-qualification',
      title: 'MBBS',
      subtitle: 'Medical Qualification',
      institution: 'Primary Medical Degree',
      description:
        'Foundation of comprehensive clinical training and clinical diagnostic practice in internal and general medicine.',
      icon: GraduationCap,
      badge: 'Core Qualification',
    },
    {
      id: 'cred-rcgp-uk',
      title: 'Clinical Management of Diabetes',
      subtitle: 'Masterclass',
      institution: 'Royal College of General Practitioners, UK',
      description:
        'Postgraduate training focusing on modern, evidence-informed clinical pathways for diabetes care, risk reduction, and long-term glycemic control.',
      icon: Award,
      badge: 'International Masterclass',
    },
    {
      id: 'cred-endocrine-usa',
      title: 'Diabetes Professional Care',
      subtitle: 'Diploma',
      institution: 'The Endocrine Society, USA',
      description:
        'Advanced specialized credentialing in professional diabetes care, endocrine considerations, and individualized patient-centered management.',
      icon: BookOpen,
      badge: 'Specialized Diploma',
    },
  ];

  return (
    <section
      id="credentials"
      className="py-20 sm:py-24 lg:py-28 bg-[#F5F1E8]/70 border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              CREDENTIALS & BACKGROUND
            </span>
          </div>
          <h2
            id="credentials-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-tight"
          >
            Experience & Continuing Learning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536058] leading-relaxed">
            A career rooted in extensive clinical immersion, complemented by continuous postgraduate
            learning from leading international medical societies in the United Kingdom and United States.
          </p>
        </div>

        {/* Sophisticated Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.id}
                id={cred.id}
                className="bg-[#FAF7F2] p-8 sm:p-10 border border-[#E8E2D6] rounded-sm relative flex flex-col justify-between hover:border-[#2E5A47]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E5A47] bg-[#EDF3EF] px-3 py-1 rounded-xs border border-[#D5E2D9]">
                      <Icon className="w-3.5 h-3.5" />
                      {cred.badge}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C2321] font-medium leading-snug">
                    {cred.title}
                  </h3>
                  
                  <div className="text-sm font-semibold text-[#2E5A47] mt-1">
                    {cred.subtitle}
                  </div>

                  <div className="text-xs font-medium uppercase tracking-wider text-[#536058] mt-2 mb-4 pb-4 border-b border-[#F0EBE1]">
                    {cred.institution}
                  </div>

                  <p className="text-sm text-[#536058] leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center gap-2 text-xs text-[#536058]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E5A47]" />
                  <span>Verified Medical Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
