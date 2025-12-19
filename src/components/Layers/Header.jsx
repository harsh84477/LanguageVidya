'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  {
    title: 'Spoken English',
    items: [
      { id: 'spoken-basic', label: ' Basic Spoken English', href: '/spoken-english/basic' },
      { id: 'spoken-intermediate', label: ' Basic to Communicable ', href: '/spoken-english/intermediate' },
      { id: 'spoken-advanced-kids', label: 'kids English Mastery Program', href: '/spoken-english/advanced' },
      { id: 'spoken-business', label: 'Business English', href: '/spoken-engliish/advjanced' },
      { id: 'spoken-accented', label: 'Accented English', href: '/spoken-engliiish/advankced' }
    ]
  },
  {
    title: 'Regional Languages',
    items: [
      { id: 'regional-hindi-foreigners', label: 'Hindi For Foreigners', href: '/regional/Hindi' },
      { id: 'regional-sanskrit', label: 'Sanskrit', href: '/regional/sanskrit' }
    ]
  },
  {
    title: 'Session Booking',
    wide: true,
    items: [
      { id: 'sessions-master-classes', label: 'English Master Classes', href: '/sessions/book' },
      { id: 'sessions-corporate-bootcamp', label: 'Corporate Bootcamp', href: '/sessions/pricing' },
      { id: 'sessions-1-1', label: '1-1 Session', href: '/sessions/contact' },
      { id: 'sessions-seminars', label: 'Intitutional Seminars', href: '/sessions/contact' }
    ]
  },
  {
    title: 'Entrance Exams',
    items: [
      { id: 'exam-ielts', label: 'IELTS', href: '/exams/ielts' },
      { id: 'exam-toefl', label: 'TOEFL', href: '/exams/toefl' },
      { id: 'exam-gre', label: 'GRE', href: '/exams/gre' },
      { id: 'exam-pte', label: 'PTE', href: '/exams/pte' }
    ]
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleMobileGroup = (groupTitle) => {
    setOpenMobileGroup((prev) => (prev === groupTitle ? null : groupTitle))
  }

  return (
    <header className={styles.header}>
    

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo */}
          <div className={styles.logoWrap}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <Image
                src="/uploads/lang-vidya-slant.png"
                alt="Language Vidya"
                className={styles.logoImage}
                width={156}
                height={52}
                priority
              />
            </Link>
          </div>

          {/* Right side */}
          <div className={styles.rightSide}>
            {/* Desktop nav */}
            <nav className={styles.nav} aria-label="Main navigation">
              <ul className={styles.navList}>
                {NAV_ITEMS.map((group) => (
                  <li key={group.title} className={styles.navGroup}>
                    <button
                      type="button"
                      className={styles.navButton}
                      aria-haspopup="true"
                    >
                      <span>{group.title}</span>
                      <svg
                        className={styles.navIcon}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <ul
                      className={`${styles.dropdown} ${
                        group.wide ? styles.dropdownWide : ''
                      }`}
                    >
                      {group.items.map((item) => (
                        <li key={item.id}>
                          <Link href={item.href} className={styles.dropdownItem}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Login + hamburger */}
            <div className={styles.actions}>
              <Link href="/login" className={styles.loginLink}>
                Login/SignUp
              </Link>

              <button
                type="button"
                className={styles.hamburger}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className={styles.hamburgerBar} />
                <span className={styles.hamburgerBar} />
                <span className={styles.hamburgerBar} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ''
          }`}
        >
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileList}>
              {NAV_ITEMS.map((group) => (
                <li key={group.title} className={styles.mobileGroup}>
                  <button
                    type="button"
                    className={styles.mobileGroupTitleButton}
                    onClick={() => toggleMobileGroup(group.title)}
                    aria-expanded={openMobileGroup === group.title}
                  >
                    <span>{group.title}</span>
                    <svg
                      className={`${styles.mobileChevron} ${openMobileGroup === group.title ? styles.mobileChevronOpen : ''}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`${styles.mobileGroupItems} ${
                      openMobileGroup === group.title ? styles.mobileGroupItemsOpen : ''
                    }`}
                  >
                    {group.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={`${styles.mobileBackdrop} ${
            isMenuOpen ? styles.mobileBackdropOpen : ''
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </div>
    </header>
  )
}
