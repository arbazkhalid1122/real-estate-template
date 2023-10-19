   'use client'
import OurExperts from '@/app/common components/OurExperts';
import ServicesProvide from '@/app/common components/ServicesProvide';
import Getlisted from '@/app/common components/getListed';
import Pageheader from '@/app/common components/pageHeader';
import LogoSection from '@/app/common components/partner';
import React from 'react'
import styles from './style.module.scss'
import { data } from '../../../data'
import { items } from '../../properties/data';
import { Reviews } from '@/app/common components/reviews';

export default function Services() {
    const dataa = {
        title: "Services",
        mainTitle: "Our Services",
      };
  return (
    <div>
      <Pageheader data={dataa} />
       <main className='container'>
       <div className={styles.main}>
        <div className={styles.whyUsSection}>
            <div className={styles.intro}>
            <span>Why Choose Us</span>
            <h1>We Provide best Services for our customer<span>.</span></h1>
            <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity you have to choose here and enjoy huge discount you can get.</p>
            </div>
            <div className={styles.carddiv}>
                {
                    data.map((item)=>(
            <div className={styles.card}>
                <img src={item.img}></img>
                <div>
                    <h1>Budget Friendly</h1>
                    <p>Properties are most budget friendly</p>
                </div>
            </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.imgdiv}>
            <img src='/about/about7.webp'></img>
        </div>
       </div>
       </main>
      <ServicesProvide />
      <Reviews />
      <LogoSection />
      <OurExperts />
      <Getlisted />
    </div>
  )
}
