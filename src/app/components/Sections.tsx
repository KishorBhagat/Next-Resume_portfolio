import About from './sections/About'
import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import styles from '../styles/sections.module.css'
import Education from './sections/Education'

export default function Sections() {
  return (
    <div className={styles.sections} id='home'>
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Footer />
    </div>
  )
}
