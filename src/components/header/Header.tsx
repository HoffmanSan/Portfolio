import Link from '../link/Link'

import './header.css'
import ProfessionHeader from '../professionHeader/ProfessionHeader'
import HeaderBackground from '../headerBackground/HeaderBackground'

export default function Header() {

  return (
    <header id='home' className='header'>
      <HeaderBackground />
      <div className='header-content'>
        <h1>Hey, I'm <span>Maciek</span></h1>
        <ProfessionHeader />
        <Link to="about" content="About me" />
      </div>
    </header>
  )
}