import styles from './style.module.scss'
import HomeSearch from '@/app/common components/home/homeSearchHeader'

function HomeHeader1() {

    return (
        <section >
            <div className={styles.section}>
            <div className={`lh-base ${styles.imageContainer}`}>
                <div className={`container `}>
                    <div className={styles.textOverlay}>
                    <p className='ptag mb-4'>A new way to find Properties</p>
                    <h1 className='mb-4'>Find your Most Suitable Property</h1>
                    <p className='lh-base'>Huge number of propreties availabe here for buy, and sell, also you can find here co-living property, So you have lots of opportunity</p>
                    </div>
                </div>
                <img
                    src="/home-1.webp"
                    alt="Image Alt Text"
                    className={`img-fluid ${styles['responsive-image']}`} />
            </div>
            </div>
            <HomeSearch type='home2'/>
        </section>
    )
}
export default HomeHeader1