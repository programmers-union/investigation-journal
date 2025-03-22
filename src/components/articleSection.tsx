import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleSection = () => {
  return (
    <Container className="article-container py-4">
      <Row>
        <Col>
          <h1 className="article-title mb-4">Operation Against Mafia of Sicily: A Major Strike in Palermo
          </h1>
          
          <div className="chart-container my-4 py-3">
            <div className="chart-title mb-3">Italian authorities have executed one of the biggest anti-Mafia operations in recent years, arresting 181 people connected to Sicilian Mafia clans.</div>
            
            <div className="text-center">
              
              <img 
                src="https://static01.nyt.com/images/2025/02/11/multimedia/11italy-mafia-1-wzjl/11italy-mafia-1-wzjl-videoSixteenByNine3000.jpg
" 
                alt="operation against mafia" 
                className="img-fluid my-3"
              />
            </div>
            
            <div className="d-flex justify-content-center mt-3">
              <div className="legend-item me-3">
                <div className="legend-color first-term"></div>
                <span>First term</span>
              </div>
              <div className="legend-item">
                <div className="legend-color second-term"></div>
                <span>Second term</span>
              </div>
            </div>
            
            <div className="chart-footer mt-2 text-center">
              <span className="text-muted"> Centered on Palermo, the operation demonstrates a commitment to prevent the Cosa Nostra's governing system, the Cupola, from reemerging.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleSection;