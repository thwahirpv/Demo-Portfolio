import React from 'react'
import HeroImage from '../components/HeroImaage'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Work from '../components/Work'

function Home() {
  return (
    <div>
        <NavBar/>
        <HeroImage/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home
