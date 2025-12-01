import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.textGray600}>© {year} Multi-site Blog System. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul className={styles.flexGap4}>
            <li>
              <a href="/privacy" className={styles.link}>Privacy</a>
            </li>
            <li>
              <a href="/terms" className={styles.link}>Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
