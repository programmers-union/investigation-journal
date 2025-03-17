
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


interface SmallNewsBoxProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
}

const SmallNewsBox: React.FC<SmallNewsBoxProps> = ({
  title = "Auto & Transport Roundup: Market Talk",
  description = "Find insight on Porsche, BMW, Daimler Truck and more, in the latest Market Talks covering Auto and Transport.",
  date = "March 15, 2025",
  readTime = "6 min read",
  imageUrl = "/auto-manufacturing.jpg",
  imageAlt = "Car manufacturing assembly line",
  url = "#"
}) => {
  return (
    <div className="cardContainer container">
      <div className="row">
        <div className="col-md-5">
          <Link href={url} passHref>
            <div className="imageContainer">
              <img 
                src={imageUrl}
                alt={imageAlt}
                sizes="(max-width: 768px) 100vw, 40vw"
                className="image"
              />
            </div>
          </Link>
        </div>
        <div className="col-md-7">
          <div className="contentContainer">
            <Link href={url} passHref>
              <h2 className="title">{title}</h2>
            </Link>
            <p className="description">{description}</p>
            <div className="metaInfo">
              <span className="date">{date}</span>
              <span className="readTime">
                <i className="bi bi-clock me-2"></i>
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsBox;