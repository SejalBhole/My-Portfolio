import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sejal</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.btnContainer}>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/Sejal Bhole - Resume(3).pdf" className={styles.contactBtn} download>
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};