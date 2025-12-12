
// "use client";
 
import HeroSection from "@/components/Layers/HeroSection";
import styles from './page.module.css'
import Image from "next/image";
import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import WhoCanLearn from "@/components/Layers/WhoCanLearn";
import OnlineCourses from "@/components/Layers/OnlineCourses";
import LookingFor from "@/components/Layers/LookingFor"; 
import ReviewsSection from "@/components/Layers/ReviewsSection";
import PracticeHero from "@/components/Layers/PracticeHero";
import MotivationSection from "@/components/Layers/MotivationSection";
import TimelineSection from "@/components/Layers/TimelineSection";

const mandalaPositions = [
  { className: styles.heroMandala, pos: "top", },
  { className: styles.heroMandala, pos: "bottom1",},
  { className: styles.heroMandala, pos: "bottom2",},
  { className: styles.heroMandala, pos: "bottom3",},
  { className: styles.heroMandala, pos: "bottom4",},
  { className: styles.heroMandala, pos: "bottom5",},
  { className: styles.heroMandala, pos: "bottom6",},
  { className: styles.heroMandala, pos: "bottom7",},
  { className: styles.heroMandala, pos: "bottom8",},
  { className: styles.heroMandala, pos: "bottom9",},
  { className: styles.heroMandala, pos: "bottom10",},
  { className: styles.heroMandala, pos: "bottom11",},
  { className: styles.heroMandala, pos: "bottom12",},
];
export default function Home() {
  return (
    <div className={styles.pageContainer}>
         {mandalaPositions.map(({ className, pos }, index) => (
        <div key={pos} className={className} data-pos={pos}>
          <Image
            src="/uploads/mandalafull.png"
            alt=""
            fill
            priority={index === 0} // Only first mandala needs priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))} 
      
      <HeroSection />
       <EnglishCourseBenefits />
      <WhoCanLearn />
      {/* <OnlineCourses /> */}
      <LookingFor />
      <PracticeHero />
      <MotivationSection />
      <TimelineSection />
      <ReviewsSection />
     
      {/* <TeachersSection/> */}
      
    </div>


  );
}
