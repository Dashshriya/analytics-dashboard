# Cleanroom Studio

A privacy-first, frontend-only CSV data preparation workspace. It runs in the browser and does not upload imported files.

## What works
- Import CSV files with quoted cells and escaped quotes; drag-and-drop supported
- Profile row/column counts, completeness, missing cells, duplicate rows, and inferred column types
- Search across all columns, filter a selected column, and sort columns
- Remove rows with missing cells and trim whitespace, with undo/redo and reset to the imported dataset
- Paginate the preview and export the current filtered view as a CSV
- Responsive layout and accessible focus states

## Run
Open `index.html` directly in a modern browser. There is no build step, account, backend, or dependency installation.

## Scope and limitations
All processing is local to the browser tab. This demo handles ordinary CSV files; it is not a substitute for a full ETL system, and the in-memory dataset size is limited by the browser/device. Column transforms and advanced multi-condition filters are intentionally outside this version.
