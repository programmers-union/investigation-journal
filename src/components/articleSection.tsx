import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleSection = () => {
  return (
    <Container className="article-container py-4">
      <Row>
        <Col>
          <h1 className="article-title mb-4">Wall Street Fears Trump Will Wreck the Soft Landing</h1>
          
          <div className="chart-container my-4 py-3">
            <div className="chart-title mb-3">Change in S&P 500 since the inauguration day of Trump's first and second term</div>
            
            <div className="text-center">
              
              <img 
                src="https://images.wsj.net/im-93935367?width=368&height=245&pixel_ratio=1.5" 
                alt="Chart showing S&P 500 changes during Trump's first and second terms" 
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
              <span className="text-muted">TRADING DAYS SINCE INAUGURATION DAY</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleSection;