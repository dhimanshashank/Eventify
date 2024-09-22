import React from 'react';
import './OurTeam.css'; // Custom CSS for this section

const OurTeam = () => {
  return (
    <section className="our-team-section bg-gray-50 py-20" id='about'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            // src={require("../path_to_image_directory/image.png")} // replace with the actual image path
            alt="Our Team"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Team</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "It’s hard to put into words how incredible the Eventify team is. I left my wedding weekend feeling like they were part of my family. My family would agree. The team allowed me the greatest gift, to not stress throughout the entirety of the weekend."
          </p>
          <p className="text-gray-600 leading-relaxed">
            I was able to embrace spending time with, and most importantly, party with friends and family. I cannot thank them enough.
          </p>

          {/* Testimonial Source */}
          <p className="mt-6 text-gray-800 italic">Kara Mitchelle, 2023 Bride</p>

          {/* About Us Button */}
          <a
            href="/about-us"
            className="inline-block mt-8 px-6 py-3 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition duration-300"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;