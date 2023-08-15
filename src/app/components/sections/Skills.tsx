import styles from '../../styles/sections.module.css'
import { skills } from '../../data/personalDetails'

export default function Skills() {
  return (
    <section className={styles.skills} id='skills'>
      <h2 className={styles.heading}>SKILLS</h2>
      {
        skills.map(({ type, skills }, idx) => {
          return (
            <></>
          )
        })
      }
    </section>
  )
}
