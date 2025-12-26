"use client";

import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>Get Your Personalized Career Plan</h2>
          <p className={styles.subheading}>Talk to a Career Expert - Free</p>
          <p className={styles.subheading}>Start Your Career Journey Today</p>
        </div>

        <div className={styles.actions}>
          <a
            href="tel:+919217239714"
            className={styles.primaryCta}
          >
            Book My Free Counseling Call
          </a>
          <a href="/contact-us" className={styles.secondaryCta}>
            Help Me Choose the Right Course
          </a>
        </div>
      </div>
    </section>
  );
}
