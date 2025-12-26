"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const FAQS = [
  {
    q: "How do live sessions work?",
    a: "You pick a slot, join via browser or mobile, and interact with a trainer in a small group. Sessions include speaking drills, role plays, and feedback.",
  },
  {
    q: "What courses do you have?",
    a: "We offer Beginner and Advanced Spoken English, Business English, Kids English Mastery, interview prep, and accent training tracks.",
  },
  {
    q: "What do you learn in Language Vidya?",
    a: "You learn real-world English: daily conversations, grammar that’s used in speech, vocabulary for work, pronunciation, presentations, and interview confidence.",
  },
  {
    q: "Do I need prior English knowledge?",
    a: "No. We place you by level. Beginners start with basics and short speaking prompts; advanced learners get debates, presentations, and interview practice.",
  },
  {
    q: "Is the AI speaking partner included?",
    a: "Yes. You can practice with the AI avatar anytime for pronunciation, fluency, and confidence between live classes.",
  },
  {
    q: "Can I reschedule classes?",
    a: "Yes. You can move or rebook your slot from the dashboard as long as you do it before the session starts.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes. Complete your track and you receive a completion certificate showing your level and practice hours.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <p className={styles.badge}>FAQs</p>
        <div className={styles.headerRow}>
          <div>
            <h2 className={styles.heading}>Answers to common questions</h2>
            <p className={styles.subheading}>
              Everything you need to know about live classes, AI practice, schedules, and certificates. Still unsure? Reach out and we will guide you.
            </p>
          </div>
          <a href="/contact-us" className={styles.cta}>Talk to us →</a>
        </div>

        <div className={styles.list}>
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <article key={item.q} className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}>
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span className={styles.icon}>{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <p className={styles.answer}>{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
