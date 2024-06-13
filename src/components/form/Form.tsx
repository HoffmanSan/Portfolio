import './form.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess('');
    setError('')
    
    if (!name && !email && !message) {
      return
    }


    if (!name || !email) {
      setError('please fill out contact data so I can get back to you')
      return
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setError("looks like there's an error in your email, might want to check that out")
      return
    }

    if (!message) {
      setError("got some ideas you'd like to discuss? write them down in the message box and hit 'send'")
      return
    }

    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        //@ts-ignore
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, })
      .then(
        () => {
          console.log('SUCCESS!')
          setIsSending(false)
          setName('')
          setEmail('')
          setMessage('')
          setSuccess("thank you for your message, I'll get back to you as soon as possible")
        },
        (error) => {
          console.log('FAILED...', error)
          setIsSending(false)
          setError('whoops - something went wrong, please try again')
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input
        type='text' 
        name='user_name'
        placeholder='Your name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input 
        type='text' 
        name='user_email'
        placeholder='Your e-mail...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea 
        name='message' 
        placeholder='Your message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type='submit'>
        {isSending ? 'Sending...' : 'Send'}
      </button>

      {error && (
        <p className="contact-error">{error}</p>
      )}
      {success && (
        <p className="contact-success">{success}</p>
      )}
    </form>
  )
}