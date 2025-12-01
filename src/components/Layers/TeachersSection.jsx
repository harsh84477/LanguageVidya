"use client";

import styles from "./TeachersSection.module.css";
import Image from "next/image";

const teachers = [
  {
    name: "K. Rajyalaxmi",
    exp: "7+ Years Exp",
    focus: "Grammar, Fluency Training, Vocabulary Building",
    photo: "/teachers/teacher-1.jpg",
  },
  {
    name: "Firdous Fatima",
    exp: "2+ Years Exp",
    focus: "Public Speaking, Grammar, Fluency Training",
    photo: "/teachers/teacher-2.jpg",
  },
  {
    name: "Nikita Mutha",
    exp: "6+ Years Exp",
    focus: "IELTS, Grammar, Fluency Training",
    photo: "/teachers/teacher-3.jpg",
  },
  
];

export default function TeachersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Spoken English Teachers</h2>

        <div className={styles.grid}>
          {teachers.map((t) => (
            <article key={t.name} className={styles.card}>
              <div className={styles.photoWrap}>
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className={styles.photo}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{t.name}</h3>
                <p className={styles.exp}>{t.exp}</p>
                <p className={styles.focus}>{t.focus}</p>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className={styles.allButton}>
          All Trainers
        </button>
      </div>
    </section>
  );
}
