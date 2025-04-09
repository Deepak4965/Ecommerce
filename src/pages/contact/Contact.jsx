import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <form action='https://formspree.io/f/moveyvbl' method='POST'>
        <input
        required
        type="text" placeholder='Enter Your Name...' name='username' />
        <input 
        required
        type="email" placeholder='Email' name='email' />
        <textarea 
        required
        name="messeage" placeholder='Messeage' id=""></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
