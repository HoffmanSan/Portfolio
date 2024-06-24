import './header.css'
import ProfessionHeader from '../professionHeader/ProfessionHeader'
import HeaderBackground from '../headerBackground/HeaderBackground'
import Link from '../link/Link'
import { m } from 'framer-motion'

export default function Header() {

  return (
    <header id='header' className='header'>
      <HeaderBackground />
      <m.div
        className='header-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hey, I'm <span>Maciek</span>
        </m.h1>
        <ProfessionHeader />
        <m.div
          className='header-buttons-container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <Link to="about" content="About Me"/>
          <Link to="projects" content="My Projects"/>
        </m.div>
      </m.div>
    </header>
  )
}