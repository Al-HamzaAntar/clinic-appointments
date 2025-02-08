// src/pages/ClinicsManagement.jsx
import React, { useState } from 'react';

function ClinicsManagement() {
  const [clinics, setClinics] = useState([]);
  const [clinicForm, setClinicForm] = useState({ name: '', description: '', image: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicForm({ ...clinicForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      // Add new clinic
      setClinics([...clinics, clinicForm]);
    } else {
      // Update existing clinic
      const updatedClinics = [...clinics];
      updatedClinics[editIndex] = clinicForm;
      setClinics(updatedClinics);
      setEditIndex(-1);
    }
    setClinicForm({ name: '', description: '', image: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setClinicForm(clinics[index]);
  };

  const handleDelete = (index) => {
    setClinics(clinics.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Clinics Management</h1>
      
      {/* Clinic Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-2">
          <label className="block mb-1">Clinic Name</label>
          <input
            type="text"
            name="name"
            value={clinicForm.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Description</label>
          <input
            type="text"
            name="description"
            value={clinicForm.description}
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
            value={clinicForm.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          {editIndex === -1 ? 'Add Clinic' : 'Update Clinic'}
        </button>
      </form>

      {/* Clinics List */}
      <div className="space-y-4">
        {clinics.map((clinic, index) => (
          <div key={index} className="flex items-center p-4 border rounded">
            <img
              src={clinic.image}
              alt={clinic.name}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{clinic.name}</h2>
              <p>{clinic.description}</p>
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

export default ClinicsManagement;
