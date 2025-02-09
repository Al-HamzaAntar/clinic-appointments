import React from 'react';

function Herodown() {
  return (
    <section className="bg-primary py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-xl max-w-6xl mx-auto">
    <div className="text-white max-w-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Book Appointment <br /> With 100+ Trusted Doctors
      </h1>
      <button className="mt-4 bg-white text-primary font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
        Create account
      </button>
    </div>
    <div className="mt-6 h-24 md:mt-0">
      <img
        src="../../src/assets/doctorherodown.png"
        alt="Doctor"
        className="w-72 relative right-24 bottom-44 md:w-80 rounded-lg"
      />
    </div>
  </section>
  
  );
}

export default Herodown;
