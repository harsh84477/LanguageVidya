"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand + short pitch */}
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
  <div className={styles.logoMark}>
    <Image src="/uploads/icons/ShotLOGO.png" alt="Language Vidya Logo" width={35} height={35} />
  </div>
  <span className={styles.brandName}>Language Vidya</span>
</div>

          <p className={styles.brandText}>
            Live, friendly English practice designed for Indian learners who
            want clear, confident communication.
          </p>
        </div>

        {/* Product links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Product</h3>
          <a href="#sessions" className={styles.link}>Find a tutor</a>
          <a href="#courses" className={styles.link}>Courses</a>
          <a href="#tests" className={styles.link}>Free level test</a>
          <a href="#pricing" className={styles.link}>Pricing</a>
        </div>

        {/* Company links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Company</h3>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <a href="#faq" className={styles.link}>FAQ</a>
          <a href="#careers" className={styles.link}>Careers</a>
        </div>

        {/* Support + social */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Support</h3>
          <a href="#help" className={styles.link}>Help centre</a>
          <a href="#whatsapp" className={styles.link}>WhatsApp support</a>
          <a href="#policies" className={styles.link}>Policies</a>

          <div className={styles.socialRow}>
            <a href="#" aria-label="Instagram" className={styles.socialChip}>
              IG
            </a>
            <a href="#" aria-label="YouTube" className={styles.socialChip}>
              YT
            </a>
            <a href="#" aria-label="WhatsApp" className={styles.socialChip}>
              WA
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © {year} Language Vidya. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <a href="#terms" className={styles.bottomLink}>Terms</a>
          <span className={styles.dot} />
          <a href="#privacy" className={styles.bottomLink}>Privacy</a>
          <span className={styles.dot} />
          <a href="#cookies" className={styles.bottomLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}
