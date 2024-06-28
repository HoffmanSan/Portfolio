import { useState } from "react"
import "./card.css"
import Modal from "../modal/Modal"
import { Project } from "../../types/types"
import AnimationWrapper from "../animationWrapper/AnimationWrapper"

type Props = {
  project: Project
  index: number
}

export default function Card({ project, index } : Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AnimationWrapper hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stifness: 300, duration: 1, delay: 0.5 + 0.2 * (index + 1) }}>
      <div className="card">
        <img src={project.image} alt={project.title}/>
        <div className="card-details">
          <h2>{project.title}</h2>
          <p>{project.description.substring(0, project.description.indexOf(".") + 1)}</p>

          <div className="buttons-container">

            <button className="button-type-A" onClick={() => setIsModalOpen(true)}>
              Learn more
            </button>

            <button className="button-type-A" onClick={() => window.open(`${project.link}`, '_blank')}>
              Visit website
            </button>

          </div>
        </div>

        
      </div>
    
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} project={project} />
    </AnimationWrapper>
  )
}