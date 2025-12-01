"use client";

import { useEffect, useState } from "react";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar({ messages } = {}) {
  const defaultMessages = [
    "tearm with Comfort speak with comfidence",
    "Learn at your own pace — new posts weekly",
    "Join our community — subscribe for updates",
  ];
  const msgs = messages && messages.length ? messages : defaultMessages;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // simple fade out -> change -> fade in
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % msgs.length);
        setVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [msgs.length]);

  return (
    <div className={styles.barWrapper}>
      <div className={styles.barInner}>
        <div
          className={`${styles.message} ${
            visible ? styles.messageVisible : styles.messageHidden
          }`}
          aria-live="polite"
        >
          {msgs[index]}
        </div>
      </div>
    </div>
  );
}

