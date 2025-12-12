"use client";

import Image from "next/image"; 
import styles from "./LookingFor.module.css";

const options = [
  { label: "Daily Conversations", icon: "/uploads/icons/plantO.png" },
  { label: "Fluent Speaking", icon: "/uploads/icons/briefcaseO.png" },
  { label: "Talking with Client", icon: "/uploads/icons/Man-o.png" },
  { label: "Shine in Interview", icon: "/uploads/icons/power-hitO.png" },
  { label: "Accent Building", icon: "/uploads/icons/power-hitO.png" },
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
