// TechMediaRoundup.jsx
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TechMediaRoundup.module.css';

const TechMediaRoundup = ({ 
  title = "Tech, Media & Telecom Roundup: Market Talk",
  description = "Find insight on PagerDuty, Reddit, Ulta and more in the latest Market Talks covering Technology, Media and Telecom.",
  date = "March 15, 2025",
  readTime = "3 min read",
  imageUrl = "/circuit-board.jpg",
  imageAlt = "Circuit board closeup"
}) => {
  return (
    <div className={styles.container}>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.businessHeading}>Business</h1>
            <hr className={styles.divider} />
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className={styles.imageContainer}>
              <Image 
                src={imageUrl}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.metaInfo}>
              <span className={styles.date}>{date}</span>
              <span className={styles.readTime}>
                <i className="bi bi-clock me-1"></i>
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMediaRoundup;