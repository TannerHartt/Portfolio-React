import HeaderImage from '../../assets/header.jpg';
import './header.css';
import data from './data';

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Tanner Hart</h3>
        <p>
          You are a click away from learning more about me and my work.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>

        <div className="header__socials">
          {
            data.map((social) => <a key={social.id} href={social.link} target="_blank" rel="noreferrer">{social.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header