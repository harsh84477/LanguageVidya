"use client";

import styles from "./TimelineSection.module.css";

const steps = [
  {
    title: "Define your purpose",
    text: "Get clear on why you want better English—jobs, exams, travel or confidence—and set a realistic target level.",
  },
  {
    title: "Understand the basics",
    text: "Fix core grammar, vocabulary, and pronunciation so your foundation is strong and mistakes reduce quickly.",
  },
  {
    title: "Practise every day",
    text: "Use live classes, speaking prompts, and short daily tasks to turn English into a habit, not a subject.",
  },
  {
    title: "Dominate real situations",
    text: "Role‑play interviews, meetings, calls, and everyday conversations so you are ready for real‑life pressure.",
  },
  {
    title: "Master quiet topics",
    text: "Learn to speak clearly about common but tricky areas—opinions, stories, feelings, and future plans.",
  },
  {
    title: "Become skill‑strong",
    text: "Reach a stage where reading, writing, listening, and speaking work together and English feels natural.",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.section} style={{zIndex:"10000"}}>
      <div className={styles.topBand}>
        <div className={styles.topInner}>
          <h2 className={styles.heading}>Your Language Vidya journey</h2>
          <p className={styles.topText}>
            Follow a clear path from “I am not sure where to start” to
            confident, skill‑strong English that supports your exams, career,
            and daily life.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.iconCircle}>
                <span className={styles.iconNumber}>{index + 1}</span>
              </div>

              <div className={styles.verticalLine} />
              <div className={styles.horizontalLine} />

              <div className={styles.stepText}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
