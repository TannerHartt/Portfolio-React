import AboutImage from '../../assets/about.jpg';
import { HiDownload } from 'react-icons/hi';
import CV from '../../assets/cv.pdf';
import Card from '../../components/Card/Card.jsx';
import data from './data.js';
import './about.css';

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            {/* <img src={ AboutImage } alt="About Img" /> */}
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map((item) => {
                return (
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.text}</small>
                  </Card>
                );
              })
            }
          </div>
          <p>
            Building Projects has always been my passion. 
            I started learning to code in 2019 and have been 
            building projects ever since. I am a self-taught developer
            and I am always looking for new opportunities to learn and grow. 
            I am currently working on a few projects and I am looking for a job as a Front-End / Full-stack Developer.
          </p>
          <p>
            Hi, my name is Tanner Hart and I am a full-stack developer with a passion for building projects and front end development.
            I am a self-taught developer and I am always looking for new opportunities to learn and grow. As a student pursuing a career in
            software development, I am always looking for new ways to improve my skills and learn new technologies.
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About;