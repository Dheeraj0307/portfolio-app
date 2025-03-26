
import './App.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, lazy, Suspense } from 'react';

function App() {

  const Navbar = lazy(() => import('./component/Nav'))
  const HeroSection = lazy(() => import('./component/HeroSection'))
  const About = lazy(() => import('./pages/About'))
  const Services = lazy(() => import('./pages/Services'))
  const Skills = lazy(() => import('./pages/Skills'))
  const Portfolio = lazy(() => import('./pages/Portfolio'))
  const Experience = lazy(() => import('./pages/Experience'))
  const Client = lazy(() => import('./component/Client'))
  const Contact = lazy(() => import('./pages/Contact'))
  const Footer = lazy(() => import('./component/Footer'))



  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);


  return (
    <Suspense fallback={'loading...'}>
      <div className='app-container'>
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
      </div >
    </Suspense>

  );
}

export default App;
