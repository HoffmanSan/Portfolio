import './contact.css'
import Form from '../form/Form'

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
        <h3>CONTACT ME</h3>
        <span>reach out to me if you have any questions or project ideas</span>
        <Form />
      </div>

    </section>
  )
}