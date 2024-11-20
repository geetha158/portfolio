import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact_main'>
        <div className='contact_container'>
          <div className='contact_header'>
              <p className='blue'></p>
              <h1>Contact Me</h1>
          </div>
          <div className='contact_form'>
            <div className='names'>
              <div className='first_name'>
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>
              <div className='last_name'>
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className='email'>
              <label htmlFor="">Email Id</label>
              <input type="email" />
            </div>
            <div className='subject'>
            <label htmlFor="">Subject</label>
            <input type="text" />

            </div>
            <div className='Message'>
            <label htmlFor="">Type your Message here</label>
            <textarea type="text" />
            </div>

            <div className='button'>
              <button>SEND</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact