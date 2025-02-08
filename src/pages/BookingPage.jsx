import React, { useState } from 'react';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${formData.doctor} on ${formData.date} at ${formData.time} for ${formData.name}.`);
    setFormData({ name: '', email: '', date: '', time: '', doctor: '' });
  };

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl text-center text-primary mb-6 font-bold">Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Brown">Dr. Brown</option>
          </select>
          <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-[#117068] transition">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
