// styles
import './modal.css'

// others
import { SetStateAction, useContext } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Project, TemplateContextType } from '../../types/types'
import { TemplateContext } from '../../contexts/TemplateContext'

type Props = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
  project: Project
}

export default function Modal({ isModalOpen, setIsModalOpen, project } : Props) {
  const { template: { projects: { modal } } } = useContext(TemplateContext) as TemplateContextType

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

            <h4>{modal.headingOne}</h4>

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
                <big>{modal.adminCreds}</big>
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
              <a href={project.sourceCode} target='_blank'>{modal.buttons[0]}</a>
              <a href={project.link} target='_blank'>{modal.buttons[1]}</a>
            </div>
            
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
