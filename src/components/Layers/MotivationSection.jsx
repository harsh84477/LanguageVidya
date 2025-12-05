"use client";

import Image from "next/image";
import styles from "./MotivationSection.module.css";

const courses = [
  { code: "B1", name: "English for Beginners" },
  { code: "ST", name: "English for Students" },
  { code: "AD", name: "English Advanced" },
  { code: "SP", name: "English Spoken" },
  { code: "INT", name: "English for Foreigners" },
];

export default function MotivationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left text */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Every word you learn brings you closer to success — so what are you
            waiting for? Start with us today!
          </h2>
          <p className={styles.subheading}>
            Build real confidence in English with guided practice, clear
            feedback, and structured courses designed for every level.
          </p>
        </div>

        {/* Right course list */}
        <div className={styles.right}>
          {courses.map((course) => (
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
    </section>
  );
}
