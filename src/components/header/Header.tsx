import './header.css'
import ProfessionHeader from '../professionHeader/ProfessionHeader'
import HeaderBackground from '../headerBackground/HeaderBackground'
import Link from '../link/Link'

export default function Header() {

  return (
    <header id='header' className='header'>
      <HeaderBackground />
      <div className='header-content'>
        <h1>Hey, I'm <span>Maciek</span></h1>
        <ProfessionHeader />
        <Link to="about" content="About Me"/>
      </div>
    </header>
  )
}