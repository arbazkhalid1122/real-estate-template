import { Carousel } from "antd";
import styles from './style.module.scss'
import { GrNext, GrPrevious } from "react-icons/gr";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export  const ImageCarousel = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const next = () => {
    carousel.next();
  };
  const prev = () => {
    carousel.prev();
  };
  let carousel: any;
  return (
    <div className="container">
      <Carousel {...carouselSettings} ref={(node) => (carousel = node)}>
        <div>
          <div className={styles.main}>
            <div className={styles.container}>
              <p className={styles.p1}>Material</p>
              <h2>Luxurious Interior & Superior Style.</h2>
              <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity of huge discount.</p>
              <div className="d-flex mt-4">
              <button onClick={prev} className={styles.btnnext}><LeftOutlined /></button>
              <button onClick={next} className={styles.btnnext}><RightOutlined /></button>
              </div>
            </div>
            <div className={styles.imgdiv}>
            <img src="/home6/slide1.webp" alt="Image 1" />
            <img src="/home6/slide2.webp" alt="Image 1" />
            <img src="/home6/slide3.webp"alt="Image 1" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.main}>
            <div className={styles.container}>
              <p className={styles.p1}>Material</p>
              <h2>Luxurious Interior & Superior Style.</h2>
              <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity of huge discount.</p>
              <button onClick={prev} className={styles.btnnext}><LeftOutlined /></button>
              <button onClick={next} className={styles.btnnext}><RightOutlined /></button>
            </div>
            <div className={styles.imgdiv}>
            <img src="/home6/slide1.webp" alt="Image 1" />
            <img src="/home6/slide2.webp" alt="Image 1" />
            <img src="/home6/slide3.webp" alt="Image 1" />
            </div>
          </div>
        </div>
      </Carousel >
    </div >
  );
};