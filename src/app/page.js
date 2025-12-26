
"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/Layers/HeroSection";
import styles from './page.module.css'
import Image from "next/image";
import Aipage from "@/components/Layers/Aipage";
import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import WhoCanLearn from "@/components/Layers/WhoCanLearn";
import LookingFor from "@/components/Layers/LookingFor"; 
import ReviewsSection from "@/components/Layers/ReviewsSection";
import PracticeHero from "@/components/Layers/PracticeHero";
import TimelineSection from "@/components/Layers/TimelineSection";
import FestiveOffers from "@/components/Layers/FestiveOffer";
import StatsSection from "@/components/Layers/StatsSection";
import PopupForm from "@/components/Layers/PopupForm";
import FaqSection from "@/components/Layers/FaqSection";
import FinalCta from "@/components/Layers/FinalCta";



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
  const [showPopup, setShowPopup] = useState(false);

  // Auto-open popup after 3 seconds (once per session)
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Skip if we've already shown the popup this session
    if (sessionStorage.getItem("popupShown")) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
      
      <div className={styles.contentRail}>
        <HeroSection />
        <StatsSection />
        <LookingFor />
        <TimelineSection />
      
        <WhoCanLearn />
        <ReviewsSection />
        <EnglishCourseBenefits />
        <FestiveOffers />
        <Aipage />
         <FinalCta />
          <PracticeHero />
          
        <FaqSection />
       
      </div>
    </div>

    <PopupForm
      isOpen={showPopup}
      onClose={() => setShowPopup(false)}
    />
    </>
  );
}
