import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCategories from '../components/EventCategories/EventCategories';

const Events = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const upcomingEvents = [
    {
      id: 4,
      image: '/assets/img/events/event4.jpg',
      date: '25th September 2024',
      price: '₹799',
      title: 'WEDNESDAY NIGHT',
    },
    {
      id: 3,
      image: '/assets/img/events/event3.jpg',
      date: '20th October 2024',
      price: '₹1499',
      title: 'Diwali Parties',
    },
    {
      id: 1,
      image: '/assets/img/events/event1.jpg',
      date: '9th November 2024',
      price: '₹1199',
      title: 'SPACE TECH',
    },
    {
      id: 2,
      image: '/assets/img/events/event2.jpg',
      date: '24th December 2024',
      price: '₹999',
      title: 'Christmas EVE',
    },
    // {
    //   id: 5,
    //   image: '/assets/img/events/event5.jpg',
    //   date: '14th February 2025',
    //   price: '$180',
    //   title: 'Valentine’s Day Party',
    // },
  ];

  const handleJoinNowClick = () => {
    const userLoggedIn = false;
    if (!userLoggedIn) {
      navigate('/api/users/login');
    } else {
      console.log('User is logged in and joining the event!');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section with Image */}
      <div className="relative w-full h-96 mb-8">
        <img
          src="/assets/img/eventplanning/eventplanning4.jpg"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bolder tracking-wider Cinzel">
            EVENTS
          </h1>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 ExpletusSans">
          Upcoming Events
        </h2>

        {/* Carousel Wrapper */}
        <div
          ref={carouselRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="min-w-[260px] md:min-w-[300px] lg:min-w-[320px] bg-white shadow-md rounded-lg p-4 snap-center transform hover:scale-105 transition-transform duration-300"
              >
                {/* Event Image */}
                <div className="w-full h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto max-h-[420px] min-h-[200px] object-contain rounded-t-md"
                  />
                </div>

                {/* Event Date and Title */}
                <div className="flex justify-between items-start mt-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-2 Urbanist">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-bold mb-2 Cinzel">
                      {event.title}
                    </h3>
                  </div>

                  {/* Event Price */}
                  <p className="text-gray-800 font-bold text-xl text-right Urbanist">
                    {event.price}
                  </p>
                </div>

                {/* Join Now Button */}
                <button
                  onClick={handleJoinNowClick}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-300 w-full mt-4 Cinzel font-semibold text-lg"
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Event Categories Section */}
      <EventCategories />
    </div>
  );
};

export default Events;
