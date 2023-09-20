import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImageTwo from '../components/HeroImageTwo'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
        <NavBar/>
        <HeroImageTwo heading="PROJECTS." 
        text="Some of my most recent works"/>
        <Work/>
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Projects
