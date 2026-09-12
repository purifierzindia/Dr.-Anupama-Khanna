import React from 'react';
import { Activity, Apple, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';

interface SpecialInterestSectionProps {
  onOpenBooking: (focus?: string) => void;
}

export const SpecialInterestSection: React.FC<SpecialInterestSectionProps> = ({ onOpenBooking }) => {
  const areas = [
    {
      id: 'diabetes-management',
      number: '01',
      title: 'Diabetes Management',
      description: 'Personalised medical guidance and ongoing management.',
      icon: Activity,
    },
    {
      id: 'nutrition-lifestyle',
      number: '02',
      title: 'Nutrition & Lifestyle',
      description: 'Practical guidance around nutrition and lifestyle as part of diabetes care.',
      icon: Apple,
    },
    {
      id: 'diabetes-pregnancy',
      number: '03',
      title: 'Diabetes in Pregnancy',
      description: 'Clinical care related to diabetes during pregnancy.',
      icon: HeartPulse,
    },
    {
      id: 'thyroid-pregnancy',
      number: '04',
      title: 'Thyroid in Pregnancy',
      description: 'Medical management and monitoring related to thyroid concerns during pregnancy.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="special-interest"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              SPECIAL FOCUS
            </span>
          </div>

          <h2
            id="special-interest-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-[1.15] mb-4"
          >
            Diabetes & Metabolic Health
          </h2>

          <p
            id="special-interest-intro"
            className="text-base sm:text-lg text-[#536058] leading-relaxed font-normal"
          >
            Thoughtful medical care focused on diabetes management, metabolic health, nutrition and lifestyle.
          </p>
        </div>

        {/* Editorial Grid: Subtle dividers, typography, small icons, no excessive cards */}
        <div className="border border-[#E8E2D6] rounded-xs bg-[#FAF7F2] divide-y divide-[#E8E2D6]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D6]">
            {areas.slice(0, 2).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`area-${item.id}`}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-[#F5F1E8]/50 transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#EDF3EF] border border-[#D5E2D9] flex items-center justify-center text-[#2E5A47]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-editorial text-xs font-medium text-[#2E5A47]/70 tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#1C2321] font-normal mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#536058] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E8E2D6]/60">
                    <button
                      id={`btn-consult-${item.id}`}
                      onClick={() => onOpenBooking(item.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#2E5A47] hover:text-[#1C3B2E] transition-colors cursor-pointer group"
                    >
                      <span>Consult on {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D6]">
            {areas.slice(2, 4).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`area-${item.id}`}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-[#F5F1E8]/50 transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#EDF3EF] border border-[#D5E2D9] flex items-center justify-center text-[#2E5A47]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-editorial text-xs font-medium text-[#2E5A47]/70 tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl text-[#1C2321] font-normal mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#536058] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E8E2D6]/60">
                    <button
                      id={`btn-consult-${item.id}`}
                      onClick={() => onOpenBooking(item.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#2E5A47] hover:text-[#1C3B2E] transition-colors cursor-pointer group"
                    >
                      <span>Consult on {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

