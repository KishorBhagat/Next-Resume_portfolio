import Link from 'next/link'
import styles from '../styles/hero.module.css'
import IconGithub from './icons/IconGithub'
import IconLinkedIn from './icons/IconLinkedIn'
import IconInsta from './icons/IconInsta'
import IconTwitter from './icons/IconTwitter'

export default function Social() {
  return (
    <ul className={styles.social}>
        <li><Link href='https://github.com/KishorBhagat' target='_blank'><IconGithub /></Link></li>
        <li><Link href='https://www.linkedin.com/in/kishor-bhagat/' target='_blank'><IconLinkedIn /></Link></li>
        <li><Link href='https://www.instagram.com/kishorbhagat663/' target='_blank'><IconInsta/></Link></li>
        <li><Link href='/' target='_blank'><IconTwitter/></Link></li>
    </ul>
  )
}
