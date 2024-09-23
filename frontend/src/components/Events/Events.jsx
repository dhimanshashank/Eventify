import React from 'react';
import './Events.css'; // For additional custom styles if needed

const Events = () => {
  // Array of event data with corresponding background images
  const events = [
    {
      id: 1,
      title: "Corporate Events",
      description: "We know how to make your event feel intentional, intimate, and engaging. Whether it’s an event for 10 or 500, we bring gracious hosting and thoughtful design to meet in one immersive and unforgettable experience.",
      imageSrc: "/assets/img/coperate/coperate1.jpg", // Correct path to your image
      backgroundImage: "/assets/img/coperate/coperate-bg.jpg", // Background image for this event
      buttonText: "Learn More",
      buttonLink: "/corporate-events",
    },
    {
      id: 2,
      title: "Event Planning",
      description: "Planning your next big event? We ensure that every detail is handled with precision and care, allowing you to relax and enjoy.",
      imageSrc: "/assets/img/event_planning.jpg", // Event image
      backgroundImage: "/assets/img/coperate/bg-event.jpg", // Background image for this event
      buttonText: "Learn More",
      buttonLink: "/event-planning",
    },
    // Add more events here
  ];

  return (
    <section className="events-section bg-gray-50 py-20">
      <div className="container px-4 lg:px-8">
        {/* Map through the events array */}
        {events.map((event, index) => (
          <div key={event.id}>
            {/* Event Card */}
            <div
              className={`event-card flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 mb-16 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full flex justify-center">
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2 w-full text-center lg:text-left mt-10 lg:mt-0 lg:pl-10 px-4 lg:px-0 mb-20 lg:mb-0">
                <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed Urbanist text-lg">
                  {event.description}
                </p>

                {/* Learn More Button */}
                <a
                  href={event.buttonLink}
                  className="inline-block mt-8 px-8 py-3 text-lg font-bold text-white bg-black hover:bg-gray-800 transition duration-300"
                >
                  {event.buttonText}
                </a>
              </div>
            </div>

            {/* Background Image Section */}
            <div
              className="background-section h-80 w-full bg-fixed bg-cover bg-center mt-20 mb-20"
              style={{ backgroundImage: `url(${event.backgroundImage})` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
