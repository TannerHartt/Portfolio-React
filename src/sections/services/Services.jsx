import data from './data.js';
import Card from '../../components/Card/Card.jsx';
import './services.css';

function Services() {
  return (
    <section id="services">
        <h2>Services</h2>
        <p>I give you the best in all the serives below</p>
        <div className="container services__container">
          {
            data.map((service) => {
              return (
                <Card key={service.id} className="service light">
                  <div className="service__icon">{service.icon}</div>
                  <div className="service__details">
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </div>
                </Card>
              );
            })
          }
        </div>
    </section>
  )
}

export default Services;