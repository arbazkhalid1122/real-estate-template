import styles from "./style.module.scss";

export default function Getlisted() {
  return (
    <div className={` ${styles.listedMain}`}>
      <div className={`container ${styles.listed}`}>
        <div className={styles.listedOwner}>
          <div>
            <h1>Are you a Home Owner?</h1>
            <p>Put your email address and get listed</p>
          </div>
          <div className={styles.inputdiv}>
            <input placeholder="input search text" />
            <button>Get Listed</button>
          </div>
        </div>
        <div className={styles.imgdiv}>
          <img src="/background/bg-1.webp"></img>
        </div>
      </div>
    </div>
  );
}
