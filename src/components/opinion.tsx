// OpinionSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpinionSection = () => {
  // Opinion article data
  const articles = [
    {
      id: 1,
      title: "Will There Be a Trump Recession?",
      author: "By The Editorial Board",
      imageUrl: "https://opinion-images.wsj.net/im-40568372/?width=74&height=74&pixel_ratio=1.5", // Replace with your actual image path
      link: "#"
    },
    {
      id: 2,
      title: "Stirrings of Life Amid the Oct. 7 Wreckage of Nir Oz",
      author: "By Tunku Varadarajan",
      imageUrl: "/wreckage.jpg", // Replace with your actual image path
      link: "#"
    },
    {
      id: 3,
      title: "'Never Ugly' Is a Top Shop",
      author: "By Gregg Opelka",
      imageUrl: "/shop.jpg", // Replace with your actual image path
      link: "#"
    },
    {
      id: 4,
      title: "Hunter Biden's Blue Period",
      author: "By James Freeman",
      imageUrl: "/hunter.jpg", // Replace with your actual image path
      link: "#"
    }
  ];

  return (
    <Container className="opinion-section my-4">
      <h2 className="section-title mb-4 " style={{ color: '#8B6B3D', fontSize: '2rem', fontWeight: 'bold' }}>Opinion</h2>
      
      {articles.map((article) => (
        <Row key={article.id} className="mb-4 opinion-article">
          <Col xs={3} sm={3} md={2} className="pe-0">
            <Link href={article.link} passHref>
              <div style={{ cursor: 'pointer' }}>
                {/* Using a div with background image as placeholder - in production use Next Image component */}
                <div 
                  style={{
                    width: '100%',
                    paddingBottom: '100%', // 1:1 aspect ratio
                    backgroundImage: `url(https://opinion-images.wsj.net/im-40568372/?width=74&height=74&pixel_ratio=1.)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </Link>
          </Col>
          
          <Col xs={9} sm={9} md={10}>
            <Link href={article.link} passHref>
              <div style={{ cursor: 'pointer' }}>
                <h3 className="article-title mb-1" style={{ 
                  fontFamily: 'Georgia, Times New Roman, serif',
                  fontSize: '1.25rem',
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  lineHeight: '1.3'
                }}>
                  {article.title}
                </h3>
                
                <p className="article-author mb-0" style={{
                  fontSize: '0.9rem',
                  color: '#333'
                }}>
                  {article.author}
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default OpinionSection;



