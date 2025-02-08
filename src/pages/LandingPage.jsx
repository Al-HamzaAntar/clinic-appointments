import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Clinics from '../components/Clinics';
import Doctors from '../components/Doctors';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Clinics />
      <Doctors />
      <Contact />
      {/* Optional: Link to the Sign In page for dashboard access */}
      <div className="text-center py-8">
      </div>
    </div>
  );
}

export default LandingPage;
