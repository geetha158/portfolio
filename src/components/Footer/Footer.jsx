import React from 'react'
import {faInstagram,faTwitter,faLinkedinIn,faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='flex_box'>
                <p className='two'>© Copyrights by G.S. Works.</p>
                <p>Powered and secured</p>
            </div>
            <div className='flex_box'>
                <p className='bold'>Call</p>
                <p>7396094410</p>
            </div>
            <div className='flex_box'>
                <p className='bold'>Write</p>
                <p>co.geetha15@gmail.com</p>
            </div>
            <div className='flex_box'>
                <p className='bold one'>Follow</p>
                <p className='icons'>
                    <p><FontAwesomeIcon icon={faFacebookF}/></p>
                    <p><FontAwesomeIcon icon={faLinkedinIn}/></p>
                    <p><FontAwesomeIcon icon={faTwitter} /></p>
                    <p><FontAwesomeIcon icon={faInstagram} />
                    </p>
                </p>
            </div>

        </div>
    </div>
  )
}

export default Footer