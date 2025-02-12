// src/pages/Clinics.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Clinics() {
  const clinics = [
    { 
      id: 1, 
      name: 'Clinic A', 
      description: 'State-of-the-art facilities.',
      image: 'data:image/jpeg;base64,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'
    },
    { 
      id: 2, 
      name: 'Clinic B', 
      description: 'Expert care and service.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprzMY7A9hK5TQL94uQ_Ak4jgzzxWTjafBAxAvPGcssjP5INvXfEBAhtngJIrMooddz40&usqp=CAU'
    },
    { 
      id: 3, 
      name: 'Clinic C', 
      description: 'Advanced medical technology.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9epcl5BPWoHkUnXrX-1LzfUGQugs2z7qA8G-5-EzC6zwnyKizYBsy7JCRTr6TpddCj0&usqp=CAU'
    },
    { 
      id: 4, 
      name: 'Clinic D', 
      description: 'Comprehensive healthcare.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UqUxZkk8j-8aAEsjczXXro8iIAQLrwj1B0aL151b9PYVcCXrCJO7rwAjz6KDM8ni08k&usqp=CAU'
    }
  ];

  // Settings for react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens less than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="clinics" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Clinics</h2>
        <Slider {...settings}>
          {clinics.map((clinic) => (
            <div key={clinic.id} className="p-2">
              <div className="bg-white p-6 rounded shadow">
                <img 
                  src={clinic.image} 
                  alt={clinic.name} 
                  className="w-full h-40 object-cover rounded mb-4" 
                />
                <h3 className="text-xl font-semibold mb-2">{clinic.name}</h3>
                <p className="text-gray-600">{clinic.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clinics;
