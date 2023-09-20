import './FormStyle.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea placeholder='Type your message here' rows="6"></textarea>
            <button className='btn'>Submit</button>
        </form>
        
    </div>
  )
}

export default Form

