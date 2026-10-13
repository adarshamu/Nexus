import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../data/mock.js";
import ThemeToggle from "../../components/ThemeToggle.jsx";
import { useTheme } from "../../hooks/useTheme.js";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [profile, setProfile] = useState({
    name: user.name,
    handle: user.handle,
    email: user.email,
    avatar: "JL"
  });
  const [pwd, setPwd] = useState({ current: "", next: "", confirm: "" });
  const [pwdMsg, setPwdMsg] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPwdMsg("");
    if (!pwd.current || !pwd.next || !pwd.confirm) {
      setPwdMsg("Please fill all password fields.");
      return;
    }
    if (pwd.next.length < 6) {
      setPwdMsg("New password must be at least 6 characters.");
      return;
    }
    if (pwd.next !== pwd.confirm) {
      setPwdMsg("New password and confirmation do not match.");
      return;
    }
    setPwd({ current: "", next: "", confirm: "" });
    setPwdMsg("Password updated successfully.");
  };

  return (
    <div className="nx-set">
      <header className="nx-set__head">
        <div>
          <span className="nx-eyebrow">Settings</span>
          <h1 className="nx-set__title">Profile</h1>
          <p className="nx-set__sub">
            Change your name, avatar, password, and personalise your workspace.
          </p>
        </div>
      </header>

      {/* Profile */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <h2 className="nx-panel__title">Your profile</h2>
        </header>

        <div className="nx-set__profile">
          <div className="nx-set__avatar-wrap">
            <div className="nx-set__avatar">{profile.avatar}</div>
            <label className="nx-set__avatar-btn">
              Change avatar
              <input
                type="file"
                accept="image/*"
                onChange={() => alert("Prototype: avatar upload is not wired.")}
              />
            </label>
          </div>

          <div className="nx-set__fields">
            <label className="nx-field">
              <span className="nx-field__label">Full name</span>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </label>
            <label className="nx-field">
              <span className="nx-field__label">Handle</span>
              <input
                type="text"
                value={profile.handle}
                onChange={(e) => setProfile({ ...profile, handle: e.target.value })}
              />
            </label>
            <label className="nx-field">
              <span className="nx-field__label">Email</span>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="nx-set__actions">
          <button className="nx-btn nx-btn--primary">Save changes</button>
          <button className="nx-btn nx-btn--ghost">Cancel</button>
        </div>
      </section>

      {/* Change password */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Change password</h2>
            <p className="nx-panel__sub">
              You can also ask the Super Admin to reset it for you.
            </p>
          </div>
        </header>

        <form className="nx-set__pwd" onSubmit={handleChangePassword}>
          <label className="nx-field">
            <span className="nx-field__label">Current password</span>
            <input
              type="password"
              value={pwd.current}
              onChange={(e) => setPwd({ ...pwd, current: e.target.value })}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>
          <label className="nx-field">
            <span className="nx-field__label">New password</span>
            <input
              type="password"
              value={pwd.next}
              onChange={(e) => setPwd({ ...pwd, next: e.target.value })}
              placeholder="At least 6 characters"
              autoComplete="new-password"
            />
          </label>
          <label className="nx-field">
            <span className="nx-field__label">Confirm new password</span>
            <input
              type="password"
              value={pwd.confirm}
              onChange={(e) => setPwd({ ...pwd, confirm: e.target.value })}
              placeholder="Repeat new password"
              autoComplete="new-password"
            />
          </label>

          {pwdMsg && <p className="nx-set__msg">{pwdMsg}</p>}

          <div className="nx-set__actions">
            <button type="submit" className="nx-btn nx-btn--primary">Update password</button>
          </div>
        </form>
      </section>

      {/* Appearance */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Appearance</h2>
            <p className="nx-panel__sub">Pick a theme for the whole app.</p>
          </div>
        </header>

        <div className="nx-set__row">
          <div>
            <strong>Theme</strong>
            <p className="nx-set__row-sub">
              Currently using <b>{theme}</b> mode.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </section>

      {/* Sign out */}
      <section className="nx-panel nx-set__danger">
        <div>
          <h2 className="nx-panel__title">Log out</h2>
          <p className="nx-panel__sub">End your session and return to the login page.</p>
        </div>
        <button
          className="nx-btn nx-btn--primary"
          onClick={() => {
            try { localStorage.removeItem("nx-role"); } catch { /* */ }
            navigate("/login");
          }}
        >
          Log out
        </button>
      </section>
    </div>
  );
}