'use client'

import styles from '../styles/sections.module.css'
import IconSmallArrow from './icons/IconSmallArrow'

type ProjectProps = {
  title: string,
  desc: string,
  github?: string,
  external?: string,
  tech: string[],
  image: string
}

export default function Project({ title, desc, github, external, tech, image }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.image}><img src={image}/></div>
      <div className={styles.main}>
        <div className={styles.title}>{title} <span><IconSmallArrow /></span></div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tech}>
          {
            tech && tech.map((item, idx) => {
              return <span key={`${title}-${idx+1}`}>{item}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}
