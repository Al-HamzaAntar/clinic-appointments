import React, { useState } from 'react';

function Doctors() {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', image: 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU7YgxJTSr6OM6f-hj5tsxPxO2Eh4BVgyjwxBWRNKAOi76ogcEpdOSjDXWZNfGyxAHIY&usqp=CAU' },
    { id: 3, name: 'Dr. Alice Brown', specialty: 'Dermatologist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aZ1zKTP8OOf7KTvx2W4Ttm0eQWU0UvG_5pjYgeHBqaPMZdcxeZV3B8sbQliSiDepR-Y&usqp=CAU' },
    { id: 4, name: 'Dr. Bob Johnson', specialty: 'Orthopedic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdBAYfUSm6c4OmkXpoB45oEOHrF4s3uXnuK8k54pgPQhymlLAWlwEhqNy5owiWtnGSIQ&usqp=CAU' },
    // Additional doctors to demonstrate the "More" functionality:
    { id: 5, name: 'Dr. Sarah Lee', specialty: 'Pediatrician', image: 'https://via.placeholder.com/150?text=Dr.+Sarah+Lee' },
    { id: 6, name: 'Dr. Mark Wilson', specialty: 'General Practitioner', image: 'https://via.placeholder.com/150?text=Dr.+Mark+Wilson' },
    { id: 7, name: 'Dr. Sarah Lee', specialty: 'Pediatrician', image: 'https://via.placeholder.com/150?text=Dr.+Sarah+Lee' },
    { id: 8, name: 'Dr. Mark Wilson', specialty: 'General Practitioner', image: 'https://via.placeholder.com/150?text=Dr.+Mark+Wilson' },
  ];

  // State to determine whether to show all doctors or just 4
  const [showAll, setShowAll] = useState(false);

  // Determine which doctors to display based on the showAll flag
  const doctorsToDisplay = showAll ? doctors : doctors.slice(0, 4);

  return (
    <section id="doctors" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorsToDisplay.map((doctor) => (
            <div key={doctor.id} className="bg-gray-100 p-6 rounded shadow text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-44 h-44 rounded mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          ))}
        </div>
        {doctors.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-[#117068] transition"
            >
              {showAll ? 'Show Less' : 'More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Doctors;
