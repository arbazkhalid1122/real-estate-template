"use client";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import { experts } from "../routes/agency/staticData";
import { HiArrowLongRight } from "react-icons/hi2";

export default function OurExperts() {
  return (
    <main className="container">
      <div className={styles.expertMain}>
        <div className={styles.intro}>
          <span>Our Agents</span>
          <h1>Here Is Our Experts.</h1>
          <p>
            Huge number propreties availabe here for buy, sell and Rent, you a
            find here co-living property lots to choose here and enjoy huge.
          </p>
          <a href="#">
            <span>
              View All Posts
              <HiArrowLongRight />
            </span>
          </a>
        </div>
        <div>
          <div className={styles.hero}>
            {experts.map((item) => (
              <Link
                href={{ pathname: "/routes/agency/agentDetail", query: item }}
              >
                <div className={styles.carddiv}>
                  <img src={item.img}></img>
                  <div className={styles.ncard}>
                    <h1>{item.name}</h1>
                    <p>{item.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
