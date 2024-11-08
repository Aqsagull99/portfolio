"use client";

import Tilt from "react-parallax-tilt";
import styles from "../styles/glasscard.module.css";
import Image from "next/image"; 

interface TiltCardProps {
  icon: React.ReactNode;
  imageSrc: string; 
  title: string;
  description: string;
}

export default function GlassCard({ icon, imageSrc, title, description }: TiltCardProps) {
  return (
    <Tilt
    className={styles.tiltCard}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.1}
      transitionSpeed={250}
    >
      <div  className={styles.cardContent}>
        <div className={styles.icon} >{icon}</div>

        {/* Rendering Image using Next.js Image component */}
         <div > 
          <Image
            src={imageSrc}
            alt={title} 
            width={500} 
            height={500} 
             className={styles.image}
          />
        </div>

         <h2 className={styles.heading}>{title}</h2>
        <p className={styles.text}>{description}</p> 
      </div>
    </Tilt>
  );
}
