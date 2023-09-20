import './FooterStyle.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='l  eft'>
                <div className='location'>
                    <FaHome size={20} 
                     style={{color: "white", marginRight: "2rem"}}/>
                     <div>
                        <p>123 House Scciety.</p>
                        <p>India.</p>
                     </div>
                </div>
                 
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color: "white", 
                      marginRight: "2rem"}}/>
                        +91 9895779351
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color: "white", 
                      marginRight: "2rem"}}/>
                      <Link to='info@gmail.com'> info@gmail.com</Link>
                      
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p>This is me Thwahir Pv. CEO & 
                    Founder of MT-Tech. I enjoy discussing
                    new projects and design challenges. 
                </p>
                <div className='social'>
                    <FaFacebook 
                    size={30} 
                    style={{color: "white", marginRight: "1rem"}} />
                    <FaTwitter 
                    size={30} 
                    style={{color: "white", marginRight: "1rem"}} />
                    <FaLinkedin 
                    size={30} 
                    style={{color: "white", marginRight: "1rem"}} />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer