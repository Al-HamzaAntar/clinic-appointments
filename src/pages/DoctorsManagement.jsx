// src/pages/DoctorsManagement.jsx
import React, { useState } from 'react';

function DoctorsManagement() {
  const [doctors, setDoctors] = useState([]);
  const [doctorForm, setDoctorForm] = useState({ name: '', specialty: '', image: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm({ ...doctorForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      // Add new doctor
      setDoctors([...doctors, doctorForm]);
    } else {
      // Update existing doctor
      const updatedDoctors = [...doctors];
      updatedDoctors[editIndex] = doctorForm;
      setDoctors(updatedDoctors);
      setEditIndex(-1);
    }
    setDoctorForm({ name: '', specialty: '', image: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setDoctorForm(doctors[index]);
  };

  const handleDelete = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Doctors Management</h1>
      
      {/* Doctor Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-2">
          <label className="block mb-1">Doctor Name</label>
          <input
            type="text"
            name="name"
            value={doctorForm.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Specialty</label>
          <input
            type="text"
            name="specialty"
            value={doctorForm.specialty}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={doctorForm.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          {editIndex === -1 ? 'Add Doctor' : 'Update Doctor'}
        </button>
      </form>

      {/* Doctors List */}
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-center p-4 border rounded">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p>{doctor.specialty}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsManagement;
