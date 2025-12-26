// components/StatsSection
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { label: "Total Students", value: 300, note: "Learners trained" },
  { label: "Expert Teachers", value: 12, note: "Certified trainers" },
  { label: "Cities Covered", value: 25, note: "Across India" },
  { label: "Average Rating", value: 4.8, note: "From happy learners", isFloat: true },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCounters = () => {
    const duration = 1200; // ms
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const newCounts = stats.map((stat) => {
        const target = stat.value;
        const eased = easeOutCubic(progress);
        const current = target * eased;

        if (stat.isFloat) {
          return parseFloat(current.toFixed(1));
        }
        return Math.round(current);
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsHeader}>
          <p className={styles.statsBadge}>Our Impact</p>
          <h2>Numbers That Speak For Us</h2>
          <p className={styles.statsSubtitle}>
            Learners trust Language Vidya to improve their English and communication skills.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <a
            href="https://wa.me/919217239714"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryCta}
          >
            Why 25,000+ Learners Chose Us
          </a>
          <p className={styles.ctaNote}>These aren't ads, these are results.</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>
                {counts[index]}
                {!stat.isFloat && <span className={styles.statPlus}>+</span>}
              </span>
              <span className={styles.statNote}>{stat.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
