# OTT Monolith React Frontend

A single-container React app that encapsulates UI, routing, centralized state, authentication/session, and theme management for a lightweight OTT experience. No external APIs; all logic is internal.

## Key Features
- Application initialization with ReactDOM.createRoot and StrictMode (see `src/index.js`)
- Centralized state via context provider (see `src/context/AppContext.js`)
- Internal authentication and session handling (see `src/pages/Login.js` and AppContext)
- Theme management using `data-theme` attribute on the root element
- Routing with `BrowserRouter`, guarded routes via `AuthGuard` and modular layout (Navbar + Outlet)
- Responsive, accessible components and pages

## App Structure
- src/context/AppContext.js — global state (theme, user), actions, and persistence
- src/components/Navbar.js — responsive navbar with theme toggle and auth UI
- src/components/AuthGuard.js — protects authenticated routes
- src/layout/MainLayout.js — layout wrapper with Navbar, content Outlet, and footer
- src/pages/* — feature pages: Home, Browse, Watchlist, Profile, Login
- src/App.js — Router configuration and provider wiring
- src/index.js — React app bootstrap

## Environment Variables
Copy `.env.example` to `.env` if needed:
- `REACT_APP_BASE_PATH` — optional base path for the router (defaults to "/")

## Scripts
- `npm start` — start dev server
- `npm test` — run tests in watch mode
- `npm run build` — build production bundle

## Notes
- All data is local/in-memory. Extend `AppContext` to persist additional UI state as needed.
- Pages are accessible and responsive, using semantic markup and system fonts.
