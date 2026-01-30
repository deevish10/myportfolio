
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './index.css'

function App() {
  return (
    <div className="app">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
