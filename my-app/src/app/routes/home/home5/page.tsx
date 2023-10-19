"use client";
import CardCarousel from "@/app/common components/CardCarousel/cardCarousel";
import BlogPost from "@/app/common components/blogpost";
import FeatureProperty from "@/app/common components/featureproperty";
import Getlisted from "@/app/common components/getListed";
import LogoSection from "@/app/common components/partner";
import Videoplay from "@/app/common components/videoplay";
import PropertySwap from "@/app/components/propertySwap";
import Whyus from "@/app/components/whyus";
import HomeSearch from "@/app/common components/home/homeSearchHeader";
import styles from "./style.module.scss";
import { home5Gallery } from "@/app/data";
import { Reviews } from "@/app/common components/reviews";
export default function Home5() {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18906.129712753736!2d6.722624160288201!3d60.12672284414915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e997b1b6fc09d%3A0x6ee05405ec78a692!2sJ%C4%99zyk%20trola!5e0!3m2!1spl!2spl!4v1672239918130!5m2!1spl!2spl"
          width="100%"
          height="700"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <CardCarousel />
      <HomeSearch type="home5" />
      <PropertySwap />
      <Whyus />
      <div className="container">
        <div className={styles.galleryMain}>
          {home5Gallery.map((item) => (
            <div
              className={styles.gallerydiv}
              style={{ marginTop: item.marginTop }}
            >
              <img src={item.src}></img>
              <div className={styles.desc}>
                <span>{item.title}</span>
                <p>{item.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CardCarousel />
      <HomeSearch type='home5' />
      <PropertySwap />
      <Whyus />
      <Videoplay />
      <FeatureProperty type='mainpage' />
      <LogoSection />
      <Reviews />
      <BlogPost />
      <Getlisted />
    </>
  );
}
