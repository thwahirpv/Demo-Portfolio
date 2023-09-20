import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImageTwo from '../components/HeroImageTwo'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <HeroImageTwo heading="CONTACT"
         text="Lets have a chat"/>
         <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
