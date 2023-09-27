import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import asset1 from '../../assets/ux-ui_logo.png';
import asset2 from '../../assets/web-development-logo2.png';
import asset3 from '../../assets/content-creation-logo.png';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

        <div className='container services__container'>
            <article className='services'>
              <div className='service__head'>
              <img className='uiux__logo' src={asset1} alt='uiux'></img>
                  <h3>UI/UX Design</h3>
              </div>

              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>User research, understand the needs, behaviour, and preferences of the target audience.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>User interface design, including selecting appropriate colors, typography, and layout for the brand</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Visual design, including creating graphics, icons, and other visual elements that enhance the user experience</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Collaboration with developers throughout the development process to ensure all design elements are implemented correctly</p>
                </li>
                {/* <li> */}
                  {/* <BiCheck className='service__list-icon' /> */}
                    {/* <p>Lorem Ipsum is simply dummy text of the</p> */}
                {/* </li>                 */}
              </ul>
            </article>
            {/* ----------------END OF FIRST UI/UX CARD---------------- */}
            <article className='services'>
                <div className='service__head'>
                <img className='uiux__logo' src={asset2} alt='web development logo'></img>
                    <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>Custome website design and development</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>Responsive website design for optimal viewing across multiple devices</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>E-commerce website development and integration</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>Content management system (CMS) to improve website visibility on Google and other search engines</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>Website hosting setup and configuration with maintenance support</p>
                  </li>                
                  <li>
                    <BiCheck className='service__list-icon' />
                      <p>Migration of existing website to new platforms or technologies</p>
                  </li>                
                </ul>
            </article>

            {/* ------------------END OF WEB DEVELOPMENT------------- */}

            <article className='services'>
              <div className='service__head'>
                <img className='uiux__logo' src={asset3} alt='content-creation-logo'/>
                  <h3>Content Creation</h3>
              </div>
              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Creation of high-quality, engaging, and original content for websites and social media channels</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Developing a content strategy that aligns with the brand's tone and objectives</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Copywriting for website pages, landing pages, and emal marketting campaigns</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Ghostwriting for thought leadership articles and publications</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                    <p>Content Optimization for search engines (SEO) and readability</p>
                </li>                
              </ul>
            </article>

            {/* --------------END OF CONTENT CREATION------------- */}
        </div>
    </section>
  )
}

export default Services