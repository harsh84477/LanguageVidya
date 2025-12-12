"use client";

import styles from "./HeroSection.module.css";


export default function HeroSection() {
  return (
    <section className={styles.hero}>
     
      <div className={styles.inner}>
        {/* Left: text */}
        <div className={styles.textBlock}>
  <p className={styles.badge}>Language Vidya</p>
  <h1 className={styles.heading}>Start Your Confident Communication Journey Today.</h1>
  <p className={styles.subheading}>
    Build fluent, natural English through guided practice, real-life conversations, and our AI-powered speaking tutor — designed specially for Indian learners.
  </p>
  <div className={styles.actions}>
    <a href="#sessions" className={styles.primaryButton}>Start Practicing</a>
    <a href="#languages" className={styles.secondaryLink}>Book a Session →</a>
  </div>
  {/* ✅ Improvement 4 */}
  <p className={styles.trustBadge}>Trusted by 3000+ learners · No sign-up required</p>
</div>


        {/* Right: hero visual */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>Improve Speaking</div>

          <div className={styles.cardBody}>
            <div className={styles.avatarCircle}>
              {/* place your quiz / bot icon img here */}
            </div>
            <p className={styles.status}>Ready when you are.</p>
            <button className={styles.ctaButton}>Start Practicing</button>
            <p className={styles.cardNote}>
             AI Avatar: Friendly Practicing : Always available
            </p>
          </div>
        </div>
      </div>

      {/* Child components */}
     
    </section>
  );
}
