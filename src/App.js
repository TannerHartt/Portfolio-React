// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingNav />
      </main>
    </div>
  );
}

export default App;
