import './header.css'
import HeaderBackground from '../headerBackground/HeaderBackground'
import Link from '../link/Link'
import AnimationWrapper from '../animationWrapper/AnimationWrapper'

export default function Header() {

  return (
    <header id='header' className='header'>
      <HeaderBackground />

      <div className="header-content">
        <AnimationWrapper hidden={{ opacity: 0 }} visible={{ opacity: 1, zIndex: 3 }} transition={{ duration: 1, delay: 0.5 }}>
          <h1> Hi, my name is <span>Maciek</span></h1>
        </AnimationWrapper>
        
        <AnimationWrapper hidden={{ opacity: 0 }} visible={{ opacity: 1, zIndex: 3 }} transition={{ duration: 1, delay: 1.5 }}>
          <h2>I'm a web developer</h2>
        </AnimationWrapper>
          
        <AnimationWrapper hidden={{ opacity: 0 }} visible={{ opacity: 1, zIndex: 3 }} transition={{ duration: 1, delay: 2.5 }}>
          <div className='header-buttons-container'>
            <Link to="about" content="About Me" className="button-type-A"/>
            <Link to="projects" content="My Projects" className="button-type-A"/>
            <Link to="contact" content="Contact Me" className="button-type-A"/>
          </div>
        </AnimationWrapper>
        
      </div>
      
    </header>
  )
}