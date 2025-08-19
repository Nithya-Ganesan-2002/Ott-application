import React from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./Navbar.css";

/**
 * PUBLIC_INTERFACE
 * Navbar shows primary navigation, user status, and theme toggle.
 */
export default function Navbar() {
  const {
    state: { user, theme },
    actions: { toggleTheme, logout },
  } = useApp();

  return (
    <nav className="ott-navbar" aria-label="Primary">
      <div className="ott-navbar__brand">
        <span aria-hidden="true">🎬</span>
        <span className="sr-only">OTT</span>
        <strong>OTT Monolith</strong>
      </div>

      <button
        className="ott-navbar__toggle"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <ul className="ott-navbar__links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/browse">Browse</NavLink>
        </li>
        <li>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>

      <div className="ott-navbar__auth">
        {user ? (
          <>
            <span className="ott-navbar__user" aria-label="Logged in user">
              Hi, {user.username}
            </span>
            <button className="btn btn-small" onClick={logout} aria-label="Log out">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-small" aria-label="Navigate to login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
