import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <>
    <div>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <div className="text-center p-10">
        <h1 
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Abhijeet
        </h1>

        <h2 
          className="text-3xl mb-6"
        >
          Frontend Developer & React Enthusiast
        </h2>

        <div 
          className="flex justify-center gap-4"
        >
         
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-400 hover:text-white">
          <Link to="/contact">Contact</Link>
          </button>
        </div>
   <div className='flex items-center justify-center gap-4 mt-4'>
   <a 
              href="https://www.linkedin.com/in/abhijeet-kasera08/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="text-3xl text-white ml-4 cursor-pointer mt-4 hover:text-blue-300"
              />
            </a>
            <a href="https://github.com/Abhikasera08"
            target='_blank'
            rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} className="text-3xl text-white ml-4 cursor-pointer mt-4 hover:text-blue-300"/>
            </a>
            <a href="mailto:abhikasera44@gmail.com"
             target='_blank'
             rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGoogle} className="text-3xl text-white ml-4 cursor-pointer mt-4 hover:text-blue-300"/>
            </a>
   </div>

        </div>
    </div>
    </div>
    <About/>
    <Project/>
    <Contact/>
    
   </> 
  )
}

export default Home
