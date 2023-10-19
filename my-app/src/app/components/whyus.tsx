import styles from '@/app/style.module.scss'
import { data } from '../data'


function Whyus(props:any) {
const imag = '/whyus/whyus.webp'
    return (
         <main className='container'>
        <div className={styles.content}>
            <div className={styles.content2} >
                <p>Why Choose Us</p>
                <h1>We Provide Latest Properties For Our Valuable Clients..</h1>
                <img src={props.image ? props.image : imag} alt="" />
            </div>
            <div className={styles.content1}>
                <p>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy huge discount.</p>
                {data.map((item)=>(
                    <div className={styles.whyus}>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div>
                        <h3>{item.headin}</h3>
                        <p>{item.para}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </main>
    )
}

export default Whyus