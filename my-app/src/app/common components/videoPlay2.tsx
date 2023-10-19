import styles from './style.module.scss'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
function VideoPLay2() {
  return (
    <div className={styles.main}>
      <div className={styles.content1}>
        <div className={styles.content2}>
          <p className='mb-2'>Take a video tour</p>
          <h2>Watch the video for taking your decision easily.</h2>
          <p className={`d-flex align-items-center gap-3 mt-2 ${styles.pIcon}`}>View all <HiOutlineArrowNarrowRight/></p>
        </div>

          <div className={styles.img}>
          <img src="/video.webp" alt="" />
          <BsFillPlayCircleFill />
        </div> 
        <img className={styles.dots} src="/shape-3.webp" alt="" />

        </div>
      </div>
      )
}

      export default VideoPLay2