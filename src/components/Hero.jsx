import React from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { ArrowDown, BatteryCharging, Zap, Gauge, Layers, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle ambient lighting gradients using dynamic CSS variable glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] blur-[140px] rounded-full pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: 'var(--accent-glow)' }}
      />
      <div
        className="absolute top-1/3 -left-20 w-[400px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-40 transition-colors duration-500"
        style={{ backgroundColor: 'var(--accent-sec)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title, Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context line with clean typographic separators (Zero-Pill compliant) */}
            <div className="flex items-center gap-2 text-xs font-medium text-accent tracking-wider uppercase font-mono">
              <span>Executive Analytics</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Automotive Intelligence</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Tableau Public</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl text-balance">
                Electric Vehicle Market Performance & Insights
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                A data-driven analytics platform exploring global EV adoption trajectories, manufacturer performance benchmarks, battery pack advancements, vehicle pricing dynamics, and real-world driving range distributions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('#dashboard')}
                className="px-6 py-3 text-sm font-semibold btn-accent rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Dashboard</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#story')}
                className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span>Explore Story</span>
                <Layers className="w-4 h-4 text-accent" />
              </button>

              <a
                href={TABLEAU_CONFIG.dashboard.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-accent-light transition-colors flex items-center gap-1.5 focus:outline-none focus:underline"
              >
                <span>Tableau Direct View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Analytical Metadata Footprint */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Core Dimensions:</span>
              <span>OEM Sales Volume</span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span>MSRP Price Tiers</span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span>Battery Chemistry</span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span>Range vs Capacity</span>
            </div>
          </div>

          {/* Right Column: High-tech EV Powertrain & Telemetry Vector Art */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1a] border border-slate-800 p-6 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Header inside schematic card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                    EV Platform Architecture
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">Telemetry & Model Specs</span>
              </div>

              {/* Vector Powertrain Diagram */}
              <div className="py-6 flex justify-center">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full max-w-[380px] h-auto drop-shadow-md"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Vehicle chassis outline */}
                  <rect x="30" y="30" width="340" height="180" rx="28" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Wheel assemblies */}
                  <rect x="50" y="16" width="36" height="24" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                  <rect x="314" y="16" width="36" height="24" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                  <rect x="50" y="200" width="36" height="24" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                  <rect x="314" y="200" width="36" height="24" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />

                  {/* Main skateboard battery pack with dynamic accent stroke */}
                  <rect x="110" y="55" width="180" height="130" rx="14" fill="#0f172a" stroke="var(--accent)" strokeWidth="2" />
                  <rect x="120" y="65" width="160" height="110" rx="8" fill="#1e293b" fillOpacity="0.4" stroke="var(--accent-sec)" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Battery cell modules */}
                  {[0, 1, 2, 3].map((row) => (
                    <g key={row}>
                      {[0, 1, 2, 3, 4].map((col) => (
                        <rect
                          key={col}
                          x={130 + col * 28}
                          y={75 + row * 24}
                          width="20"
                          height="16"
                          rx="3"
                          fill="#334155"
                          className="hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </g>
                  ))}

                  {/* Front Motor / Inverter */}
                  <circle cx="70" cy="120" r="22" fill="#1e293b" stroke="var(--accent)" strokeWidth="2" />
                  <path d="M62 120H78M70 112V128" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" />

                  {/* Rear Motor */}
                  <circle cx="330" cy="120" r="22" fill="#1e293b" stroke="var(--accent)" strokeWidth="2" />
                  <path d="M322 120H338M330 112V128" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" />

                  {/* High voltage bus lines */}
                  <path d="M92 120H110" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M290 120H308" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />

                  {/* Fast Charging port node */}
                  <circle cx="200" cy="30" r="8" fill="var(--accent)" stroke="#ffffff" strokeWidth="2" />
                  <path d="M198 26L195 31H202L201 35" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Architectural telemetry metrics below diagram */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-center font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-accent" />
                    <span>Chemistry</span>
                  </div>
                  <div className="text-sm font-semibold text-white">NMC / LFP</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <Zap className="w-3.5 h-3.5 text-accent-sec" />
                    <span>Voltage</span>
                  </div>
                  <div className="text-sm font-semibold text-white">400V - 800V</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-1">
                    <Gauge className="w-3.5 h-3.5 text-accent" />
                    <span>Efficiency</span>
                  </div>
                  <div className="text-sm font-semibold text-white">kWh / 100km</div>
                </div>
              </div>

              {/* Bottom caption */}
              <div className="mt-4 text-[11px] text-slate-400 text-center leading-normal">
                Analysis focuses on battery capacity curves, vehicle curb weight, aerodynamic efficiency, and total cost of ownership.
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Anchor Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Market Scope</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">Global OEM</div>
            <div className="text-xs text-slate-400 mt-1">Multi-market sales and registrations</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Battery Sizing</div>
            <div className="text-xl sm:text-2xl font-bold text-accent font-mono tabular-nums">30 - 120+ kWh</div>
            <div className="text-xs text-slate-400 mt-1">Pack capacity & density benchmarks</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Driving Range</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">150 - 500+ mi</div>
            <div className="text-xs text-slate-400 mt-1">Real-world vs EPA/WLTP cycle variance</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Visualization</div>
            <div className="text-xl sm:text-2xl font-bold text-accent-sec font-mono tabular-nums">Tableau BI</div>
            <div className="text-xs text-slate-400 mt-1">Interactive dashboards & story walkthrough</div>
          </div>
        </div>

      </div>
    </section>
  );
}
