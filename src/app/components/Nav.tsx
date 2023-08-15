"use client";

import { useEffect, useState } from "react";
import styles from "../styles/hero.module.css";

export default function Nav() {
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ['about', 'experience', 'projects'];
      const scrollTop = window.scrollY + 250;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if(sectionElement){
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          if(scrollTop >= sectionTop && scrollTop < sectionBottom){
            setActiveSection(section);
          }
        }
      })
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.li}>
          <a href="#about" className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}>
            <span className={styles.bar}></span>
            <span className={styles.navText}>ABOUT</span>
          </a>
        </li>
        <li className={styles.li}>
          <a href="#experience" className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}>
            <span className={styles.bar}></span>
            <span className={styles.navText}>EXPERIENCE</span>
          </a>
        </li>
        <li className={styles.li}>
          <a href="#projects" className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}>
            <span className={styles.bar}></span>
            <span className={styles.navText}>PROJECTS</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
