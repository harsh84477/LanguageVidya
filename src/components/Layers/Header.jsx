"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.flex}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/uploads/lang-vidya-slant.png"
                alt="Multi-site Blog"
                className={styles.logoImage}
              />
            </Link>
          </div>
<div className={styles.flexEnd}>
          {/* Center: Nav */}
          <nav aria-label="Main navigation" className={styles.nav}>
            <ul
              className={`${styles.navList} ${
                isMenuOpen ? styles.navListOpen : ""
              }`}
            >
              {/* Part 1: spoken english dropdown */}
              <li className={`${styles.relative} ${styles.group}`}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonHoverUnderline}`}
                  aria-haspopup="true"
                >
                  spoken english
                  <svg
                    className={styles.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href="/spoken-english/basic"
                      className={styles.dropdownItem}
                    >
                      English basics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/spoken-english/intermediate"
                      className={styles.dropdownItem}
                    >
                      English intermediate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/spoken-english/advanced"
                      className={styles.dropdownItem}
                    >
                      English advanced
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Part 2: regional lang dropdown */}
              <li className={`${styles.relative} ${styles.group}`}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonHoverUnderline}`}
                  aria-haspopup="true"
                >
                  regional lang
                  <svg
                    className={styles.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <ul className={styles.dropdown}>
                  <li>
                    <Link href="/regional/hindi" className={styles.dropdownItem}>
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/regional/sanskrit"
                      className={styles.dropdownItem}
                    >
                      Sanskrit
                    </Link>
                  </li>
                  <li>
                    <Link href="/regional/tamil" className={styles.dropdownItem}>
                      Tamil
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Part 3: session booking dropdown */}
              <li className={`${styles.relative} ${styles.group}`}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonHoverUnderline}`}
                  aria-haspopup="true"
                >
                  session booking
                  <svg
                    className={styles.icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <ul className={`${styles.dropdown} ${styles.dropdownLarge}`}>
                  <li>
                    <Link href="/sessions/book" className={styles.dropdownItem}>
                      Book a session
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sessions/pricing"
                      className={styles.dropdownItem}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sessions/contact"
                      className={styles.dropdownItem}
                    >
                      Contact to book
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Right: Login + Hamburger */}
            <Link href="login" className={styles.loginLink}>
              Login
            </Link>

            <button
              className={styles.hamburger}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
              <span className={styles.hamburgerBar}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
