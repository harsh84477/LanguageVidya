"use client";

import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      
      <section className={styles.hero}>
         <img
          src="/uploads/mandalafull.png"
          alt=""
          className={styles.heroMandala}
          aria-hidden="true"
        />
        <div className={styles.heroInner}>
          
          <h1 className={styles.heading}>About Language Vidya</h1>
          <p className={styles.subheading}>
            Language Vidya helps learners build clear, confident English for
            real-life conversations, exams, and careers.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.title}>Why we started</h2>
            <p className={styles.text}>
              Many learners know grammar rules but still hesitate when it is
              time to speak. Language Vidya was created to bridge that gap with
              live practice, simple explanations, and friendly trainers.
            </p>
            <p className={styles.text}>
              Every session focuses on situations you actually face: college,
              office, interviews, client calls, and daily conversations at
              home.
            </p>
          </div>

          <div>
            <h2 className={styles.title}>What we believe</h2>
            <ul className={styles.list}>
              <li>Fluency comes from practice, not fear of mistakes.</li>
              <li>Clear basics in grammar and vocabulary make speaking easier.</li>
              <li>Personal feedback is the fastest way to grow.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.titleCenter}>How Language Vidya helps you</h2>
        <div className={styles.featuresGrid}>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Live speaking practice</h3>
            <p className={styles.text}>
              Join guided conversations, role plays, and doubt-clearing with
              experienced English trainers.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Structured courses</h3>
            <p className={styles.text}>
              Choose from Basic, Advanced, Business English, and student-focused
              spoken English tracks.
            </p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Progress you can see</h3>
            <p className={styles.text}>
              Track speaking confidence, accuracy, and vocabulary growth after
              every few sessions.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
