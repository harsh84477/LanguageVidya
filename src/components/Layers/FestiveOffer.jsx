"use client";

import styles from "./FestiveOffers.module.css";

const offers = [
  {
    id: "01",
    title: "Up To ₹20,000 Discount Vouchers",
    text: "Save More On Your Language Vidya Journey With Special Festive Vouchers On Select Programs.",
  },
  {
    id: "02",
    title: "Free Accent Training With Spoken English",
    text: "Choose Spoken English Classes And Get Dedicated Accent-Building Sessions At No Extra Cost.",
  },
  {
    id: "03",
    title: "Career Counselling · Free Of Cost",
    text: "Get Guidance For Multiple Skills, Exams, And Career Paths From Our Expert Counsellors, Completely Free.",
  },
  {
    id: "04",
    title: "Registration At Just ₹999. Limited Period",
    text: "Register today. Begin anytime. Lock in your spot with a minimal fee of just ₹999 during this festive season.",
  },
];

export default function FestiveOffers() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: heading & CTA */}
        <div className={styles.left}>
          <p className={styles.badge}>🟢 15 Dec – 15 Jan</p>
          <h2 className={styles.heading}>
            Christmas & New Year
            <br />
            Festive Offer
          </h2>
          <p className={styles.subheading}>
            Celebrate the season with exclusive Language Vidya benefits,
            designed to upgrade your English and career confidence.
          </p>

          <a
            href="https://wa.me/919217239714"
            target="_blank"
            rel="noreferrer"
            className={styles.bookButton}
          >
            Reserve Your Seat Before It's Gone
          </a>
        </div>

        {/* Right: glass offer cards */}
        <div className={styles.sliderArea}>
          <div className={styles.grid}>
            {offers.map((offer) => (
              <article key={offer.id} className={styles.card}>
                <div className={styles.cardLeft}>
                  <div className={styles.iconCircle}>
                    <span className={styles.iconNumber}>{offer.id}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{offer.title}</h3>
                  <p className={styles.text}>{offer.text}</p>
                </div>



              </article>
              
            ))}
<div className={styles.bottomCtaRow}>
          <a href="tel:+919217239714" className={styles.bookButton}>Lock Your Price Today</a>
          <p className={styles.note}>
            Limited seats. High demand. * Offers valid only between 15 December and 15 January on eligible Language Vidya courses.
          </p>
        </div>

          </div>
        </div>

        
      </div>
    </section>
  );
}
