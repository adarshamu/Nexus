import { useState } from 'react';
import { experts } from '../../data/mock.js';
import './HumanAPI.css';

const STATUS = {
  active:  { label: 'Active',  tone: 'good' },
  busy:    { label: 'Busy',    tone: 'warn' },
  offline: { label: 'Offline', tone: 'muted' }
};

export default function HumanAPI() {
  const [mode, setMode] = useState('ai');
  const [selected, setSelected] = useState(experts[0]);

  return (
    <div className="nx-ha">
      <header className="nx-ha__head">
        <div>
          <span className="nx-eyebrow">Human API</span>
          <h1 className="nx-ha__title">Find problem-specific expertise</h1>
          <p className="nx-ha__sub">
            Describe a technical issue and see expert matches with reasons and live availability.
          </p>
        </div>
      </header>

      {/* Problem input */}
      <section className="nx-ha__problem">
        <label className="nx-ha__label" htmlFor="ha-problem">Sample problem</label>
        <textarea
          id="ha-problem"
          className="nx-ha__input"
          defaultValue="React state updates from a child modal are lost when the parent list re-renders."
          rows={3}
        />
        <div className="nx-ha__chips">
          <span className="nx-chip">React</span>
          <span className="nx-chip">State management</span>
        </div>

        <div className="nx-ha__mode">
          <button
            className={`nx-ha__mode-btn ${mode === 'ai' ? 'is-active' : ''}`}
            onClick={() => setMode('ai')}
          >
            AI match
          </button>
          <button
            className={`nx-ha__mode-btn ${mode === 'manual' ? 'is-active' : ''}`}
            onClick={() => setMode('manual')}
          >
            Manual selection
          </button>
        </div>
      </section>

      <div className="nx-ha__body">
        {/* Expert list */}
        <section className="nx-ha__list" aria-label="Experts">
          <header className="nx-ha__list-head">
            <h2 className="nx-ha__list-title">Matched experts</h2>
            <span className="nx-ha__list-count">{experts.length} results</span>
          </header>

          {experts.map((e) => (
            <button
              key={e.id}
              type="button"
              className={`nx-expert ${selected.id === e.id ? 'is-selected' : ''}`}
              onClick={() => setSelected(e)}
            >
              <span className="nx-expert__avatar">{e.initials}</span>
              <div className="nx-expert__info">
                <div className="nx-expert__row">
                  <span className="nx-expert__name">{e.name}</span>
                  <span className={`nx-status nx-status--${STATUS[e.status].tone}`}>
                    <span className="nx-status__dot" />
                    {STATUS[e.status].label}
                  </span>
                </div>
                <span className="nx-expert__domain">{e.domain}</span>
                <div className="nx-expert__prof">
                  <div className="nx-bar nx-bar--tiny">
                    <span style={{ width: `${e.proficiency}%` }} />
                  </div>
                  <span className="nx-expert__pct">{e.proficiency}%</span>
                </div>
              </div>
            </button>
          ))}
        </section>

        {/* Expert detail */}
        <section className="nx-ha__detail">
          <div className="nx-ha__detail-head">
            <span className="nx-expert__avatar nx-expert__avatar--lg">{selected.initials}</span>
            <div>
              <div className="nx-ha__detail-name">{selected.name}</div>
              <div className="nx-ha__detail-role">{selected.role}</div>
            </div>
            <span className={`nx-status nx-status--${STATUS[selected.status].tone}`}>
              <span className="nx-status__dot" />
              {STATUS[selected.status].label}
            </span>
          </div>

          <div className="nx-ha__detail-tags">
            {selected.domain.split(' · ').map((t) => (
              <span key={t} className="nx-chip nx-chip--soft">{t}</span>
            ))}
          </div>

          <div className="nx-ha__reason">
            <span className="nx-ha__reason-label">Match reason</span>
            <p>{selected.reason}</p>
          </div>

          <div className="nx-ha__proficiency">
            <span className="nx-ha__proficiency-label">Proficiency</span>
            <div className="nx-bar"><span style={{ width: `${selected.proficiency}%` }} /></div>
            <span className="nx-ha__proficiency-pct">{selected.proficiency}%</span>
          </div>

          <div className="nx-ha__actions">
            {selected.status === 'offline' ? (
              <button className="nx-btn nx-btn--primary nx-ha__cta">
                Chat with bot
              </button>
            ) : (
              <button className="nx-btn nx-btn--accent nx-ha__cta">
                Start conversation
              </button>
            )}
            <button className="nx-btn nx-btn--ghost nx-ha__cta">
              View profile
            </button>
          </div>

          <div className="nx-ha__switch">
            <span>Dev Clone</span>
            <label className="nx-switch">
              <input type="checkbox" />
              <span className="nx-switch__slider" />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}