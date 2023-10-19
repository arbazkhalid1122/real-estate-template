import styles from '@/app/common components/style.module.scss'
import {BsFillPlayCircleFill} from 'react-icons/bs'
function Videoplay() {
    
    return(
        <main className='container'>
        <div className={styles.videoplay}>
            <img src="/videoPlay/video-2.webp" alt="" />
            <div className={styles.seticon}>
            <BsFillPlayCircleFill/>
            </div>
            <div className={styles.videoplaychild2}>
                <span>Take a video tour</span>
                <h1>Watch the video for taking your decision easily.</h1>
                <span>view all</span>
            <img src='/videoPlay/shape-4.webp'></img>
            </div>  
        </div>
        </main>
    )
}

export default Videoplay