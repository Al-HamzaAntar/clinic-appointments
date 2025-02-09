// src/pages/SuperAdminDashboard.jsx
import React from 'react';

function SuperAdminDashboard() {
  // Hard-coded totals for demonstration.
  // Replace these with data fetched from an API or derived from your application state.
  const totalClinics = 8;
  const totalDoctors = 15;
  const totalPayments = 120; // This could be a count or an amount.
  const totalAppointments = 45;

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Super Admin Dashboard</h1>
      <p className="mt-4 text-gray-700">
        Welcome, Super Admin! Use the sidebar to manage clinics, doctors, payments, and settings.
      </p>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Total Clinics */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Clinics</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalClinics}</p>
        </div>
        {/* Total Doctors */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Doctors</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalDoctors}</p>
        </div>
        {/* Total Payments */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Payments</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalPayments}</p>
        </div>
        {/* Total Appointments */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Appointments</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalAppointments}</p>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
