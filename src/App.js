
import './App.css';
import Client from './component/Client';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Navbar from './component/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Skills from './pages/Skills';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Portfolio from './pages/Portfolio';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: 'ease-in-out',
    });

  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
