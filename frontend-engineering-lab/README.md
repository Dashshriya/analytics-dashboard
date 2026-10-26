# Fieldnotes — Offline-First Frontend Lab

A dependency-light browser app demonstrating frontend engineering beyond a static UI.

## Implemented
- Semantic landmarks, skip link, labels, live status announcements, visible keyboard focus, filter state via aria-pressed, and reduced-motion support.
- Service worker app-shell caching, cached static assets, and navigation fallback for offline use.
- IndexedDB primary persistence with localStorage fallback.
- Derived task filters/search/counts, serialized saves, safe DOM text rendering, and JSON export.
- Navigation Timing DOM-ready/load readings and Layout Shift observation where supported; these are raw session measurements, not synthetic scores.
- Automated Node tests for normalization, filters, summary counts, task creation, and blank-input rejection.

## Run and verify
Requires Node.js 18+ for tests. Serve over HTTP (required for service workers) with `npx serve .`, then open the local URL. `npm test` and `npm run check` validate pure logic and JavaScript syntax.

To validate offline behavior, open the app once over HTTP, add a task, then use DevTools to go offline and reload. The shell should load from cache and tasks should remain in browser storage. Service workers require HTTPS or localhost; `file://` is not supported.

## Performance review
Use Chrome DevTools Performance and Lighthouse. Compare cold/repeat loads, inspect the Network panel for cache behavior, and record actual Lighthouse/Core Web Vitals results before publishing numerical claims. This project does not assert a guaranteed sub-second load or a specific score.

## Scope and limitations
Tasks are local to this browser profile: no account, backend sync, or cross-device synchronization. The cached shell does not queue remote writes because there is no backend API. Diagnostics are educational, not field LCP/INP/CLS monitoring. No claim is made for WebSocket streaming, optimistic server updates, visual regression, or E2E test coverage.