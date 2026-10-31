/**
 * Tableau Public Integration Configuration
 * 
 * Edit this file to update your Tableau Dashboard or configure your Tableau Story link.
 * 
 * Instructions:
 * 1. Your published Tableau Dashboard URL is already configured below.
 * 2. When your Tableau Story is published, paste its URL into `storyUrl`.
 *    For example:
 *    storyUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Story/.../EVMarketStory'
 */

export const TABLEAU_CONFIG = {
  // Published Tableau Executive Dashboard
  dashboard: {
    title: 'EV Market Executive Performance Dashboard',
    description: 'An executive view tracking global EV sales volume, market share breakdown, price trajectories, and driving range metrics.',
    // The public link for visitors to open the viz in Tableau Public
    directUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?publish=yes',
    // The clean view URL used for embedded visual frames and Tableau Embedding API
    embedUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?:showVizHome=no&:embed=true&:toolbar=yes',
  },

  // Tableau Story Configuration
  story: {
    title: 'EV Market Growth & Technology Transition Story',
    description: 'A curated analytical walkthrough examining market expansion stages, battery capacity inflections, and manufacturer strategies.',
    // Set your published Tableau Story URL below when available.
    // If empty (''), the website displays an interactive preview connector with full instructions.
    directUrl: '',
    embedUrl: '',
  },
};
