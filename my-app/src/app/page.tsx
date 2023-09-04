'use client'
import Link from 'next/link';
import styles from './style.module.scss'
import { Dropdown, Menu } from 'antd';
import { BiLocationPlus } from 'react-icons/bi'
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { PiSelectionBold } from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import { useState } from 'react';
function Home() {
  const [visibleImages, setVisibleImages] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);


  const items = (
    <Menu style={{ marginTop: '17px', padding: '0px', borderRadius: '8px' }} className={styles.menuitems}>
      <ul>
        <li key="1" >Home 1</li>
        <li key="2">Home 1</li>
        <li key="3">Home 1</li>
        <li key="4">Home 1</li>
        <li key="5">Home 1</li>
      </ul>
    </Menu>
  )


  const customMenu = (
    <Menu className={styles.customMenu} style={{ marginTop: '17px' }}>
      <div style={{ display: 'flex', padding: '30px', gap: '30px', width: '43pc' }}>
        <div style={{ gap: '30px' }}>
          <ul>
            <li key="1" style={{ marginBottom: '10px', fontSize: '20px' }}>Row 1, Col 1</li>
            <li key="2">Row 2, Col 1</li>
            <li key="3">Row 3, Col 1</li>
            <li key="4">Row 4, Col 1</li>
            <li key="5">Row 5, Col 1</li>
          </ul>
        </div>

        <div>
          <ul>
            <li key="6" style={{ marginBottom: '10px', fontSize: '20px' }}>Row 1, Col 2</li>
            <li key="7">Row 2, Col 2</li>
            <li key="8">Row 3, Col 2</li>
            <li key="9">Row 4, Col 2</li>
            <li key="10">Row 5, Col 2</li>
          </ul>
        </div>

        <div>
          <ul>
            <li key="11" style={{ marginBottom: '10px', fontSize: '20px' }}>Row 1, Col 3</li>
            <li key="12">Row 2, Col 3</li>
            <li key="13">Row 3, Col 3</li>
            <li key="14">Row 4, Col 3</li>
          </ul>
        </div>
      </div>

    </Menu>
  );

  const imgArray = [
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image1.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image2.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image3.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image4.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image3.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image1.png',
    'https://template.hasthemes.com/bery/bery/assets/images/cities/image2.png',
  ]


  const handleSpanClick = (index:any) => {
    if (visibleImages < imgArray.length) {
      setVisibleImages((prev) => prev + 1);
    } else {
      setVisibleImages(4); // Reset to display the first four images
    }
  };
  const init = 3;
  const get = imgArray.slice(init)


  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <img style={{ width: '100%', height: '100%' }} src="https://template.hasthemes.com/bery/bery/assets/images/logo/logo.svg" alt=''></img>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/">Home</Link>
            </Dropdown>
          </li>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/about">About</Link>
            </Dropdown>
          </li>
          <li className={`${styles.navItem} ${styles.antddropdown}`}>
            <Dropdown overlay={customMenu} trigger={['hover']} placement="bottomCenter">
              <Link href="/properties">Properties</Link>
            </Dropdown>
          </li>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/pages">Pages</Link>
            </Dropdown>
          </li>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/agency">Agency</Link>
            </Dropdown>
          </li>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/blog">Blog</Link>
            </Dropdown>
          </li>
          <li className={styles.navItem}>
            <Dropdown overlay={items} placement="bottom" className={styles.dropdown}>
              <Link href="/contact">Contact</Link>
            </Dropdown>
          </li>
          <li>
            <img width={40} height={40} src="https://template.hasthemes.com/bery/bery/assets/images/user/avater.png" alt=''></img>
          </li>
          <li className={styles.navItem}>
            <button>Add Property</button>
          </li>
        </ul>
      </nav>
      <section className={styles.section}>
        <div className={styles['image-container']}>
          <img
            src="https://template.hasthemes.com/bery/bery/assets/images/hero/home-3.jpg"
            alt="Image Alt Text"
            className={styles['responsive-image']}
          />
          <div className={styles['text-overlay']}>
            <p className='ptag'>A new way to find Properties</p>
            <h1 >A new way to find Properties</h1>
          </div>
          <div className={styles.filterContainer}>
            <p>Buy</p>
            <p>Sell</p>
            <p>Rent</p>
            <p>Co-living</p>
          </div>
          <div className={styles.filterItem}>
            <div className={styles.location}>
              <div>
                <BiLocationPlus />
              </div>
              <div style={{ textAlign: 'start' }}>
                <p>Location</p>
                <p>choose location</p>
              </div>
            </div>
            <div className={styles.location}>
              <div>
                <TiHomeOutline />
              </div>
              <div style={{ textAlign: 'start' }}>
                <label>Location</label>
                <Dropdown overlay={items} placement="bottom" trigger={['click']} className={styles.dropdown}>
                  <div style={{ display: 'flex', alignItems: 'center' }} className={styles.appartments}>
                    <p>Appartments</p>
                    <div>
                      <RiArrowDropDownLine />
                    </div>
                  </div>
                </Dropdown>
              </div>
            </div>
            <div className={styles.location}>
              <div>
                <AiOutlineDollarCircle />
              </div>
              <div style={{ textAlign: 'start' }}>
                <label>Location</label>
                <p>choose location</p>
              </div>
            </div>
            <div className={styles.location}>
              <div>
                <PiSelectionBold />
              </div>
              <div style={{ textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '22px' }}>
                <div>
                  <label>Location</label>
                  <p>choose location</p>
                </div>
                <div className={styles.search}>
                  <GoSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.logosection}>
        <div>
          <p style={{ color: '#d5a45b' }}>Our Partner’s</p>
          <p style={{ color: '#002a3e', fontSize: '36px' }}>Reliable Partners</p>
        </div>
        <div className={styles.logos}>
          <img src="https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png" alt="" />
          <img src="https://template.hasthemes.com/bery/bery/assets/images/brand/brand2.png" alt="" />
          <img src="https://template.hasthemes.com/bery/bery/assets/images/brand/brand5.png" alt="" />
          <img src="https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png" alt="" />
          <img src="https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png" alt="" />
        </div>
      </div>

      <div className={styles.homeimages}>
        <div>
          <p style={{ color: '#d5a45b' }}>Our Partner’s</p>
          <p style={{ color: '#002a3e', fontSize: '36px' }}>Reliable Partners</p>
        </div>
        <div className={styles.imgArr}>
          {imgArray.slice(0, visibleImages).map((item, index) => (
            <img src={item} alt="" />))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
          {get.map((_, index) => (
            <div>
              <span
                className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => handleSpanClick(index)} key={index}></span>
            </div>))}
        </div>
      </div>
    </div>

  );
};

export default Home