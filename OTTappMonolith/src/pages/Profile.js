import React from "react";
import { useApp } from "../context/AppContext";

/**
 * PUBLIC_INTERFACE
 * Profile page displays current user info and theme preference.
 */
export default function Profile() {
  const {
    state: { user, theme },
    actions: { setTheme },
  } = useApp();

  return (
    <section aria-labelledby="profile-heading">
      <h1 id="profile-heading">Profile</h1>
      {user ? (
        <>
          <p>
            Logged in as: <strong>{user.username}</strong>
          </p>
          <div>
            <label htmlFor="theme-select">Theme</label>{" "}
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{
                padding: "0.35rem 0.5rem",
                borderRadius: 6,
                border: "1px solid var(--border-color)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </section>
  );
}
