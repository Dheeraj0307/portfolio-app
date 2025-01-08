
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

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
