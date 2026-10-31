import React from 'react';
import {
  Database,
  FileCheck2,
  SearchCode,
  PieChart,
  LayoutDashboard,
  BookOpen,
  Code2,
  CheckCircle,
} from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Data Collection',
      icon: Database,
      summary:
        'Gathered electric vehicle market records, technical vehicle specifications, and national registration databases from verified transportation and governmental bodies.',
      deliverable: 'Raw tabular repository of EV models and specifications',
    },
    {
      num: '02',
      title: 'Data Preparation & Cleaning',
      icon: FileCheck2,
      summary:
        'Standardized unit metrics (converting miles/km and kWh/MPGe), addressed null and redundant entries, normalized manufacturer brand groupings, and verified range cycle types.',
      deliverable: 'Cleaned, structured data schema ready for analytical modeling',
    },
    {
      num: '03',
      title: 'Exploratory Data Analysis (EDA)',
      icon: SearchCode,
      summary:
        'Conducted statistical distributions on battery capacity, vehicle pricing quartiles, curb weights, and correlation matrices between pack capacity and certified driving range.',
      deliverable: 'Statistical summary tables, outliers inventory, and hypothesis validations',
    },
    {
      num: '04',
      title: 'Data Visualization Design',
      icon: PieChart,
      summary:
        'Designed visual encoding schemes: choosing appropriate chart geometries (scatter plots, grouped histograms, choropleth maps) aligned with visual perception principles.',
      deliverable: 'Visual mockups, color encoding rules, and hierarchy blueprints',
    },
    {
      num: '05',
      title: 'Dashboard Development in Tableau',
      icon: LayoutDashboard,
      summary:
        'Constructed the interactive Executive Dashboard in Tableau Desktop/Public, implementing parameterized filters, dynamic tooltips, calculated fields, and cross-highlighting actions.',
      deliverable: 'Published Tableau Public Executive Dashboard',
    },
    {
      num: '06',
      title: 'Story Creation & Narrative Flow',
      icon: BookOpen,
      summary:
        'Structured an analytical narrative walkthrough connecting market growth stages, battery engineering trade-offs, and pricing parity milestones into a cohesive storyline.',
      deliverable: 'Tableau Story walkthrough and domain synthesis chapters',
    },
    {
      num: '07',
      title: 'Web Integration & Responsive Embedding',
      icon: Code2,
      summary:
        'Developed this React/Vite web application with a premium dark theme, embedding Tableau visual frames using responsive containers, accessible navigation, and fallback mechanisms.',
      deliverable: 'Single-page responsive web platform ready for GitHub Pages hosting',
    },
    {
      num: '08',
      title: 'Testing & Documentation',
      icon: CheckCircle,
      summary:
        'Validated responsive layouts across desktop and mobile screens, tested Tableau iframe embed behavior, verified zero external broken dependencies, and authored comprehensive README instructions.',
      deliverable: 'Cross-browser validated codebase with GitHub Actions CI/CD workflow',
    },
  ];

  return (
    <section id="methodology" className="py-24 border-t border-slate-800 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
            Systematic Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Methodology & Project Execution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The end-to-end framework followed to transform raw automotive datasets into an executive data intelligence product.
          </p>
        </div>

        {/* 8-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-accent tracking-wider">
                      STEP {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/70">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1">
                    Deliverable:
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
