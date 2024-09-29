import React from 'react';

const teamMembers = [
  {
    name: "Shashank Dhiman",
    title: "Lead Developer & Co-Founder",
    description:
      "As the Lead Developer of Eventify, I am responsible for not only designing and building the platform but also ensuring its ongoing success by delivering a seamless and intuitive experience for both our clients and event organizers. My role centers around creating user-friendly interfaces that facilitate smooth event planning and communication, leveraging cutting-edge technologies to enhance both performance and functionality. Our mission is to empower users to effortlessly organize every detail of their special occasions, from intimate gatherings to grand celebrations. Through innovative features and a customer-centric approach, I continually lead efforts to refine our platform’s capabilities, ensuring it meets the evolving needs of our clients. As a co-creator, I take an active role in shaping the platform’s vision, driving continuous improvements, and adapting to emerging trends in event technology. From integrating performance optimization techniques to implementing scalable solutions, my focus is always on delivering a robust, future-proof platform that enhances the event planning experience for everyone involved.",
    imageUrl: "/assets/img/aboutus/shashank2.jpg",
  },
  {
    name: "Sumehar Gill",
    title: " Developer & Co-Founder",
    description: "As the Developer and Co-Founder of Eventify, I take the lead in crafting a visually appealing and highly functional frontend that elevates the user experience. My work is centered on building an intuitive, user-friendly interface that makes event planning and management seamless for both organizers and attendees. Beyond functionality, I focus on the aesthetic elements, ensuring the platform is not only efficient but also visually engaging, offering a clean, modern design that users enjoy interacting with. Collaborating closely with my team, I integrate cutting-edge technologies and design principles to ensure that every detail of the user interface is thoughtfully executed. From smooth navigation to polished UI components, I work to enhance every interaction on the platform. My goal is to make Eventify a tool that simplifies even the most complex event management tasks while maintaining a polished and professional look. Together with my team, we continually innovate to ensure Eventify remains at the forefront of event management solutions, providing users with a reliable, beautiful, and efficient platform that turns the stress of planning into an effortless experience.",
    imageUrl: "/assets/img/aboutus/sumehar.jpg",
},
  {
    name: "Taran Wraich",
    title: " Developer & Co-Founder",
    description: "As a Developer and Co-Founder at Eventify, I specialize in designing and implementing core features that enhance the platform’s overall functionality. With a focus on delivering a seamless and responsive user experience, I work to ensure that the platform caters to the evolving needs of both event organizers and attendees. My expertise lies in building scalable solutions that not only improve performance but also provide flexibility for different types of events, from small gatherings to large-scale conferences. I collaborate closely with our team to stay ahead of industry trends, integrating the latest technologies to keep Eventify at the forefront of event management solutions. Whether it’s refining the user interface or optimizing backend processes, my goal is to make event planning as straightforward and intuitive as possible. By providing a robust, adaptable platform, we empower users to manage every aspect of their events with confidence and ease.",
    imageUrl: "/assets/img/aboutus/taran.jpg",
},
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 mb-12 px-4 py-8 md:py-12"
        >
          {/* Image Section (Left on large screens) */}
          <div className="lg:w-1/3 w-full">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section (Right on large screens) */}
          <div className="lg:w-2/3 w-full">
            <h2 className="text-3xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{member.title}</p>
            <p className="text-md text-gray-700 leading-relaxed text-justify md:font-normal">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
