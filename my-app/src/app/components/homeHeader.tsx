import styles from '@/app/style.module.scss'
import HomeSearch from '../common components/home/homeSearchHeader';

function HomeHeader() {



    return (
        <section className={styles.section}>
            <div className={styles['image-container']}>
                <div className='bg-dark'>
                    <img
                        src="/home/home-3.webp"
                        alt="Image Alt Text"
                        className={`img-fluid ${styles['responsive-image']}`} />

                    <div className={styles['text-overlay']}>
                        <p className='ptag'>A new way to find Properties</p>
                        <h1 >A new way to find Properties</h1>
                    </div>
                </div>
                <HomeSearch />
            </div>
        </section>
    )
}

export default HomeHeader