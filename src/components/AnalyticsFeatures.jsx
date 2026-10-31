import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Globe2,
  BatteryCharging,
  Gauge,
  Factory,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function AnalyticsFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const features = [
    {
      id: 'manufacturer-sales',
      title: 'Manufacturer Sales Analysis',
      category: 'market',
      icon: TrendingUp,
      purpose:
        'Evaluates registration volumes, quarter-over-quarter deliveries, and market concentration across global automotive manufacturers.',
      metricsAnalyzed: ['Quarterly unit registrations', 'YoY market share velocity', 'Segment concentration (Sedan vs SUV)'],
      tableauViewHint: 'Executive Sales & Volume Tab',
      deepDive: {
        analyticalObjective:
          'Quantify how market shares shift as legacy OEMs scale volume manufacturing of dedicated EV platforms while pure EV pioneers defend premium and mass segments.',
        keyVariables: ['OEM / Brand Name', 'Delivery Units', 'Registration Period', 'Vehicle Category'],
        visualizationTechnique: 'Time-series area charts and comparative bar rankings with cumulative percentage lines.',
        decisionRelevance:
          'Enables supply chain planners to anticipate component demand and OEM commercial viability.',
      },
    },
    {
      id: 'ev-pricing',
      title: 'EV Pricing Comparison',
      category: 'economics',
      icon: DollarSign,
      purpose:
        'Benchmarks manufacturer suggested retail prices (MSRP) across vehicle classes, trim levels, and regional subsidies to identify price parity thresholds.',
      metricsAnalyzed: ['Base MSRP vs Top Trim MSRP', 'Price per kWh of battery capacity', 'Segment median affordability'],
      tableauViewHint: 'Pricing Spectrum & Affordability Matrix',
      deepDive: {
        analyticalObjective:
          'Measure the price premium of electric vehicles relative to equivalent internal combustion vehicles and track the downward pressure from manufacturing efficiencies.',
        keyVariables: ['Base MSRP ($USD)', 'Trim Level', 'Battery Pack Size (kWh)', 'Vehicle Segment'],
        visualizationTechnique: 'Box-and-whisker plots showing price dispersion and scatter plots of MSRP against battery capacity.',
        decisionRelevance:
          'Allows market analysts to pinpoint the exact pricing corridors where EV sales accelerate exponentially.',
      },
    },
    {
      id: 'country-distribution',
      title: 'Country-wise EV Distribution',
      category: 'market',
      icon: Globe2,
      purpose:
        'Maps regional adoption rates, geographic penetration density, and public charging infrastructure readiness across sovereign automotive markets.',
      metricsAnalyzed: ['National EV market share %', 'Fast-chargers per 1,000 EVs', 'Regional policy incentives'],
      tableauViewHint: 'Geographic Density & Country Map',
      deepDive: {
        analyticalObjective:
          'Uncover how national subsidies, zero-emission mandates, and charging network investments shape regional adoption discrepancies.',
        keyVariables: ['Country / Territory', 'Total Fleet Size', 'Public Charging Points', 'Incentive Structure'],
        visualizationTechnique: 'Choropleth geographic maps paired with bivariate distribution scatter matrices.',
        decisionRelevance:
          'Critical for energy utilities modeling electrical distribution grid loads and international OEMs prioritizing export markets.',
      },
    },
    {
      id: 'battery-capacity',
      title: 'Battery Capacity Analysis',
      category: 'tech',
      icon: BatteryCharging,
      purpose:
        'Analyzes gross vs usable kilowatt-hour (kWh) pack capacities, volumetric energy densities, and chemical architectures across production models.',
      metricsAnalyzed: ['Gross pack capacity (kWh)', 'Pack chemistry (NMC vs LFP)', 'Specific energy density (Wh/kg)'],
      tableauViewHint: 'Battery Architecture Breakdown',
      deepDive: {
        analyticalObjective:
          'Assess the trajectory of pack sizing, evaluating whether automakers are installing oversized packs or optimizing aerodynamic efficiency to hit target ranges.',
        keyVariables: ['Battery Pack (kWh)', 'Usable Capacity (%)', 'Cathode Chemistry', 'Thermal Management System'],
        visualizationTechnique: 'Histogram distributions of pack sizes and grouped bar comparisons by model year.',
        decisionRelevance:
          'Guides battery materials suppliers forecasting lithium, nickel, cobalt, and graphite demand volumes.',
      },
    },
    {
      id: 'driving-range',
      title: 'Driving Range Comparison',
      category: 'tech',
      icon: Gauge,
      purpose:
        'Compares certified cycle ratings (EPA vs WLTP) and real-world highway range performance to analyze how aerodynamic drag and pack capacity correlate.',
      metricsAnalyzed: ['EPA rated range (miles)', 'WLTP rated range (km)', 'Range per kWh efficiency index'],
      tableauViewHint: 'Range vs Battery Capacity Frontier',
      deepDive: {
        analyticalObjective:
          'Model the empirical frontier of range-to-capacity efficiency, identifying standout aerodynamic designs that achieve high range with smaller, lighter battery packs.',
        keyVariables: ['Rated Range (mi/km)', 'Curb Weight (kg/lbs)', 'Drag Coefficient (Cd)', 'Battery Capacity (kWh)'],
        visualizationTechnique: 'Linear regression scatter plots with trend lines and outlier highlights.',
        decisionRelevance:
          'Helps automotive designers optimize weight, battery chemistry, and aerodynamics for real-world travel needs.',
      },
    },
    {
      id: 'manufacturer-distribution',
      title: 'Manufacturer Distribution',
      category: 'market',
      icon: Factory,
      purpose:
        'Examines OEM production footprints, platform consolidation (dedicated vs multi-energy architectures), and model variety offerings across brands.',
      metricsAnalyzed: ['Model count per OEM', 'Platform sharing index', 'Pure-play EV vs Legacy OEM ratio'],
      tableauViewHint: 'OEM Model Portfolio Matrix',
      deepDive: {
        analyticalObjective:
          'Evaluate portfolio breadth to see which manufacturers offer diverse models across segments (hatchback, sedan, crossover, pickup) versus concentrated single-model lines.',
        keyVariables: ['Automaker Group', 'Unique Nameplates', 'Body Style Classifications', 'Manufacturing Hubs'],
        visualizationTechnique: 'Hierarchical tree maps and multi-level sunburst diagrams showing parent corporate groups and subordinate marques.',
        decisionRelevance:
          'Informs investors and dealership groups on pipeline diversification and brand exposure risk.',
      },
    },
    {
      id: 'ev-efficiency',
      title: 'EV Efficiency Analysis',
      category: 'economics',
      icon: Zap,
      purpose:
        'Calculates electrical consumption rates (Wh/km and MPGe), inverter efficiency, and thermal losses to reveal true operational economy.',
      metricsAnalyzed: ['Wh per km consumption', 'MPGe combined rating', 'Cold-weather thermal range penalty'],
      tableauViewHint: 'Powertrain Efficiency Scatter',
      deepDive: {
        analyticalObjective:
          'Establish the true energy efficiency of the electric powertrain, demonstrating which vehicles maximize miles traveled per kilowatt-hour consumed.',
        keyVariables: ['Consumption (kWh/100km)', 'MPGe Combined', 'Motor Architecture (Permanent Magnet vs Induction)', 'Heat Pump Equipped (Y/N)'],
        visualizationTechnique: 'Pareto efficiency frontiers and comparative radar charts across powertrain classes.',
        decisionRelevance:
          'Enables commercial fleet operators to calculate lowest lifecycle cost per operating mile.',
      },
    },
  ];

  const filteredFeatures =
    activeCategory === 'all'
      ? features
      : features.filter((f) => f.category === activeCategory);

  const scrollToDashboard = () => {
    const el = document.querySelector('#dashboard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="py-24 border-t border-slate-800 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
              <span>Domain Capabilities</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>7 Specialized Analytics Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Analytics Feature Suite
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Detailed breakdown of the core analytical lenses implemented in our project and visualized through Tableau Public.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            {[
              { id: 'all', label: 'All Modules' },
              { id: 'market', label: 'Market & OEM' },
              { id: 'tech', label: 'Battery & Range' },
              { id: 'economics', label: 'Price & Efficiency' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-slate-800 text-accent font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-accent-border hover:bg-slate-900/70 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-accent group-hover:scale-105 group-hover:text-accent-light transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.category === 'market' ? 'Market Lens' : item.category === 'tech' ? 'Engineering Lens' : 'Economics Lens'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-accent-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.purpose}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                      Analyzed Parameters:
                    </div>
                    <div className="space-y-1 text-xs text-slate-300">
                      {item.metricsAnalyzed.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="truncate">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedFeature(item)}
                    className="text-xs font-semibold text-accent hover:text-accent-light flex items-center gap-1 cursor-pointer focus:outline-none"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={scrollToDashboard}
                    className="text-[11px] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    title="Jump to live Tableau Dashboard"
                  >
                    {item.tableauViewHint}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Deep-Dive Drawer for Selected Feature */}
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="w-full max-w-2xl rounded-2xl bg-[#0a0f1a] border border-slate-700 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent-border text-accent flex items-center justify-center">
                  <selectedFeature.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-accent uppercase tracking-wider">
                    Analytics Specification
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">
                    Analytical Objective
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedFeature.deepDive.analyticalObjective}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Key Dataset Dimensions
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {selectedFeature.deepDive.keyVariables.map((v, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-sec shrink-0" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Visualization Pattern
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedFeature.deepDive.visualizationTechnique}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">
                    Practical Decision Relevance
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectedFeature.deepDive.decisionRelevance}
                  </p>
                </div>
              </div>

              {/* Action buttons inside drawer */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Associated Tableau View: <strong className="text-slate-200">{selectedFeature.tableauViewHint}</strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={scrollToDashboard}
                    className="px-4 py-2 text-xs font-semibold btn-accent rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>View in Tableau Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
