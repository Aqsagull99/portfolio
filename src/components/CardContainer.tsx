import GlassCard from './GlassCard';
import styles from "../styles/glasscard.module.css";
import { FaLaptopCode, FaCameraRetro, FaMedal } from "react-icons/fa"; 


export default function CardContainer() {
  return (
    <div className={styles.containerone}>
      {/* Technology Card */}
      <GlassCard
        icon={<FaLaptopCode size={40} color="#00A6FF" />} 
        imageSrc="/todo2.jpg" 
        title="Technology"
        description="My passion for coding and tech."
      />
      {/* Hobby Card */}
      <GlassCard
        icon={<FaCameraRetro size={40} color="#00A6FF" />} 
        imageSrc="/codimg.jpg" 
        title="Hobby"
        description="Gaming and exploring new adventures."
      />
      {/* Achievement Card */}
      <GlassCard
        icon={<FaMedal size={40} color="#00A6FF" />} 
        imageSrc="/bb.jpg" 
        title="Achievement"
        description="My milestones and accomplishments."
      />
    </div>
  );
}

