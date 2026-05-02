# Implementation Plan - Viatnam Trip by Pop Venus

This plan outlines the steps to build a modern, dark-themed website for a 4-day, 3-night trip to Da Nang and Hoi An, including an overnight stay at Ba Na Hills.

## Objective
Create a responsive, high-performance website hosted on GitHub Pages that showcases the trip itinerary, costs, and recommendations for a group of 4.

## Key Files & Context
- `index.html`: Entry point.
- `src/main.tsx`: React entry point.
- `src/App.tsx`: Main application logic and layout.
- `src/index.css`: Global styles, including the dark theme and JetBrains Mono font.
- `src/components/`: Reusable UI components (Hero, Itinerary, Gallery, Costs).
- `.github/workflows/deploy.yml`: GitHub Actions for automated deployment.

## Implementation Steps

### 1. Project Initialization
- Initialize a Vite project with React and TypeScript.
- Install dependencies (e.g., `lucide-react` for icons).
- Set up the folder structure.

### 2. Styling & Theme
- **Theme:** Implement a "Modern Dark" theme using CSS variables.
  - Background: `#0f172a` (Slate 900)
  - Text: `#f8fafc` (Slate 50)
  - Accents: `#38bdf8` (Sky 400)
- **Typography:** Import and apply **JetBrains Mono** from Google Fonts globally.

### 3. Core Components
- **Hero Section:** Large heading "Viatnam Trip by Pop Venus" with a subtle parallax or gradient background.
- **Itinerary Section:** A vertical timeline or card-based layout for the 4-day schedule.
  - **Day 1:** Da Nang (Son Tra, Dragon Bridge).
  - **Day 2:** Ba Na Hills (Mercure French Village).
  - **Day 3:** Golden Bridge (Sunrise) & Hoi An Ancient Town.
  - **Day 4:** Cam Thanh Coconut Forest & Departure.
- **Location Recommendations:** Cards with descriptions, "How to get there" (Private Car/Grab), and media placeholders.
- **Costs Table:** A clean, dark-themed table showing estimates for 4 persons.

### 4. Media & Assets
- Use high-quality placeholder images/videos for locations.
- Ensure the layout is ready for easy replacement with personal trip media.

### 5. Deployment
- Configure `vite.config.ts` for GitHub Pages (base path).
- Create a GitHub Action workflow to build and deploy to the `gh-pages` branch on every push to `main`.

## Verification & Testing
- **Visual Check:** Ensure JetBrains Mono is loading and the dark theme is consistent.
- **Responsiveness:** Test on mobile, tablet, and desktop views.
- **Content Accuracy:** Verify itinerary details and cost calculations.
- **Deployment:** Confirm the site is live at `https://<username>.github.io/vn-trip/`.

## Migration & Rollback
- Since this is a new project, rollback involves reverting to previous Git commits.
- Deployment can be paused by disabling the GitHub Action.
