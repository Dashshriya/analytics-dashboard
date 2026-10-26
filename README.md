# Northstar Analytics Studio

A responsive analytics dashboard built with React, Vite, React Router and Recharts. The current version focuses on a complete, polished frontend experience with explicit sample-data labeling.

## Features
- Responsive dashboard shell and reusable navigation
- KPI cards with selectable 7-day, 30-day and 90-day views
- Revenue and customer-growth charts
- Searchable recent-activity table
- CSV export for the visible activity results
- Empty search state, keyboard focus styles, and mobile layout

## Run locally
```bash
npm install
npm run dev
```

## Build and lint
```bash
npm run build
npm run lint
```

## Additional frontend flagship
The `cleanroom/` directory contains **Cleanroom Studio**, a standalone local-first CSV cleanup workspace. Open `cleanroom/index.html` in a modern browser; no build step or backend is required.

## Data note
The dashboard metrics and chart values are illustrative sample data. The UI does not claim to connect to a production analytics API.
