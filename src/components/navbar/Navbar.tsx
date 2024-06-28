import { useContext } from 'react'
import Link from '../link/Link'
import './navbar.css'
import { TemplateContext } from '../../contexts/TemplateContext'

export default function Navbar() {
  const { template: { navbar } } = useContext(TemplateContext)

  return (
    <nav className='navbar'>
      <ul>
        
        <li><Link to='header' content={navbar[0]} className="button-type-B"/></li>

        <li><Link to='about' content={navbar[1]} className="button-type-B"/></li>

        <li><Link to='projects' content={navbar[2]} className="button-type-B"/></li>

        <li><Link to='contact' content={navbar[3]} className="button-type-B"/></li>


      </ul>
    </nav>
  )
}