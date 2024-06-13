import "./card.css"
import { m } from 'framer-motion'

type CardProps = {
  project: {
    title: string
    description: string
    technologies: string[]
  }
}

export default function Card({project}: CardProps) {

  return (
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
        <p>{project.description}</p>
        <div className="buttons-container">
          <button onClick={() => alert('Kliknieto')}>Learn more</button>
          <button>Visit website</button>
        </div>
      </div>
    </m.div>
  )
}