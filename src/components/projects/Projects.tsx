import "./projects.css"
import Card from "../card/Card"
import { useState } from "react"
import { m } from 'framer-motion'
import PROJECTS from "../../projects-info/projects-info"

export default function Projects(){
  const [category, setCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

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
            <Card project={item} key={item.title} />
          ))}
        </m.div>

      </div>
      
      

    </section>
  )
}