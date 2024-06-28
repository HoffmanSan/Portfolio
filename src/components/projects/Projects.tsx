import "./projects.css"
import Card from "../card/Card"
import AnimationWrapper from "../animationWrapper/AnimationWrapper"
import { useContext } from "react"
import { TemplateContext } from "../../contexts/TemplateContext"

export default function Projects(){
  const {template: { projects }} = useContext(TemplateContext)

  return (
    <section id="projects" >
      <div className="projects-content">

        <AnimationWrapper hidden={{ opacity: 0, y: 50 }} visible={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stifness: 200, duration: 1, delay: 0.5 }}>
          <h3>{projects.headingOne}</h3>
        </AnimationWrapper>

        <div className="cards-container">
          {projects.projects.map((item: any, index: number) => (
            <Card project={item} key={item.title} index={index}/>
          ))}
        </div>

      </div>
    </section>
  )
}