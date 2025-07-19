import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showModal, setShowModal] = useState(false);
  // Prefer demo, else source
  const mainLink = demo || source;
  const mainLabel = demo ? "View Project" : "View Source";

  return (
    <>
      <div
        className={`${styles.container} ${styles.animated}`}
        tabIndex={0}
        aria-label={title}
        onClick={() => setShowModal(true)}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setShowModal(true)}
        role="button"
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`Screenshot of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        {mainLink && (
          <div className={styles.links}>
            <a
              href={mainLink}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              {mainLabel}
            </a>
          </div>
        )}
      </div>
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()} tabIndex={0}>
            <button className={styles.closeBtn} onClick={() => setShowModal(false)} aria-label="Close project details">&times;</button>
            <img
              src={getImageUrl(imageSrc)}
              alt={`Screenshot of ${title}`}
              className={styles.modalImage}
            />
            <h3 className={styles.modalTitle}>{title}</h3>
            <p className={styles.modalDescription}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
            {mainLink && (
              <a
                href={mainLink}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 16 }}
              >
                {mainLabel}
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};
