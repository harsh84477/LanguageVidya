'use client'

import { useEffect, useState } from 'react'
import styles from './AnnouncementBar.module.css'

const DEFAULT_MESSAGES = [
 'Confidence Begins with Communication.',
'Learn English. Lead with Impact.',
'Turn Your Words into Power.',
'Communication That Transforms Lives.',
'Your Journey to Fearless Speaking Starts Here.',
'Learn With Comfort, Speak with Confidence',
'Impress Your Boss with Confident English.',
'Upgrade Your CV with Powerful Communication Skills.',
'Speak Smart. Get Promoted Faster.',
'Turn Your English into Your Biggest Career Asset.',
'From Nervous Speaker to Office Star.',
'Let Your Words Open New Career Doors.',
'Communicate Better. Earn Better.',
'Your English Can Decide Your Next Promotion.',
'Build Confidence That Gets You Noticed.'
]

export default function AnnouncementBar({ messages }) {
  const msgs = Array.isArray(messages) && messages.length > 0
    ? messages
    : DEFAULT_MESSAGES

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (msgs.length <= 1) return

    const interval = setInterval(() => {
      // fade out
      setVisible(false)

      // change text, then fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % msgs.length)
        setVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [msgs.length])

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
  )
}
