// ArticleSection.jsx
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
            
            <div className="chart-content position-relative">
              {/* Y-axis labels */}
              <div className="y-axis-labels position-absolute h-100">
                <div className="y-label y-label-20">20%</div>
                <div className="y-label y-label-15">15</div>
                <div className="y-label y-label-10">10</div>
                <div className="y-label y-label-5">5</div>
                <div className="y-label y-label-0">0</div>
                <div className="y-label y-label-neg5">-5</div>
                <div className="y-label y-label-neg10">-10</div>
              </div>
              
              <div className="chart-visual mx-5 my-3">
                {/* This would be where you'd implement or import the actual chart */}
                <div className="chart-placeholder">
                  {/* Horizontal grid lines */}
                  {[0, 20, 40, 60, 80, 100].map((pos) => (
                    <div 
                      key={pos}
                      className="grid-line"
                      style={{ top: `${pos}%` }}
                    />
                  ))}

                  {/* First term line (blue) - simplified representation */}
                  <div className="chart-line first-term-line" />

                  {/* Second term line (orange) - simplified representation */}
                  <div className="chart-line second-term-line" />
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="x-axis-labels d-flex justify-content-between px-5">
                <div>1</div>
                <div>25</div>
                <div>50</div>
                <div>75</div>
                <div>100</div>
                <div>125</div>
                <div>150</div>
                <div>175</div>
                <div>200</div>
                <div>225</div>
              </div>
            </div>
            
            <div className="d-flex mt-3">
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