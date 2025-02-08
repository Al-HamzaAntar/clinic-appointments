import React from 'react';

function Clinics() {
  const clinics = [
    { id: 1, name: 'Clinic A', description: 'State-of-the-art facilities.' },
    { id: 2, name: 'Clinic B', description: 'Expert care and service.' },
    { id: 3, name: 'Clinic C', description: 'Advanced medical technology.' },
    { id: 4, name: 'Clinic D', description: 'Comprehensive healthcare.' },
  ];

  return (
    <section id="clinics" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Clinics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic) => (
            <div key={clinic.id} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{clinic.name}</h3>
              <p className="text-gray-600">{clinic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clinics;
