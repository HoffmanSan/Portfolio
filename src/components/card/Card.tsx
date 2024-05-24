import "./card.css"

type CardProps = {
  project: {
    title: string,
    technologies: string[]
  }
}

export default function Card({project}: CardProps) {
  const essentialTech = project.technologies.slice(0, 3);

  return (
    <div className="card" style={{ backgroundImage: `url("/src/assets/${project.title}.png")` }}>
        <div className="card-details">
          <h2>{project.title}</h2>
          <ul>
            {essentialTech.map(item => (
              <li key={item}>
                {item}
                {essentialTech.indexOf(item) !== essentialTech.length - 1 && ' / '}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => alert('Kliknieto')}>Learn more</button>
    </div>
  )
}