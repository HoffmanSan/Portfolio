import styles from './navbar.module.css'
import Link from '../link/Link'


export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <ul>
        <Link to='home' content="home"/>
        <Link to='about' content="about"/>
        <Link to='projects' content="portfolio"/>
        <Link to='contact' content="contact"/>
      </ul>
    </nav>
  )
}