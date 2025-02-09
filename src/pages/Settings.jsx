// src/pages/Settings.jsx
import React, { useState } from 'react';

function Settings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation: Check if new passwords match
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError('New Password and Confirm New Password do not match.');
      return;
    }

    // Here, you would normally call an API to update the user's profile.
    // For now, we'll simulate a successful update.
    setSuccess('Profile updated successfully!');
    
    // Reset password fields (if desired)
    setFormData((prev) => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-primary mb-4">Settings</h1>
      <p className="mb-6 text-gray-700">Manage your profile information and change your password.</p>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      {success && <p className="mb-4 text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Information */}
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <hr className="my-4" />
        {/* Password Change */}
        <div>
          <label className="block text-gray-700 mb-1">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary text-white p-3 rounded hover:bg-[#117068] transition">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Settings;
