import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#DED2BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/assets/img/eventplanning/eventplanning3.jpg"
              alt="Event planning"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Quote Section */}
          <div className="text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-semibold text-black italic Cinzel">
              "Great events don’t just happen, they are carefully planned."
            </p>
            <p className="text-lg text-gray-800 mt-4 Urbanist lg:pt-2 lg:pl-10">
              ~ The Eventify Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
