import React, { useState, useEffect, useRef } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { ExternalLink, RefreshCw, Maximize2, Minimize2, AlertCircle, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(820);
  const [reloadKey, setReloadKey] = useState(0);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 14000);

    return () => clearTimeout(timer);
  }, [isLoading, reloadKey]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setLoadError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  const handleReload = () => {
    setIsLoading(true);
    setLoadError(false);
    setReloadKey((prev) => prev + 1);
  };

  return (
    <section id="dashboard" className="py-20 border-t border-slate-800 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-2">
              <span>Interactive BI Visualization</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Tableau Public Embedded</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {TABLEAU_CONFIG.dashboard.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
              {TABLEAU_CONFIG.dashboard.description} Explore cross-filtered vehicle parameters, price tierings, and manufacturer distribution live.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center flex-wrap gap-2.5 shrink-0">
            <button
              onClick={handleReload}
              className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
              title="Reload Dashboard"
              aria-label="Reload Dashboard"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-accent' : ''}`} />
              <span>Reload</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="hidden sm:flex px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
              title={isFullscreen ? 'Exit Full Width' : 'Expand Full Width'}
              aria-label={isFullscreen ? 'Exit Full Width' : 'Expand Full Width'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Compact</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand</span>
                </>
              )}
            </button>

            <a
              href={TABLEAU_CONFIG.dashboard.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold btn-accent rounded-lg transition-all duration-150 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Height Presets & Status Strip */}
        <div className="flex items-center justify-between pb-3 text-xs text-slate-400 border-b border-slate-800/80 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-medium">Viewport Height:</span>
            {[
              { label: 'Standard (750px)', val: 750 },
              { label: 'Spacious (860px)', val: 860 },
              { label: 'Tall (1000px)', val: 1000 },
            ].map((preset) => (
              <button
                key={preset.val}
                onClick={() => setContainerHeight(preset.val)}
                className={`transition-colors cursor-pointer ${
                  containerHeight === preset.val
                    ? 'text-accent font-semibold underline underline-offset-4'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-sec" />
            <span>Tableau Public Official Host</span>
          </div>
        </div>

        {/* Embedding Frame Container */}
        <div
          className={`relative rounded-2xl bg-[#060911] border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
            isFullscreen ? 'fixed inset-4 z-50 bg-[#060911] border-accent p-2' : ''
          }`}
          style={{ height: isFullscreen ? 'calc(100vh - 2rem)' : `${containerHeight}px` }}
        >
          {isFullscreen && (
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setIsFullscreen(false)}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Exit Fullscreen</span>
              </button>
            </div>
          )}

          {/* Loading Indicator Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#060911]/95 backdrop-blur-sm p-6 text-center">
              <div
                className="w-12 h-12 rounded-full border-2 border-slate-700 border-t-accent animate-spin mb-4"
                style={{ borderTopColor: 'var(--accent)' }}
              />
              <div className="text-base font-semibold text-white">Loading Tableau Executive Dashboard...</div>
              <p className="text-xs text-slate-400 max-w-md mt-2">
                Connecting to Tableau Public CDN and preparing data visual elements. This typically takes 2–5 seconds on first load.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={TABLEAU_CONFIG.dashboard.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium text-accent hover:text-accent-light bg-accent-subtle border border-accent-border rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Open directly in Tableau</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setIsLoading(false)}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                  Dismiss Overlay
                </button>
              </div>
            </div>
          )}

          {/* Error Notice Fallback */}
          {loadError && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
              <AlertCircle className="w-10 h-10 text-amber-500 mb-3" />
              <div className="text-lg font-bold text-white">Embedded View Blocked by Browser</div>
              <p className="text-sm text-slate-300 max-w-lg mt-2 leading-relaxed">
                Some browser privacy settings or third-party cookie restrictions prevent Tableau Public iframes from loading directly. You can view the full dashboard directly on Tableau Public.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={TABLEAU_CONFIG.dashboard.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold btn-accent rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Open in Tableau Public (New Tab)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={handleReload}
                  className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Embedding</span>
                </button>
              </div>
            </div>
          )}

          {/* Embedded Tableau Iframe */}
          <iframe
            key={reloadKey}
            ref={iframeRef}
            src={TABLEAU_CONFIG.dashboard.embedUrl}
            title="Electric Vehicle Executive Performance Dashboard"
            className="w-full h-full border-0 rounded-2xl bg-white"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowFullScreen
            loading="eager"
          />
        </div>

        {/* Dashboard Navigation & Context Notes */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <span>Interactive filtering enabled: Click bars, scatter markers, or legends inside Tableau to cross-filter.</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span>Direct link:</span>
            <a
              href={TABLEAU_CONFIG.dashboard.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline flex items-center gap-1"
            >
              <span>public.tableau.com/.../EVExecutiveDashboard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
