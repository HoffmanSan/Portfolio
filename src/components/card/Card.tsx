import { useState } from "react"
import "./card.css"
import { m } from 'framer-motion'
import Modal from "../modal/Modal"
import { Project } from "../../types/types"

export default function Card({ project } : { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const description = project.description

  return (
    <>
      <m.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="card"
      >
        <img src={`/src/assets/${project.title}.png`} alt={project.title}/>
        <div className="card-details">
          <h2>{project.title}</h2>
          <p>{description.substring(0, description.indexOf(".") + 1)}</p>
          <div className="buttons-container">
            <button onClick={() => setIsModalOpen(true)}>Learn more</button>
            <button onClick={() => window.open(`${project.link}`, '_blank')}>Visit website</button>
          </div>
        </div>

        
      </m.div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} project={project} />
    </>
  )
}