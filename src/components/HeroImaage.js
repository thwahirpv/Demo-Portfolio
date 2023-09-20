import './HeroImageStyle.css'
import React from 'react'
import IntroImg from '../assets/wallpaperflare.com_wallpaper.jpg'
import { Link } from 'react-router-dom'

const HeroImaage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} 
            alt="IntroImg" />
        
        <div className='content'>
            <p>HI, IM A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div className='btns'>
                <Link to="/projects" 
                className='btn'>
                    Projects
                </Link>
                <Link to="/contact" 
                className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default HeroImaage
