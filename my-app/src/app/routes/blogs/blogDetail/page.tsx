import React from "react";
import styles from "./style.module.scss";
import { Button, Form, Input } from "antd";
import { comments, para1, para2, para3, para4, popularPost } from "@/app/data";
import Getlisted from "@/app/common components/getListed";
import Pageheader from "@/app/common components/pageHeader";
import FeedBack from "@/app/common components/feedBack";


export default function BlogDetail() {

  const data = {
    title: 'Our Blogs',
    mainTitle: 'Blog details',
  }
  return (
    <div>
      <Pageheader data ={data} />
      <main className="container">
      <div className={styles.main}>
        <div className={styles.details}>
          <img src="/blogdetail/post2.webp"></img>
          <div className={styles.paradiv}>
            <span>Morgan Smith on 20 May, 22</span>
            <h1>How To Estimate Your Rental Property Expenses.</h1>
            <p> {para1}</p>
          </div>

          <div className={styles.galerymain}>
            <div className={styles.gallery}>
              <div className={styles.gallerydiv}>
                <div className={styles.img1}>
                  <a href="/blogdetail/01.webp">
                    <img src="/blogdetail/01.webp"></img>
                  </a>
                </div>
                <div className={styles.img2}>
                  <a href="/blogdetail/03.webp">
                    <img src="/blogdetail/03.webp"></img>
                  </a>
                </div>
              </div>
              <div className={styles.gallerydiv}>
                <div className={styles.img2}>
                  <a href="/blogdetail/07.webp">
                    <img src="/blogdetail/07.webp"></img>
                  </a>
                </div>
                <div className={styles.img1}>
                  <a href="/blogdetail/05.webp">
                    <img src="/blogdetail/05.webp"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.galleryPara}>
              <p>{para2}</p>
            </div>
          </div>
          <div className={styles.paragraph1}>
            <span>{para3}</span>
          </div>
          <div className={styles.paragraph2}>
            <p>{para4}</p>
          </div>
          <hr></hr>
          <div>

          <FeedBack />
          </div>
        </div>
        <div className={styles.sidebar}>
          <div>
            <h1>Search</h1>
            <Input placeholder="Keywords here..." className={styles.input} />
          </div>
          <div>
            <h1>Catagories</h1>
            <Input placeholder="Keywords here..." className={styles.input} />
            <Input placeholder="Apartments" className={styles.input} />
            <Input placeholder="Family Houese" className={styles.input} />
            <Input placeholder="Duplex Villa" className={styles.input} />
            <Input placeholder="Farm House" className={styles.input} />
            <Input placeholder="Condo" className={styles.input} />
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
            <div className={styles.btndiv}>
              <Button className={styles.button}>Real Estate</Button>
              <Button className={styles.button}>Appartment</Button>
              <Button className={styles.button}>sale Property</Button>
              <Button className={styles.button}>Duplex</Button>
              <Button className={styles.button}>Buy Property</Button>
              <Button className={styles.button}>Houses</Button>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Getlisted />
    </div>
  );
}
