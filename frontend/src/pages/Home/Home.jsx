import React from 'react'
import Hero from '../../components/Hero/Hero'
import EventButtons from '../../components/EventButtons/EventButtons'
import PartnersSection from '../../components/Partners/PartnersSection'
import OurTeam from '../../components/Our Team/OurTeam'
import Events from '../../components/Events/Events'

const Home = () => {
  return (
    <>
        <Hero />
        <EventButtons />
        <PartnersSection />
        <OurTeam />
        <Events />
    </>
  )
}

export default Home
