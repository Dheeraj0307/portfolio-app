
import './App.css';
// import Client from './component/Client';
// import Footer from './component/Footer';
// import HeroSection from './component/HeroSection';
// import Navbar from './component/Nav';
// import About from './pages/About';
// import Contact from './pages/Contact'; 
// import Experience from './pages/Experience';
// import Services from './pages/Services';
// import Skills from './pages/Skills';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, lazy, Suspense } from 'react';
// import Portfolio from './pages/Portfolio';

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
<<<<<<< HEAD
    <Suspense fallback={'loading...'}>
=======
    <div className='app-container'>
>>>>>>> e6e6a5c2999a7ad9390e702d53b0ec968af2d007
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Portfolio/>
      <Experience />
      <Client />
      <Contact />
      <Footer />
<<<<<<< HEAD
    </Suspense>
=======
    </div>
>>>>>>> e6e6a5c2999a7ad9390e702d53b0ec968af2d007
  );
}

export default App;
