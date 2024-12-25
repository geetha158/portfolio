import React from 'react'
import './Resume.css'
import resume from '../../assests/resume.pdf'
const Resume = () => {
  const skills=['Javascript','HTML','CSS','ReactJS','Redux','NodeJs','ExpressJs','Git & GitHub','Postman','TailwindCss','MongoDB']
  return (
    <div className='resume'>
      <div className='main_resume'>
      <div className='resume_container'>
        
        <div className='resume_header'>
        <p className='blue'></p>
        <h1>Resume</h1>
        </div>

        <div className='exp_header'>
          <p className='exp'>EXPERIENCE</p>
          <p className='cv'> <a href={resume} download='geethasree_resume'>DOWNLOAD CV</a></p>
        </div>

        <div className='exp_dets'>
          <div className='dets_left'>
            <h3>2022-PRESENT</h3>
            <p className='bold'>MERN Developer</p>
            <p>Infosys</p>
            <p>Hyderabad</p>
          </div>
          <div className='dets_right'>
            <p>I am a MERN stack developer proficient in MongoDB, Express.js, React, and Node.js. With experience in these technologies</p>
            <p>My expertise lies in developing responsive, high-performance applications that prioritize user experience.</p>
          </div>
        </div>

        <h3 className='edu'>EDUCATION</h3>
        <div className='exp_dets'>
          <div className='dets_left'>
            <h3>2017-2021</h3>
            <p className='bold'>B.Tech (ME)</p>
            <p>GRIET</p>
            <p>Hyderabad</p>
          </div>
          <div className='dets_right'>
            <p>Graduated with a B.Tech Degree from GRIET, I developed strong problem-solving, communication, and teamwork skills.</p>
            <p>I am excited to apply my academic achievements and passion for learning to contribute effectively in a professional setting.</p>
          </div>
        </div>

        <br />
        <br />

        <div className='exp_dets'>
          <div className='skillset_bg'>

          
          <h3>Professional Skillset</h3>
          <p className='list'>
            {skills.map((skill)=>{
              return <div className='data'>
                <p className='blue'></p>
                <li>{skill}</li>
              </div>
            })}
          </p>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Resume