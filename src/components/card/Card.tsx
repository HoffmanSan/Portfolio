import "./card.css"

type CardProps = {
  project: {
    title: string,
    technologies: string[]
  }
}

export default function Card({project}: CardProps) {
  return (
    <div className="card">
      <h2>{project.title}</h2>
      <button>Learn more</button>
    </div>
  )
}