import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/react.png")} alt="React icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating dynamic, responsive user interfaces using modern frameworks like React, ensuring optimal user experience across all devices
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/node.png")} alt="Node.js icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build robust server-side applications and RESTful APIs using Node.js, Express, and databases, focusing on scalability and performance
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/html.png")} alt="Full Stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I seamlessly integrate frontend and backend technologies to deliver complete web solutions, from database design to user interface implementation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
