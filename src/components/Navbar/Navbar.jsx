import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#about');

  React.useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#about');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className={activeHash === '#about' ? styles.menuItemActive : ''}>About</a>
          </li>
          <li>
            <a href="#education" className={activeHash === '#education' ? styles.menuItemActive : ''}>Education</a>
          </li>
          <li>
            <a href="#skills" className={activeHash === '#skills' ? styles.menuItemActive : ''}>Skills</a>
          </li>
          <li>
            <a href="#experience" className={activeHash === '#experience' ? styles.menuItemActive : ''}>Experience</a>
          </li>
          <li>
            <a href="#projects" className={activeHash === '#projects' ? styles.menuItemActive : ''}>Projects</a>
          </li>
          <li>
            <a href="#contact" className={activeHash === '#contact' ? styles.menuItemActive : ''}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
