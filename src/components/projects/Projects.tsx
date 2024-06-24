import "./projects.css"
import Card from "../card/Card"
import PROJECTS from "../../projects-info/projects-info"
import { useRef, useEffect } from 'react'
import { m, useInView, useAnimation } from "framer-motion"

export default function Projects(){
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <section id="projects" >
      <div className="projects-content">

        <m.h3 
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial='hidden'
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          PROJECTS
        </m.h3>

        <div className="cards-container">
          {PROJECTS.map((item, index) => (
            <Card project={item} key={item.title} index={index}/>
          ))}
        </div>

      </div>
      
      

    </section>
  )
}