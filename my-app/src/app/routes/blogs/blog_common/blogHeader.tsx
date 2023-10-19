import React from 'react'
import styles from './style.module.scss'

export default function BlogHeader({ title, heading, detail }: any)  {
    return (
        <>
          <div className={styles.hero}>
            <div className={styles.section1}>
              <div className={styles.section1Inner}>
                <p>{title}</p>
                <h1>{heading}</h1>
                <p>{detail}</p>
              </div>
            </div>
          </div>
        </>
      );
}
