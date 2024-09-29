import React from 'react'
import Hero from '../components/Hero/Hero'
import EventButtons from '../components/EventButtons/EventButtons'
import PartnersSection from '../components/Partners/PartnersSection'
import OurTeam from '../components/Our Team/OurTeam'
import Events from '../components/Events/Events'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
// import TestimonialSection from '../components/TestimonialSection/TestimonialSection'

const Home = () => {

  // Example testimonial data
const testimonials = [
  {
    name: "John Doe",
    title: "CEO of PartyPros",
    quote: "Eventify made planning my event seamless and stress-free!"
  },
  {
    name: "Jane Smith",
    title: "Founder of Celebrations Inc.",
    quote: "Their platform is a game-changer for event organizers!"
  },
  {
    name: "Michael Johnson",
    title: "Event Manager",
    quote: "I loved the modern and user-friendly interface!"
  },
];

  return (
    <>
        <Hero />
        <EventButtons />
        <PartnersSection />
        <WhyChooseUs />
        <OurTeam />
        <Events />
        {/* <TestimonialSection items={testimonials}/> */}
    </>
  )
}

export default Home
