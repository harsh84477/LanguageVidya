
"use client";
import styles from "./FloatingActions.module.css";

import { FaWhatsapp, FaInstagram, FaRobot, FaPhoneAlt } from "react-icons/fa";

const ACTIONS = [
  {
    href: "/ai-practice",
    label: "AI Practice",
    icon: FaRobot,
    variant: "fab-ai",
  },
  {
    href: "https://wa.me/919217239714",
    label: "Chat on WhatsApp",
    icon: FaWhatsapp,
    variant: "fab-whatsapp",
    external: true,
  },
  {
    href: "https://instagram.com/languagevidya",
    label: "Open Instagram",
    icon: FaInstagram,
    variant: "fab-instagram",
    external: true,
  },
  {
    href: "tel:+919217239714",
    label: "Call us",
    icon: FaPhoneAlt,
    variant: "fab-phone",
  },
];

const FloatingActions = () => {
  return (
    <div className={styles["fab-container"]} >
      {ACTIONS.map(({ href, label, icon: Icon, variant, external }) => (
        <a
          key={label}
          href={href}
          className={`${styles.fab} ${styles[variant]}`}
          aria-label={label}
          title={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : null)}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default FloatingActions;
