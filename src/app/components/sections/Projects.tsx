import styles from '../../styles/sections.module.css'
import {projects} from '../../data/personalDetails'
import Project from '../Project'

export default function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.heading}>PROJECTS</h2>
      {
        projects.map(({title, desc, github, external, tech, image}, idx) => {
          return (
            <Project title={title} desc={desc} github={github} external={external} tech={tech} image={image} key={`project-${idx}`} />
          )
        })
      }
    </section>
  )
}
