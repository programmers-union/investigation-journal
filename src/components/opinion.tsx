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
      title: "Trial Date Set for Man Accused of Shooting Dead Dog Walker on Rural Path",
      author: "Reporter",
      imageUrl: "https://static.standard.co.uk/2025/03/21/13/238c04acb9a59f37a2514f598db38969Y29udGVudHNlYXJjaGFwaSwxNzQyNjQ1NTA1-2.75969866.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000", 
      link: "#"
    },
    {
      id: 2,
      title: "Drunk Bar Worker Jailed for Causing Fatal Crash with Seven People in Hatchback",
      author: "Reporter",
      imageUrl: "https://static.standard.co.uk/2025/03/21/14/21135412-5714b616-3102-429b-8450-058b6a1b52ff.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000", 
      link: "#"
    },
    {
      id: 3,
      title: "Man, 27, Dies After Double Shooting in Tottenham",
      author: "Reporter",
      imageUrl: "https://static.standard.co.uk/2025/03/21/11/36/image0-2025-03-21T114759-911.jpeg?trim=0,11,0,11&quality=75&auto=webp&width=1000", 
      link: "#"
    },
    {
      id: 4,
      title: "Andrew Aide’s Statement in Alleged Chinese Spy Case Can Be Made Public – Tribunal",
      author: "Reporter",
      imageUrl: "https://static.standard.co.uk/2025/03/21/11/15e4a60aaf2c1a418a70e238e44ebc7dY29udGVudHNlYXJjaGFwaSwxNzQyNjQyNzE2-2.72039729.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000", 
      link: "#"
    }
  ];

  return (
    <Container className="opinion-section my-4">
      <h2 className="section-title mb-4 " style={{ color: '#8B6B3D', fontSize: '2rem', fontWeight: 'bold' }}>Latest headlines</h2>
      
      {articles.map((article) => (
        <Row key={article.id} className="mb-4 opinion-article">
          <Col xs={3} sm={3} md={2} className="pe-0">
            <Link href={article.link} passHref>

            </Link>
          </Col>
          
          <Col xs={9} sm={9} md={10}>
            <Link href={article.link} passHref className='text-decoration-none'>
              <div style={{ cursor: 'pointer' }}>
                <h3 className="article-title mb-1" style={{ 
                  fontFamily: 'Georgia, Times New Roman, serif',
                  fontSize: '1.25rem',
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  lineHeight: '1.3',
                  
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



