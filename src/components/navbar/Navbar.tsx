import Link from '../link/Link'
import './navbar.css'

export default function Navbar() {

  return (
    <nav className='navbar'>
      <ul>
        
        <li><Link to='header' content="home"/></li>

        <li><Link to='about' content="about"/></li>

        <li><Link to='projects' content="projects"/></li>

        <li><Link to='contact' content="contact"/></li>

      </ul>
    </nav>
  )
}