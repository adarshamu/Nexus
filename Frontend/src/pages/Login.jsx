import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const username = form.username.trim();
    const password = form.password;

    // Role is decided entirely by the credentials.
    if (username === "Admin" && password === "root") {
      try { localStorage.setItem("nx-role", "admin"); } catch { /* storage blocked */ }
      navigate("/app/overview");
      return;
    }

    // Any other username/password is treated as an employee.
    // (Prototype behaviour — no backend validation.)
    if (username.length > 0 && password.length > 0) {
      try { localStorage.setItem("nx-role", "employee"); } catch { /* storage blocked */ }
      navigate("/app/overview");
      return;
    }

    setError("Please enter your username and password.");
  };

  return (
    <div className="nx-login">
      <aside className="nx-login__aside">
        <Link to="/" className="nx-login__brand">
          <Logo size={36} />
        </Link>

        <div className="nx-login__art" aria-hidden="true">
          <div className="nx-login__phone">
            <span className="nx-login__lock">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="10" rx="2"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
              </svg>
            </span>
            <span className="nx-login__avatar">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 21a8 8 0 0 1 16 0"/>
              </svg>
            </span>
            <span className="nx-login__bar" />
            <span className="nx-login__bar nx-login__bar--short" />
            <button className="nx-login__cta" type="button" tabIndex={-1}>Login</button>
          </div>
          <div className="nx-login__blob nx-login__blob--a" />
          <div className="nx-login__blob nx-login__blob--b" />
          <div className="nx-login__blob nx-login__blob--c" />
        </div>

        <div className="nx-login__aside-foot">
          <h2>See. Solve. Learn. Grow. Remember.</h2>
          <p>Personal intelligence designed for developers.</p>
        </div>
      </aside>

      <main className="nx-login__main">
        <div className="nx-login__card">
          <header className="nx-login__head">
            <span className="nx-eyebrow">Welcome back</span>
            <h1 className="nx-login__title">Sign in to Nexus</h1>
            <p className="nx-login__sub">
              Continue your journey — your progress, courses, and experts are waiting.
            </p>
          </header>

          <form className="nx-login__form" onSubmit={handleSubmit}>
            <label className="nx-field">
              <span className="nx-field__label">Username</span>
              <span className="nx-field__wrap">
                <svg className="nx-field__icon" viewBox="0 0 24 24" width="16" height="16"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 21a8 8 0 0 1 16 0"/>
                </svg>
                <input
                  type="text"
                  placeholder="your handle"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  autoComplete="username"
                  required
                />
              </span>
            </label>

            <label className="nx-field">
              <span className="nx-field__label">Password</span>
              <span className="nx-field__wrap">
                <svg className="nx-field__icon" viewBox="0 0 24 24" width="16" height="16"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="11" width="16" height="10" rx="2"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                </svg>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  autoComplete="current-password"
                  required
                />
              </span>
            </label>

            {error && <p className="nx-login__error">{error}</p>}

            <label className="nx-check nx-check--solo">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="nx-btn nx-btn--accent nx-login__submit">
              Login
            </button>
          </form>

          <p className="nx-login__hint">
            Forgot your password? Contact your Super Admin to reset it.
          </p>
        </div>
      </main>
    </div>
  );
}