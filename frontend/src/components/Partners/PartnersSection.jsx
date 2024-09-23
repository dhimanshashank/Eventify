import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  // Array of image file paths
  const partners = [
    '/assets/img/partners/partner1.jpeg',
    '/assets/img/partners/partner2.jpeg',
    '/assets/img/partners/partner3.jpeg',
    '/assets/img/partners/partner4.jpeg',
    '/assets/img/partners/partner5.jpeg',
  ];

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
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className="h-14 md:h-20 lg:h-24 object-contain border border-gray-200 rounded-full"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
