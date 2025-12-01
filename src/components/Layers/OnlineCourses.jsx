"use client";

import styles from "./OnlineCourses.module.css";

const courses = [
  {
    title: "Basic\nEnglish\nCourse",
    icon: "/icons/course-basic.svg",
  },
  {
    title: "Advanced\nEnglish\nCourse",
    icon: "/icons/course-advanced.svg",
  },
  {
    title: "Business\nEnglish\nCourse",
    icon: "/icons/course-business.svg",
  },
  {
    title: "Spoken English\nfor Kids\nCourse",
    icon: "/icons/course-kids.svg",
  },
];

export default function OnlineCourses() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Online English Speaking Courses</h2>

        <div className={styles.cardsRow}>
          {courses.map((course) => (
            <article key={course.title} className={styles.card}>
              <div className={styles.cardBg} />
              <div className={styles.cardContent}>
                <img
                  src={course.icon}
                  alt=""
                  className={styles.icon}
                  aria-hidden="true"
                />
                {course.title.split("\n").map((line) => (
                  <span key={line} className={styles.cardTitleLine}>
                    {line}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
