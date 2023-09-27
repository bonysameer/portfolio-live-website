import React from 'react';
import './about.css';
import ME from '../../assets/hire-me-logo.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='aboutimage'/>
          </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>50+ WorldWide</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>50+ Completed</small>
            </article>
          </div>

          <p>
            I'm a FullStack Developer and UI Designer from Bengaluru, India.
            I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
            I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS, JAVASCRIPT, etc..
            <br/><br/>
            When I am not coding or pushing pixels, you'll find me in the Snooker club or at Home.
            {/* lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap int */}
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About