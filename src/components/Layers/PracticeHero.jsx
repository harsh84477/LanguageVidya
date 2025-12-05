"use client";

import Image from "next/image";
import styles from "./PracticeHero.module.css";

export default function PracticeHero() {
  return (
    <section className={styles.section}>

      <div className={styles.inner}>
        {/* LEFT: text */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Test your language skills</h1>
          <p className={styles.subheading}>
            Take quick, interactive quizzes to check your grammar, vocabulary,
            and speaking confidence. Get instant feedback and see exactly which
            topics to improve next.
          </p>

          <ul className={styles.bullets}>
            <li>Real-time score and detailed reports</li>
            <li>Level-based tests for beginners to advanced learners</li>
            <li>Speaking, listening, reading, and writing modules</li>
            <li>Personalised practice suggestions after every test</li>
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
            <button className={styles.ctaButton}>Start free test</button>
            <p className={styles.cardNote}>
              5–7 minutes • Instant results • No payment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
