// src/pages/SubAdminDashboard.jsx
import React from 'react';

function SubAdminDashboard() {
  // Hard-coded totals for demonstration. Replace these with dynamic data as needed.
  const totalDoctors = 15;
  const totalSecretaries = 5;
  const totalPayments = 80;
  const totalAppointments = 45; // New card for appointments

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold text-primary">Sub Admin Dashboard</h1>
      <p className="mt-4 text-gray-700">
        Welcome, Sub Admin! Use the sidebar to manage doctors, secretaries, payments, appointments, and settings.
      </p>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Total Doctors */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Doctors</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalDoctors}</p>
        </div>
        {/* Total Secretaries */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Secretaries</h2>
          <p className="mt-2 text-3xl font-bold text-primary">{totalSecretaries}</p>
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

export default SubAdminDashboard;
