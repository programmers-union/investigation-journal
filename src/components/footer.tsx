"use client"
// components/WSJFooter.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="wsj-footer mt-4">
      {/* Back to top button */}
      <div className="back-to-top-container text-end bg-light">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="btn back-to-top me-3 py-2"
        >
          BACK TO TOP ↑
        </button>
      </div>
      
      {/* Main footer content */}
      <div className="main-footer py-4 bg-light">
        <div className="container-fluid px-3 px-md-4">
          <div className="row">
            {/* Logo and company info */}
            <div className="col-12 col-md-2 mb-4 mb-md-0">
              <div className="footer-logo mb-1">
                <h2 className="h5 m-0 fw-bold text-uppercase">The Wall Street Journal.</h2>
              </div>
              <div className="company-info">
                <p className="small text-muted mb-0">a Dow Jones company</p>
              </div>
            </div>
            
            {/* Footer links - split into 5 sections */}
            <div className="col-12 col-md-10">
              <div className="row">
                {/* WSJ Membership */}
                <div className="col-6 col-md">
                  <h3 className="footer-heading fw-bold mb-3">WSJ Membership</h3>
                  <ul className="list-unstyled footer-links">
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">The Journal Collection</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Subscription Options</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Why Subscribe?</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Corporate Subscriptions</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">WSJ Higher Education Program</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">WSJ High School Program</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Public Library Program</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">WSJ Live</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Commercial Partnerships</Link></li>
                  </ul>
                </div>
                
                {/* Customer Service */}
                <div className="col-6 col-md">
                  <h3 className="footer-heading fw-bold mb-3">Customer Service</h3>
                  <ul className="list-unstyled footer-links">
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Customer Center</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Contact Us</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Cancel My Subscription</Link></li>
                  </ul>
                </div>
                
                {/* Tools & Features */}
                <div className="col-6 col-md">
                  <h3 className="footer-heading fw-bold mb-3">Tools & Features</h3>
                  <ul className="list-unstyled footer-links">
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Newsletters & Alerts</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Guides</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Topics</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">My News</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">RSS Feeds</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Video Center</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Watchlist</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Podcasts</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Visual Stories</Link></li>
                  </ul>
                </div>
                
                {/* Ads */}
                <div className="col-6 col-md">
                  <h3 className="footer-heading fw-bold mb-3">Ads</h3>
                  <ul className="list-unstyled footer-links">
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Advertise</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Commercial Real Estate Ads</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Place a Classified Ad</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Sell Your Business</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Sell Your Home</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Recruitment & Career Ads</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Digital Self Service</Link></li>
                  </ul>
                </div>
                
                {/* More */}
                <div className="col-6 col-md">
                  <h3 className="footer-heading fw-bold mb-3">More</h3>
                  <ul className="list-unstyled footer-links">
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">About Us</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Content Partnerships</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Corrections</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Jobs at WSJ</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">News Archive</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Register for Free</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Reprints & Licensing</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Buy Issues</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">WSJ Shop</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Dow Jones Press Room</Link></li>
                    <li className="mb-2"><Link href="/" className="text-decoration-none text-dark">Dow Jones Smart Money</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social media icons */}
          <div className="social-media-section text-center mt-4 pt-3">
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <Facebook size={24} />
            </Link>
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <Twitter size={24} />
            </Link>
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <Instagram size={24} />
            </Link>
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <Youtube size={24} />
            </Link>
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <span className="podcast-icon border rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>
                <span className="fw-bold" style={{fontSize: '15px'}}>P</span>
              </span>
            </Link>
            <Link href="/" className="social-icon me-3 text-decoration-none">
              <span className="snapchat-icon border rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>
                <span className="fw-bold" style={{fontSize: '15px'}}>S</span>
              </span>
            </Link>
          </div>
          
          {/* App store badges */}
          <div className="app-badges text-center my-3">
            <Link href="/" className="app-badge me-2">
              <img src="/api/placeholder/150/45" alt="Google Play Store" className="img-fluid" style={{maxHeight: '45px'}} />
            </Link>
            <Link href="/" className="app-badge">
              <img src="/api/placeholder/150/45" alt="Apple App Store" className="img-fluid" style={{maxHeight: '45px'}} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom footer with affiliate links */}
      <div className="bottom-footer py-3 bg-light border-top">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12">
              <ul className="list-inline mb-0 small affiliate-links">
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark fw-bold">Dow Jones Products</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Barron's</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">BigCharts</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Dow Jones Newswires</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Factiva</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Financial News</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Mansion Global</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">MarketWatch</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Risk & Compliance</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">Buy Side from WSJ</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">WSJ Pro</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">WSJ Video</Link>
                </li>
                <li className="list-inline-item me-3 mb-2">
                  <Link href="/" className="text-decoration-none text-dark">WSJ Wine</Link>
                </li>
                <li className="list-inline-item mb-2">
                  <Link href="/" className="text-decoration-none text-dark">The Times</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;