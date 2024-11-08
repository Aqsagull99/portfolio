import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection} id="contact">
      <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          <h3 className={styles.heading}>
            {" "}
            <span>A</span>bo<span>u</span>t <span>M</span>e!
          </h3>
          <p>
            I m Aqsa Gull, a web developer creating responsive user-friendly
            websites with a creative touch.
          </p>

          <Image
            src="/ani4.gif"
            alt="Aqsa Gull - Web Developer"
            width={100}
            height={100}
            className={styles.footergif}
          />
        </div>

        {/* Services Section */}
        <div className={styles.footerServices}>
          <h3 className={styles.heading}>
            {" "}
            <span>S</span>er<span>vi</span>ce<span>s</span>!
          </h3>
          <ul>
            <li>Web Development</li>
            <li>Responsive Sites</li>
            <li>JavaScript Apps</li>
            <li>UI/UX Design</li>
            <li>SEO Strategy</li>
          </ul>
        </div>

        {/* Contact and Social Links */}
        <div className={styles.footerText}>
          <h3 className={styles.heading}>
            {" "}
            <span>C</span>on<span>ne</span>ct <span> M</span>e!
          </h3>
          <p>
            <a
              href="https://www.linkedin.com/in/aqsa-gullofficial99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} /> LinkedIn
            </a>
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Aqsagull99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} /> GitHub
            </a>
          </div>

          <p className={styles.footerEmail}>aqsa.gull.dev.ai99@gmail.com</p>
        </div>
        <p>© 2024 Aqsa Gull. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
