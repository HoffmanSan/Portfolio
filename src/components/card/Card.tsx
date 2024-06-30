// styles
import "./card.css"

// components
import AnimationWrapper from "../animationWrapper/AnimationWrapper"
import Modal from "../modal/Modal"

// others
import { useContext, useState } from "react"
import { Project, TemplateContextType } from "../../types/types"
import { TemplateContext } from "../../contexts/TemplateContext"

type Props = {
  project: Project
  index: number
}

export default function Card({ project, index } : Props) {
  const { template: { projects: { card } } } = useContext(TemplateContext) as TemplateContextType
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isOnMobile = window.screen.width < 370

  return (
    <AnimationWrapper hidden={{ opacity: 0, y: 100 }} visible={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stifness: 300, duration: 1, delay: isOnMobile ? 0.2 : 0.5 + 0.2 * (index + 1) }}>
      <div className="card">
        <img src={project.image} alt={project.title}/>
        <div className="card-details">
          <h2>{project.title}</h2>
          <p>{project.description.substring(0, project.description.indexOf(".") + 1)}</p>

          <div className="buttons-container">

            <button className="button-type-A" onClick={() => setIsModalOpen(true)}>
              {card.buttons[0]}
            </button>

            <button className="button-type-A" onClick={() => window.open(`${project.link}`, '_blank')}>
              {card.buttons[1]}
            </button>

          </div>
        </div>

        
      </div>
    
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} project={project} />
    </AnimationWrapper>
  )
}