
// "use client";

import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import HeroSection from "@/components/Layers/HeroSection";

import styles from "../components/Layers/HeroSection.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.pageContainer}>
      
      <HeroSection />
     
      {/* <TeachersSection/> */}
      
    </div>


  );
}
