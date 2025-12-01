"use client";

import styles from "./LookingFor.module.css";

const options = [
  { label: "Daily Conversations", icon: "/icons/daily.svg" },
  { label: "Fluent Speaking", icon: "/icons/fluent.svg" },
  { label: "Talking with Client", icon: "/icons/client.svg" },
  { label: "Shine in Interview", icon: "/icons/interview.svg" },
];

export default function LookingFor() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>What are you looking for?</h2>

        <div className={styles.chipsRow}>
          {options.map((item) => (
            <button key={item.label} type="button" className={styles.chip}>
              <span className={styles.iconCircle}>
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                />
              </span>
              <span className={styles.chipLabel}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
