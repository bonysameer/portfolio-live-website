import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/dribbb.gif';
import IMG2 from '../../assets/sorting-visualizer.jpg';
import IMG3 from '../../assets/portfolio__receipe__app.png';
import IMG4 from '../../assets/tindog-pic.jpg';
import IMG5 from '../../assets/amazonclone.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather App Concept & Visualizations',
    github: 'https://github.com/bonysameer/responsive-weatherapp.github.io',
    demo: 'https://bonysameer.github.io/responsive-weatherapp.github.io/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Amazon clone website with sign/signup and many more features',
    github: 'https://github.com/bonysameer/Amazon-clone',
    demo: 'https://bonysameer.github.io/Amazon-clone/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tindog that Connect with Other Dog Owners in Their Area',
    github: 'https://github.com/bonysameer/Tindog....',
    demo: 'https://bonysameer.github.io/Tindog..../'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sorting Visualizer With Graph & Chart UI Design',
    github: 'https://github.com/bonysameer/Sorting-visualizer',
    demo: 'https://bonysameer.github.io/Sorting-visualizer/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Healthy Cooking Recipes and the right Nutrition.',
    github: 'https://github.com/bonysameer/receipeapp-react',
    demo: 'https://bonysameer.github.io/receipeapp-react/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualizations',
    github: '',
    demo: 'https://dribbble.com/shots/15426903-Cryptocurrency-Exchange-App'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio