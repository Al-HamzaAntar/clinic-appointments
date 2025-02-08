import React from 'react';

function Doctors() {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Dr. Alice Brown', specialty: 'Dermatologist', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Dr. Bob Johnson', specialty: 'Orthopedic', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section id="doctors" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-gray-100 p-6 rounded shadow text-center">
              <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
