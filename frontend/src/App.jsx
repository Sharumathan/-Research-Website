import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import member pages
import SharuPage from './features/sharu/SharuPage';
import AmashaPage from './features/amasha/AmashaPage';
import MaleeshaPage from './features/maleesha/MaleeshaPage';
import JitharaPage from './features/jithara/JitharaPage';

function App() {
  return (
    <Router>
      <div className="layout">
        <aside className="sidebar">
          <h2>RP Project</h2>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sharu">Sharu's Space</Link></li>
              <li><Link to="/amasha">Amasha's Space</Link></li>
              <li><Link to="/maleesha">Maleesha's Space</Link></li>
              <li><Link to="/jithara">Jithara's Space</Link></li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <Routes>
            <Route path="/" element={
              <div className="home-dashboard">
                <h1>Welcome to Content RP Group Project</h1>
                <p>Select your workspace from the sidebar to start building your features.</p>
                <div className="status-grid">
                  <div className="status-card">
                    <h3>Sharu</h3>
                    <Link to="/sharu" className="btn-primary">Go to Workspace</Link>
                  </div>
                  <div className="status-card">
                    <h3>Amasha</h3>
                    <Link to="/amasha" className="btn-primary">Go to Workspace</Link>
                  </div>
                  <div className="status-card">
                    <h3>Maleesha</h3>
                    <Link to="/maleesha" className="btn-primary">Go to Workspace</Link>
                  </div>
                  <div className="status-card">
                    <h3>Jithara</h3>
                    <Link to="/jithara" className="btn-primary">Go to Workspace</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/sharu/*" element={<SharuPage />} />
            <Route path="/amasha/*" element={<AmashaPage />} />
            <Route path="/maleesha/*" element={<MaleeshaPage />} />
            <Route path="/jithara/*" element={<JitharaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
