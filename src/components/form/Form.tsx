// styles
import './form.css'

// components
import AnimationWrapper from '../animationWrapper/AnimationWrapper';

// others
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from 'react'
import { TemplateContext } from '../../contexts/TemplateContext';
import { TemplateContextType } from '../../types/types';

export default function Form() {
  const { template: { contact : { form } } } = useContext(TemplateContext) as TemplateContextType
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(' ');
  const [success, setSuccess] = useState('');
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null)
  const hidden = { opacity: 0, y: 75 }
  const visible = { opacity: 1, y: 0 }
  const transition = { type: 'spring', stifness: 200, duration: 0.75 }
  const style = { width: '100%', display: 'flex', justifyContent: 'center' }

  const sendEmail = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess('');
    setError('')
    
    if (!name && !email && !message) {
      submitButton?.current?.blur()
      return
    }


    if (!name || !email) {
      setError(form.errors.noContact)
      submitButton?.current?.blur()
      return
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setError(form.errors.emailError)
      submitButton?.current?.blur()
      return
    }

    if (!message) {
      setError(form.errors.noMessage)
      submitButton?.current?.blur()
      return
    }

    const resetForm = () => {
      setIsSending(false)
      setName('')
      setEmail('')
      setMessage('')
    }

    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current || '',
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!')
          resetForm()
          setSuccess(form.success)
          setTimeout(() => setSuccess(''), 5000)
        },
        (error) => {
          console.log('FAILED...', error)
          setIsSending(false)
          setError(form.errors.failed)
        },
      );

    submitButton?.current?.blur()
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 0.7 }} style={style}>
        <input
          type='text' 
          name='user_name'
          placeholder={form.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </AnimationWrapper>
      
      <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 0.9 }} style={style}>
        <input 
          type='text' 
          name='user_email'
          placeholder={form.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AnimationWrapper>

      <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 1.1 }} style={style}>
        <textarea 
          name='message' 
          placeholder={form.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </AnimationWrapper>

      <AnimationWrapper hidden={hidden} visible={visible} transition={{ ...transition, delay: 1.3 }} style={style}>
        <button
          type='submit'
          className="button-type-A"
          id="submit-btn"
          ref={submitButton}
        >
          {isSending ? form.button.sending : form.button.send}
        </button>
      </AnimationWrapper>

      {error && (
        <p className="contact-error">{error}</p>
      )}
      {success && (
        <p className="contact-success">{success}</p>
      )}
    </form>
  )
}