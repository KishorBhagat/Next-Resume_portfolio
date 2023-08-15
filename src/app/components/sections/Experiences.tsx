import styles from '../../styles/sections.module.css'
import { experiences } from '../../data/personalDetails'
import Experience from '../Experience'

export default function Experiences() {
  return (
    <section className={styles.experience} id='experience'>
      <h2 className={styles.heading}>EXPERIENCE</h2>
      {
        experiences.map(({ startDate, endDate, position, company, desc, tech }, idx) => {
          return (
            <Experience startDate={startDate} endDate={endDate} position={position} company={company} desc={desc} tech={tech} />
          )
        })
      }
    </section>
  )
}
