"use client"
// components/WSJHeader.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <header className="wsj-header">
      <div className="top-bar">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center px-5 container">
            <div className="top-links d-flex">
              <Link href="/" className="top-link">WSJ</Link>
              <Link href="/" className="top-link">Barron's</Link>
              <Link href="/" className="top-link">MarketWatch</Link>
              <Link href="/" className="top-link">IBD</Link>
            </div>
            <div className="buy-side">
              <Link href="/" className="buy-link">Buy Side from WSJ</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="market-ticker">
        <div className="container-fluid">
          <div className="ticker-container d-flex align-items-center px-3">
            <button className="ticker-toggle me-2">
              <i className="bi bi-chevron-down"></i>
            </button>

            <div className="ticker-items d-flex justify-content-center mx-auto">
              <div className="ticker-item">
                <span className="ticker-name">Asia Dow</span>
                <span className="ticker-value down">42579.1</span>
                <span className="ticker-percent down">-0.81%</span>
                <i className="bi bi-arrow-down down"></i>
              </div>

              <div className="ticker-item">
                <span className="ticker-name">Nikkei</span>
                <span className="ticker-value up">37015.15</span>
                <span className="ticker-percent up">0.35%</span>
                <i className="bi bi-arrow-up up"></i>
              </div>

              <div className="ticker-item">
                <span className="ticker-name">Hang Seng</span>
                <span className="ticker-value down">23707.29</span>
                <span className="ticker-percent down">-2.16%</span>
                <i className="bi bi-arrow-down down"></i>
              </div>

              <div className="ticker-item">
                <span className="ticker-name">Shanghai</span>
                <span className="ticker-value down">3356.20</span>
                <span className="ticker-percent down">-0.48%</span>
                <i className="bi bi-arrow-down down"></i>
              </div>

              <div className="ticker-item">
                <span className="ticker-name">BSE Sen</span>
              </div>
            </div>

            <div className="ticker-nav ms-auto">
              <button className="ticker-nav-btn me-2">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="ticker-nav-btn">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="wsj-main-header">
        <div className="container-fluid text-center py-2">
          <div className="logo-container">
            
            <h1 className="wsj-logo-text">THE WALL STREET JOURNAL.</h1>
          </div>

          <div className="edition-container d-flex justify-content-center align-items-center mt-2">
            <div className="dropdown edition-dropdown me-3">
              <button className="btn dropdown-toggle edition-btn" type="button" id="editionDropdown">
                English Edition
              </button>
            </div>
            <div className="edition-divider"></div>
            <Link href="/" className="edition-link mx-3">Print Edition</Link>
            <div className="edition-divider"></div>
            <Link href="/" className="edition-link mx-3">Video</Link>
            <div className="edition-divider"></div>
            <Link href="/" className="edition-link mx-3">Audio</Link>
            <div className="edition-divider"></div>
            <Link href="/" className="edition-link mx-3">Latest Headlines</Link>
            <div className="edition-divider"></div>
            <div className="dropdown more-dropdown ms-3">
              <button 
                className="btn dropdown-toggle more-btn" 
                type="button" 
                id="moreDropdown"
                onClick={() => setShowMore(!showMore)}
              >
                More
              </button>
              {showMore && (
                <div className="dropdown-menu show">
                  <Link href="/" className="dropdown-item">More Options</Link>
                </div>
              )}
            </div>
          </div>

          <div className="auth-container position-absolute">
            <Link href="/subscribe" className="btn btn-primary subscribe-btn me-2">Subscribe</Link>
            <Link href="/signin" className="btn btn-outline-dark signin-btn">Sign In</Link>
          </div>
        </div>
      </div>

      <nav className="wsj-nav">
        <div className="container-fluid">
          <div className="nav-container d-flex justify-content-between align-items-center px-3">
            <div className="main-nav d-flex overflow-auto">
              <Link href="/" className="nav-link">Latest</Link>
              <Link href="/" className="nav-link">World</Link>
              <Link href="/" className="nav-link">Business</Link>
              <Link href="/" className="nav-link">U.S.</Link>
              <Link href="/" className="nav-link">Politics</Link>
              <Link href="/" className="nav-link">Economy</Link>
              <Link href="/" className="nav-link">Tech</Link>
              <Link href="/" className="nav-link">Markets & Finance</Link>
              <Link href="/" className="nav-link">Opinion</Link>
              <Link href="/" className="nav-link">Arts</Link>
              <Link href="/" className="nav-link">Lifestyle</Link>
              <Link href="/" className="nav-link">Real Estate</Link>
              <Link href="/" className="nav-link">Personal Finance</Link>
              <Link href="/" className="nav-link">Health</Link>
              <Link href="/" className="nav-link">Style</Link>
              <Link href="/" className="nav-link">Sports</Link>
            </div>
            <div className="search-container">
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;