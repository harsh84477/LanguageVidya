"use client";

import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* mandala background image layer */}
      <div className={styles.heroMandala}>
        <Image
          src="/uploads/mandalafull.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
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
    </section>
  );
}
