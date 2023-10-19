import { blogPostGrid } from '../data'
import styles from './style.module.scss'


export default function BlogMax(props:any) {
    
    return(
        <div className={styles.homecontainer}>
          {blogPostGrid.map((item) => (
            <div className={`${props?.type && styles.flex1} ${styles.homeitem}`}>
              <img src={item.src} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
    )
}