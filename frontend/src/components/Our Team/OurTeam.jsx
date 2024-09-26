import React from 'react';

const teamMembers = [
  {
    name: "Shashank Dhiman",
    title: "Owner & Creative Director",
    imageUrl: "/assets/img/aboutus/shashank.jpg",
    description: `A seasoned and standout event professional in the northern California wedding industry...`,
  },
  // Add more members as needed
];

const OurTeam = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <h2 className="text-center text-4xl font-bold mb-12">Meet Your Team</h2>

      <div className="max-w-7xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full mb-12 border-b border-gray-300 pb-8 px-4 lg:px-8">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="max-h-60 w-auto mx-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-xl text-gray-600 mb-4">{member.title}</p>
              <p className="text-lg text-gray-500 leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
