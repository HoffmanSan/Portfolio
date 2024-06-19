import { SetStateAction } from 'react'
import './modal.css'
import { AnimatePresence, m } from 'framer-motion'
import { Project } from '../../types/types'

// local types
type ModalProps = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  project: Project
}

export default function Modal({ isModalOpen, setIsModalOpen, project } : ModalProps) {
  
  return (
    <AnimatePresence>
      {isModalOpen && (
        <m.div
          className='modal-background'
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='modal-content'>

            <button onClick={() => setIsModalOpen(false)} className='close-button'>X</button>

            <h4>Technologies used in creation of this project:</h4>

            <div className="technologies">
              {Object.entries(project.technologies).map(([tech, link]) => (
                <a key={tech} href={link} target='_blank'>
                  {tech.replaceAll('_', ' ')}
                </a>
              ))}
            </div>

            <p>{project.description}</p>
            
            <div className="navigation">
              <a href={project.sourceCode} target='_blank'>Source code</a>
              <a href={project.link} target='_blank'>View website</a>
            </div>
            
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
