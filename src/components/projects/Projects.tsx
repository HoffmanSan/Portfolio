import "./projects.css"
import Card from "../card/Card"
import { useState } from "react"

const SOLO_PROJECTS = [
  {
    title: "Sklepico",
    description: "An e-commerce application for a goods-distribution enterprise. Includes admin panel allowing to add/edit products and categories. Built with MERN stack - contains custom user authentication functionality and payment options.",
    technologies: ['React', 'Node', 'MongoDB', 'Express', 'Tailwind', 'Stripe']
  },
  {
    title: "Underhill Hall",
    description: "Web application for an event hosting enterprise. Includes seat booking functionality and payment options such as credit card, GooglePay and BLIK.",
    technologies: ['React', 'Node', 'Firebase', 'Express', 'SASS', 'Stripe', 'EmailJS']
  }
]
const SHARED_PROJECTS = [
  {
    title: "Finance Tracker",
    description: "Simple application for financial expenses monitoring. User authentication and data storage with Firebase.",
    technologies: ['React', 'Firebase']
  }
]

export default function Projects() {
  const [category, setCategory] = useState('all')

  return (
    <div id="projects">
      <div className="projects-content">

        <h3>MY PROJECTS</h3>

        <div className="projects-nav">
          <button onClick={() => setCategory('all')} className={`${category === 'all' && 'active'}`}>all</button>
          <button onClick={() => setCategory('solo')} className={`${category === 'solo' && 'active'}`}>solo</button>
          <button onClick={() => setCategory('shared')} className={`${category === 'shared' && 'active'}`}>shared</button>
        </div>

        <div className="cards-container">
          {category === 'all' && (
            SOLO_PROJECTS.concat(SHARED_PROJECTS).map(item => (
              <Card project={item}/>
            ))
          )}
          {category === 'solo' && (
            SOLO_PROJECTS.map(item => (
              <Card project={item}/>
            ))
          )}
          {category === 'shared' && (
            SHARED_PROJECTS.map(item => (
              <Card project={item}/>
            ))
          )}
        </div>

      </div>
    </div>
  )
}