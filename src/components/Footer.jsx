import React from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { ArrowUp, BarChart3, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Story', href: '#story' },
    { name: 'Analytics Features', href: '#features' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Tech Stack', href: '#tech' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#04060d] text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Academic Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg btn-accent flex items-center justify-center text-white shadow-accent-sm">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span>EV Insights</span>
            </div>

            <div className="text-sm font-medium text-slate-200">
              Electric Vehicle Market Performance & Insights
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An executive data analytics platform examining global electric vehicle market performance, battery pack technological advancements, vehicle pricing dynamics, and driving range distributions.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              College Capstone & Academic Portfolio Project
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-300 tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Project Links & GitHub */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase text-slate-300 tracking-wider">
              Project Links
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <a
                  href={TABLEAU_CONFIG.dashboard.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light transition-colors"
                >
                  <span>Tableau Public Published Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {TABLEAU_CONFIG.story.directUrl && (
                <div>
                  <a
                    href={TABLEAU_CONFIG.story.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light transition-colors"
                  >
                    <span>Tableau Public Published Story</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="pt-2">
                <div className="text-slate-400 mb-1">GitHub Repository & Deployment:</div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex-1 truncate">
                    Hosted directly on GitHub Pages
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} EV Insights. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
}
