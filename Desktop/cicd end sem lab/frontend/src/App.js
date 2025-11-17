import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('main');
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setCurrentView('main');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  const showSignup = () => setCurrentView('signup');
  const showLogin = () => setCurrentView('login');

  if (!isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hospital Management System</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
        <main>
          {currentView === 'signup' ? (
            <Signup onSignup={handleSignup} onSwitchToLogin={showLogin} />
          ) : (
            <Login onLogin={handleLogin} onSwitchToSignup={showSignup} />
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hospital Management System</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      <nav>
        <ul>
          <li><a href="#patients">Patients</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#inventory">Inventory</a></li>
          <li><a href="#billing">Billing</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
      <main>
        <section id="patients">
          <h2>Patient Management</h2>
          <p>Manage patient records, admissions, and discharges.</p>
          {/* Placeholder for patient list */}
          <ul>
            <li>John Doe - Room 101</li>
            <li>Jane Smith - Room 102</li>
          </ul>
        </section>
        <section id="appointments">
          <h2>Appointments</h2>
          <p>Schedule and manage appointments.</p>
          {/* Placeholder */}
          <p>Upcoming: Dr. Johnson at 10 AM</p>
        </section>
        <section id="staff">
          <h2>Staff Management</h2>
          <p>Manage doctors, nurses, and other staff.</p>
        </section>
        <section id="inventory">
          <h2>Inventory</h2>
          <p>Track medical supplies and equipment.</p>
        </section>
        <section id="billing">
          <h2>Billing</h2>
          <p>Manage patient billing, invoices, and payments.</p>
          <p>Recent invoices: $500 for John Doe, $300 for Jane Smith</p>
        </section>
        <section id="reports">
          <h2>Reports</h2>
          <p>Generate and view hospital reports and analytics.</p>
          <p>Monthly patient admissions: 150</p>
        </section>
        <section id="settings">
          <h2>Settings</h2>
          <p>Configure system settings and user preferences.</p>
          <p>System status: All systems operational</p>
        </section>
      </main>
    </div>
  );
}

export default App;