"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundDecor} aria-hidden="true">
        <div className={styles.decorCircle1} />
        <div className={styles.decorCircle2} />
        <div className={styles.decorCircle3} />
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <span className={styles.badge}>Coming Soon</span>
          <h1 className={styles.title}>Something Big Is Coming</h1>
          <p className={styles.description}>
            We're crafting this page for you. While we put on the finishing touches, feel free to explore other highlights or reach out to us.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.primaryButton}>
              Go to Home
            </Link>
            <Link href="/contact-us" className={styles.outlineButton}>
              Talk to our team
            </Link>
          </div>

          <p className={styles.quickLinksLabel}>Jump into these next</p>
          <div className={styles.quickLinks}>
            <Link href="/blog" className={styles.chip}>Read the blog</Link>
            <Link href="/about" className={styles.chip}>About Language Vidya</Link>
            <Link href="/contact-us" className={styles.chip}>Contact & support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
