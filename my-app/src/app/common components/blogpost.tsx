import styles from "@/app/common components/style.module.scss";
import { blogpost } from "../data";

function BlogPost() {
  return (
    <main className="container">
      <div className={styles.houses}>
        <div className={styles.textcenter}>
          <p>Our Blog</p>
          <h1>Check Our Blog Post's.</h1>
        </div>
        <div className={styles.homecontainer}>
          {blogpost.map((item) => (
            <div className={styles.homeitem}>
              <img src={item.src} alt="" />
              <div>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default BlogPost;
