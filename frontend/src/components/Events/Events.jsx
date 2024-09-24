import React from 'react';
import './Events.css';

const Events = () => {
  // Array of event data with corresponding background images
  const events = [
    {
      id: 1,
      title: "Corporate Events",
      description: "We know how to make your event feel intentional, intimate, and engaging. Whether it’s an event for 10 or 500, we bring gracious hosting and thoughtful design to meet in one immersive and unforgettable experience.",
      imageSrc: "/assets/img/coperate/coperate1.jpg",
      backgroundImage: "/assets/img/coperate/coperate-bg.jpg",
      buttonText: "Learn More",
      buttonLink: "/corporate-events",
    },
    {
      id: 2,
      title: "Event Planning",
      description: "Planning your next big event? We ensure that every detail is handled with precision and care, allowing you to relax and enjoy.",
      imageSrc: "/assets/img/eventplanning/eventplanning.jpg",
      backgroundImage: "/assets/img/eventplanning/event-bg.jpg",
      buttonText: "Learn More",
      buttonLink: "/event-planning",
    },
    // Add more events here
  ];

  return (
    <section className="events-section bg-gray-50 py-20 w-full ">
      <div className="w-full px-0">
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={`event-card ${index % 2 === 0 ? 'bg-white' : 'bg-[#DED2BC]'} py-10 `}
          >
            <div
              className={`flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 mb-16 px-8 lg:px-0 py-16 lg:py-0 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full flex justify-center">
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="rounded-lg shadow-lg event-image"
                />
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-0 lg:pl-10 text-section flex justify-center flex-col items-center">
                <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed Urbanist text-lg">
                  {event.description}
                </p>

                {/* Learn More Button */}
                <a
                  href={event.buttonLink}
                  className="learn-more-btn border border-gray-400 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 ExpletusSans"
                >
                  {event.buttonText}
                </a>
              </div>
            </div>

            {/* Full-Width Background Image Section */}
            <div
              className="background-section overflow-hidden"
              style={{ backgroundImage: `url(${event.backgroundImage})` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
