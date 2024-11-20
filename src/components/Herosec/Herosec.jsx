import React from 'react'
import './Herosec.css'
import myphoto from '../../assests/myphoto.jpeg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram,faTwitter,faLinkedinIn,faFacebookF} from '@fortawesome/free-brands-svg-icons'

const Herosec = () => {
  return (
    <div className='hero'>
        <div className='hero_sec'>
            <div className='hero_sec_container'>
            <div  className='hero_left'>
                <div><img src={myphoto} alt="" /></div>
                <h4>Geethasree Pisini</h4>
                <p className='line'></p>
                <p className='role'>MERN Developer</p>
                <div className='icons'>
                    <p><FontAwesomeIcon icon={faFacebookF}/></p>
                    <p><FontAwesomeIcon icon={faLinkedinIn}/></p>
                    <p><FontAwesomeIcon icon={faTwitter} /></p>
                    <p><FontAwesomeIcon icon={faInstagram} /></p>
                </div>

            </div>
            <div className='hero_right'>
                <div>
                <h1>Hello</h1>
                <p className='what'>Here's Who I am & What I do</p>
                </div>
                
                <div className='dets'>
                    <p className='project'>PROJECTS</p>
                    <p className='resume'>RESUME</p>
                </div>
                <p className='context'>I am a MERN stack developer proficient in MongoDB, Express.js, React, and Node.js. With experience in these technologies</p>
                <p className='context'>My expertise lies in developing responsive, high-performance applications that prioritize user experience.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Herosec