import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AuthGuard from "./components/AuthGuard";

// PUBLIC_INTERFACE
/**
 * App initializes routing and wraps the app with AppProvider for centralized state,
 * authentication/session management, and theme management. All logic is internal.
 */
function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter basename={process.env.REACT_APP_BASE_PATH || "/"}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="browse" element={<Browse />} />
              <Route path="watchlist" element={<AuthGuard><Watchlist /></AuthGuard>} />
              <Route path="profile" element={<AuthGuard><Profile /></AuthGuard>} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
