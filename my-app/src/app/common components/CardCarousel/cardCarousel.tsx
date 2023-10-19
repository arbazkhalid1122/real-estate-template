import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './style.module.scss'
const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 900 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1400, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 1150, min: 350 },
    items: 2,
    slidesToSlide: 1,
  },
  mobil: {
    breakpoint: { max: 720, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CardCarousel = () => {

  const data = [
    {
      src: '/cardCarousel/properties1.webp'
    },
    {
      src: '/cardCarousel/properties2.webp'
    },
    {
      src: '/cardCarousel/properties3.webp'
    },
    {
      src: '/cardCarousel/properties4.webp'
    }, {
      src: '/cardCarousel/properties5.webp'
    }
  ]

  return (
    <main>
      <div className={styles.imageSwap}>
        <div className={`parent ${styles.cardCarouselContainer}`}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            arrows={false}
            dotListClass="custom-dot-list-style">

            {data?.map((item, index) => (
              <div key={index} className={`slider ${styles.cardCarousel}`}>
                <div>
                  <img
                    src={item?.src}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Casel de Philadio.</h3>
                  <p>1677 West Virginia Avenue, Catskill, New York</p>
                  <p>Price: $27500</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default CardCarousel;

