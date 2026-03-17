import React from 'react'
import './About.css'

function About() {
  return (
   <div className='contacta'>
      <form action="https://formspree.io/f/mwpypgqe" method='POST'>
        <input type="text" placeholder='Enter Your Name...' name='username' required />
        <input type="Email" placeholder='email' name='email' required />
        <textarea name="" placeholder='message' required></textarea>
        <button>Submite</button>
      </form>
    </div>
  )
}

export default About
