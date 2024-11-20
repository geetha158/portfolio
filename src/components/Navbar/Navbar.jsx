import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav_container'>
      <div className='navbar'>

      
        <div className='name_dets'>
            <p className='blue'></p>
            <p className='name'>Geethasree Pisini</p>
            <p className='slash'>/</p>
            <p className='title'>MERN Stack Developer</p>
        </div>
        <div className='nav_list'>
            <p><Link to={'/'}>ABOUT ME</Link></p>
            <p><Link to={'/resume'}>RESUME</Link></p>
            <p><Link to={'/projects'}>PROJECTS</Link></p>
            <p><Link to={'/contact'}>CONTACT</Link></p>
        </div>
        </div>
    </div>
  )
}

export default Navbar