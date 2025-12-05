"use client";

import styles from "./OnlineCourses.module.css";

const courses = [
  {
    title: "Basic\nEnglish\nCourse",
    icon: "/uploads/icons/potted-plant.png",
  },
  {
    title: "Advanced\nEnglish\nCourse",
    icon: "/uploads/icons/crown.png",
  },
  {
    title: "Business\nEnglish\nCourse",
    icon: "/uploads/icons/briefcase.png",
  },
  {
    title: "Spoken English\nfor Kids\nCourse",
    icon: "/uploads/icons/student.png",
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
