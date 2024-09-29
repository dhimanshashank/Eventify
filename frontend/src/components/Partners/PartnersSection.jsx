import React from 'react';

const PartnersSection = () => {
  // Array of image file paths
  const partners = [
    '/assets/img/partners/partner1.jpeg',
    '/assets/img/partners/partner2.jpg',
    '/assets/img/partners/partner3.jpg',
    '/assets/img/partners/partner4.jpg',
  ];

  return (
    <section className="flex flex-col items-center text-center py-20 bg-gray-100" id='partners'>
      {/* Subtitle */}
      <h2 className="text-lg md:text-xl font-medium tracking-wider text-gray-500 uppercase mb-4 Cinzel">
        Where Hospitality Meets High Design
      </h2>
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 mb-8 md:mb-12 ExpletusSans">
        Experience Punjab's Vibrant Spirit - Expert Event Planning Across the Region
      </h1>
      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className="h-16 md:h-20 lg:h-24 object-contain border border-gray-200 rounded-full transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
