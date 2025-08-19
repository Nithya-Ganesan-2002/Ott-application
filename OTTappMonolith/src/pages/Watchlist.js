import React from "react";

/**
 * PUBLIC_INTERFACE
 * Watchlist shows saved items (mocked local state; extend as needed).
 */
export default function Watchlist() {
  // For initial implementation, show an empty state.
  return (
    <section aria-labelledby="watchlist-heading">
      <h1 id="watchlist-heading">Your Watchlist</h1>
      <p>You have no items in your watchlist yet.</p>
      <p>Browse content and add items to see them here.</p>
    </section>
  );
}
