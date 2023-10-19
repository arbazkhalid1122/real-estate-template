   'use client'
import Pageheader from "@/app/common components/pageHeader";
import styles from "./style.module.scss";
import ServicesProvide from "@/app/common components/ServicesProvide";
import Whyus from "@/app/components/whyus";
import LogoSection from "@/app/common components/partner";
import Getlisted from "@/app/common components/getListed";
import OurExperts from "@/app/common components/OurExperts";
import { Reviews } from "@/app/common components/reviews";

export default function About2() {
  const data = {
    title: "About Us",
    mainTitle: "About Bary",
  };

  return (
    <>
      <Pageheader data={data} />
      <main className="container">
        <div className={styles.sec1}>
          <div className={styles.imgdiv}>
            {" "}
            <img src="/about/about1.webp"></img>
          </div>
          <div className={styles.history}>
            <span> Since 1975</span>
            <h1>
              We Provide Right Choice Of Properties That You Need And Have Great
              Opportunity To Choose From Thousands Of Collection{" "}
            </h1>
            <ul>
              <li>
                <h2> 20 K+</h2>
                <p>Properties</p>
              </li>
              <li>
                <h2> 12 K+</h2>
                <p>Customers</p>
              </li>
              <li>
                <h2> 160 +</h2>
                <p>Awards win</p>
              </li>
            </ul>
          </div>
        </div>
        <ServicesProvide />
        <Whyus />
        <Reviews />
        <LogoSection />
        <OurExperts />
      </main>
      <Getlisted />
    </>
  );
}
