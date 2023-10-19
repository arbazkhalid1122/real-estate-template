import styles from '@/app/components/style.module.scss'


function HomeLists() {
    return (
        <div className={styles.listed}>
            <div className={styles.listedOwner}>
                <h1>Are you a Home Owner?</h1>
                <p >
                    Put your email address and get listed
                </p>
                <div className={styles.inputdiv}>
                    <input placeholder="input search text" />
                    <button>Get Listed</button>
                </div>
            </div>
            <div className={styles.imgdiv}>
                <img src="	homelisted/bg-1.webp"></img>
            </div>
        </div>
    )
}

export default HomeLists