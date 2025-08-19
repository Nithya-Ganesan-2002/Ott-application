import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * PUBLIC_INTERFACE
 * Login page implements internal-only authentication.
 */
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    actions: { login },
  } = useApp();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login({ username, password });
    if (res.ok) {
      navigate(from, { replace: true });
    } else {
      setErr(res.error || "Login failed");
    }
  };

  return (
    <section aria-labelledby="login-heading">
      <h1 id="login-heading">Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 380 }}>
        {err && (
          <div
            role="alert"
            style={{
              marginBottom: 8,
              padding: "0.5rem 0.75rem",
              borderRadius: 6,
              border: "1px solid var(--border-color)",
              background: "var(--bg-secondary)",
            }}
          >
            {err}
          </div>
        )}
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "0.5rem 0.75rem",
              borderRadius: 6,
              border: "1px solid var(--border-color)",
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.5rem 0.75rem",
              borderRadius: 6,
              border: "1px solid var(--border-color)",
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
            }}
          />
          <button className="btn" type="submit" style={{ marginTop: 8 }}>
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
}
