"use client";

import styles from "./HeroSection.module.css";
import { COURSE_CATALOG } from "./data/courseCatalog";

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
            <a
              href="https://wa.me/919217239714"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              Unlock Your Learning Advantage
            </a>
            <a href="/contact-us" className={styles.secondaryLink}>
              Book a Session →
            </a>
          </div>
          <p className={styles.trustBadge}>Trusted by 3000+ learners · No sign-up required</p>
        </div>

        {/* Right: courses section */}
        <div className={styles.rightSection}>
          {/* mandala background layer */}
          <div className={styles.courseSection}>
            {/* Courses list */}
            <div className={styles.leftText}>
              <h2 className={styles.leftHeading}>Learn skills that move your career forward with us.</h2>

              <p className={styles.leftSub}>
                {/* Choose The English Course That Matches Your Goals And Current Level. */}
              </p>

             <div className={styles.right}>
          {COURSE_CATALOG.map((course) => (
            <button
              key={course.code}
              className={styles.langPill}
              type="button"
            >
              <span className={styles.flagCircle}>{course.code}</span>
              <span className={styles.langName}>{course.name}</span>
            </button>
          ))}
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

