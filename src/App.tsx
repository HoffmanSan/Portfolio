// components
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from './components/contact/Contact'

// others
import { LazyMotion, domMax } from 'framer-motion'
import { TemplateContextProvider } from './contexts/TemplateContext'

function App() {
  const theme = localStorage.getItem('theme')
  theme && document.documentElement.style.setProperty("--color-quinary", theme)

  return (
    <TemplateContextProvider>
      <LazyMotion features={domMax}>
        <Header />
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </LazyMotion>
    </TemplateContextProvider>
  )
}

export default App
