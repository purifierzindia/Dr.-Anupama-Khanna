import React from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const credentials = [
    {
      id: 'cred-mbbs',
      title: 'MBBS',
      institution: 'Primary Medical Qualification',
      icon: GraduationCap,
      category: 'Medical Degree',
    },
    {
      id: 'cred-rcgp-uk',
      title: 'Masterclass in Clinical Management of Diabetes',
      institution: 'Royal College of General Practitioners, UK',
      icon: Award,
      category: 'Postgraduate Masterclass',
    },
    {
      id: 'cred-endocrine-usa',
      title: 'Diploma in Diabetes Professional Care',
      institution: 'The Endocrine Society, USA',
      icon: BookOpen,
      category: 'Postgraduate Diploma',
    },
  ];

  return (
    <section
      id="credentials"
      className="py-14 sm:py-20 bg-[#F5F1E8]/70 border-b border-[#E8E2D6]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              CREDENTIALS & TRAINING
            </span>
          </div>
          
          <h2
            id="credentials-heading"
            className="font-editorial text-3xl sm:text-4xl text-[#1C2321] font-normal leading-tight"
          >
            Experience & Learning
          </h2>
        </div>

        {/* Clean Vertical Timeline / Editorial List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#2E5A47]/30 space-y-8 sm:space-y-10">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.id}
                id={cred.id}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#FAF7F2] border-2 border-[#2E5A47] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2E5A47]" />
                </div>

                <div className="bg-[#FAF7F2] p-5 sm:p-6 border border-[#E8E2D6] rounded-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#2E5A47]" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2E5A47]">
                      {cred.category}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-[#1C2321] font-normal">
                    {cred.title}
                  </h3>

                  {cred.institution && (
                    <div className="text-xs sm:text-sm text-[#536058] mt-1 font-medium">
                      {cred.institution}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Badge */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#536058]">
          <ShieldCheck className="w-4 h-4 text-[#2E5A47] shrink-0" />
          <span>Verified practitioner credentials recorded in clinical practice records.</span>
        </div>

      </div>
    </section>
  );
};

