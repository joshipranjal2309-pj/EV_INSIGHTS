import React from 'react';
import { Compass, Sparkles, BarChart2, Globe2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'What the Project Analyzes',
      icon: BarChart2,
      description:
        'This analytics platform examines the multi-dimensional landscape of the electric vehicle industry. It synthesizes manufacturer sales volumes, OEM market concentration, vehicle pricing distribution (MSRP across segments), battery pack capacities (kWh), and rated driving ranges to provide a transparent overview of the transition to electrified transport.',
      tags: ['Sales Volumes', 'Pricing Spectra', 'Battery Capacities', 'Range Benchmarks'],
    },
    {
      title: 'Why EV Market Analysis Matters',
      icon: Globe2,
      description:
        'As global regulatory frameworks enforce strict fleet emission targets and net-zero commitments, analyzing the EV market is essential for policymakers, automotive engineers, supply chain planners, and consumers. Understanding adoption velocity, raw material exposure, and charging ecosystem readiness clarifies where infrastructure investments are most urgent.',
      tags: ['Decarbonization Mandates', 'Battery Supply Chain', 'Grid Preparedness', 'Consumer Parity'],
    },
    {
      title: 'The Purpose of Data Visualization',
      icon: Sparkles,
      description:
        'Raw automotive spreadsheets contain tens of thousands of complex data points across engine classifications, battery chemistries, and trim levels. Interactive data visualization transforms this statistical noise into intuitive visual patterns—revealing market frontiers, efficiency outliers, and technological inflection points.',
      tags: ['Pattern Discovery', 'Multivariate Synthesis', 'Executive Clarity', 'Interactive Filtering'],
    },
    {
      title: 'How It Helps Explore Market Patterns',
      icon: Compass,
      description:
        'By combining Tableau Public with this web platform, users can explore cross-dimensional correlations: how battery pack size directly governs vehicle pricing, how vehicle curb weight impacts real-world efficiency, and how regional market shares vary across legacy OEMs versus pure-play EV manufacturers.',
      tags: ['Price vs Range Frontier', 'OEM Benchmarking', 'Regional Penetration', 'Efficiency Tradeoffs'],
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
            Project Overview & Rationale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Understanding the Electric Vehicle Revolution Through Data
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Electric Vehicle Market Performance & Insights is an academic data intelligence initiative designed to evaluate the operational and commercial forces driving electric mobility.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 hover:border-slate-700/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent-border flex items-center justify-center text-accent group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Quiet unboxed metadata tags */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-400 font-medium">Focus:</span>
                  {pillar.tags.map((tag, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tag}</span>
                      {tIdx < pillar.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-slate-900/80 via-[#0a0f1a] to-slate-900/80 border border-slate-800 p-6 flex flex-col sm:flex-row items-start sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white">
              Data Visualizations Powered by Tableau Public
            </div>
            <div className="text-xs text-slate-400">
              Interactive calculations, parameterized views, and published dashboards embedded directly in this platform.
            </div>
          </div>
          <a
            href="#dashboard"
            className="px-4 py-2 text-xs font-semibold text-accent hover:text-white bg-accent-subtle hover:bg-slate-800 border border-accent-border rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Jump to Executive Dashboard &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
