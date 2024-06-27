import "./projects.css"
import Card from "../card/Card"
import PROJECTS from "../../projects-info/projects-info"
import AnimationWrapper from "../animationWrapper/AnimationWrapper"

export default function Projects(){

  return (
    <section id="projects" >
      <div className="projects-content">

        <AnimationWrapper hidden={{ opacity: 0, y: 50 }} visible={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h3>PROJECTS</h3>
        </AnimationWrapper>

        <div className="cards-container">
          {PROJECTS.map((item, index) => (
            <Card project={item} key={item.title} index={index}/>
          ))}
        </div>

      </div>
    </section>
  )
}