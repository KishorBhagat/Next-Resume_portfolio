import styles from '../styles/sections.module.css'
import IconSmallArrow from './icons/IconSmallArrow'

interface ExperienceProps {
    startDate: string,
    endDate: string,
    position: string,
    company: string,
    desc: string,
    tech: string[]
}

export default function Experience({ startDate, endDate, position, company, desc, tech }: ExperienceProps) {
  return (
    <div className={styles.experience_single}>
      <div className={styles.tenure}>{startDate} — {endDate}</div>
      <div className={styles.main}>
        <div className={styles.position}>{position} <span style={{fontSize: '8px', margin: "4px"}}>•</span> {company} <span><IconSmallArrow /></span></div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tech}>
          {
            tech && tech.map((item, idx) => {
              return <span key={`exp-${tech}-${idx+1}`}>{item}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}
