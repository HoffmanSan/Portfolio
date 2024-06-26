import Sklepico from '../assets/Sklepico.png'
import UnderhillHall from '../assets/Underhill Hall.png'
import HealThyBody from '../assets/HealThyBody.png'

const template = {
  navbar: ['Home', 'About', 'Projects', 'Contact'],
  header: {
    headingOne: 'Hi, my name is ',
    headingTwo: "I'm a web developer",
    buttons: ['About', 'Projects', 'Contact']
  },
  about: {
    headingOne: 'ABOUT',
    bio: "I'm a self-taught web developer with a passion for functionality-rich web applications - check out my work below.",
    priorities: [
      { title: 'Responsive', description: "I make my layouts in a way that allows them to be viewed on devices of various sizes" },
      { title: 'Functional', description: "I create static websites as well as user friendly interactive applications" },
      { title: 'SEO-compatible', description: "I make sure that potential users can easily find your website with search engine optimization" }
    ]
  },
  projects: {
    headingOne: 'PROJECTS',
    projects: [
      {
        title: "Sklepico",
        description: "A one-to-many platform for e-commerce. Allows a single administrator to display goods for multiple users to purchase. Built with MERN stack (Mongo, Express, React, Node). Includes custom user authentication, payment processing with Stripe Checkout and a dedicated admin platform for CRUD operations.",
        adminCreds: [{ login: 'admin@admin.com' }, { password: 'Test12345!' }],
        image: Sklepico,
        link: 'https://sklepico.onrender.com/',
        sourceCode: 'https://github.com/HoffmanSan/MERN-app',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          MongoDB: 'https://www.mongodb.com/',
          Mongoose: 'https://mongoosejs.com/',
          Express: 'https://expressjs.com/',
          TailwindCSS: 'https://tailwindcss.com/',
          Stripe: 'https://stripe.com/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Create_React_App: 'https://create-react-app.dev/',
          Cloudinary: 'https://cloudinary.com/'
        }
      },
      {
        title: "Underhill Hall",
        description: "Web application for an event hosting enterprise (it also happens to be the very first website I made). Contains four different room layouts - each with custom seat booking functionality, payment processing using Stripe Payment Element, e-mail contact with the staff / booking confirmation to user mailbox with EmailJS. Administrator powers (events editing/adding/deleting) via Firebase GUI. Image generation with Hotpot, image storage with Firestore.",
        image: UnderhillHall,
        link: 'https://underhill-hall.onrender.com/',
        sourceCode: 'https://github.com/HoffmanSan/Underhill-Hall',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          Firebase: 'https://firebase.google.com/',
          Express: 'https://expressjs.com/',
          Stripe: 'https://stripe.com/',
          SASS: 'https://sass-css.org/',
          EmailJS: 'https://www.emailjs.com/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Create_React_App: 'https://create-react-app.dev/',
          Hotpot: 'https://hotpot.ai/'
        }
      },
      {
        title: "HealThyBody",
        description: "An application for calories monitoring and weight maintaining. Includes custom user authentication and a database of products shared across all users. Allows to modify calorie intake data for each day separately and add new goals without overriding previous ones. Image storage with Cloudinary. This project was made in cooperation with Bartosz Gortych.",
        image: HealThyBody,
        link: 'https://twogordev-first-app.onrender.com/',
        sourceCode: 'https://github.com/TwoGorDev/TwoGorDev-First-App',
        technologies: {
          React: 'https://react.dev/',
          Node: 'https://nodejs.org/en',
          PostgreSQL: 'https://www.postgresql.org/',
          Postman: 'https://www.postman.com/',
          Git: 'https://git-scm.com/',
          GitHub: 'https://github.com/',
          Vite: 'https://vitejs.dev/',
          Cloudinary: 'https://cloudinary.com/'
        }
      }
    ],
    card: {
      buttons: ['Learn more', 'Visit website']
    },
    modal: {
      headingOne: 'Technologies used in creation of this project:',
      adminCreds: 'Administrator Credentials',
      buttons: ['Source code', 'View website']
    }
  },
  contact: {
    headingOne: 'CONTACT ME',
    headingTwo: 'if you have any questions or project ideas',
    form: {
      name: 'Your name...',
      email: 'Your email...',
      message: 'Your message...',
      button: {
        send: 'Send',
        sending: 'Sending...'
      },
      errors: {
        noContact: 'please fill out contact data so I can get back to you',
        emailError: "your email address doesn't look right, might want to check that out",
        noMessage: "got something you'd like to discuss? write it down in the message box and hit 'send'",
        failed: 'whoops - something went wrong, please try again'
      },
      success: "thank you for your message, I'll get back to you as soon as possible"
    }
  },
  footer: {
    headingOne: 'Feel free to check the links below for more information about me',
    headingTwo: "I also invite you to visit Bartosz Gortych's portfolio",
    anchors: [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/maciej-gortych-4b5bb8272' },
      { name: 'GitHub', link: 'https://github.com/HoffmanSan' },
      { name: 'Visit here', link: 'https://bartoszgortych.com' }
    ]
  }
}

export default template