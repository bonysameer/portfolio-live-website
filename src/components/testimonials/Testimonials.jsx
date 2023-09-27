import React from 'react';
import './testimonials.css';
import AVTAR1 from '../../assets/avtar1.jpg';
import AVTAR2 from '../../assets/avtar2.jpg';
import AVTAR3 from '../../assets/avtar3.jpg';
import AVTAR4 from '../../assets/avtar4.jpg';
// import AVTAR5 from '../../assets/avtar5.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avtar: AVTAR1,
    name: 'Mr. Snow',
    review: 'Sample text, Click to select the text box for review. Click again or double click to start editing the text.',
  },
  {
    avtar: AVTAR2,
    name: 'Shatta Watt',
    review: 'Sample text, Click to select the text box for review. Click again or double click to start editing the text.',
  },
  {
    avtar: AVTAR3,
    name: 'Kwane',
    review: 'Sample text, Click to select the text box for review. Click again or double click to start editing the text.',
  },
  {
    avtar: AVTAR4,
    name: 'Rolex',
    review: 'Sample text, Click to select the text box for review. Click again or double click to start editing the text.',
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
         // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avtar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avtar'>
                  <img src={avtar} alt='' />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review' contentEditable>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials