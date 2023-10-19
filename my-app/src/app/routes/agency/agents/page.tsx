"use client";
import { agents } from "../staticData";
import { Card } from "antd";
import styles from "./style.module.scss";
import Getlisted from "@/app/common components/getListed";
import Pageheader from "@/app/common components/pageHeader";
import Link from "next/link";

const { Meta } = Card;
export default function agent() {

  const data = {
    title:'Our Agents',
    mainTitle: 'Meet our Team'
  }
  return (
    <>
      <Pageheader data={data} />
      <div className={`container`}>
        <div className={styles.hero}>
          {agents.map((item) => (
            <Link className={styles.card} href={{pathname:'/routes/agency/agentDetail',query:item}}>
              {/* <div className={`${styles.socialIcon} d-flex justify-center gap-3`}>
                  <FaFacebookF size={40} />
                  <BsTwitter size={40} />
                  <RxInstagramLogo size={40} />
                </div> */}
            <div className={styles.card}>
              <Card
                hoverable
                cover={<img alt="Agent pic" src={item.img} />}
              >
                <Meta title={item.name} description={item.position} />
              </Card>
              </div>
             </Link>
          ))}
        </div>
      </div>
      <Getlisted />
    </>
  );
}
