import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import './AppLayout.css';

export default function AppLayout() {
  return (
    <div className="nx-app">
      <Sidebar />
      <main className="nx-app__main">
        <Outlet />
      </main>
    </div>
  );
}