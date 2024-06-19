import { Project } from "../types/types";

const PROJECTS: Project[] = [
  {
    title: "Sklepico",
    category: "solo",
    description: "An e-commerce application for a goods-distribution enterprise. Includes admin panel allowing to add/edit products and categories. Built with MERN stack - contains custom user authentication functionality and payment options.",
    link: 'https://sklepico.onrender.com/',
    sourceCode: 'https://github.com/HoffmanSan/MERN-app',
    technologies: {
      React: 'https://react.dev/',
      Node: 'https://nodejs.org/en',
      MongoDB: 'https://www.mongodb.com/',
      Express: 'https://expressjs.com/',
      TailwindCSS: 'https://tailwindcss.com/',
      Stripe: 'https://stripe.com/',
      Postman: 'https://www.postman.com/',
      Git: 'https://git-scm.com/',
      GitHub: 'https://github.com/',
      Create_React_App: 'https://create-react-app.dev/'
    }
  },
  {
    title: "Underhill Hall",
    category: "solo",
    description: "Web application for an event hosting enterprise (it also happens to be the very first website I made). Contains four different room layouts - each with custom seat booking functionality, payment processing using Stripe Checkout, e-mail contact with the staff and reservation confirmation to user mailbox with EmailJS. Administrator powers (events editing/adding/deleting) via Firebase GUI.",
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
      Create_React_App: 'https://create-react-app.dev/'
    }
  },
  {
    title: "HealThyBody",
    category: "shared",
    description: "An application for monitoring calorie intake and weight maintaining.",
    link: 'https://twogordev-first-app.onrender.com/',
    sourceCode: 'https://github.com/TwoGorDev/TwoGorDev-First-App',
    technologies: {
      React: 'https://react.dev/',
      Node: 'https://nodejs.org/en',
      PostgreSQL: 'https://www.postgresql.org/',
      Postman: 'https://www.postman.com/',
      Git: 'https://git-scm.com/',
      GitHub: 'https://github.com/',
      Vite: 'https://vitejs.dev/'
    }
  }
]

export default PROJECTS;