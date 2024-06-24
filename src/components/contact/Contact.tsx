import './contact.css'
import Form from '../form/Form'
import { m, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

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

      <div ref={ref} className="contact-content">
        <m.h3
          variants={variants}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          CONTACT ME
        </m.h3>
        <m.span
          variants={variants}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          reach out to me if you have any questions or project ideas
        </m.span>
        <Form />
      </div>

    </section>
  )
}