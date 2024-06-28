import { SetStateAction } from 'react'
import './modal.css'
import { AnimatePresence, m } from 'framer-motion'
import { Project } from '../../types/types'

type Props = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  project: Project
}

export default function Modal({ isModalOpen, setIsModalOpen, project } : Props) {

  return (
    <AnimatePresence>
      {isModalOpen && (
        <m.div
          className='modal-background'
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          exit={{ opacity: 0 }}
        >
          <m.div
            className='modal-content'
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >

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

            {project.adminCreds && (
              <div className='admin-creds'>
                <big>Administrator Credentials</big>
                <ul>
                  {project.adminCreds.map((item) => (
                    <li key={Object.keys(item)[0]}>
                      <span>{Object.keys(item)[0]}: </span>
                      <span>{Object.values(item)[0]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="navigation">
              <a href={project.sourceCode} target='_blank'>Source code</a>
              <a href={project.link} target='_blank'>View website</a>
            </div>
            
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
