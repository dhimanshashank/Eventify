import React from 'react';

const teamMembers = [
  {
    name: "Shashank Dhiman",
    title: "Lead Developer & Co-Founder",
    description: "As the Lead Developer of Eventify, I, along with my team, am responsible for designing, building, and managing the website to deliver a seamless experience for both clients and event organizers. With a passion for creating functional, user-friendly interfaces, I ensure the platform supports efficient event planning and communication. From integrating cutting-edge technology to optimizing the site's performance, my focus is on delivering a modern solution tailored to personal event management. Our mission with Eventify is to simplify event organization, empowering users to effortlessly plan and manage every detail of their special occasions. As a co-creator, I work closely with the team to shape the vision and continually innovate, ensuring that we meet the growing needs of our clients.",
    imageUrl: "/assets/img/aboutus/shashank.jpg",
  },
  // Add more team members here
];

const OurTeam = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="py-10">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="max-w-full h-auto rounded-lg shadow-md"
              style={{ maxWidth: '600px' }}
            />
            <div className="text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.title}</p>
              <p className="text-md">{member.description}</p>
            </div>
          </div>
          <hr className="mt-8 border-t border-gray-300 w-full"/>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
