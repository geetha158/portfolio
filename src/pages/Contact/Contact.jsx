import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const first_name=useRef('');
  const last_name=useRef('');
  const email=useRef('');
  const subject=useRef('');
  const messsage=useRef('');

  const submitHandler=(e)=>{
    e.preventDefault();

    console.log(first_name,last_name,email,subject,messsage)

    if(first_name.current.value==='' || last_name.current.value==='' || email.current.value==='' || subject.current.value==='' || messsage.current.value===''){

      alert('Enter all the details before submitting')

    }

    else{
      alert('Thank you for submission, our team will reach out soon')

      
    emailjs.sendForm('service_s1wwf3k', 'template_79vw5ou',e.target,'2a4lgZh7_UPZLmO2O')
                .then(
                       () => {
                              console.log('SUCCESS!');
                              console.log(e.target)
                             },
                       (error) => {
                                     console.log('FAILED...', error.text);
                                   },
                       );

             first_name='';
             last_name='';
             messsage='';
             email='';
             subject='';          
                };
               }


  return (
    <div className='contact'>
      <div className='contact_main'>
        <div className='contact_container'>
          <div className='contact_header'>
              <p className='blue'></p>
              <h1>Contact Me</h1>
          </div>
          <form className='contact_form' onSubmit={submitHandler}>
            <div className='names'>
              <div className='first_name'>
                <label htmlFor="">First Name</label>
                <input type="text" name='first_name' ref={first_name} />
              </div>
              <div className='last_name'>
                <label htmlFor="">Last Name</label>
                <input ref={last_name} name='last_name' type="text" />
              </div>
            </div>
            <div className='email'>
              <label htmlFor="">Email Id</label>
              <input ref={email} name='email' type="email" />
            </div>
            <div className='subject'>
            <label htmlFor="">Subject</label>
            <input ref={subject} name='subject' type="text" />

            </div>
            <div className='Message'>
            <label htmlFor="">Type your Message here</label>
            <textarea ref={messsage} name='message' type="text" />
            </div>

            <div className='button'>
              <input type='submit' className='button' value='SEND' />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact