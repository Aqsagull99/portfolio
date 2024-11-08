import React from "react";
import styles from "../styles/expe.module.css";
import Image from "next/image";

function Experience() {
  const experiences = [
    {
      text: " Worked on web development projects, enhancing front-end skills.",
      Image: "/ani4.gif",
    },
    {
      text: " Collaborated in a team environment, focusing on back-end development.",
      Image: "/ani4.gif",
    },
    {
      text: " Specialized in full-stack development, combining front-end and back-end expertise.",
      Image: "/ani4.gif",
    },
  ];

  return (
    <div className={styles.container} id="experience">
      <h1 className={styles.heading}>
        {" "}
        <span>E</span>xp<span>er</span>ie<span>nc</span>e
      </h1>

      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceSection}>
          <div className={styles.text}>
            <p>{exp.text}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.animatedImage}
              src={exp.Image}
              alt={`Experience ${index + 1} Image`}
              width={100}
              height={200}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
