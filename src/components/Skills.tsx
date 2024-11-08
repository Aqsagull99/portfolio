"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/skills.module.css";
import Image from "next/image";

const skillsData = [
  {
    name: "HTML",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Next.js",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    level: 65,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Figma",
    level: 65,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${styles.skillsSection} ${isVisible ? styles.animate : ""}`}
      id="skills"
    >
      <h2 className={styles.heading}>
        <span>S</span>ki<span>l</span>l<span>s</span>
      </h2>
      <div className={styles.skillsList}>
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className={styles.skillItem}
            style={{ "--i": index } as React.CSSProperties}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}   
              height={50}
              className={`${styles.icon} ${isVisible ? styles.glow : ""}`}
            />
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={styles.percentage}>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;




















