"use client";

import { useEffect, useState } from "react";
import styles from "../styles/hero.module.css";

export default function Nav() {
  const navItems = ['about', 'education', 'experience', 'projects']
  const [activeSection, setActiveSection] = useState('about');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems];
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
        {
          navItems.map((navItem, idx) => {
            return (
              <li className={styles.li} key={navItem}>
                <a href={`#${navItem}`} className={`${styles.link} ${activeSection === navItem ? styles.active : ''}`}>
                  <span className={styles.bar}></span>
                  <span className={styles.navText}>{navItem}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
}
