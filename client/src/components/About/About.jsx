import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

// Updated card data with relevant icons and improved descriptions
const aboutItems = [
  {
    icon: "about/frontend-icon.png", // New icon for frontend
    alt: "Monitor icon representing frontend development",
    title: "Frontend Developer",
    description:
      "Designs and implements engaging user interfaces using modern frameworks like React. Responsible for translating design mockups into responsive, accessible, and high-performance web applications, ensuring optimal user experience across devices.",
  },
  {
    icon: "about/backend-icon.png", // New icon for backend
    alt: "Database and gear icon representing backend development",
    title: "Backend Developer",
    description:
      "Architects and maintains the server-side logic, databases, and APIs. Ensures data integrity, security, and scalability by leveraging technologies such as Node.js, Express, and database systems to power robust application functionality.",
  },
  {
    icon: "about/fullstack-icon.png", // New icon for full stack
    alt: "Person at computer icon representing full stack development",
    title: "Full Stack Developer",
    description:
      "Bridges frontend and backend development to deliver complete, end-to-end solutions. Integrates user interfaces with server logic, manages deployment pipelines, and ensures seamless operation of all application layers.",
  },
];

export const About = () => (
  <section className={styles.container} id="about" aria-labelledby="about-title" role="region">
    <h2 className={styles.title} id="about-title">About</h2>
    <div className={styles.content}>
      <img
        src={getImageUrl("about/aboutImage.png")}
        alt="Portrait of developer at a desk"
        className={styles.aboutImage}
        loading="eager"
      />
      <ul className={styles.aboutItems} aria-label="Developer roles and expertise">
        {aboutItems.map((item) => (
          <li key={item.title} className={styles.aboutItem} aria-label={item.title}>
            <img
              src={getImageUrl(item.icon)}
              alt={item.alt}
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
