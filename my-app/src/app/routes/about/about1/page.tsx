"use client";
import styles from "./style.module.scss";
import LogoSection from "../../../common components/partner";
import Whyus from "@/app/components/whyus";
import Getlisted from "@/app/common components/getListed";
import ServicesProvide from "@/app/common components/ServicesProvide";
import { Reviews } from "@/app/common components/reviews";

export default function About() {
  function startCountdown(targetCount: any, duration: any) {
    // let countElement = document.getElementById('count');
    const interval = 10;

    const step = targetCount / (duration / interval);

    let currentCount = 0;
    const countdownInterval = setInterval(() => {
      currentCount += step;

      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(countdownInterval);
      }

      document.getElementById("count")!.textContent =
        Math.round(currentCount).toString();
      document.getElementById("count2")!.textContent =
        Math.round(currentCount).toString();
      document.getElementById("count3")!.textContent =
        Math.round(currentCount).toString();
    }, interval);
  }

  startCountdown(100, 2000);

  return (
    <>
      <div className={styles.aboutsec}>
        <div className={styles.explaination}>
          <span>About us</span>
          <h2>About Bary</h2>
          <p className={styles.para}>
            Huge number of propreties availabe here for buy<br></br> and sell,
            also you can find here co-living property
          </p>
        </div>
      </div>
      <div className={styles.section1}>
        <img
          src="/about/about5.webp"
          className={styles.img}
        />
      </div>
      <main className="container">
        <div className={styles.section2}>
          <div className={styles.history}>
            <p> Since 1975</p>
            <h2>
              We Provide Right Choice Of Properties That You Need And Have Great
              Opportunity To Choose From Thousands Of Collection
            </h2>

            <div className={styles.stat}>
              <div>
                <h2>
                  {" "}
                  <span id="count">0</span> K+
                </h2>
                <p>Properties</p>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <h2>
                  <span id="count2">0</span>K+
                </h2>
                <p>Properties</p>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <h2>
                  {" "}
                  <span id="count3">0</span> +
                </h2>
                <p>Properties</p>
              </div>
            </div>
          </div>
        </div>
        <Whyus />

        <ServicesProvide />
        <Reviews />
        <LogoSection />
      </main>
      <Getlisted />
    </>
  );
}
