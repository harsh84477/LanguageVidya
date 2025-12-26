"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaRobot, FaYoutube } from "react-icons/fa";
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
          <Link href="/" className={styles.link}>Start practicing</Link>
          <Link href="/blog" className={styles.link}>Courses & articles</Link>
          <Link href="/contact-us" className={styles.link}>Free level test</Link>
          <Link href="/contact-us" className={styles.link}>Pricing</Link>
        </div>

        {/* Company links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Company</h3>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact-us" className={styles.link}>Contact</Link>
          <Link href="/#faq" className={styles.link}>FAQ</Link>
          <a href="mailto:careers@languagevidya.com" className={styles.link}>Careers</a>
        </div>

        {/* Support + social */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Support</h3>
          <Link href="/contact-us" className={styles.link}>Help centre</Link>
          <a href="https://wa.me/919217239714" target="_blank" rel="noreferrer" className={styles.link}>WhatsApp support</a>
          <a href="mailto:support@languagevidya.com" className={styles.link}>Email support</a>

          <div className={styles.socialRow}>
            <a href="https://instagram.com/languagevidya" target="_blank" rel="noreferrer" aria-label="Instagram" className={`${styles.socialChip} ${styles.instagram}`}>
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={`${styles.socialChip} ${styles.youtube}`}>
              <FaYoutube className={styles.socialIcon} />
            </a>
            <a href="https://wa.me/919217239714" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${styles.socialChip} ${styles.whatsapp}`}>
              <FaWhatsapp className={styles.socialIcon} />
            </a>
            <a href="tel:+919217239714" aria-label="Call us" className={`${styles.socialChip} ${styles.phone}`}>
              <FaPhoneAlt className={styles.socialIcon} />
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
          <Link href="/contact-us" className={styles.bottomLink}>Terms</Link>
          <span className={styles.dot} />
          <Link href="/contact-us" className={styles.bottomLink}>Privacy</Link>
          <span className={styles.dot} />
          <Link href="/contact-us" className={styles.bottomLink}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
