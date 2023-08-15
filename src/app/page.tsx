import Image from 'next/image'
import styles from './styles/page.module.css'
import Hero from './components/Hero'
import Sections from './components/Sections'

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Hero />
        <Sections />
      </div>
    </>
  )
}
