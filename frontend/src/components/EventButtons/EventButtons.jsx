import React from 'react';
import './EventButtons.css';

const EventButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-10 mb-16 btn-container">
      {/* Wedding Button */}
      <a
        href="/weddings" // Modify with the correct route
        className="px-3 py-3 text-sm font-semibold border border-gray-400 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 event-buttons"
      >
        Weddings
      </a>

      {/* Corporate Events Button */}
      <a
        href="/corporate-events" // Modify with the correct route
        className="px-8 py-3 text-sm font-semibold border border-gray-400 rounded-full hover:bg-gray-900 hover:text-white transition duration-300 event-buttons"
      >
        Corporate Events
      </a>
    </div>
  );
};

export default EventButtons;