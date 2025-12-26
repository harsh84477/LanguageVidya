"use client";

import styles from "./LookingFor.module.css";

const options = [
  { label: "Daily Conversations", icon: "/uploads/icons/plantO.png" },
  { label: "Fluent Speaking", icon: "/uploads/icons/briefcaseO.png" },
  { label: "Talking With Client", icon: "/uploads/icons/Man-o.png" },
  { label: "Shine In Interview", icon: "/uploads/icons/power-hitO.png" },
  { label: "Accent Building", icon: "/uploads/icons/power-hitO.png" },
];

export default function LookingFor() {
  return (
    <section className={styles.section}>
      
     
      <div className={styles.inner}>
        <h2 className={styles.heading}>What Are You Looking For?</h2>

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

         <div className={styles.ctaRow}>
          <a href="/contact-us" className={styles.primaryCta}>
            Choose the Skill That Gets You Hired
          </a>
          <p className={styles.ctaNote}>Not sure? We'll guide you.</p>
        </div>

      </div>
    </section>
  );
}
