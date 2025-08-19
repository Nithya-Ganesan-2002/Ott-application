import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Home page displays a hero and quick navigation links.
 */
export default function Home() {
  return (
    <section aria-labelledby="home-heading">
      <h1 id="home-heading">Welcome to OTT Monolith</h1>
      <p>Stream your favorite movies and shows. Browse trending content and manage your watchlist.</p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link className="btn" to="/browse" aria-label="Go to Browse">
          Browse
        </Link>
        <Link className="btn" to="/watchlist" aria-label="Go to Watchlist">
          Watchlist
        </Link>
      </div>
    </section>
  );
}
