import Link from 'next/link'
import styles from '../styles/hero.module.css'
import Nav from './Nav'

export default function HeroMain() {
  return (
    <div className={styles.hero_main}>
        <div>
            <Link className={`${styles.link} ${styles.bigFont}`} href='/'>Kishor Bhagat</Link> 
            <h2 className={styles.h2}>Full Stack Web Developer</h2>
            <p className={styles.p}>I build accessible, inclusive products and digital experiences for the web.</p>
        </div>
        <Nav />
    </div>
  )
}
