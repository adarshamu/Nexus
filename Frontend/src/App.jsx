import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import AppLayout from './pages/app/AppLayout.jsx';
import Overview from './pages/app/Overview.jsx';
import SkillQuest from './pages/app/SkillQuest.jsx';
import HumanAPI from './pages/app/HumanAPI.jsx';
import Settings from './pages/app/Settings.jsx';
import Admin from './pages/app/Admin.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview"   element={<Overview />} />
        <Route path="skillquest" element={<SkillQuest />} />
        <Route path="human-api"  element={<HumanAPI />} />
        <Route path="settings"   element={<Settings />} />
        <Route path="admin"      element={<Admin />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}