import React, { useState } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import {
  ExternalLink,
  Settings,
  TrendingUp,
  Battery,
  DollarSign,
  Gauge,
  Building2,
  Check,
  Info,
  Play,
} from 'lucide-react';

export default function Story() {
  const [customStoryUrl, setCustomStoryUrl] = useState('');
  const [activeStoryEmbed, setActiveStoryEmbed] = useState(TABLEAU_CONFIG.story.embedUrl || '');
  const [activeStoryDirect, setActiveStoryDirect] = useState(TABLEAU_CONFIG.story.directUrl || '');
  const [showConfigHelper, setShowConfigHelper] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);

  const handleApplyStoryUrl = (e) => {
    e.preventDefault();
    if (!customStoryUrl.trim()) return;

    let cleanUrl = customStoryUrl.trim();
    let embedUrl = cleanUrl;

    if (cleanUrl.includes('/app/profile/')) {
      const match = cleanUrl.match(/\/viz\/([^?]+)/);
      if (match && match[1]) {
        embedUrl = `https://public.tableau.com/views/${match[1]}?:showVizHome=no&:embed=true&:toolbar=yes`;
      }
    } else if (!cleanUrl.includes('?:showVizHome=no')) {
      embedUrl = `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}:showVizHome=no&:embed=true&:toolbar=yes`;
    }

    setActiveStoryEmbed(embedUrl);
    setActiveStoryDirect(cleanUrl);
  };

  const copyConfigFilePath = () => {
    navigator.clipboard?.writeText('src/config/tableau.js');
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2500);
  };

  const storyInsights = [
    {
      id: 'growth',
      num: '01',
      title: 'Market Growth & Global EV Penetration',
      icon: TrendingUp,
      narrative:
        'Electric vehicle registrations have transitioned from an early-adopter niche into mainstream volume production. Policy mandates across the European Union (Fit for 55), US federal emissions guidelines, and China’s dual-credit mandates have accelerated compound annual growth rates across passenger and commercial fleets.',
      takeaways: [
        'Rapid transition from government subsidies to organic market demand',
        'Regulatory fleet emission penalties driving accelerated OEM electrification',
        'Emergence of dedicated EV-only platforms replacing retrofitted ICE architectures',
      ],
    },
    {
      id: 'oem',
      num: '02',
      title: 'Manufacturer Landscape & OEM Competition',
      icon: Building2,
      narrative:
        'The automotive landscape exhibits dual competition: pure-play EV pioneers who established early battery software and vertical integration advantages, competing against century-old incumbent OEMs executing multi-billion-dollar platform overhauls and global supplier realignments.',
      takeaways: [
        'Legacy manufacturers ramping localized battery gigafactory joint ventures',
        'Pure EV entrants maintaining initial software, OTA architecture, and margin leads',
        'Market share consolidation occurring across high-volume compact and crossover segments',
      ],
    },
    {
      id: 'battery',
      num: '03',
      title: 'Battery Chemistry & Energy Density Evolution',
      icon: Battery,
      narrative:
        'Battery pack cost and energy density remain the core competitive determinants. While high-nickel NMC/NCA chemistries dominate premium long-range tiers, Lithium Iron Phosphate (LFP) has captured significant share in entry-level vehicles due to lower thermal runaway risk, cobalt-free sourcing, and superior cycle life.',
      takeaways: [
        'LFP chemistry adoption expanding for urban and standard-range models',
        'Cell-to-pack (CTP) and cell-to-chassis structural packaging boosting volumetric efficiency',
        'Active thermal management (liquid cooling/heat pumps) becoming standard for cold climates',
      ],
    },
    {
      id: 'pricing',
      num: '04',
      title: 'Vehicle Pricing & Total Cost of Ownership (TCO)',
      icon: DollarSign,
      narrative:
        'While initial sticker prices for battery electric vehicles historically commanded a substantial premium, total cost of ownership achieves parity faster through reduced fuel and maintenance expenses. Cell cost deflation toward the $100/kWh threshold is closing the upfront acquisition gap.',
      takeaways: [
        'Electricity per mile expenses typically 50% to 70% lower than gasoline counterparts',
        'Significantly lower moving-part counts reduce long-term mechanical maintenance',
        'Residual values and battery health diagnostics emerging as key resale factors',
      ],
    },
    {
      id: 'range',
      num: '05',
      title: 'Driving Range & Fast-Charging Network Dynamics',
      icon: Gauge,
      narrative:
        'Consumer range anxiety has steadily transformed into charging speed and network reliability scrutiny. Modern EV models increasingly cluster between 220 and 350 miles of rated range, shifting the frontier toward 800V architectures and high-power DC fast-charging (150kW to 350kW) capable of 10%–80% replenishment in under 20 minutes.',
      takeaways: [
        'Average median vehicle range has doubled over the past decade',
        'High-voltage 800V architectures decreasing charge times and copper cable weight',
        'Standardization around universal charging connectors (NACS / CCS) expanding access',
      ],
    },
  ];

  const hasConfiguredStory = Boolean(activeStoryEmbed && activeStoryEmbed.trim().length > 0);

  return (
    <section id="story" className="py-24 border-t border-slate-800 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
              <span>Interactive Storytelling</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Tableau Story Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EV Market Story & Analytical Chapters
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
              A structured analytical narrative guiding you through market expansion phases, technology pivots, and manufacturer strategic shifts.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            {hasConfiguredStory ? (
              <a
                href={activeStoryDirect || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold btn-accent rounded-lg transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Open Published Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => setShowConfigHelper(!showConfigHelper)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <Settings className="w-3.5 h-3.5 text-accent" />
                <span>Configure Story Link</span>
              </button>
            )}
          </div>
        </div>

        {/* Embedded Tableau Story or Configuration Banner */}
        {hasConfigStoryContent(hasConfiguredStory, activeStoryEmbed, customStoryUrl, setCustomStoryUrl, handleApplyStoryUrl, copyConfigFilePath, copiedPath)}

        {/* Story Insight Chapters */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 gap-2">
            <span className="font-semibold text-white text-sm">Key Analytical Story Chapters</span>
            <span className="text-slate-400 italic">
              Synthesized automotive industry insights supporting the Tableau visualizations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyInsights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div
                  key={insight.id}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-accent">
                        CHAPTER {insight.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {insight.narrative}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/70 space-y-2">
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Key Takeaways:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {insight.takeaways.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent font-bold shrink-0 mt-0.5">·</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodological Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Analytical Distinction:</strong> The narrative chapters above provide industry background and conceptual frameworks for evaluating electric vehicle trends. Direct empirical numbers, interactive distributions, and live manufacturer filters are rendered inside the published Tableau Public Dashboard in Section 3.
          </p>
        </div>

      </div>
    </section>
  );
}

function hasConfigStoryContent(hasConfiguredStory, activeStoryEmbed, customStoryUrl, setCustomStoryUrl, handleApplyStoryUrl, copyConfigFilePath, copiedPath) {
  if (hasConfiguredStory) {
    return (
      <div className="mb-16">
        <div className="rounded-2xl bg-[#060911] border border-slate-800 shadow-2xl overflow-hidden h-[720px]">
          <iframe
            src={activeStoryEmbed}
            title="Tableau EV Market Story"
            className="w-full h-full border-0 bg-white"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0a0f1a] to-slate-950 border border-slate-800 p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
            <Info className="w-4 h-4 text-accent" />
            <span>Tableau Story Connection Ready</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Connect Your Published Tableau Story
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your Tableau Executive Dashboard is already live in the section above. When you publish your Tableau Story to Tableau Public, you can easily embed it here by updating the configuration setting or pasting the link below to preview instantly.
          </p>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
            <div className="font-semibold text-slate-200">How to configure permanently in code:</div>
            <div className="text-slate-400">
              Open{' '}
              <code className="text-accent-light font-mono bg-slate-900 px-1.5 py-0.5 rounded">
                src/config/tableau.js
              </code>{' '}
              and paste your published Story URL into <code className="text-accent-light font-mono">story.directUrl</code>:
            </div>
            <pre className="p-2.5 rounded bg-slate-900 text-slate-300 font-mono text-[11px] overflow-x-auto">
{`story: {
  title: 'EV Market Growth & Technology Transition Story',
  directUrl: 'https://public.tableau.com/app/profile/.../your-story-name',
  embedUrl: 'https://public.tableau.com/views/.../your-story-name?:showVizHome=no&:embed=true',
}`}
            </pre>
            <div className="pt-1">
              <button
                onClick={copyConfigFilePath}
                className="text-accent hover:text-accent-light font-mono text-xs flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                {copiedPath ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                <span>{copiedPath ? 'Path copied to clipboard!' : 'Copy config file path'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Tester Form */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="text-sm font-semibold text-white mb-2 flex items-center gap-1.5">
            <Play className="w-3.5 h-3.5 text-accent" />
            <span>Test Story URL Live</span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Paste any Tableau Public story link to preview it in this frame right now:
          </p>
          <form onSubmit={handleApplyStoryUrl} className="space-y-3">
            <input
              type="url"
              value={customStoryUrl}
              onChange={(e) => setCustomStoryUrl(e.target.value)}
              placeholder="https://public.tableau.com/..."
              className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={!customStoryUrl.trim()}
                className="w-full py-2 px-3 text-xs font-semibold btn-accent disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors cursor-pointer"
              >
                Preview Story Live
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
