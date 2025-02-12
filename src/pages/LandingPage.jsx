import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Clinics from '../components/Clinics';
import Doctors from '../components/Doctors';
import Herodown from '../components/Herodown';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className="text-center -mt-16"></div>
      <Hero />
      <About />
      <Clinics />
      <Doctors />
      <Herodown />
      {/* Optional: Link to the Sign In page for dashboard access */}
      <div className="text-center py-8"></div>
      <Footer />
    </>
  );
}

export default LandingPage;
