import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/dp2.jpg"
            alt="Aqsa Gull"
            className={styles.profileImage}
            width={150}
            height={150}
            objectFit="cover"
          />
        </div>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutText1}>
            <span>A</span>bo<span>u</span>t M<span>e</span>!
          </h2>
          <p className={styles.tagline}>Web Developer | Tech Enthusiast</p>
          <p>
            Hello! I m Aqsa Gull, a passionate web developer and tech enthusiast
            constantly exploring the future of digital experiences. With
            expertise in creating unique, responsive websites, I strive to
            deliver engaging and impactful user journeys. Currently, I m delving
            into Next.js, Agentic AI, and Web 3.0 to stay at the forefront of
            cutting-edge technology and enhance my skill set for the evolving
            landscape of web development. Beyond coding, you ll often find me
            gaming, teaching, or diving into the latest tech innovations. Im
            always open to collaborating on visionary projects, so dont
            hesitate to{" "}
            <a
              href="https://www.linkedin.com/in/aqsa-gullofficial99"
              target="_blank"
              rel="noopener noreferrer"
            >
              connect with me on LinkedIn
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
