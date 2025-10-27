import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = getImageUrl("hero/heroImage.png");
  }, []);

  return (
    <section className={styles.container} id="hero" aria-label="Hero section" role="banner">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <br/>
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
          From front-end aesthetics to back-end logic, I craft innovative projects that unite functionality, design, and a touch of AI.
        </p>
        <div className={styles.btnContainer}>
          <a 
            href="#contact" 
            className={styles.contactBtn} 
            aria-label="Navigate to Contact Me section"
            role="button"
            tabIndex="0"
          >
            Contact Me
          </a>
          <a 
            href="assets/Sejal Bhole - Resume(4).pdf" 
            className={styles.contactBtn} 
            download 
            aria-label="Download CV as PDF file"
            role="button"
            tabIndex="0"
            rel="noopener"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        {!imageLoaded && (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <div className={styles.skeleton}></div>
          </div>
        )}
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Portrait of Sejal Bhole, a professional full stack developer"
          className={`${styles.heroImg} ${imageLoaded ? styles.imageLoaded : ''}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      </div>
      
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};