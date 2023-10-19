import HomeSearch from '@/app/common components/home/homeSearchHeader'
import styles from './style.module.scss'
export default function Header() {

    return (
        <div>
            <div className={` ${styles.home2header}`}>
                <div className={`container ${styles.content}`}>
                    <div className={` ${styles.main1}`}>
                        <h1>Modern, Creative & Luxury Homes</h1>
                        <p className={styles.p}>We always try to make sure bes quality and modern technology for our customer to satisfy them more than 100% </p>
                        <button className='mt-3'>Contact Us</button>
                        <div className={`d-flex ${styles.span}`}>
                            <div>
                                <span>20 k+</span>
                                <p>Properties</p>
                            </div>
                            <div>
                                <span>20 k+</span>
                                <p>Properties</p>
                            </div>
                            <div>
                                <span>20 k+</span>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main2}>
                        <img src="/home2.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <HomeSearch type='home2' />
            </div>
        </div>
    )
}