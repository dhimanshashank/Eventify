import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('partners');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-cover bg-center" >
      <div className="absolute inset-0 hero"></div> {/* Dark overlay */}
      <div className="relative z-11 flex flex-col items-center justify-center h-full text-center text-white hero-content">
        <h1 className="text-6xl font-extrabold tracking-wide leading-tight hero-title">CELEBRATE IN STYLE</h1>
        <p className="mt-4 text-lg font-medium Cinzel">Elegant, Unforgettable Events Tailored to Your Vision</p>
         <button onClick={handleScroll} className="bg-transparent border-2 rounded-full p-4 transition duration-300 scroll-button">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;