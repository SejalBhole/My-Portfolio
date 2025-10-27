import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#about');

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#about');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleMenuToggle();
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleKeyDown = (event, targetId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <a className={styles.title} href="/" aria-label="Go to homepage">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={handleMenuToggle}
          onKeyDown={handleMenuKeyDown}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-haspopup="true"
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt=""
            aria-hidden="true"
          />
        </button>
        <ul
          id="main-menu"
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          role="menubar"
          aria-label="Main menu"
        >
          <li role="none">
            <a 
              href="#about" 
              className={activeHash === '#about' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#about')}
              aria-current={activeHash === '#about' ? 'page' : undefined}
            >
              About
            </a>
          </li>
          <li role="none">
            <a 
              href="#education" 
              className={activeHash === '#education' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#education')}
              aria-current={activeHash === '#education' ? 'page' : undefined}
            >
              Education
            </a>
          </li>
          <li role="none">
            <a 
              href="#skills" 
              className={activeHash === '#skills' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#skills')}
              aria-current={activeHash === '#skills' ? 'page' : undefined}
            >
              Skills
            </a>
          </li>
          <li role="none">
            <a 
              href="#experience" 
              className={activeHash === '#experience' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#experience')}
              aria-current={activeHash === '#experience' ? 'page' : undefined}
            >
              Experience
            </a>
          </li>
          <li role="none">
            <a 
              href="#projects" 
              className={activeHash === '#projects' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#projects')}
              aria-current={activeHash === '#projects' ? 'page' : undefined}
            >
              Projects
            </a>
          </li>
          <li role="none">
            <a 
              href="#contact" 
              className={activeHash === '#contact' ? styles.menuItemActive : ''}
              role="menuitem"
              tabIndex={menuOpen ? 0 : -1}
              onClick={handleMenuClose}
              onKeyDown={(e) => handleKeyDown(e, '#contact')}
              aria-current={activeHash === '#contact' ? 'page' : undefined}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
