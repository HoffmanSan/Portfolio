// styles
import './navbar.css'

// components
import Link from '../link/Link'

// others
import { useContext, useState } from 'react'
import { TemplateContext } from '../../contexts/TemplateContext'
import { TemplateContextType } from '../../types/types'

export default function Navbar() {
  const [isOpenOnMobileDevice] = useState(window.screen.width < 370 ? true : false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { template: { navbar } } = useContext(TemplateContext) as TemplateContextType
  const searchParams = new URLSearchParams(window.location.search)
  const lang = searchParams.get('lang')

  const changeTheme = (theme: string) => {
    document.documentElement.style.setProperty("--color-quinary", theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <nav className='navbar'>
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
        {isOpenOnMobileDevice && (
          <>
            <div className='badge purple' onClick={() => changeTheme("131, 56, 236")}/>
            <div className='badge blue' onClick={() => changeTheme("58, 134, 255")}/>
            <div className='badge green' onClick={() => changeTheme("59, 178, 115")}/>
            <svg onClick={() => setIsMobileMenuOpen(state => !state)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </>
        )}
        <ul className={isOpenOnMobileDevice ? 'navbar-dropdown' : ''} style={isMobileMenuOpen ? { transform: 'translateX(0)', transition: 'transform 400ms 0ms' } : {}}>
          
          <li style={isMobileMenuOpen ? { transform: 'translateX(0)' } : {}}>
              <Link to='header' content={navbar[0]} className="button-type-B" setIsMobileMenuOpen={setIsMobileMenuOpen}/>
          </li>

          <li style={isMobileMenuOpen ? { transform: 'translateX(0)' } : {}}>
            <Link to='about' content={navbar[1]} className="button-type-B" setIsMobileMenuOpen={setIsMobileMenuOpen}/>
          </li>

          <li style={isMobileMenuOpen ? { transform: 'translateX(0)' } : {}}>
            <Link to='projects' content={navbar[2]} className="button-type-B" setIsMobileMenuOpen={setIsMobileMenuOpen}/>
          </li>

          <li style={isMobileMenuOpen ? { transform: 'translateX(0)' } : {}}>
            <Link to='contact' content={navbar[3]} className="button-type-B" setIsMobileMenuOpen={setIsMobileMenuOpen}/>
          </li>

          <li style={isMobileMenuOpen ? { transform: 'translateX(0)' } : {}} onClick={() => setIsMobileMenuOpen(false)}>
            <a href={import.meta.env.VITE_CLIENT_URL + '?lang=PL'} className={`button-type-B ${lang === 'PL' ? "disable-click" : ""}`}>PL</a>
            <a href={import.meta.env.VITE_CLIENT_URL + '?lang=EN'} className={`button-type-B ${lang === 'EN' || lang === null ? "disable-click" : ""}`}>EN</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}