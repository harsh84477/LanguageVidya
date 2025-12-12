"use client";

import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        {/* mandala image in JSX */}
        <img
          src="/uploads/mandalafull.png"
          alt=""
          className={styles.heroMandala}
          aria-hidden="true"
        />

        <div className={styles.heroInner}>
          <h1 className={styles.heading}>Contact us</h1>
          <p className={styles.subheading}>
            Have questions about our English courses or need help choosing the
            right track? Send a message and the Language Vidya team will reply
            within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className={styles.section}>
        <div className={styles.grid}>
          {/* LEFT: info + map (single card) */}
          <div className={styles.infoCard}>
            <h2 className={styles.title}>Talk to our team</h2>
            <p className={styles.text}>
              Reach out for course details, demo sessions, or partnership
              enquiries.
            </p>

            <div className={styles.infoList}>
              <div>
                <h3 className={styles.infoLabel}>Email</h3>
                <p className={styles.infoValue}>support@languagevidya.com</p>
              </div>

              <div>
                <h3 className={styles.infoLabel}>WhatsApp</h3>
                <p className={styles.infoValue}>+91-98765-00000</p>
              </div>

              <div>
                <h3 className={styles.infoLabel}>Timings</h3>
                <p className={styles.infoValue}>
                  Monday – Saturday, 10:00 AM to 7:00 PM (IST)
                </p>
              </div>

              <div>
                <h3 className={styles.infoLabel}>Our Location</h3>
                <p className={styles.infoValue}>
                  2nd Floor, Spacetime Management Pvt Ltd Design House,
                  <br />
                  Greater Kailash II, New Delhi – 110048
                </p>
              </div>

              <div>
                <h3 className={styles.infoLabel}>Google Maps</h3>
                <a
                  href="https://maps.app.goo.gl/g7Rwz2vJiBnp95fF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  Open in Google Maps
                </a>
              </div>

              <div className={styles.mapFrameWrap}>
                <iframe
                  title="Language Vidya Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3446!2d77.234!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sSpacetime%20Management!5e0!3m2!1sen!2sin!4v1700000000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapFrame}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <form className={styles.form}>
            <h2 className={styles.title}>Send us a message</h2>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                className={styles.input}
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                className={styles.input}
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="topic">
                What do you need help with?
              </label>
              <select id="topic" name="topic" className={styles.input}>
                <option>Choose an option</option>
                <option>Spoken English course details</option>
                <option>Business English training</option>
                <option>Classes for students / kids</option>
                <option>Partnership or collaboration</option>
                <option>Something else</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="message">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={4}
                placeholder="Share a brief message and we’ll get back to you."
              />
            </div>

            <button type="submit" className={styles.button}>
              Submit message
            </button>

            <p className={styles.smallNote}>
              By submitting, you agree to be contacted about Language Vidya
              courses. Your details are kept private.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
