import React from 'react'
import { cardObj } from '../data'
import styles from './style.module.scss'


export default function ServicesProvide() {
  return (
    <main className='container'>
    <div className={styles.services}>
          <span> Our Services</span>
          <h2>Services That We Provide.</h2>

          <div style={{marginLeft:"30px"}}>
            {cardObj.map((item) => (
              <a href="#">
                <div className={styles.Card}>
                  <img alt="example" src={item.img}></img>
                  <div className={styles.decription}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        </main>
  )
}
