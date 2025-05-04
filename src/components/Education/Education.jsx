import React from 'react';
import styles from './Education.module.css';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const educationData = [
  {
    side: 'left',
    institution: 'Bharati Vidyapeeth’s College of Engineering, Lavale, Pune',
    degree: 'B.Tech in Computer Engineering',
    university: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra',
    duration: 'Sep 2023 – Jun 2026',
    score: 'CGPA: 9.05',
  },
  {
    side: 'right',
    institution: 'Government Polytechnic, Jalgaon',
    degree: 'Diploma in Computer Engineering',
    location: 'Jalgaon, Maharashtra',
    duration: 'Dec 2020 – Jul 2023',
    score: 'Percentage: 86.06%',
  },
  {
    side: 'left',
    institution: 'K. Narkhede Vidyalaya and Junior College, Bhusawal',
    degree: 'SSC',
    location: 'Bhusawal, Maharashtra',
    duration: 'Passed 2020',
    score: 'Percentage: 92.00%',
  },
];

const Education = () => {
  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <FaGraduationCap className={styles.headerIcon} />
          <h2>Education</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {educationData.map((edu, index) => (
            <div
              className={`${styles.timelineItem} ${edu.side === 'left' ? styles.timelineLeft : styles.timelineRight}`}
              key={index}
            >
              <span className={styles.timelineDot}></span>
              <div className={styles.cardWrapper}>
                <div className={`${styles.card} ${edu.side === 'left' ? styles.cardLeft : styles.cardRight}`}>
                  <div className={styles.cardContent}>
                    <div className={styles.institution}>{edu.institution}</div>
                    <div className={styles.degree}>{edu.degree}</div>
                    {edu.university && <div className={styles.university}>{edu.university}</div>}
                    <div className={styles.infoItem}>
                      <FaMapMarkerAlt className={styles.infoIcon} />
                      <span>{edu.location}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FaCalendarAlt className={styles.infoIcon} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.score}>{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
