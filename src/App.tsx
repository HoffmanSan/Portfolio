import './App.css'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from './components/contact/Contact'
import { LazyMotion, domMax } from 'framer-motion'
import Footer from './components/footer/Footer'

function App() {

  return (
    <LazyMotion features={domMax}>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </LazyMotion>
  )
}

export default App
