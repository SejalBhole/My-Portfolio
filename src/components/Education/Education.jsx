import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "B.E. in Computer Engineering",
    institution: "ABC Engineering College",
    year: "2021 - 2025",
    grade: "CGPA: 8.5",
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    institution: "XYZ Junior College",
    year: "2019 - 2021",
    grade: "Percentage: 85%",
  },
  {
    id: 3,
    degree: "Secondary (SSC)",
    institution: "PQR High School",
    year: "2018 - 2019",
    grade: "Percentage: 90%",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">📚 Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="icon">
              <FaGraduationCap />
            </div>
            <div className="content">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
              <span>{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
