import './form.css'
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react'
import { m, useInView, useAnimation } from 'framer-motion';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null)
  const isInView = useInView(form, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  const sendEmail = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess('');
    setError('')
    
    if (!name && !email && !message) {
      submitButton?.current?.blur()
      return
    }


    if (!name || !email) {
      setError('please fill out contact data so I can get back to you')
      submitButton?.current?.blur()
      return
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setError("looks like there's an error in your email, might want to check that out")
      submitButton?.current?.blur()
      return
    }

    if (!message) {
      setError("got something you'd like to discuss? write it down in the message box and hit 'send'")
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
        form.current || '',
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log('SUCCESS!')
          resetForm()
          setSuccess("thank you for your message, I'll get back to you as soon as possible")
          setTimeout(() => setSuccess(''), 5000)
        },
        (error) => {
          console.log('FAILED...', error)
          setIsSending(false)
          setError('whoops - something went wrong, please try again')
        },
      );

    submitButton?.current?.blur()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <m.input
        type='text' 
        name='user_name'
        placeholder='Your name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: {opacity: 1, x: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      <m.input 
        type='text' 
        name='user_email'
        placeholder='Your e-mail...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: {opacity: 1, x: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7, delay: 0.4 }}
      />

      <m.textarea 
        name='message' 
        placeholder='Your message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: {opacity: 1, x: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7, delay: 0.4 }}
      />

      <m.button
        type='submit'
        className="button-type-A"
        id="submit-btn"
        ref={submitButton}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {isSending ? 'Sending...' : 'Send'}
      </m.button>

      {error && (
        <p className="contact-error">{error}</p>
      )}
      {success && (
        <p className="contact-success">{success}</p>
      )}
    </form>
  )
}