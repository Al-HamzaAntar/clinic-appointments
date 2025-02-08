// src/pages/SecretariesManagement.jsx
import React, { useState } from 'react';

function SecretariesManagement() {
  const [secretaries, setSecretaries] = useState([]);
  const [form, setForm] = useState({ name: '', image: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      // Add new secretary
      setSecretaries([...secretaries, form]);
    } else {
      // Update existing secretary
      const updated = [...secretaries];
      updated[editIndex] = form;
      setSecretaries(updated);
      setEditIndex(-1);
    }
    setForm({ name: '', image: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(secretaries[index]);
  };

  const handleDelete = (index) => {
    setSecretaries(secretaries.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Secretaries Management</h1>
      
      {/* Secretary Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-2">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
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
            value={form.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          {editIndex === -1 ? 'Add Secretary' : 'Update Secretary'}
        </button>
      </form>

      {/* Secretaries List */}
      <div className="space-y-4">
        {secretaries.map((sec, index) => (
          <div key={index} className="flex items-center p-4 border rounded">
            <img
              src={sec.image}
              alt={sec.name}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{sec.name}</h2>
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

export default SecretariesManagement;
