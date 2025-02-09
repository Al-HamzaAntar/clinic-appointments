import React, { useState, useEffect } from "react";

function AppointmentsManagement() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments (Replace this with API call if using a backend)
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  // Function to update appointment status
  const updateStatus = (id, status) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id ? { ...appointment, status } : appointment
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Appointments Management</h1>
      <p className="mb-6">View and manage patient appointments.</p>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3">Patient Name</th>
              <th className="border border-gray-300 p-3">Email</th>
              <th className="border border-gray-300 p-3">Date</th>
              <th className="border border-gray-300 p-3">Time</th>
              <th className="border border-gray-300 p-3">Doctor</th>
              <th className="border border-gray-300 p-3">Status</th>
              <th className="border border-gray-300 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="text-center">
                <td className="border border-gray-300 p-3">{appointment.name}</td>
                <td className="border border-gray-300 p-3">{appointment.email}</td>
                <td className="border border-gray-300 p-3">{appointment.date}</td>
                <td className="border border-gray-300 p-3">{appointment.time}</td>
                <td className="border border-gray-300 p-3">{appointment.doctor}</td>
                <td className={`border border-gray-300 p-3 font-bold ${appointment.status === "Accepted" ? "text-green-600" : appointment.status === "Declined" ? "text-red-600" : "text-gray-600"}`}>
                  {appointment.status || "Pending"}
                </td>
                <td className="border border-gray-300 p-3 space-x-2">
                  <button onClick={() => updateStatus(appointment.id, "Accepted")} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Accept
                  </button>
                  <button onClick={() => updateStatus(appointment.id, "Declined")} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Decline
                  </button>
                  <button onClick={() => updateStatus(appointment.id, "Pending")} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                    Reset
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentsManagement;
