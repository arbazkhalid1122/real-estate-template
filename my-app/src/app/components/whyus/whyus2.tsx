import styles from './style.module.scss'
import { data } from '../../data'


function Whyus2(props: any) {
    const imag = '/whyus/whyus.webp'
    return (
        <main className='container'>
            <div className={styles.content}>
                <div className={styles.content2} >
                    <img src={props.image ? props.image : imag} alt="" />
                </div>
                <div className={styles.content1}>
                    <p className={styles.p1}>Why Choose Us</p>
                    <h2>We Provide Latest Properties For Our Valuable Clients..</h2>
                    <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy huge discount.</p>
                    <div className={styles.iconItems}>
                        {data.map((item) => (
                            <div className={styles.whyus}>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <h3>{item.headin}</h3>
                                    <p>{item.para.slice(1,35)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Whyus2