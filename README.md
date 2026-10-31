# EV Insights — Electric Vehicle Market Performance & Insights

An executive data analytics platform and portfolio website analyzing the global transition toward electric mobility. This platform synthesizes manufacturer sales volumes, market concentration, battery pack technology, vehicle pricing dynamics, and real-world driving range distributions, featuring embedded interactive visualizations powered by Tableau Public.

---

## 1. Project Overview

- **Project Title:** Electric Vehicle Market Performance & Insights
- **Platform Name:** EV Insights
- **Target Audience:** College project evaluation, data analytics portfolio, executive demonstrations, and engineering review
- **Core Visualization Engine:** Tableau Public (Interactive Executive Dashboard & Story Points)
- **Deployment Platform:** GitHub Pages (100% static, automated CI/CD via GitHub Actions)
- **Architecture:** Zero-server client-side SPA (No Python, Flask, Streamlit, or third-party cloud hosting required)

---

## 2. Key Features

- **Embedded Executive Dashboard:** Live responsive embedding of the published Tableau Public dashboard with loading spinners, viewport height controls, full-width mode, and direct link options.
- **Tableau Story Integration:** Dedicated Story section with ready-to-use configuration, in-browser live URL tester, and 5 structured analytical chapters.
- **7 Specialized Analytics Modules:**
  1. *Manufacturer Sales Analysis* (Registration volumes, market share velocity, segment mix)
  2. *EV Pricing Comparison* (Base vs top-trim MSRP, price per kWh, subsidy impacts)
  3. *Country-wise EV Distribution* (National penetration, charging infrastructure density)
  4. *Battery Capacity Analysis* (Gross vs usable kWh, NMC vs LFP chemistries, energy density)
  5. *Driving Range Comparison* (EPA vs WLTP ratings, aerodynamic efficiency frontiers)
  6. *Manufacturer Distribution* (Dedicated EV platforms vs multi-energy architectures)
  7. *EV Efficiency Analysis* (Wh/km consumption, MPGe benchmarks, thermal losses)
- **8-Stage Analytics Methodology:** Transparent walkthrough from raw data collection to cross-browser validation and documentation.
- **Premium Dark UI / UX:** Deep charcoal palette (`#090d16`), electric orange/amber accents, responsive navigation, zero-pill metadata typography, and keyboard accessibility.
- **100% Client-Side:** Engineered without backend servers or paid APIs, ensuring zero hosting costs and indefinite availability on GitHub Pages.

---

## 3. Technologies Used

| Technology | Role in Project |
| :--- | :--- |
| **React 19** | Declarative component hierarchy and dynamic state management |
| **Vite 8** | Next-generation build tool configured with relative base paths (`./`) |
| **JavaScript (ES6+)** | Pure modern JavaScript without TypeScript compilation overhead |
| **HTML5** | Semantic landmarks, responsive viewports, and OpenGraph SEO cards |
| **Tailwind CSS v4** | Dark theme styling, fluid grids, and custom typography |
| **Lucide Icons** | Domain-consistent, lightweight vector icons |
| **Tableau Public** | Interactive business intelligence charts, filters, and calculation fields |
| **GitHub Actions** | Automated CI/CD pipeline triggered on push to `main` |
| **GitHub Pages** | High-availability static web hosting directly from GitHub |

---

## 4. Project Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   └── favicon.svg             # Custom EV electric bolt SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive header adhering to 3-zone contract
│   │   ├── Hero.jsx            # Project intro, CTAs, EV powertrain schematic
│   │   ├── About.jsx           # Rationale, purpose, and pattern exploration
│   │   ├── Dashboard.jsx       # Tableau Public responsive embed & controls
│   │   ├── Story.jsx           # Tableau Story frame, URL tester & chapters
│   │   ├── AnalyticsFeatures.jsx # 7 analytical capability cards & deep-dive drawer
│   │   ├── Methodology.jsx     # 8-stage data pipeline workflow
│   │   ├── TechStack.jsx       # Verified technology badges
│   │   └── Footer.jsx          # Navigation links, repo notice & back-to-top
│   ├── config/
│   │   └── tableau.js          # Central configuration for Dashboard and Story URLs
│   ├── App.jsx                 # Master application layout
│   ├── main.jsx                # React root mount entry point
│   └── index.css               # Tailwind CSS v4 directives & typography rules
├── index.html                  # HTML5 document with Tableau Embedding API v3
├── package.json                # Project dependencies and build scripts
├── vite.config.js              # Vite configuration with relative base path
└── README.md                   # Comprehensive documentation
```

---

## 5. Local Installation & Development

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or 20 LTS recommended)
- `npm` (bundled with Node.js) or `bun` / `pnpm`

### Step 1: Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in terminal).

### Step 4: Build for Production Locally (Optional Test)
```bash
npm run build
```
The optimized static bundle will be generated in `./dist`. You can preview it with:
```bash
npm run preview
```

---

## 6. GitHub Pages Deployment Instructions

This project is configured to deploy automatically via GitHub Actions whenever you push to the `main` (or `master`) branch.

### Step-by-Step Setup:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit of EV Insights platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub.
   - Click **Settings** (top navigation tab).
   - In the left sidebar, click **Pages** (under the "Code and automation" section).
   - Under **Build and deployment**:
     - **Source**: Select **GitHub Actions** from the dropdown menu (do **not** select "Deploy from a branch").

3. **Verify the Deployment:**
   - Click the **Actions** tab in your repository.
   - You will see the workflow **"Deploy EV Insights to GitHub Pages"** running.
   - Once it turns green (completed), click on the job to see your live URL:
     ```text
     https://<your-username>.github.io/<your-repo-name>/
     ```

### Why this works seamlessly:
- `vite.config.js` sets `base: './'`, ensuring all assets (CSS, JS, images, icons) resolve correctly whether your repository is hosted at a domain root or a project subpath.

---

## 7. Tableau Integration

### Published Executive Dashboard
The dashboard is integrated directly from the published Tableau Public workbook:
- **Published View URL:**
  `https://public.tableau.com/app/profile/pranjal.joshi2614/viz/EV_Market_Performance_Market_Story_2026-10-25_17934422258050/EVExecutiveDashboard?publish=yes`
- **Embedding Mechanism:**
  Configured in `src/config/tableau.js` using responsive `iframe` container and Tableau's Embedding API v3 script.

### How to Configure the Tableau Story URL
When your Tableau Story is published:

1. Open `src/config/tableau.js`.
2. Locate the `story` object:
   ```javascript
   export const TABLEAU_CONFIG = {
     // ...
     story: {
       title: 'EV Market Growth & Technology Transition Story',
       description: 'A curated analytical walkthrough examining market expansion stages, battery capacity inflections, and manufacturer strategies.',
       
       // Paste your published Tableau Story URL here:
       directUrl: 'https://public.tableau.com/app/profile/pranjal.joshi2614/viz/YOUR_STORY_WORKBOOK/YOUR_STORY_VIEW',
       
       // And the corresponding embed view URL:
       embedUrl: 'https://public.tableau.com/views/YOUR_STORY_WORKBOOK/YOUR_STORY_VIEW?:showVizHome=no&:embed=true&:toolbar=yes',
     },
   };
   ```
3. Commit and push the file to GitHub. The GitHub Actions workflow will automatically rebuild and deploy the update in ~1 minute.
4. *Tip:* You can also test any Tableau Story link on the live website using the **"Test Story URL Live"** input directly in the Story section!

---

## 8. Known Limitations

- **Client-Side Environment:** Because the application is hosted on GitHub Pages, all operations run inside the client browser. There is no server-side database or Python runtime.
- **Third-Party Cookies & Ad-Blockers:** Highly aggressive browser ad-blockers or strict third-party cookie restrictions (e.g. Brave shields or Chrome incognito third-party cookie blocks) may occasionally prevent external Tableau Public iframes from loading inline. For this reason, every section includes an instant **"Open in Tableau Public"** button allowing users to view the dashboard natively in a separate tab.
- **Data Latency:** Tableau Public caches public views on their global CDN. Changes made in Tableau Desktop take a few moments to propagate to the public URL.

---

## 9. Academic Evaluation Checklist

- [x] Pure JavaScript, HTML5, CSS3, and React (No TypeScript, Python, Flask, or Streamlit)
- [x] 100% GitHub Pages native deployment (No Render, Vercel, Netlify, or paid cloud services)
- [x] Responsive layout tested across desktop and mobile screens
- [x] Published Tableau Public Dashboard embedded without credentials or mock data
- [x] Configurable Tableau Story section with live URL tester
- [x] 7 dedicated analytical feature cards with specification drawers
- [x] 8-stage methodology documenting end-to-end analytical workflow
- [x] Validated build (`npm run build`) and lint checks passing with zero errors
