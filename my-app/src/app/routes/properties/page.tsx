'use client'
import styles from './style.module.scss';
import FeatureProperty from '@/app/common components/featureproperty';
import Getlisted from '@/app/common components/getListed';
import Pageheader from '@/app/common components/pageHeader';
function BlogPost() {
  const data = {
    title: "Our Properties",
    mainTitle: "Properties",
  };

  return (
    <div>
      <Pageheader data = {data} />
      <div className={styles.properties}>
        <div>
          <FeatureProperty type='propertypage' />
        </div>
      </div>
      <Getlisted/>
    </div>
  );
}

export default BlogPost;
