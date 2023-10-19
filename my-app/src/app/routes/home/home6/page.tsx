
'use client'
import React, { useState } from 'react';
import styles from './style.module.scss';
import Whyus2 from '@/app/components/whyus/whyus2';
import Materials from '@/app/components/whyus/materials';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import { Col, Form, Input, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { floorplan, home6Gallery, howitWorks } from '@/app/data'
import BlogPost from '@/app/common components/blogpost'
import Getlisted from '@/app/common components/getListed'
import { ImageCarousel } from './caresole/Caresole'

// import { LiaLongArrowAltRightSolid } from "react-icons/lia";
// import styles from "./style.module.scss";
// import { Col, Form, Input, Row } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import { floorplan, home6Gallery, howitWorks } from "@/app/data";
// import BlogPost from "@/app/common components/blogpost";
// import Getlisted from "@/app/common components/getListed";
// import { ImageCarousel } from "./caresole/Caresole";
// import { Reviews } from "@/app/common components/reviews";

export default function Home6() {
  const [form] = Form.useForm();
  const { TextArea } = Input;


  const propertyData = [
    {
      name: 'Luxury Home',
      title: 'Patriot de Plaza',
      address: '194 Mercer Street, 627 Broadway, New York',
      price: 'Price: 255500$',
      details: [
        { icon: '/home.webp', label: 'Bedrooms' },
        { icon: '/bed.webp', label: 'Bathrooms' },
        { icon: '/garage.webp', label: 'Garage' },
        { icon: '/kitchen.webp', label: 'Kitchen' },
      ],
    },

    {
      name: 'Luxury Home',
      title: 'Patriot de Plaza',
      address: '194 Mercer Street, 627 Broadway, New York',
      price: 'Price: 23500$',
      details: [
        { icon: '/home.webp', label: 'Bedrooms' },
        { icon: '/bed.webp', label: 'Bathrooms' },
        { icon: '/garage.webp', label: 'Garage' },
        { icon: '/kitchen.webp', label: 'Kitchen' },
      ],
    },

    {
      name: 'Luxury Home',
      title: 'Patriot de Plaza',
      address: '194 Mercer Street, 627 Broadway, New York',
      price: 'Price: 45500$',
      details: [
        { icon: '/home.webp', label: 'Bedrooms' },
        { icon: '/bed.webp', label: 'Bathrooms' },
        { icon: '/garage.webp', label: 'Garage' },
        { icon: '/kitchen.webp', label: 'Kitchen' },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (index: any) => {
    if (index >= 0 && index < propertyData.length) {
      setCurrentSlide(index);
      setData([propertyData[index]]);
    }
  };
  const [data, setData] = useState([propertyData[currentSlide]]);

  return (
    <>
      <div>
        {data.map((property, index) => (
          <div key={index} className={`${styles.home6}`}>
            <div className={`container ${styles.paragraph}`}>
              <p className='mb-3'>{property.name}</p>
              <h1>{property.title}</h1>
              <p className='border-bottom'>{property.address}</p>
              <h3 className={styles.price}>{property.price}</h3>
              <div className={styles.details}>
                {property.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className={styles.items}>
                    <img
                      src={detail?.icon}
                      alt={detail.label}
                    />
                    <p>{detail.label}</p>
                  </div>
                ))}
                <div
                  className={styles.slideNumbers}
                >
                  {propertyData.map((_, numIndex) => (
                    <p
                      key={numIndex}
                      onClick={() => goToSlide(numIndex)}
                      className={styles.slider}
                    >
                      {numIndex + 1}
                    </p>
                  ))}
                </div>
              </div>
              <p className={`border-bottom ${styles.details}`}>View Details</p>
            </div>
          </div>
        ))}
        <Whyus2 image='/whyus/whyus3.webp' />
        <ImageCarousel />
        <Materials />
      </div>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.gallerybanner}>
            <div>
              <span>Our gallery</span>
              <h1>visit Our Photo Gallery</h1>
            </div>
          </div>
        </div>

        <ImageCarousel />
        <div className={styles.floorPlan}>
          <div className={styles.floorintro}>
            <span> Our Floor Plan</span>
            <h1>
              Check Our Floor Plan<span>.</span>
            </h1>
            <p>
              Huge number of propreties availabe here for buy, sell and Rent.
              Also you find here co-living property, lots opportunity
            </p>
          </div>
          <div className={styles.floorimages}>
            {floorplan.map((item) => (
              <div>
                <img src={item.src}></img>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.gallerybanner}>
            <div>
              <span>Our gallery</span>
              <h1>visit Our Photo Gallery</h1>
            </div>
            <div>
              <a href="#">
                {" "}
                <span>
                  Explore all <LiaLongArrowAltRightSolid />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.gallery}>
            {home6Gallery.map((item) => (
              <div className={styles.imgdiv}>
                <img src={item.src}></img>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.agentSec}>
          <div>
            <a href="#">
              <img src="/home6/person13.webp"></img>
            </a>
            <div className={styles.contact}>
              <h1>Amelia Margaret</h1>
              <p>Real Estate Agent</p>
              <a href="#">Phone +13547 658 412</a>
            </div>
          </div>
          <div className={styles.antform}>
            <span>Our Agents</span>
            <h1>
              Contact Our Agent<span>.</span>
            </h1>
            <p>
              Huge number of propreties availabe here for buy, sell and Rent.
              Also you find here co-living property, lots opportunity
            </p>
            <Form form={form} layout="vertical">
              <Row gutter={16}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name={"firstName"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter First Name",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name={"lastName"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter Last Name",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name={"phone"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter the Phone Number",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Phone Number" />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name={"mail"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter email",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <TextArea rows={10} placeholder="Your Message" />
                  </Form.Item>
                </Col>
              </Row>
              <br />
              <br />
              <button>Contact us</button>
            </Form>
          </div>
        </div>
      </div>
      <div>

        <div className="container">
          <div className={styles.howWorks}>
            <div className={styles.workintro}>
              <span>How we works</span>
              <h1>
                It's Very Simple way<span>.</span>
              </h1>
              <p>
                Huge number of propreties availabe here for buy, sell and Rent.
                Also you find here co-living property, lots opportunity
              </p>
            </div>
            <div className={styles.carddiv}>
              {howitWorks.map((item) => (
                <div
                  className={styles.card}
                  style={{ transform: item.rotation, backgroundColor: item.bg }}
                >
                  <div className={styles.imageNumber}>
                    <span>{item.cardNumber}</span>
                    <img src={item.img}></img>


                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <Getlisted />
      </>
      )
}




