import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCategories from '../components/EventCategories/EventCategories';

const Events = ({ setShowLogin, loggedIn }) => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const upcomingEvents = [
    { id: 4, image: '/assets/img/events/event4.jpg', date: '25th September 2024', price: '799', title: 'WEDNESDAY NIGHT', paymentLink: 'https://buy.stripe.com/test_6oEbIJ5Gg7rO1c4288' },
    { id: 3, image: '/assets/img/events/event3.jpg', date: '20th October 2024', price: '1499', title: 'Diwali Parties', paymentLink: 'https://buy.stripe.com/test_bIY6op1q0bI4080289' },
    { id: 1, image: '/assets/img/events/event1.jpg', date: '9th November 2024', price: '1199', title: 'SPACE TECH', paymentLink: 'https://buy.stripe.com/test_3cscMN5Gg7rOg6YeUW' },
    { id: 2, image: '/assets/img/events/event2.jpg', date: '24th December 2024', price: '999', title: 'Christmas EVE', paymentLink: 'https://buy.stripe.com/test_cN24ghecMaE05skdQT' },
  ];

  const handleJoinNowClick = (event) => {
    if (!loggedIn) {
      setShowLogin(true); // Show login popup if user is not logged in
    } else {
      // Redirect to the payment link if the user is logged in
      window.open(event.paymentLink, '_blank');
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
      <div className="relative w-full h-64 mb-8">
        <img
          src="/assets/img/eventplanning/eventplanning4.jpg"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bolder tracking-wider Cinzel ">EVENTS</h1>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 ExpletusSans">Upcoming Events</h2>
        <div
          ref={carouselRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] bg-white shadow-md rounded-lg p-4 snap-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto max-h-[320px] md:max-h-[400px] object-cover rounded-t-md"
                  />
                </div>
                <div className="flex justify-between items-start mt-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-2 Urbanist">{event.date}</p>
                    <h3 className="text-lg md:text-xl font-bold mb-2 Cinzel">{event.title}</h3>
                  </div>
                  <p className="text-gray-800 font-bold text-md md:text-lg Urbanist">₹{event.price}</p>
                </div>
                <button
                  onClick={() => handleJoinNowClick(event)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-300 w-full mt-4 Cinzel font-semibold text-md"
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EventCategories />
    </div>
  );
};

export default Events;
