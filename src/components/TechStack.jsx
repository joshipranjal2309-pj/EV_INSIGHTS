import React from 'react';
import {
  Code,
  Zap,
  FileCode,
  Palette,
  BarChart3,
  GitBranch,
  Globe,
  Terminal,
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: 'React 19',
      role: 'UI Library & Component Architecture',
      category: 'Frontend Framework',
      description: 'Declarative component hierarchy managing responsive states, embedding wrappers, and interaction drawers.',
      icon: Code,
    },
    {
      name: 'Vite 8',
      role: 'Build Tool & Development Server',
      category: 'Build System',
      description: 'Lightning-fast ES-module dev server and highly optimized production bundler configured with relative asset paths for GitHub Pages.',
      icon: Zap,
    },
    {
      name: 'JavaScript (ES6+)',
      role: 'Client-Side Logic & Scripting',
      category: 'Programming Language',
      description: 'Clean modern JavaScript without TypeScript compilation overhead, fully compatible with standard static browser runtimes.',
      icon: Terminal,
    },
    {
      name: 'HTML5',
      role: 'Semantic Document Structure',
      category: 'Markup Standard',
      description: 'Accessible DOM landmarks, responsive viewport configurations, and OpenGraph/SEO metadata integration.',
      icon: FileCode,
    },
    {
      name: 'CSS3 & Tailwind CSS v4',
      role: 'Modern Utility Styling & Responsive Layouts',
      category: 'Styling Engine',
      description: 'Dynamic EV color engine featuring deep obsidian canvases, electric cyan & emerald accents, and multi-theme switcher.',
      icon: Palette,
    },
    {
      name: 'Tableau Public',
      role: 'Interactive Visual Analytics & BI Engine',
      category: 'BI & Analytics',
      description: 'Enterprise-grade executive dashboard and story points providing parameterized filtering, calculated fields, and interactive chart views.',
      icon: BarChart3,
    },
    {
      name: 'GitHub',
      role: 'Source Control & Collaboration Repository',
      category: 'Version Control',
      description: 'Structured repository tracking codebase commits, configuration files, and documentation releases.',
      icon: GitBranch,
    },
    {
      name: 'GitHub Pages & Actions',
      role: 'Continuous Deployment & Static Web Hosting',
      category: 'Deployment Infrastructure',
      description: 'Automated CI/CD pipeline deploying the production bundle directly to GitHub Pages with zero external hosting dependencies.',
      icon: Globe,
    },
  ];

  return (
    <section id="tech" className="py-24 border-t border-slate-800 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
            Architecture & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies Used
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A 100% serverless, static architecture engineered exclusively with open technologies and standard browser runtime capabilities.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-light transition-colors">
                    {tech.name}
                  </h3>

                  <div className="text-xs font-semibold text-accent/90 mb-3">
                    {tech.role}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Runtime:</span>
                  <span className="text-slate-300">Client-Side SPA</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Note Strip */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Zero External Server Dependency:</strong> This site uses no Node.js backend server, no Python or Streamlit runtime, and requires no third-party hosts like Render, Vercel, or Netlify. It builds and deploys directly from GitHub to GitHub Pages.
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-sec whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-accent-sec" />
            <span>GitHub Pages Compatible</span>
          </div>
        </div>

      </div>
    </section>
  );
}
