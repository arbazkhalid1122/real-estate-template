'use client'
import React from "react";
import styles from "./style.module.scss";
import { popularPost } from "@/app/data";
import { Button, Input, Pagination } from "antd";
import Getlisted from "@/app/common components/getListed";
import Pageheader from "@/app/common components/pageHeader";
import BlogMax from "@/app/common components/blogGrid";

export default function blogLeftSideBar({searchParams}:any) {
  const data = {
    title: 'Our Blog',
    mainTitle: 'Latest Blog Post',
  }

  return (
    <div>
      <Pageheader data={data}/>
      <div className={`container ${styles.main} ${searchParams?.item && styles.mainRight}`}>
        <div className={styles.sidebar}>
          <div>
            <h1>Search</h1>
            <Input placeholder="Keywords here..." className={styles.input} />
          </div>
          <div>
            <h1>Catagories</h1>
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
          </div>
          <div>
            <h1>Popular Post</h1>
            {popularPost.map((item) => (
              <div className={styles.post}>
                <img src={item.img}></img>
                <div className={styles.decription}>
                  <h2>{item.date}</h2>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1>Archieves</h1>
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Keywords here..." className={styles.input} />
          </div>

          <div>
            <h1>Tags</h1>
            <div>
              <Button className={styles.button}>Real Estate</Button>
              <Button className={styles.button}>Appartment</Button>
              <Button className={styles.button}>sale Property</Button>
              <Button className={styles.button}>Duplex</Button>
              <Button className={styles.button}>Buy Property</Button>
              <Button className={styles.button}>Houses</Button>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.houses}>
            {/* <div className={styles.homecontainer}>
              {blogPostGrid.map((item) => (
                <div className={styles.homeitem}>
                  <img src={item.src} alt="" />
                  <div className={styles.desc}>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <div></div>
                </div>
              ))}
            </div> */}
            <BlogMax type={'flex'}/>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
          </div>
        </div>
      </div>
      <Getlisted />
    </div>
  );
}
