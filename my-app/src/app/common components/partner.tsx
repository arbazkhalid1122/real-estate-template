import React from 'react';
import styles from '@/app/style.module.scss'
interface ImageGalleryProps {
  images: string[];
  heading: string;
  text: string;
}

const LogoSection: React.FC<ImageGalleryProps> = ({ images ,text,heading}) => {
  return (
    <div className={styles.logosection}>
        <div>
          <p style={{ color: '#d5a45b' }}>{text}</p>
          <h1 style={{ color: '#002a3e'}}>{heading}</h1>
        </div>
        <div className={styles.logos}>
      {images.map((imageUrl:any, index:any) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="gallery-image"
        />
      ))}
        </div>
    </div>
  );
};

export default LogoSection;
