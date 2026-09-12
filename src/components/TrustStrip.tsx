import React from 'react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      metric: '35+',
      label: 'Years of Experience',
      subtext: 'Clinical practice in general medicine',
    },
    {
      metric: 'MBBS',
      label: 'Qualified Physician',
      subtext: 'Core medical qualification',
    },
    {
      metric: 'Diabetes',
      label: 'Special Interest',
      subtext: 'Metabolic health & lifestyle management',
    },
    {
      metric: 'Dwarka',
      label: 'Delhi',
      subtext: 'Sector 12, Gangotri Apartments',
    },
  ];

  return (
    <section
      id="trust-strip-section"
      className="border-y border-[#E8E2D6] bg-[#F5F1E8]/70 py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {trustItems.map((item, index) => (
            <div
              key={item.metric}
              id={`trust-item-${index + 1}`}
              className={`flex flex-col justify-center px-4 sm:px-6 ${
                index !== 0 ? 'md:border-l md:border-[#E0D8C8]' : ''
              } ${index % 2 === 1 ? 'pl-6 border-l border-[#E0D8C8] md:border-l' : ''}`}
            >
              <div className="font-editorial text-3xl sm:text-4xl lg:text-4xl text-[#1C2321] font-semibold tracking-tight">
                {item.metric}
              </div>
              <div className="text-sm font-semibold text-[#2E5A47] uppercase tracking-wider mt-1">
                {item.label}
              </div>
              <div className="text-xs text-[#536058] mt-0.5">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
