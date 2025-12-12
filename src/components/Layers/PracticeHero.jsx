"use client";

import Image from "next/image";
import styles from "./PracticeHero.module.css";

export default function PracticeHero() {
  return (
    <section className={styles.section}>

      <div className={styles.inner}>
        {/* LEFT: text */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Test Your Language Skills</h1>
          <p className={styles.subheading}>
            Check your grammar, vocabulary, confidence, and speaking clarity with fast, interactive quizzes. Get instant results and a personalised improvement plan.
          </p>

          <ul className={styles.bullets}>
            <li>Real-time score & insights</li>
            <li>Beginner to advanced tests</li>
            <li>Speaking, listening, reading, writing modules</li>
            <li>Smart improvement suggestions</li>
          </ul>
        </div>

        {/* RIGHT: test card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>Quick Skill Check</div>

          <div className={styles.cardBody}>
            <div className={styles.avatarCircle}>
              {/* place your quiz / bot icon img here */}
            </div>
            <p className={styles.status}>Ready when you are</p>
            <button className={styles.ctaButton}>Start Free Test</button>
            <p className={styles.cardNote}>
              5–7 minutes • Instant results • No payment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
