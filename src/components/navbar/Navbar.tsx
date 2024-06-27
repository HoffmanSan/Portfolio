import Link from '../link/Link'
import './navbar.css'

export default function Navbar() {

  return (
    <nav className='navbar'>
      <ul>
        
        <li><Link to='header' content="home" className="button-type-B"/></li>

        <li><Link to='about' content="about" className="button-type-B"/></li>

        <li><Link to='projects' content="projects" className="button-type-B"/></li>

        <li><Link to='contact' content="contact" className="button-type-B"/></li>

      </ul>
    </nav>
  )
}