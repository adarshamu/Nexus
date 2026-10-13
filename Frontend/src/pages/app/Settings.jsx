import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user } from '../../data/mock.js';
import './Settings.css';

export default function Settings() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: user.name,
    handle: user.handle,
    email: user.email,
    avatar: 'JL'
  });

  return (
    <div className="nx-set">
      <header className="nx-set__head">
        <div>
          <span className="nx-eyebrow">Settings</span>
          <h1 className="nx-set__title">Profile</h1>
          <p className="nx-set__sub">Change your name, avatar, and manage your session.</p>
        </div>
      </header>

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
                onChange={() => alert('Prototype: avatar upload is not wired.')}
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

      <section className="nx-panel nx-set__danger">
        <div>
          <h2 className="nx-panel__title">Log out</h2>
          <p className="nx-panel__sub">
            End your session and return to the login page.
          </p>
        </div>
        <button
          className="nx-btn nx-btn--primary"
          onClick={() => navigate('/login')}
        >
          Log out
        </button>
      </section>
    </div>
  );
}