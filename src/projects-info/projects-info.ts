import { Project } from "../types/types";

const PROJECTS: Project[] = [
  {
    title: "Sklepico",
    category: "solo",
    description: "A one-to-many platform for e-commerce. Allows a single administrator to display goods for multiple users to purchase. Built with MERN stack (Mongo, Express, React, Node). Includes custom user authentication, payment processing with Stripe Checkout and a dedicated admin platform for CRUD operations.",
    adminCreds: [{ login: 'admin@admin.com' }, { password: 'Test12345!' }],
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
    category: "solo",
    description: "Web application for an event hosting enterprise (it also happens to be the very first website I made). Contains four different room layouts - each with custom seat booking functionality, payment processing using Stripe Payment Element, e-mail contact with the staff / booking confirmation to user mailbox with EmailJS. Administrator powers (events editing/adding/deleting) via Firebase GUI. Image generation with Hotpot, image storage with Firestore.",
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
    category: "shared",
    description: "An application for calories monitoring and weight maintaining.",
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
]

export default PROJECTS;