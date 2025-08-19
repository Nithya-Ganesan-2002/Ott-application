import React, { useMemo, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Browse page shows a list of locally generated items; no API used.
 */
export default function Browse() {
  const allItems = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i + 1,
        title: `Sample Title ${i + 1}`,
        genre: ["Action", "Drama", "Comedy", "Sci-Fi"][i % 4],
        rating: (Math.random() * 4 + 1).toFixed(1),
        year: 2015 + (i % 10),
      })),
    []
  );
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => allItems.filter((x) => x.title.toLowerCase().includes(query.toLowerCase())),
    [allItems, query]
  );

  return (
    <section aria-labelledby="browse-heading">
      <h1 id="browse-heading">Browse</h1>
      <label htmlFor="search" style={{ display: "block", marginBottom: "0.5rem" }}>
        Search titles
      </label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          width: "100%",
          maxWidth: 420,
          padding: "0.5rem 0.75rem",
          borderRadius: 6,
          border: "1px solid var(--border-color)",
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      />
      <ul
        aria-label="Results"
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {filtered.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid var(--border-color)",
              borderRadius: 8,
              padding: "0.75rem",
              background: "var(--bg-secondary)",
            }}
          >
            <div
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, rgba(0,0,0,.2), rgba(0,0,0,.05))",
                borderRadius: 6,
                marginBottom: 8,
              }}
              aria-hidden="true"
            />
            <strong>{item.title}</strong>
            <div style={{ fontSize: ".9rem", opacity: 0.8 }}>
              {item.genre} • {item.year} • ⭐ {item.rating}
            </div>
            <button className="btn btn-small" style={{ marginTop: 8 }}>
              Add to Watchlist
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
