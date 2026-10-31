import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Story from './components/Story.jsx';
import AnalyticsFeatures from './components/AnalyticsFeatures.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ev_insights_theme') || 'cyan';
    }
    return 'cyan';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ev_insights_theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navigation with Palette Switcher */}
      <Navbar currentTheme={theme} onThemeChange={handleThemeChange} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
