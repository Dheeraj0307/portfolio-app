
import './App.css';
import HeroSection from './component/HeroSection';
import Navbar from './component/Nav';
import About from './pages/About';
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
    </>
  );
}

export default App;
