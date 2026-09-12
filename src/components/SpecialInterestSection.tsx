import React from 'react';
import { Activity, Apple, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';

interface SpecialInterestSectionProps {
  onOpenBooking: (focus?: string) => void;
}

export const SpecialInterestSection: React.FC<SpecialInterestSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      id: 'pillar-diabetes-management',
      number: '01',
      title: 'Diabetes Management',
      subtitle: 'Long-term glycemic stabilization & monitoring',
      description:
        'Individualized medical guidance for diabetes care and ongoing management. Dr. Khanna conducts comprehensive clinical evaluations of glycemic trends, helping patients navigate medical management with precision and continuity.',
      points: [
        'Assessment of fasting & post-meal blood sugar levels',
        'Review and optimization of oral medication regimes',
        'Routine metabolic monitoring and complication risk prevention',
      ],
      tag: 'Diabetes Care',
    },
    {
      id: 'pillar-nutrition-lifestyle',
      number: '02',
      title: 'Nutrition & Lifestyle',
      subtitle: 'Practical dietary & behavioral adjustments',
      description:
        'Practical guidance around nutrition and lifestyle as part of diabetes care. Medical guidance is tailored to realistic daily routines, meal planning, and sustainable physical activity without extreme dietary fads.',
      points: [
        'Evidence-informed nutritional advice tailored to Indian diets',
        'Guidance on carbohydrate management and meal timing',
        'Lifestyle modifications supporting metabolic well-being',
      ],
      tag: 'Metabolic Health',
    },
    {
      id: 'pillar-diabetes-pregnancy',
      number: '03',
      title: 'Diabetes in Pregnancy',
      subtitle: 'Gestational diabetes & pre-existing maternal diabetes',
      description:
        'Clinical care related to diabetes during pregnancy. Specialized medical management to support optimal maternal blood glucose levels throughout gestation in collaboration with the patient’s obstetric team.',
      points: [
        'Close blood glucose monitoring protocols for expectant mothers',
        'Dietary guidance tailored to pregnancy nutritional needs',
        'Safe, structured medication or insulin titration when required',
      ],
      tag: 'Maternal Care',
    },
    {
      id: 'pillar-thyroid-pregnancy',
      number: '04',
      title: 'Thyroid in Pregnancy',
      subtitle: 'Maternal thyroid screening & medical regulation',
      description:
        'Medical management and monitoring related to thyroid concerns during pregnancy. Monitoring thyroid-stimulating hormone (TSH) and free thyroid hormones to safeguard maternal and fetal health.',
      points: [
        'Careful monitoring of TSH and free T4 during each trimester',
        'Timely dosage adjustment of thyroid hormone replacement',
        'Longitudinal postpartum thyroid assessment',
      ],
      tag: 'Endocrine Care',
    },
  ];

  return (
    <section
      id="special-interest"
      className="py-20 sm:py-24 lg:py-28 bg-[#F6F2EA] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#2E5A47]" />
            <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
              SPECIAL PROFESSIONAL FOCUS
            </span>
          </div>
          <h2
            id="special-interest-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-[1.15]"
          >
            Diabetes & Metabolic Health
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536058] leading-relaxed">
            Metabolic health requires patient, thoughtful clinical attention. Dr. Anupama Khanna
            applies over three decades of clinical practice alongside internationally certified
            postgraduate education from the UK and USA to guide patients through complex metabolic conditions.
          </p>
        </div>

        {/* Distinctive Editorial Grid with Thin Separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2DACD] rounded-sm overflow-hidden border border-[#E2DACD]">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="bg-[#FAF7F2] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors duration-200"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-editorial text-2xl font-light text-[#2E5A47]/60">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2E5A47] bg-[#EDF3EF] px-2.5 py-1 rounded-xs border border-[#D5E2D9]">
                    {pillar.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C2321] font-normal mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-[#536058] mb-4">
                  {pillar.subtitle}
                </p>

                {/* Narrative Description */}
                <p className="text-sm sm:text-[15px] text-[#536058] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Clinical Checkpoints */}
                <div className="space-y-2.5 pt-4 border-t border-[#F0EBE1]">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1C2321]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A47] mt-1.5 shrink-0" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Action */}
              <div className="mt-8 pt-6 border-t border-[#F0EBE1] flex items-center justify-between">
                <span className="text-xs text-[#536058] font-medium">
                  Dwarka Clinic Consultation
                </span>
                <button
                  id={`btn-consult-${pillar.number}`}
                  onClick={() => onOpenBooking(pillar.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5A47] hover:text-[#1C3B2E] transition-colors group cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Medical Note */}
        <div
          id="special-interest-disclaimer"
          className="mt-8 p-4 sm:p-5 bg-[#FAF7F2] border border-[#E8E2D6] rounded-sm flex items-start gap-3 text-xs text-[#536058]"
        >
          <ShieldCheck className="w-4 h-4 text-[#2E5A47] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#1C2321] font-semibold">Clinical Note:</strong> Medical care and
            treatment plans are individualized following thorough clinical evaluation. Services are
            provided based on comprehensive patient medical history and current health indicators.
          </p>
        </div>

      </div>
    </section>
  );
};
