"use client";

import React from "react";
import styles from "../styles/hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      {/* Content on the left */}
      <div className={styles.content}>
        <h1 className={styles.heading1}>
          {" "}
          <span>H</span>ell<span>o</span>!
        </h1>

        <h1 className={styles.heading2}>
          <span>I m </span> Aqsa <span>Gull</span>
        </h1>

        <p className={styles.paragraph}>
          {" "}
          <span>Here you can</span> find my <span>projects</span> and
          experiences!
        </p>

        <a href="mailto:aqsa.gull.dev.ai99@gmail.com">
          <button className={styles.button1}>Email</button>
        </a>

        <a
          href="https://my-parsonal-static-resume-8tb2.vercel.app/"
          target="_blank"
        >
          <button className={styles.button2}>View resume</button>
        </a>
      </div>

      {/* Video on the right */}
      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src="/blue-diamond.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
