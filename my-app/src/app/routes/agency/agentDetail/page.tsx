'use client'
import styles from "./style.module.scss";
import { Button, Card } from "antd";
import Getlisted from "@/app/common components/getListed";
import { properties } from "../staticData";
import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AgentBiography, AgentOverview, propertyAminities } from "@/app/data";
import Pageheader from "@/app/common components/pageHeader";
import { RiStarSFill } from "react-icons/ri";
import { LiaSkype } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function AgentDetails({ searchParams }: any) {

  const data = {
    title: 'Our agents',
    mainTitle: 'Fleming de Silva'
  }

  const { Meta } = Card;


  return (
    <>
      <Pageheader data={data} />
      <div className={`container ${styles.main}`}>
        <div className={styles.innerDiv}>
          <div className={styles.stat}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span>135</span>
                <span>K</span>
                <span>+</span>
                <p>Properties sold</p>
              </li>
              <li className={styles.li}>
                <span>172</span>
                <span>K</span>
                <span>+</span>
                <p>Customers</p>
              </li>
              <li className={styles.lastLi}>
                <span>10</span>
                <span>+</span>
                <p>Awarrd Win</p>
              </li>
            </ul>
          </div>
          <div className={styles.biography}>
            <div className={styles.middlediv}>
              <div>
                <h1>Biography</h1>
                <p>{AgentBiography}</p>
              </div>
              <div>
                <h1>Overview</h1>
                <p>{AgentOverview}</p>
                <span>phone no.</span>
                <h1>+9985 254 784</h1>
              </div>
            </div>

            <div className={styles.antCard}>
              <Card
                hoverable
                cover={<img alt="example" src={searchParams?.img? searchParams?.img: '/agents/person2.webp'} />}
              >
                <div className={`text-center text-light ${styles.detail}`}>
                  <div className={`${styles.socialIcon} d-flex justify-center gap-3`}>
                    <FaFacebookF size={40} />
                    <BsTwitter size={40} />
                    <RxInstagramLogo size={40} />
                  </div>
                  <div className={styles.cardText}>
                    <h1 className="">Fleming de Silva</h1>
                    <p className="mt-2">Real Estate Broker</p>
                  </div>

                  <div className="d-flex align-items-center justify-center mt-2">
                    <RiStarSFill size={20} />
                    <RiStarSFill size={20} />
                    <RiStarSFill size={20} />
                    <RiStarSFill size={20} />
                    <RiStarSFill size={20} />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className={`container ${styles.sec2Main}`}>
          <div className={styles.section2}>
            <div className={styles.firstdiv}>
              <h1>Property Amenities</h1>
              <p>{propertyAminities}</p>
              <ul>
                {properties.map((item) => (
                  <li>
                    <img src={item.img} />
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.secondDiv}>
              <h4>Send Message To Fleming De Silva</h4>
              <p>
                Huge number of propreties availabe here for buy, sell and Rent.
                Also you find here co-living property, lots opportunity
              </p>
              <form>
                <input placeholder="First Name" className={styles.input2} />
                <input placeholder="Last Name" className={styles.input2} />
                <input placeholder="Phone Number" className={styles.input2} />
                <input placeholder="Email Address" className={styles.input2} />
                <textarea placeholder="Message" className={styles.textarea} />
              </form>
              <Button className={styles.button}>Contact Us</Button>
            </div>
          </div>
        </div>

        <div className={`container ${styles.cardconainer}`}>
          <div className={`${styles.card1} ${styles.cards}`}>
            <div className={`d-flex align-items-center ${styles.cardChild}`}>
              <div>
                <h4>Email.</h4>
                <p>2amelia@example.com</p>
              </div>
              <div>
                <div><MdOutlineAlternateEmail /></div>
              </div>
            </div>
          </div>
          <div className={`${styles.card2} ${styles.cards}`}>
            <div className={`d-flex align-items-center ${styles.cardChild}`}>
              <div>
                <h4>Whatsapp</h4>
                <p>012547 987 452</p>
              </div>
              <div>
                <div><AiOutlineWhatsApp /></div>
              </div>
            </div>
          </div>
          <div className={`${styles.card3} ${styles.cards}`}>
            <div className={`d-flex align-items-center ${styles.cardChild}`}>
              <div>
                <h4>Skype.</h4>
                <p>amelia.margaret</p>
              </div>
              <div>
                <div><LiaSkype /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Getlisted />
    </>
  );
}
