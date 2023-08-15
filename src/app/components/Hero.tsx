import styles from '../styles/hero.module.css'
import HeroMain from './HeroMain'
import Social from './Social'

export default function Hero() {
  return (
    <div className={styles.hero}>
        <HeroMain />
        <Social />
    </div>
  )
}
