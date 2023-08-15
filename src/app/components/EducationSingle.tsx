import styles from '../styles/sections.module.css'
import IconSmallArrow from './icons/IconSmallArrow'

interface EducationProps {
    startDate: string,
    endDate: string,
    institution: string, 
    location: string, 
    course: string, 
    grades: string
}

export default function EducationSingle({ startDate, endDate, institution, location, course, grades }: EducationProps) {
  return (
    <div className={styles.education_single}>
      <div className={styles.session}>{startDate} — {endDate}</div>
      <div className={styles.main}>
        <div className={styles.institution}>{institution}<IconSmallArrow /></div>
        <div className={styles.course}>{course}</div>
        <div className={styles.grades}>{grades}</div>
      </div>
    </div>
  )
}
