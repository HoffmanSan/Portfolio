import "./projects.css"
import Card from "../card/Card"
import Modal from "../modal/Modal"
import { useState } from "react"
import { m } from 'framer-motion'

const PROJECTS = [
  {
    title: "Sklepico",
    category: "solo",
    description: "An e-commerce application for a goods-distribution enterprise. Includes admin panel allowing to add/edit products and categories. Built with MERN stack - contains custom user authentication functionality and payment options.",
    technologies: ['React', 'Node', 'MongoDB', 'Express', 'Tailwind', 'Stripe']
  },
  {
    title: "Underhill Hall",
    category: "solo",
    description: "Web application for an event hosting enterprise. Includes seat booking functionality and payment options such as credit card, GooglePay and BLIK.",
    technologies: ['React', 'Node', 'Firebase', 'Express', 'SASS', 'Stripe', 'EmailJS']
  },
  {
    title: "HealThyBody",
    category: "shared",
    description: "An application for monitoring calore intake for weight maintaining",
    technologies: ['React', 'Node', 'PostgreSQL']
  }
]

export default function Projects(){
  const [category, setCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" >
      <div className="projects-content">

        <h3>PROJECTS</h3>

        <div className="projects-nav">

          <button
            onClick={() => {setCategory('all'); setFilteredProjects(PROJECTS)}} 
            className={`${category === 'all' && 'active'}`}
          >
            all
          </button>

          <button
            onClick={() => {setCategory('shared'); setFilteredProjects(PROJECTS.filter(item => item.category === 'shared'))}}
            className={`${category === 'shared' && 'active'}`}
          >
            shared
          </button>

          <button 
            onClick={() => {setCategory('solo'); setFilteredProjects(PROJECTS.filter(item => item.category === 'solo'))}} 
            className={`${category === 'solo' && 'active'}`}
          >
            solo
          </button>

        </div>

        <m.div layout className="cards-container">
          {filteredProjects.map(item => (
            <Card project={item} key={item.title} setIsModalOpen={setIsModalOpen}/>
          ))}
        </m.div>

      </div>
      
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

    </section>
  )
}