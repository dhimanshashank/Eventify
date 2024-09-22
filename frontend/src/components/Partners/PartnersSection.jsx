import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 w-full h-full" id='partners'>
      {/* Subtitle */}
      <h2 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
        Where Hospitality Meets High Design
      </h2>
      {/* Main Heading */}
      <h1 className="text-4xl md:text-4xl lg:text-6xl leading-tight mb-8 ExpletusSans">
      Experience Punjab's Vibrant Spirit - Expert Event Planning Across the Region
      </h1>
      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0 max-w-3xl last-div">
        {/* Logos Placeholder */}
        <img src="../../assets/img/partner_logo.jpeg" alt="Logo 1" className="h-12 md:h-16" />
        <img src="/path_to_logo2.png" alt="Logo 2" className="h-12 md:h-16" />
        <img src="/path_to_logo3.png" alt="Logo 3" className="h-12 md:h-16" />
        <img src="/path_to_logo4.png" alt="Logo 4" className="h-12 md:h-16" />
        <img src="/path_to_logo5.png" alt="Logo 5" className="h-12 md:h-16" />
      </div>
    </section>
  );
};

export default PartnersSection;
