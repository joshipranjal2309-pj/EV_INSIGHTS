import React, { useState, useEffect, useRef } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { THEME_PALETTES } from '../config/themes.js';
import { Menu, X, BarChart3, ChevronRight, Palette, Check } from 'lucide-react';

export default function Navbar({ currentTheme, onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteDropdownOpen, setPaletteDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const paletteRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'dashboard', 'story', 'features', 'methodology', 'tech'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setPaletteDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Story', href: '#story', id: 'story' },
    { name: 'Analytics', href: '#features', id: 'features' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'Tech Stack', href: '#tech', id: 'tech' },
  ];

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activePalette = THEME_PALETTES.find((p) => p.id === currentTheme) || THEME_PALETTES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#060911]/90 backdrop-blur-md border-slate-800 shadow-lg shadow-black/30'
          : 'bg-[#060911]/60 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 sm:gap-8">
          
          {/* Zone 1: Wordmark Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg btn-accent flex items-center justify-center shadow-accent-sm text-white transition-transform group-hover:scale-105">
              <BarChart3 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="group-hover:text-accent transition-colors">EV Insights</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activeSection === link.id
                    ? 'text-accent border-b-2 border-accent font-semibold'
                    : 'hover:text-white hover:border-b-2 hover:border-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme Palette Selector + Primary CTA) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Palette Switcher Button */}
            <div className="relative" ref={paletteRef}>
              <button
                type="button"
                onClick={() => setPaletteDropdownOpen(!paletteDropdownOpen)}
                className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500"
                title="Switch Theme Color Palette"
                aria-label="Switch Theme Color Palette"
              >
                <div
                  className="w-3.5 h-3.5 rounded-full shadow-inner"
                  style={{ background: `linear-gradient(135deg, ${activePalette.primary}, ${activePalette.secondary})` }}
                />
                <span className="hidden md:inline font-mono text-[11px]">{activePalette.name}</span>
                <Palette className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Palette Dropdown Menu */}
              {paletteDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#0c121e] border border-slate-700 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1">
                    Select Color Palette
                  </div>
                  <div className="space-y-1">
                    {THEME_PALETTES.map((palette) => (
                      <button
                        key={palette.id}
                        onClick={() => {
                          onThemeChange(palette.id);
                          setPaletteDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors cursor-pointer text-left ${
                          currentTheme === palette.id
                            ? 'bg-slate-800/90 text-white font-medium'
                            : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-4 h-4 rounded-full shadow-sm shrink-0"
                            style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})` }}
                          />
                          <div>
                            <div className="font-semibold text-xs leading-none">{palette.name}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{palette.subtitle}</div>
                          </div>
                        </div>
                        {currentTheme === palette.id && (
                          <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <a
              href="#dashboard"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#dashboard');
              }}
              className="px-4 py-2 text-xs font-semibold btn-accent rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Quick Mobile Palette Toggle */}
            <button
              onClick={() => {
                const currentIndex = THEME_PALETTES.findIndex((p) => p.id === currentTheme);
                const nextIndex = (currentIndex + 1) % THEME_PALETTES.length;
                onThemeChange(THEME_PALETTES[nextIndex].id);
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              title="Toggle Palette"
              aria-label="Toggle Palette"
            >
              <div
                className="w-3.5 h-3.5 rounded-full"
                style={{ background: `linear-gradient(135deg, ${activePalette.primary}, ${activePalette.secondary})` }}
              />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0a0f1a]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-slate-800/80 text-accent font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Palette Selector on Mobile */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">Color Palette</div>
            <div className="grid grid-cols-2 gap-2">
              {THEME_PALETTES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onThemeChange(p.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    currentTheme === p.id
                      ? 'border-accent bg-slate-900 text-white'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.secondary})` }}
                  />
                  <span className="truncate">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#dashboard"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#dashboard');
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold btn-accent rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
