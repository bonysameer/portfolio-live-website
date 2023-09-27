import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/bony1.png';
import HeaderSocials from './HeaderSocials';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
         <h5>Hello I'm</h5>
         <h1>Bony Sameer</h1>
         {/* <h5 className='text-light'>Fullstack Developer</h5> */}
         <h4 className='text-light typical__react'><Typical 
            loop={Infinity}
            steps={[
              "Ethusiastic Dev",
              2000,
              "Full Stack Developer",
              2000,
              "Mern Stack Dev",
              2000,
              "React Developer",
              2000,
              "Cross Platform v",
              2000
            ]}
         /></h4>

         <CTA />
         <HeaderSocials />

         <div className='me'>
            <img className='profile' src={ME} alt='profile_picture'/>
         </div>
         <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header