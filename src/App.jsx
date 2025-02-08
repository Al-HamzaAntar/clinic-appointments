// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import SignIn from './pages/SignIn';
import DashboardLayout from './components/DashboardLayout';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import ClinicsManagement from './pages/ClinicsManagement';
import DoctorsManagement from './pages/DoctorsManagement';
import PaymentsManagement from './pages/PaymentsManagement';  // (Assume you have one)
import Settings from './pages/Settings';                        // (Assume you have one)
import SubAdminDashboard from './pages/SubAdminDashboard';
import SecretariesManagement from './pages/SecretariesManagement'; // (Assume you have one)
import SecretaryDashboard from './pages/SecretaryDashboard';
import AppointmentsManagement from './pages/AppointmentsManagement'; // (Assume you have one)

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/book-appointment" element={<BookingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              {/* Super Admin Routes */}
              <Route path="super" element={<SuperAdminDashboard />} />
              <Route path="clinics" element={<ClinicsManagement />} />
              <Route path="doctors" element={<DoctorsManagement />} />
              <Route path="payments" element={<PaymentsManagement />} />
              <Route path="settings" element={<Settings />} />
              
              {/* Sub Admin Routes */}
              <Route path="sub" element={<SubAdminDashboard />} />
              <Route path="secretaries" element={<SecretariesManagement />} />
              {/* Sub admin can share Payments and Settings routes if needed */}
              
              {/* Secretary Routes */}
              <Route path="secretary" element={<SecretaryDashboard />} />
              <Route path="appointments" element={<AppointmentsManagement />} />
              {/* Secretary can share Settings route if needed */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
