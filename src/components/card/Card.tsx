import { useState, useRef, useEffect } from "react"
import "./card.css"
import { m, useInView, useAnimation } from 'framer-motion'
import Modal from "../modal/Modal"
import { Project } from "../../types/types"

export default function Card({ project, index } : { project: Project, index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <>
      <m.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.45 * index }}
        className="card"
      >
        <img src={project.image} alt={project.title}/>
        <div className="card-details">
          <h2>{project.title}</h2>
          <p>{project.description.substring(0, project.description.indexOf(".") + 1)}</p>
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