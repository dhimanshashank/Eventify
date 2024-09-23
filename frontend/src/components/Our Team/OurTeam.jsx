import React from 'react';
import './OurTeam.css'; // Custom CSS for additional styling

const OurTeam = () => {
  return (
    <section className="our-team-section bg-gray-50 py-20" id="about">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            // src={require("../path_to_image_directory/image.png")} // replace with the actual image path
            alt="Our Team"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-0 lg:pl-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans">
            Our Team
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed Urbanist">
            "It’s hard to put into words how incredible the Eventify team is. I left my wedding weekend feeling like they were part of my family. My family would agree. The team allowed me the greatest gift, to not stress throughout the entirety of the weekend."
          </p>
          <p className="text-gray-600 leading-relaxed Urbanist">
            I was able to embrace spending time with, and most importantly, party with friends and family. I cannot thank them enough.
          </p>

          {/* Testimonial Source */}
          <p className="mt-6 text-gray-800 italic Urbanist">
            Kara Mitchelle, 2023 Bride
          </p>

          {/* About Us Button */}
          <a
            href="/about-us"
            className="inline-block mt-8 px-8 py-3 text-lg font-bold text-white bg-black hover:bg-gray-800 transition duration-300 Urbanist"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
