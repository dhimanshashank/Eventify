import React from 'react'
import Hero from '../components/Hero/Hero'
import EventButtons from '../components/EventButtons/EventButtons'
import PartnersSection from '../components/Partners/PartnersSection'
import OurTeam from '../components/Our Team/OurTeam'
import Events from '../components/Events/Events'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
        <Hero />
        <EventButtons />
        <PartnersSection />
        <WhyChooseUs />
        <OurTeam />
        <Events />
        <Testimonial />
    </>
  )
}

export default Home
