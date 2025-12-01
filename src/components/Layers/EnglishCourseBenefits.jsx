"use client";

import styles from "./EnglishCourseBenefits.module.css";
import Image from "next/image";

export default function EnglishCourseBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Why choose section */}
        <article className={`${styles.card} ${styles.block1}`} >
          <h2 className={styles.heading}>
            Why Choose Our Online English Speaking Course?
          </h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Live, interactive classes</h3>
                <p className={styles.pointText}>
                  Learn in real time with expert trainers who correct your
                  mistakes as you speak.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Friendly, certified tutors</h3>
                <p className={styles.pointText}>
                  Practice with mentors who understand Indian learners and help
                  you speak naturally.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Flexible timings</h3>
                <p className={styles.pointText}>
                  Join sessions from home, office, or college with slots that
                  fit your schedule.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Practical, real-life topics</h3>
                <p className={styles.pointText}>
                  Improve English for meetings, interviews, travel, and daily
                  conversations.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Regular feedback & tracking</h3>
                <p className={styles.pointText}>
                  Get personal feedback, speaking scores, and clear improvement
                  plans.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Simple, transparent pricing</h3>
                <p className={styles.pointText}>
                  Choose from clear plans with no hidden charges or surprise
                  fees.
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* Top right image */}
        <div className={`${styles.imageCard} ${styles.block2}`}>
          <Image
            src="/uploads/test-img 1 boy.png"
            alt="Learner attending an online English session"
            fill
            className={styles.image}
          />
        </div>

        {/* Bottom left image */}
        <div className={`${styles.imageCard} ${styles.block3}`}>
          <Image
            src="/uploads/test-img 2 .png"
            alt="Learner practising English conversation"
            fill
            className={styles.image}
          />
        </div>

        {/* What you will learn section */}
        <article className={`${styles.card} ${styles.block4}`}>
          <h2 className={styles.heading}>
            What Will You Learn In Our English Speaking Course?
          </h2>
          <ul className={styles.list}>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Daily conversation skills</h3>
                <p className={styles.pointText}>
                  Speak confidently in day-to-day situations with friends,
                  family, and colleagues.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Grammar made simple</h3>
                <p className={styles.pointText}>
                  Understand grammar through usage, examples, and speaking
                  practice instead of heavy rules.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Powerful vocabulary</h3>
                <p className={styles.pointText}>
                  Learn useful words and phrases you can start using from the
                  very first week.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Pronunciation & accent</h3>
                <p className={styles.pointText}>
                  Practise clear pronunciation so people understand you easily
                  in every conversation.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Stage & meeting confidence</h3>
                <p className={styles.pointText}>
                  Learn how to introduce yourself, share ideas, and present with
                  confidence.
                </p>
              </div>
            </li>
            <li>
              <span className={styles.bullet}></span>
              <div>
                <h3 className={styles.pointTitle}>Live practice sessions</h3>
                <p className={styles.pointText}>
                  Join guided practice rooms, mock interviews, and discussion
                  circles every week.
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
