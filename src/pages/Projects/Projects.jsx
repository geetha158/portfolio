import React from 'react'
import './Projects.css'
import project_data from '../../assests/projects.js'

const Projects = () => {
  console.log(project_data)
  return (
      <div className='project'>
        <div className='project_main'>
          <div className='project_container'>
            <div className='project_header'>
              <p className='blue'></p>
              <h1>Projects</h1>
            </div>
            <div className='project_data'>

              {project_data.map((data)=>{
                return <div className='project_dets'>
                        <div className='right'>
                          <h1>{data.name}</h1>
                          <p>{data.description}</p>
                          <p>{data.skills}</p>
                          <a href={data.link} target='_blank'>CLICK HERE</a>
                        </div>
                        <div className='left'>
                          <img src={data.photo} alt="" />
                        </div>
                   </div>
              })}

            </div>
          </div>
        </div>
      </div>
     
  )
}

export default Projects