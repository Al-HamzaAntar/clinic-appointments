import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://www.conwaymedicalcenter.com/wp-content/uploads/2020/12/ten-reasons-you-must-have-a-primary-care-doctor.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Welcome to Our Clinic
        </h1>
        <p className="text-xl text-white mb-6">
          Your health is our priority. Book your appointment now!
        </p>
        <button
          onClick={() => navigate('/book-appointment')}
          className="bg-primary hover:bg-[#117068] text-white px-6 py-3 rounded"
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}

export default Hero;
