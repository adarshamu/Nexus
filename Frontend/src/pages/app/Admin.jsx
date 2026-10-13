import { useState } from 'react';
import { adminUsers } from '../../data/mock.js';
import './Admin.css';

export default function Admin() {
  const [users, setUsers] = useState(adminUsers);
  const [maintenance, setMaintenance] = useState(false);

  const removeUser = (id) => setUsers((u) => u.filter((x) => x.id !== id));
  const resetPassword = (name) => alert(`Password reset link sent to ${name} (prototype).`);

  return (
    <div className="nx-adm">
      <header className="nx-adm__head">
        <div>
          <span className="nx-eyebrow">Super Admin</span>
          <h1 className="nx-adm__title">Platform administration</h1>
          <p className="nx-adm__sub">Manage users, upload rosters, and control platform settings.</p>
        </div>
      </header>

      {/* KPI row */}
      <section className="nx-adm__kpis">
        {[
          ['Total users',   users.length, 'across all roles'],
          ['Active experts', users.filter((u) => u.role === 'Expert' && u.status === 'active').length, 'available now'],
          ['Avg. progress', Math.round(users.reduce((a, b) => a + b.progress, 0) / users.length) + '%', 'platform-wide'],
          ['Courses assigned', 24, 'in the last 7 days']
        ].map(([label, value, meta]) => (
          <div key={label} className="nx-kpi">
            <span className="nx-kpi__label">{label}</span>
            <span className="nx-kpi__value">{value}</span>
            <span className="nx-kpi__meta">{meta}</span>
          </div>
        ))}
      </section>

      {/* Upload row */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Bulk upload</h2>
            <p className="nx-panel__sub">Add users via CSV or Excel</p>
          </div>
        </header>

        <label className="nx-adm__drop">
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={(e) => alert(`Selected: ${e.target.files?.[0]?.name || 'file'}`)}
          />
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>
          </svg>
          <span>Drop a CSV or Excel file, or click to select</span>
          <small>Accepts .csv, .xlsx, .xls — up to 5 MB</small>
        </label>
      </section>

      {/* Users table */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Users</h2>
            <p className="nx-panel__sub">{users.length} registered accounts</p>
          </div>
        </header>

        <div className="nx-adm__table-wrap">
          <table className="nx-adm__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Progress</th>
                <th>Status</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="nx-adm__user">
                      <span className="nx-adm__avatar">{u.name.split(' ').map((s) => s[0]).join('').slice(0, 2)}</span>
                      <div>
                        <div className="nx-adm__name">{u.name}</div>
                        <div className="nx-adm__email">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`nx-adm__role nx-adm__role--${u.role.toLowerCase()}`}>{u.role}</span>
                  </td>
                  <td>
                    <div className="nx-adm__progress">
                      <div className="nx-bar"><span style={{ width: `${u.progress}%` }} /></div>
                      <span>{u.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`nx-status nx-status--${u.status === 'active' ? 'good' : 'muted'}`}>
                      <span className="nx-status__dot" />
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <div className="nx-adm__actions">
                      <button onClick={() => resetPassword(u.name)} className="nx-adm__btn">Reset pwd</button>
                      <button onClick={() => removeUser(u.id)} className="nx-adm__btn nx-adm__btn--danger">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Platform settings */}
      <section className="nx-panel">
        <header className="nx-panel__head">
          <div>
            <h2 className="nx-panel__title">Platform settings</h2>
            <p className="nx-panel__sub">Control availability and broadcast messages</p>
          </div>
        </header>

        <div className="nx-adm__setting">
          <div>
            <strong>Maintenance mode</strong>
            <p>When enabled, all non-admin users see a maintenance banner.</p>
          </div>
          <label className="nx-switch">
            <input
              type="checkbox"
              checked={maintenance}
              onChange={(e) => setMaintenance(e.target.checked)}
            />
            <span className="nx-switch__slider" />
          </label>
        </div>

        <div className="nx-adm__setting nx-adm__setting--stack">
          <div>
            <strong>Broadcast message</strong>
            <p>Send a notice to every active user's dashboard.</p>
          </div>
          <textarea rows={3} placeholder="Type a message for all users…" className="nx-ha__input" />
          <button className="nx-btn nx-btn--primary">Send broadcast</button>
        </div>
      </section>
    </div>
  );
}