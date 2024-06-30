// styles
import './header.css'

// components
import HeaderBackground from '../headerBackground/HeaderBackground'
import Link from '../link/Link'
import AnimationWrapper from '../animationWrapper/AnimationWrapper'

// others
import { useContext } from 'react'
import { TemplateContext } from '../../contexts/TemplateContext'
import { TemplateContextType } from '../../types/types'

export default function Header() {
  const { template: { header } } = useContext(TemplateContext)  as TemplateContextType
  const hidden = { opacity: 0 }
  const visible = { opacity: 1, zIndex: 3 }
  const transition = { duration: 1, delay: 0.5 }

  return (
    <header id='header' className='header'>
      <HeaderBackground />

      <div className="header-content">
        <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 0.5 }}>
          <h1>{header.headingOne}<span>Maciek</span></h1>
        </AnimationWrapper>
        
        <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 1 }}>
          <h2>{header.headingTwo}</h2>
        </AnimationWrapper>
          
        <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 1.5 }}>
          <div className='header-buttons-container'>
            <Link to="about" content={header.buttons[0]} className="button-type-A"/>
            <Link to="projects" content={header.buttons[1]} className="button-type-A"/>
            <Link to="contact" content={header.buttons[2]} className="button-type-A"/>
          </div>
        </AnimationWrapper>
        
      </div>
      
    </header>
  )
}