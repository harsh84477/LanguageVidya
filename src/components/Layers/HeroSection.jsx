"use client";
import EnglishCourseBenefits from "@/components/Layers/EnglishCourseBenefits";
import WhoCanLearn from "@/components/Layers/WhoCanLearn";
import OnlineCourses from "@/components/Layers/OnlineCourses";
import LookingFor from "@/components/Layers/LookingFor"; 
import ReviewsSection from "@/components/Layers/ReviewsSection";
import PracticeHero from "@/components/Layers/PracticeHero";
import MotivationSection from "@/components/Layers/MotivationSection";
import TimelineSection from "@/components/Layers/TimelineSection";
import styles from "./HeroSection.module.css";
import Image from "next/image";

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

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Optimized Mandala Layers */}
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

      <div className={styles.inner}>
        {/* Left: text */}
        <div className={styles.textBlock}>
          <p className={styles.badge}>Language Vidya</p>
          <h1 className={styles.heading}>
            Start your confident communication journey today.
          </h1>
          <p className={styles.subheading}>
            Practice your favourite language with friendly tutors and real-life conversations.
          </p>
          <div className={styles.actions}>
            <a href="#sessions" className={styles.primaryButton}>
              Find your tutor
            </a>
            <a href="#languages" className={styles.secondaryLink}>
              Browse languages →
            </a>
          </div>
        </div>

        {/* Right: hero visual */}
        <div className={styles.visualBlock}>
          <div className={styles.cardBack} />
          <div className={styles.cardMiddle} />
          <div className={styles.cardFront}>
            <div className={styles.videoBadge}>Live practice</div>
            <img
              src="/uploads/hero-student.jpg"
              alt="Student practicing languages online"
              className={styles.heroImage}
            />
            <div className={styles.smallCallout}>
              Start speaking in your first session.
            </div>
          </div>
        </div>
      </div>

      {/* Child components */}
      <EnglishCourseBenefits />
      <WhoCanLearn />
      <OnlineCourses />
      <LookingFor />
      <PracticeHero />
      <MotivationSection />
      <TimelineSection />
      <ReviewsSection />
    </section>
  );
}
