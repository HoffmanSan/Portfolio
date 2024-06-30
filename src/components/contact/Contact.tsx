// styles
import './contact.css'

// components
import Form from '../form/Form'
import AnimationWrapper from '../animationWrapper/AnimationWrapper'

// others
import { useContext } from 'react'
import { TemplateContext } from '../../contexts/TemplateContext'
import { TemplateContextType } from '../../types/types'
import Footer from '../footer/Footer'

export default function Contact() {
  const { template: { contact } } = useContext(TemplateContext)  as TemplateContextType
  const hidden = { opacity: 0, y: 75 }
  const visible = { opacity: 1, y: 0 }
  const transition = { type: 'spring', stifness: 200, duration: 0.5, delay: 0.5 }
  const isOnMobile = window.screen.width < 600

  return (
    <section id="contact" className='flex-column-center' style={isOnMobile ? { minHeight: '100vh' } : {}}>

      <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>

      <div className="contact-content">
        <AnimationWrapper hidden={hidden} visible={visible} transition={transition}>
          <h3>{contact.headingOne}</h3>
        </AnimationWrapper>
        
        <AnimationWrapper hidden={hidden} visible={visible} transition={transition} style={{ width: '100%', textAlign: 'center' }}>
          <span>{contact.headingTwo}</span>
        </AnimationWrapper>

        <Form />
      </div>
      <Footer/>
    </section>
  )
}