import React, { useState } from 'react';
import styles from './Education.module.css';
import { FaGraduationCap, FaTrophy, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import achievements from '../../data/achievements.json';
import { getImageUrl } from "../../utils";

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

const EducationAndAchievements = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className={styles.educationSection} id="education" aria-label="Education and Achievements">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <button
            className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
            aria-selected={activeTab === 'education'}
          >
            <FaGraduationCap className={styles.headerIcon} aria-hidden="true" />
            Education
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'achievements' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('achievements')}
            aria-selected={activeTab === 'achievements'}
          >
            <FaTrophy className={styles.headerIcon} aria-hidden="true" />
            Achievements
          </button>
        </header>
        <div className={styles.tabDivider}></div>
        {activeTab === 'education' ? (
          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true"></div>
            {educationData.map((edu, index) => (
              <article
                className={`${styles.timelineItem} ${edu.side === 'left' ? styles.timelineLeft : styles.timelineRight}`}
                key={index}
                tabIndex={0}
                aria-label={`${edu.degree} at ${edu.institution}`}
              >
                <span className={styles.timelineDot} aria-hidden="true"></span>
                <div className={styles.cardWrapper}>
                  <div className={`${styles.card} ${edu.side === 'left' ? styles.cardLeft : styles.cardRight}`}>
                    <div className={styles.cardContent}>
                      <div className={styles.institution}>{edu.institution}</div>
                      <div className={styles.degree}>{edu.degree}</div>
                      {edu.university && <div className={styles.university}>{edu.university}</div>}
                      <div className={styles.infoItem}>
                        <FaMapMarkerAlt className={styles.infoIcon} aria-hidden="true" />
                        <span>{edu.location}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <FaCalendarAlt className={styles.infoIcon} aria-hidden="true" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <span className={styles.score}>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.achievementsList}>
            {achievements.map((ach, idx) => (
              <div className={styles.achievementCard} key={idx}>
                {ach.imageSrc && (
                  <img
                    src={getImageUrl(ach.imageSrc)}
                    alt={ach.title}
                    className={styles.achievementImg}
                  />
                )}
                <FaTrophy className={styles.achievementIcon} aria-hidden="true" />
                <div>
                  <div className={styles.achievementTitle}>{ach.title}</div>
                  <div className={styles.achievementDesc}>{ach.description}</div>
                  {ach.certificateSrc && (
                    <a
                      href={getImageUrl(ach.certificateSrc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certificateLink}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationAndAchievements;
