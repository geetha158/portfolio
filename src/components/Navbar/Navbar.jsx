import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
const Navbar = () => {

  const menu_list=document.getElementsByClassName('menu_list_container')
  const menu_open=document.getElementsByClassName('menuIcon')
  const navbar=document.getElementsByClassName('navbar')
  console.log(navbar[0])
  console.log(menu_open[0])
  //menu_list[0].style.display='none'


  function openMenubar(e){

    console.log(e.target.parentElement)
    e.target.parentElement.style.display='none'
    menu_list[0].style.display='flex'
    navbar[0].style.alignItems='start'
    console.log(navbar[0])
    console.log(menu_open[0])
    console.log(menu_list[0])
   

  }

  function closeMenu(e){
    console.log(e.target.parentElement)
    menu_list[0].style.display='none'
    menu_open[0].style.display='flex'
    navbar[0].style.alignItems='center'
    console.log(navbar[0])
    console.log(menu_open[0])
    console.log(menu_list[0])
    

  }

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
        <div className='menuIcon' onClick={openMenubar}><FontAwesomeIcon icon={faBars} /></div>
        <div className='menu_list_container'>
        <div className='menu_list'>
        <p><Link to={'/'}>ABOUT ME</Link></p>
            <p><Link to={'/resume'}>RESUME</Link></p>
            <p><Link to={'/projects'}>PROJECTS</Link></p>
            <p><Link to={'/contact'}>CONTACT</Link></p>

        </div>
        <div className='cross_icon' onClick={closeMenu}><FontAwesomeIcon icon={faCircleXmark} /></div>
        </div>
        
        </div>
    </div>
  )
}

export default Navbar