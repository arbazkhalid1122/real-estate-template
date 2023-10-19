'use client'
import OurExperts from "@/app/common components/OurExperts";
import BlogPost from "@/app/common components/blogpost";
import FeatureProperty from "@/app/common components/featureproperty";
import Getlisted from "@/app/common components/getListed";
import ImageSwap from "@/app/common components/imageSwap";
import LogoSection from "@/app/common components/partner";
import Videoplay from "@/app/common components/videoplay";
import PropertySwap from "@/app/components/propertySwap";
import Whyus from "@/app/components/whyus";
import styles from './style.module.scss'
import HomeSearch from "@/app/common components/home/homeSearchHeader";
import { Reviews } from "@/app/common components/reviews";
export default function Home4() {

    return (
        <>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18906.129712753736!2d6.722624160288201!3d60.12672284414915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e997b1b6fc09d%3A0x6ee05405ec78a692!2sJ%C4%99zyk%20trola!5e0!3m2!1spl!2spl!4v1672239918130!5m2!1spl!2spl"
                    width="100%"
                    height="700"
                    style={{ border: '0' }}
                    className={styles.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="container">
                <HomeSearch/>
                </div>
            </div>
            <PropertySwap />
            <Whyus />
            <ImageSwap />
            <Videoplay />
            <FeatureProperty type='mainpage'/>
            <OurExperts />
            <LogoSection />
            <Reviews />
            <BlogPost />
            <Getlisted />
        </>
    )
}