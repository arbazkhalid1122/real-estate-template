'use client'
import Link from 'next/link';
import styles from './style.module.scss'
import { Dropdown, Menu } from 'antd';
import { BiLocationPlus } from 'react-icons/bi'
import { TiHomeOutline } from 'react-icons/ti'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { PiSelectionBold, PiSlidersBold } from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineViewHeadline } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import { useState } from 'react';
import LogoSection from './common components/partner';
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


  const [imgArrayy, setImgArray] = useState(imgArray)
  const handleSpanClick = () => {
    console.log(activeIndex);

    if (imgArrayy.length > 0) {
      setImgArray((prevArray: any) => prevArray.slice(1));
      setActiveIndex((prev) => prev + 1)
    } else {
      setImgArray(imgArray);
    }
  };
  const init = 3;
  const get = imgArray.slice(init)

  const imgg = [
    "https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png",
    "https://template.hasthemes.com/bery/bery/assets/images/brand/brand2.png",
    "https://template.hasthemes.com/bery/bery/assets/images/brand/brand5.png",
    "https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png",
    "https://template.hasthemes.com/bery/bery/assets/images/brand/brand3.png",
  ]


  const blogpost = [
    {
      src: 'https://template.hasthemes.com/bery/bery/assets/images/blog/post1.png',
      title: 'Tip’s about Real Estate Recent Conditions from Agent.',
      detail: 'Properties are most budget friendly so you have are opportunity to find are the best the best...'
    },
    {
      src: 'https://template.hasthemes.com/bery/bery/assets/images/blog/post1.png',
      title: 'Tip’s about Real Estate Recent Conditions from Agent.',
      detail: 'Properties are most budget friendly so you have are opportunity to find are the best the best...'
    },
    {
      src: 'https://template.hasthemes.com/bery/bery/assets/images/blog/post1.png',
      title: 'Tip’s about Real Estate Recent Conditions from Agent.',
      detail: 'Properties are most budget friendly so you have are opportunity to find are the best the best...'
    }
  ]

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
        <div className={styles.navmobile}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <li>
              <img width={40} height={40} src="https://template.hasthemes.com/bery/bery/assets/images/user/avater.png" alt=''></img>
            </li>
            <li className={styles.navItem}>
              <button>Add Property</button>
            </li>
            <li>
              <MdOutlineViewHeadline />
            </li>
          </ul>
        </div>
      </nav>
      <section className={styles.section}>
        <div className={styles['image-container']}>
          <img
            src="https://template.hasthemes.com/bery/bery/assets/images/hero/home-3.jpg"
            alt="Image Alt Text"
            className={`img-fluid ${styles['responsive-image']}`}
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
          <div>
          </div>
          <div className={styles.filterItem}>
            <button><PiSlidersBold /></button>
            <div style={{display:'flex'}}> 
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
                  <BiLocationPlus />
                </div>
                <div style={{ textAlign: 'start' }}>
                  <p>Location</p>
                  <p>choose location</p>
                </div>
              </div>
            </div>
            <div style={{display:'flex'}}>
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
            <div className={styles.location}>
              <div>
                <AiOutlineDollarCircle />
              </div>
              <div style={{ textAlign: 'start' }}>
                <label>Location</label>
                <p>choose location</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <LogoSection images={imgg} heading={'Reliable Partner’s.'} text={'Our Partner’s'}></LogoSection>
      </div>

      <div className={styles.homeimages}>
        <div>
          <p style={{ color: '#d5a45b' }}>Our Partner’s</p>
          <p style={{ color: '#002a3e', fontSize: '36px' }}>Reliable Partners</p>
        </div>
        <div className={styles.imgArr}>
          {imgArrayy
            .slice(0, visibleImages).map((item, index) => (
              <img src={item} alt="" />))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
          {get.map((_, index) => (
            <div>
              <span
                className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                onClick={handleSpanClick} key={index}></span>
            </div>))}
        </div>
      </div>


      <div className={styles.content}>
        <div className={styles.content2} >
          <h1 style={{ fontSize: '36px' }}>We Provide Latest Properties For Our Valuable Clients..</h1>
          <img src="https://template.hasthemes.com/bery/bery/assets/images/about/about7.png" alt="" />
        </div>
        <div className={styles.content1}>
          <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy huge discount.</p>
          <div className={styles.whyus}>
            <div>
              <img src="https://template.hasthemes.com/bery/bery/assets/images/icon/doller.png" alt="" />
            </div>
            <div>
              <h3 style={{ fontSize: '28px' }}>Budget Friendly</h3>
              <p>Properties are most budget friendly so you have opportunity to find the best one</p>
            </div>
          </div>
          <div className={styles.whyus}>
            <div>
              <img src="https://template.hasthemes.com/bery/bery/assets/images/icon/doller.png" alt="" />
            </div>
            <div>
              <h3 style={{ fontSize: '28px' }}>Budget Friendly</h3>
              <p>Properties are most budget friendly so you have opportunity to find the best one</p>
            </div>
          </div>
          <div className={styles.whyus}>
            <div>
              <img src="https://template.hasthemes.com/bery/bery/assets/images/icon/doller.png" alt="" />
            </div>
            <div>
              <h3 style={{ fontSize: '28px' }}>Budget Friendly</h3>
              <p>Properties are most budget friendly so you have opportunity to find the best one</p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.propertycard}>
        <div className={styles.propertycardItem}>
          <div>
            <img src="https://template.hasthemes.com/bery/bery/assets/images/properties/properties7.jpg" alt="" />
          </div>
          <div className={styles.propertycardchild}>
            <h3>Elite Garden Resedence.</h3>
            <h4>253 Montril Street, South Town, Miami</h4>
            <span>Added: 25 November, 2021</span>
            <p>Price: $255300</p>
            <p>1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage</p>
          </div>
        </div>
        <div className={styles.propertycardItem}>
          <div>
            <img src="https://template.hasthemes.com/bery/bery/assets/images/properties/properties7.jpg" alt="" />
          </div>
          <div className={styles.propertycardchild}>
            <h3>Elite Garden Resedence.</h3>
            <h4>253 Montril Street, South Town, Miami</h4>
            <span>Added: 25 November, 2021</span>
            <p>Price: $255300</p>
            <p>1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage</p>
          </div>
        </div>
        <div className={styles.propertycardItem}>
          <div style={{ position: 'relative' }}>
            <img src="https://template.hasthemes.com/bery/bery/assets/images/properties/properties7.jpg" alt="" />
            <div style={{ position: 'absolute', background: 'white', bottom: '16px', left: '10px' }}>For Sale</div>
            <div style={{ display: 'flex', position: 'absolute', right: '16px', top: '8px' }}>
              <button style={{ display: 'flex', alignItems: 'center', color: 'white', background: 'black', fontSize: '12px' }}><img src="https://template.hasthemes.com/bery/bery/assets/images/icon/camera.png" alt="" />07</button>
              <button style={{ display: 'flex', alignItems: 'center' }}><img src="https://template.hasthemes.com/bery/bery/assets/images/icon/camera.png" alt="" />07</button>
            </div>
          </div>
          <div className={styles.propertycardchild}>
            <h3>Elite Garden Resedence.</h3>
            <h4>253 Montril Street, South Town, Miami</h4>
            <span>Added: 25 November, 2021</span>
            <p>Price: $255300</p>
            <p>1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage</p>
          </div>
        </div>

      </div>

      <div className={styles.houses}>
        <div className={styles.textcenter}>
          <p>Our Blog</p>
          <h1>Check Our Blog Post's.</h1>
        </div>

        <div className={styles.homecontainer}>
          {blogpost.map((item) => (
            <div className={styles.homeitem}>
              <img src={item.src} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <footer className={styles.footer}>
        <div className={styles.footeritems}>
          <div className={styles.one}>
            <img src="https://template.hasthemes.com/bery/bery/assets/images/logo/logo.svg" alt="" />
            <div>
              <p>Properties are most budget friendly so you have are find opportunity is main responsibility to clients</p>
              <p>© CodeCarnival. All Rights Reserved - Privacy Policy</p>
            </div>
          </div>
          <div className={styles.two}>
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>Properties</li>
              <li>Careers</li>
              <li>Payment</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div className={styles.three}>
            <h3>Support</h3>
            <ul>
              <li>Add Property</li>
              <li>Terms & Condition</li>
              <li>Help line</li>
              <li>Our Agents</li>
              <li>features</li>
            </ul>
          </div>
          <div className={styles.four}>
            <h3>Address</h3>
            <p>2104 Charmaine Lane Amarillo, New York</p>
          </div>
        </div>
      </footer>


    </div>

  );
};

export default Home