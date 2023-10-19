"use client";
import { PiSelectionBold, PiSlidersBold } from "react-icons/pi";
import styles from "./style.module.scss";
import { Button, Dropdown, Menu } from "antd";
import { BiLocationPlus } from "react-icons/bi";
import { TiHomeOutline } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import ImageSwap from "@/app/common components/imageSwap";
import Whyus from "@/app/components/whyus";
import PropertySwap from "@/app/components/propertySwap";
import FeatureProperty from "@/app/common components/featureproperty";
import LogoSection from "@/app/common components/partner";
import BlogPost from "@/app/common components/blogpost";
import Getlisted from "@/app/common components/getListed";
import HomeHeader1 from "@/app/components/homeHeader1/homeHeader1";
import HomeSearch1 from "@/app/components/homeHeader1/HomeSearch1";
import { Reviews } from "@/app/common components/reviews";
import Header from "./header";

export default function Home2() {
  const items = (
    <Menu className={styles.menuitems}>
      <ul>
        <li key="1">Home 1</li>
        <li key="2">Home 1</li>
        <li key="3">Home 1</li>
        <li key="4">Home 1</li>
        <li key="5">Home 1</li>
      </ul>
    </Menu>
  );

  return (
    <>
       <Header/>
      <ImageSwap />
      <Whyus />
      <PropertySwap />
      <FeatureProperty type="mainpage" />
      <LogoSection />
      <Reviews />
      <BlogPost />
      <Getlisted />
    </>
  );
}
