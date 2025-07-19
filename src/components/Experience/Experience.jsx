import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience" aria-label="Internship Experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.cardsWrapper}>
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${idx % 2 === 0 ? styles.left : styles.right}`}
            tabIndex={0}
            aria-label={`${item.role} at ${item.organisation}`}
          >
            <div className={styles.accentBar} />
            <div className={styles.logoWrapper}>
              <img
                src={getImageUrl(item.imageSrc)}
                alt={`${item.organisation} Logo`}
                className={styles.logo}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.role}>{item.role}</h3>
              <div className={styles.company}>{item.organisation}</div>
              <div className={styles.infoRow}>
                <FaMapMarkerAlt className={styles.infoIcon} aria-hidden="true" />
                <span>{item.location}</span>
              </div>
              <div className={styles.infoRow}>
                <FaCalendarAlt className={styles.infoIcon} aria-hidden="true" />
                <span>{item.startDate} - {item.endDate}</span>
              </div>
              <ul className={styles.experienceList}>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
