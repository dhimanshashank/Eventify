import React from "react";
import About from "../components/About";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#DED2BC]">
      {/* Hero Section with Image */}
      <div className="relative w-full h-64 mb-8">
        <img
          src="/assets/img/aboutus/aboutus-bg.jpg"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bolder tracking-wider Cinzel">
            ABOUT
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center mt-16 max-w-2xl w-full p-8 rounded md:p-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 Cinzel">
          Have a seat and stay a while.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-16 Urbanist ">
          Here, hospitality steers the ship, all love stories are welcome, and
          the planning journey is always informed and inspired by your needs,
          worries, and wishes. So come on in, share your story, and stay a
          while. We’re all ears and we can’t wait to custom-craft an event that
          serves as a catalyst for memories you and yours will hold tight to for
          a lifetime to come—because we’re always game for a great gathering
          with good company.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-[#F6F4EF] py-16 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans text-center">
          Our Team
        </h2>
        <About />
      </div>
    </div>
  );
};

export default AboutUs;
