import './contact.css'
import Form from '../form/Form'
import AnimationWrapper from '../animationWrapper/AnimationWrapper'

export default function Contact() {

  return (
    <section id="contact">

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
        <AnimationWrapper hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h3>CONTACT ME</h3>
        </AnimationWrapper>
        
        <AnimationWrapper hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ width: '100%', textAlign: 'center' }}>
          <span>reach out to me if you have any questions or project ideas</span>
        </AnimationWrapper>

        <Form />
      </div>

    </section>
  )
}