import React, { useState } from 'react';
import { Stethoscope, Activity, HeartPulse, Apple, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface AreasOfCareSectionProps {
  onOpenBooking: (focus?: string) => void;
}

export const AreasOfCareSection: React.FC<AreasOfCareSectionProps> = ({ onOpenBooking }) => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const careAreas = [
    {
      id: 'area-general-consultation',
      title: 'General Medical Consultation',
      summary: 'Comprehensive primary care diagnostics, adult illness evaluation, and health maintenance.',
      detail:
        'Thorough clinical assessment for acute and chronic adult health concerns. Dr. Khanna conducts methodical physical evaluations, blood report reviews, and evidence-based clinical diagnosis developed over 35+ years of general medical practice.',
      suitableFor: 'Adults experiencing undiagnosed symptoms, recurrent infections, fatigue, or needing periodic general health assessments.',
    },
    {
      id: 'area-diabetes-management',
      title: 'Diabetes Management',
      summary: 'Structured blood sugar monitoring, therapy review, and risk mitigation for Type 2 and Type 1 diabetes.',
      detail:
        'Continuous clinical oversight of glycemic patterns, hemoglobin A1c monitoring, organ safety reviews, and personalized medication adjustments tailored to maintain safe glycemic targets.',
      suitableFor: 'Individuals with newly diagnosed diabetes, borderline pre-diabetes, or long-standing diabetes needing structured management.',
    },
    {
      id: 'area-metabolic-health',
      title: 'Metabolic Health',
      summary: 'Holistic clinical management of metabolic syndrome, lipid imbalances, and insulin resistance.',
      detail:
        'Focused evaluation of interconnected metabolic parameters including dyslipidemia, high blood pressure, visceral adiposity, and systemic insulin sensitivity markers.',
      suitableFor: 'Patients managing high cholesterol, elevated triglycerides, metabolic syndrome, or family history of early metabolic disorders.',
    },
    {
      id: 'area-nutrition-lifestyle',
      title: 'Nutrition & Lifestyle Guidance',
      summary: 'Pragmatic, culture-conscious dietary direction and realistic physical activity advice.',
      detail:
        'Dietary guidance grounded in metabolic science and adapted to everyday Indian household meals. Emphasis on carbohydrate moderation, protein adequacy, meal spacing, and sustainable lifestyle adaptations.',
      suitableFor: 'Individuals seeking clear, medically sound dietary advice aligned with their diabetes or metabolic prescriptions.',
    },
    {
      id: 'area-diabetes-pregnancy',
      title: 'Diabetes in Pregnancy',
      summary: 'Attentive glycemic care during gestational diabetes or pre-gestational diabetes.',
      detail:
        'Close maternal blood glucose regulation during pregnancy to support both maternal safety and healthy fetal growth. Regular monitoring of fasting and post-prandial values with coordinated care.',
      suitableFor: 'Expectant mothers diagnosed with gestational diabetes (GDM) or those entering pregnancy with pre-existing diabetes.',
    },
    {
      id: 'area-thyroid-pregnancy',
      title: 'Thyroid in Pregnancy',
      summary: 'Screening, evaluation, and precise hormone management for maternal thyroid conditions.',
      detail:
        'Systematic tracking of maternal TSH, Free T4, and antibodies to ensure thyroid hormone levels remain within trimester-specific safe ranges throughout gestation and during the postpartum transition.',
      suitableFor: 'Pregnant women with known hypothyroidism, elevated TSH detected during routine antenatal screening, or postpartum thyroiditis.',
    },
  ];

  return (
    <section
      id="areas-of-care"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E2D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E2D6]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#2E5A47]" />
              <span className="text-xs font-semibold tracking-widest text-[#2E5A47] uppercase">
                CLINICAL SPECIALITIES
              </span>
            </div>
            <h2
              id="areas-of-care-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C2321] font-normal leading-tight"
            >
              Areas of Care
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#536058] max-w-md">
            Delivering thoughtful, longitudinal medical care rooted in decades of clinical insight and
            focused metabolic expertise.
          </p>
        </div>

        {/* Editorial Layout: Typographic List + Interactive Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Typographic List (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E8E2D6]">
            {careAreas.map((area, index) => {
              const isSelected = activeArea === index;
              return (
                <div
                  key={area.id}
                  id={area.id}
                  onClick={() => setActiveArea(index)}
                  onMouseEnter={() => setActiveArea(index)}
                  className={`py-5 sm:py-6 cursor-pointer group transition-all duration-200 ${
                    isSelected ? 'pl-4 sm:pl-6 border-l-2 border-[#2E5A47] bg-[#F5F1E8]/40' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-editorial text-sm sm:text-base pt-0.5 transition-colors ${
                          isSelected ? 'text-[#2E5A47] font-semibold' : 'text-[#85928B]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div>
                        <h3
                          className={`font-editorial text-xl sm:text-2xl transition-colors ${
                            isSelected ? 'text-[#1C2321] font-medium' : 'text-[#3E4A44] group-hover:text-[#1C2321]'
                          }`}
                        >
                          {area.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#536058] mt-1 line-clamp-2 leading-relaxed">
                          {area.summary}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs uppercase tracking-wider font-semibold shrink-0 mt-1 transition-colors ${
                        isSelected ? 'text-[#2E5A47]' : 'text-transparent group-hover:text-[#85928B]'
                      }`}
                    >
                      View &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Editorial Display Panel (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <div
              id="area-detail-panel"
              className="sticky top-28 bg-[#F5F1E8] border border-[#E8E2D6] p-7 sm:p-9 rounded-sm shadow-xs"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#2E5A47] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2E5A47]" />
                Selected Clinical Area • 0{activeArea + 1}
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl text-[#1C2321] font-normal mb-4">
                {careAreas[activeArea].title}
              </h4>

              <div className="h-px bg-[#E2DACD] my-4" />

              <div className="space-y-4 text-sm text-[#536058] leading-relaxed">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1C2321] mb-1">
                    Clinical Approach
                  </div>
                  <p>{careAreas[activeArea].detail}</p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1C2321] mb-1">
                    Relevant Patient Profile
                  </div>
                  <p className="text-xs sm:text-[13px] bg-[#FAF7F2] p-3 rounded-xs border border-[#E8E2D6]">
                    {careAreas[activeArea].suitableFor}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2DACD] flex flex-col gap-3">
                <button
                  id="area-book-btn"
                  onClick={() => onOpenBooking(careAreas[activeArea].title)}
                  className="w-full py-3 px-4 bg-[#2E5A47] hover:bg-[#1C3B2E] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors text-center cursor-pointer"
                >
                  Consult for {careAreas[activeArea].title}
                </button>
                <div className="text-[11px] text-center text-[#536058]">
                  Consultations held at Diabetes Speciality Center, Sector 12, Dwarka
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
