// src/pages/PaymentsManagement.jsx
import React from 'react';

function PaymentsManagement() {
  return (
    <div>
      {/* Hero Section for Payments */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary">
            Payments Management
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Monitor and manage all payments and transactions seamlessly.
            View transaction history, process refunds, and track your financial performance with ease.
          </p>
          <div className="mt-6">
            <button className="bg-primary text-white px-6 py-3 rounded hover:bg-[#117068] transition">
              View Reports
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="p-8">
        <p className="mt-4">
          Detailed payments and transactions data will be displayed here.
          (You can integrate charts, tables, or other financial data components as needed.)
        </p>
      </section>
    </div>
  );
}

export default PaymentsManagement;
