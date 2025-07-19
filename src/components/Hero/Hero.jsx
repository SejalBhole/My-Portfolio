import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero" aria-label="Hero section" role="main">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br/>
          <span className={styles.white}>S</span>
          <span className={styles.lightBlue}>e</span>
          <span className={styles.blue}>j</span>
          <span className={styles.white}>a</span>
          <span className={styles.lightBlue}>l</span>
          &nbsp;
          <span className={styles.blue}>B</span>
          <span className={styles.white}>h</span>
          <span className={styles.lightBlue}>o</span>
          <span className={styles.blue}>l</span>
          <span className={styles.white}>e</span>
        </h1>
        <p className={styles.description}>
        From front-end aesthetics to back-end logic, I craft innovative projects that unite functionality, design, and a touch of AI.      </p>
        <div className={styles.btnContainer}>
          <a href="#contact" className={styles.contactBtn} aria-label="Contact Me section">
            Contact Me
          </a>
          <a href="assets/Sejal Bhole - Resume(4).pdf" className={styles.contactBtn} download aria-label="Download CV as PDF">
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Portrait of Sejal Bhole at a desk"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};