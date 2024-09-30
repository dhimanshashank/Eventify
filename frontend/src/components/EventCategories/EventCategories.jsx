import React from 'react';

const EventCategories = () => {
  const eventCategories = [
    {
      id: 1,
      image: '/assets/img/category pics/birthday.jpg',
      title: 'Birthday Parties',
      description:
        'Celebrate your special day with a fun-filled party, customized to your theme and preferences.',
    },
    {
      id: 2,
      image: '/assets/img/category pics/anniversary.jpg',
      title: 'Anniversary Celebrations',
      description:
        'Mark your milestones with elegant, romantic celebrations designed to reflect your love story.',
    },
    {
      id: 3,
      image: '/assets/img/category pics/reunion.jpg',
      title: 'Reunions',
      description:
        'Reconnect with friends and family in style, with events tailored for nostalgia and fun.',
    },
    // {
    //   id: 4,
    //   image: '/assets/img/events/corporate.jpg',
    //   title: 'Corporate Events',
    //   description:
    //     'Host your corporate events in a professional and polished environment with top-tier services.',
    // },
    // {
    //   id: 5,
    //   image: '/assets/img/events/wedding.jpg',
    //   title: 'Weddings',
    //   description:
    //     'Plan your dream wedding with us, from intimate ceremonies to grand celebrations.',
    // },
  ];

  const previousEvents = [
    {
      id: 1,
      image: '/assets/img/past-events/birthday.jpg',
      title: 'Emily’s 21st Birthday',
      description: 'A vibrant birthday bash with a tropical theme and live music.',
    },
    {
      id: 2,
      image: '/assets/img/past-events/anniversary.jpg',
      title: 'John & Jane’s 25th Anniversary',
      description: 'A silver anniversary celebration with family and friends.',
    },
    {
      id: 3,
      image: '/assets/img/past-events/reunion.jpg',
      title: 'Class of 2010 Reunion',
      description: 'A school reunion filled with laughter, memories, and fun activities.',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-8 mt-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans">
        Event Categories
      </h2>

      {/* Event Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventCategories.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 Cinzel">{event.title}</h3>
              <p className="text-gray-600 Urbanist">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Events Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-12 text-gray-800 ExpletusSans">
        Previous Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previousEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 Cinzel">{event.title}</h3>
              <p className="text-gray-600 Urbanist">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategories;
