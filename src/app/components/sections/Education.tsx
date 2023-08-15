import styles from '../../styles/sections.module.css'
import { education } from '../../data/personalDetails'
import EducationSingle from '../EducationSingle'

export default function Education() {
  return (
    <section className={styles.education} id='education'>
      <h2 className={styles.heading}>EDUCATION</h2>
      {
        education.map(({ startDate, endDate, institution, location, course, grades }, idx) => {
          return (
            <EducationSingle startDate={startDate} endDate={endDate} institution={institution} location={location} course={course} grades={grades}/>
          )
        })
      }
    </section>
  )
}
