import styles from "./style.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <main className="container align-items-center d-flex">
        <div className={styles.footeritems}>
          <div className={styles.one}>
            <img src="/logo/logo.svg" alt="" />
            <div>
              <p>
                Properties are most budget friendly so you have are find
                opportunity is main responsibility to clients
              </p>
              <p>© CodeCarnival. All Rights Reserved - Privacy Policy</p>
            </div>
          </div>
          <div className={styles.two}>
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>Properties</li>
              <li>Careers</li>
              <li>Payment</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div className={styles.three}>
            <h3>Support</h3>
            <ul>
              <li>Add Property</li>
              <li>Terms & Condition</li>
              <li>Help line</li>
              <li>Our Agents</li>
              <li>features</li>
            </ul>
          </div>
          <div className={styles.four}>
            <h3>Address</h3>
            <p>2104 Charmaine Lane Amarillo, New York</p>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
