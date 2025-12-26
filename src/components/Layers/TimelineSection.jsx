"use client";

import styles from "./TimelineSection.module.css";

const steps = [
  {
    number: 1,
    title: "Set Your Goal",
    text: "Career, travel, or confidence—pick your why.",
    icon: "/icons/goal-2-svgrepo-com.svg",
  },
  {
    number: 2,
    title: "Learn the Basics",
    text: "Grammar, vocabulary, and pronunciation foundations.",
    icon: "/icons/books-svgrepo-com.svg",
  },
  {
    number: 3,
    title: "Practice Daily",
    text: "Daily speaking exercises build habit.",
    icon: "/icons/speaking-head-svgrepo-com.svg",
  },
  {
    number: 4,
    title: "Go Real-World",
    text: "Nail meetings, calls, and interviews.",
    icon: "/icons/job-profile-svgrepo-com (1).svg",
  },
  {
    number: 5,
    title: "Express Yourself",
    text: "Share ideas, opinions, and stories clearly.",
    icon: "/icons/idea-svgrepo-com.svg",
  },
  {
    number: 6,
    title: "Connect Skills",
    text: "Read, write, listen, speak—all in sync.",
    icon: "/icons/link-svgrepo-com.svg",
  },
  {
    number: 7,
    title: "Speak Fluently",
    text: "Confident communication anywhere.",
    icon: "/icons/boost-for-reddit-svgrepo-com.svg",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>Your Journey</span>
        <h2 className={styles.heading}>
          From Zero to <span className={styles.highlight}>Fluent</span>
        </h2>
        <p className={styles.subheading}>
          7 milestones that transform how you communicate
        </p>
      </div>

     
      <div className={styles.timelineSection}>
        <div className={styles.timeline}>
          {/* Progress track */}
          <div className={styles.track}>
            <div className={styles.trackFill} />
          </div>

          {/* Steps with icon, tooltip and title at bottom */}
          <div className={styles.steps}>
            {steps.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.node}>
                  <img
                    src={step.icon}
                    alt={step.title}
                    className={styles.icon}
                  />
                  <div className={styles.ring} />
                  <span className={styles.number}>{step.number}</span>

                  {/* Hover tooltip */}
                  <div className={styles.tooltip}>
                    <h4 className={styles.tooltipTitle}>{step.title}</h4>
                    <p className={styles.tooltipText}>{step.text}</p>
                  </div>
                </div>

                {/* Title shown at bottom of icon */}
                <span className={styles.stepTitle}>{step.title}</span>
              </div>
            ))}

            {/* Finish man with single arrow coming from line */}
            <div className={styles.finish}>
              <div className={styles.trophyNode}>
                <img
                  src="/icons/man.png"
                  alt="man"
                  className={styles.trophyIcon}
                />
                <div className={styles.trophyGlow} />
              </div>
            </div>
          </div>
        </div>
        
      <div className={styles.ctaRow}>
        <a
          href="https://wa.me/919217239714"
          target="_blank"
          rel="noreferrer"
          className={styles.primaryCta}
        >
          See How We Take You From Beginner to Job-Ready
        </a>
        <p className={styles.ctaNote}>Structured. Simple. Effective.</p>
      </div>
       
      </div>

    </section>
  );
}
