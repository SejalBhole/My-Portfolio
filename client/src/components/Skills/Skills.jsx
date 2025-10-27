import React, { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

export const SkillsAndCertifications = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className={styles.container} id="skills" aria-label="Skills and Certifications">
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.tabContainer} role="tablist">
        <button
          className={`${styles.tabBtn} ${activeTab === "skills" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("skills")}
          role="tab"
          aria-selected={activeTab === "skills"}
        >
          Skills
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "certifications" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("certifications")}
          role="tab"
          aria-selected={activeTab === "certifications"}
        >
          Certifications
        </button>
      </div>
      <div className={styles.tabDivider}></div>
      {activeTab === "skills" ? (
        <div className={styles.grid}>
          {skills.map((skill, idx) => (
            <div className={styles.skillCard} key={idx} tabIndex={0} aria-label={skill.title}>
              <div className={styles.iconWrapper}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.icon} />
              </div>
              <span className={styles.skillName}>{skill.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.certificationsList}>
          {certifications.map((cert, idx) => (
            <div className={styles.certCard} key={idx} tabIndex={0} aria-label={cert.title}>
              {cert.imageSrc && (
                <img src={getImageUrl(cert.imageSrc)} alt={cert.title} className={styles.certIcon} />
              )}
              <div className={styles.certText}>
                <span className={styles.certTitle}>{cert.title}</span>
                <span className={styles.certOrg}>{cert.organization}</span>
                {cert.link && (
                  <a href={cert.link} className={styles.certLink} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}; 