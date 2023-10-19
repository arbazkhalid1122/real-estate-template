import React from "react";
import styles from "@/app/common components/style.module.scss";
import { blogPostGrid } from "@/app/data";
import Getlisted from "@/app/common components/getListed";
import { Pagination } from "antd";
import Pageheader from "@/app/common components/pageHeader";

export default function Bloggrid() {
  const data = {
    title: 'Our Blog',
    mainTitle: 'Latest Blog Post',
  }
  return (
    <div>
      <Pageheader data={data} />
      <div className={`container ${styles.houses}`}>
        <div className={styles.houses}>

          <div className={styles.textcenter}>
            <p>Our Blog</p>
            <h1>Check Our Blog Post's.</h1>
          </div>
          <div className={styles.homecontainer}>
            {blogPostGrid.map((item) => (
              <div className={styles.homeitem}>
                <img src={item.src} alt="" />
                <div>
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-center mt-5">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <Getlisted />
      </div>
      </div>
      );
}
