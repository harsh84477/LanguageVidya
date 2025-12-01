"use client";

import { useEffect, useState } from "react";
import styles from "./WhoCanLearn.module.css";

const learners = [
  {
    title: "Working professionals",
    icon: "/uploads/professional.png",
    description:
      "Improve your workplace English, emails, and presentations to grow in your career.",
  },
  {
    title: "Students",
    icon: "/uploads/graduated.png",
    description:
      "Build strong speaking and writing skills for school, college, and exams.",
  },
  {
    title: "Homemakers",
    icon: "/uploads/home.png",
    description:
      "Speak confidently in daily situations like markets, travel, and parent–teacher meetings.",
  },
  {
    title: "Business owners",
    icon: "/uploads/owner.png",
    description:
      "Communicate clearly with clients, teams, and partners across cities and countries.",
  },
  {
    title: "Job seekers",
    icon: "/uploads/cv.png",
    description:
      "Prepare for interviews, group discussions, and professional conversations.",
  },
  {
    title: "Freelancers",
    icon: "/uploads/self-employed.png",
    description:
      "Work smoothly with global clients by improving spoken and written English.",
  },
];

export default function WhoCanLearn() {
  const [index, setIndex] = useState(0);

  // auto-change every 9 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % learners.length);
    }, 9000);

    return () => clearInterval(id);
  }, []);

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % learners.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + learners.length) % learners.length);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftText}>
          <p className={styles.label}>You can learn</p>
          <h2 className={styles.bigWord}>English</h2>
          <h2 className={styles.bigWord}>English</h2>
          <h2 className={styles.bigWord}>English</h2>
          <h2 className={styles.bigWord}>English</h2>
        </div>

        <div className={styles.rightBlock}>
          <h2 className={styles.heading}>Who can learn?</h2>

          {/* Desktop grid */}
          <div className={styles.gridDesktop}>
            {learners.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <img
                    src={item.icon}
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            ))}
          </div>

          {/* Mobile slider */}
          <div className={styles.sliderMobile}>
            <button
              type="button"
              className={styles.navButton}
              onClick={handlePrev}
              aria-label="Previous learner type"
            >
              ‹
            </button>

            <article className={`${styles.card} ${styles.cardActive}`}>
              <div className={styles.iconWrap}>
                <img
                  src={learners[index].icon}
                  alt=""
                  className={styles.icon}
                  aria-hidden="true"
                />
              </div>
              <h3 className={styles.cardTitle}>
                {learners[index].title}
              </h3>
              <p className={styles.cardText}>
                {learners[index].description}
              </p>
            </article>

            <button
              type="button"
              className={styles.navButton}
              onClick={handleNext}
              aria-label="Next learner type"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
