import './header.css'
import HeaderBackground from '../headerBackground/HeaderBackground'
import Link from '../link/Link'
import { m } from 'framer-motion'

export default function Header() {

  return (
    <header id='header' className='header'>
      <HeaderBackground />
      <m.div
        className='header-content'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          Hi, my name is <span>Maciek</span> <br/>
          
        </m.h1>
        <m.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          I'm a web developer
        </m.h2>
        <m.div
          className='header-buttons-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.75 }}
        >
          <Link to="about" content="About Me"/>
          <Link to="projects" content="My Projects"/>
          <Link to="contact" content="Contact Me"/>
        </m.div>
      </m.div>
    </header>
  )
}