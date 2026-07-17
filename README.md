# The AI Power Stack

An immersive 3D visualization of the physical infrastructure required to power the next generation of artificial intelligence.

## Features
- Interactive 3D Stack (Model, Chip, Rack, Facility, Grid, Electron)
- Detailed technical breakdowns for each layer
- Responsive design for mobile and desktop
- Modern aesthetics with glassmorphism and real-time reflections

## Tech Stack
- React + Vite
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Build for production: `npm run build`

## Analytics

The production site uses Google Analytics 4 measurement ID `G-7T0B6ZT3Y0`.

1. In Google Analytics, create a GA4 property and a web data stream for `https://www.ai-power.space`.
2. If the web stream changes, update `VITE_GA_MEASUREMENT_ID` in `.env.production`.
3. Run `npm run build` and deploy the generated site.

Page views are collected by the Google tag. The app also sends these custom events:

- `layer_open`: includes `layer_name`, `layer_number`, and `click_source`.
- `about_open`: includes `click_source`.

To break reports down by layer or click location, add `layer_name` and `click_source` as event-scoped custom dimensions in GA4 under **Admin → Data display → Custom definitions**.

Vite embeds the production measurement ID at build time.
