"use client";
// components/WSJHeader.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  List,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const Header = () => {
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track window width for responsive behavior
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="wsj-header">
      {/* Top bar with partner sites */}
      <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center px-md-5 px-2 container">
            <div className="top-links d-flex">
              <Link href="/" className="top-link">
                WSJ
              </Link>
              <Link href="/" className="top-link">
                Barron's
              </Link>
              <Link href="/" className="top-link">
                MarketWatch
              </Link>
              <Link href="/" className="top-link">
                IBD
              </Link>
            </div>
            <div className="buy-side">
              <Link href="/" className="buy-link">
                Buy Side from WSJ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market ticker - hidden on smallest screens */}
      <div className="market-ticker d-none d-sm-block">
        <div className="container-fluid">
          <div className="ticker-container d-flex align-items-center px-3">
            <button className="ticker-toggle me-2">
              <ChevronDown size={16} />
            </button>

            <div className="ticker-items d-flex justify-content-center mx-auto overflow-auto">
              <div className="ticker-item mx-2">
                <span className="ticker-name">Asia Dow</span>
                <span className="ticker-value down">42579.1</span>
                <span className="ticker-percent down">-0.81%</span>
              </div>

              <div className="ticker-item mx-2">
                <span className="ticker-name">Nikkei</span>
                <span className="ticker-value up">37015.15</span>
                <span className="ticker-percent up">0.35%</span>
              </div>

              <div className="ticker-item mx-2 d-none d-md-block">
                <span className="ticker-name">Hang Seng</span>
                <span className="ticker-value down">23707.29</span>
                <span className="ticker-percent down">-2.16%</span>
              </div>

              <div className="ticker-item mx-2 d-none d-lg-block">
                <span className="ticker-name">Shanghai</span>
                <span className="ticker-value down">3356.20</span>
                <span className="ticker-percent down">-0.48%</span>
              </div>

              <div className="ticker-item mx-2 d-none d-xl-block">
                <span className="ticker-name">BSE Sen</span>
              </div>
            </div>

            <div className="ticker-nav ms-auto">
              <button className="ticker-nav-btn me-2">
                <ChevronLeft size={16} />
              </button>
              <button className="ticker-nav-btn">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header - with logo and mobile menu button */}
      <div className="wsj-main-header position-relative">
        <div className="container-fluid text-center py-2">
          {/* Mobile menu toggle button */}
          <button
            className="btn position-absolute start-0 top-50 translate-middle-y ms-2 d-lg-none mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          <div className="logo-container pt-2">
            <h1 className="wsj-logo-text">THE WALL STREET JOURNAL.</h1>
          </div>

          {/* Edition links - more compact on smaller screens */}
          <div className="edition-container d-none d-md-flex justify-content-center align-items-center mt-2 flex-wrap">
            <div className="dropdown edition-dropdown me-3">
              <button
                className="btn dropdown-toggle edition-btn"
                type="button"
                id="editionDropdown"
              >
                English Edition
              </button>
            </div>
            <div className="edition-divider d-none d-lg-block"></div>
            <Link href="/" className="edition-link mx-2 mx-lg-3">
              Print Edition
            </Link>
            <div className="edition-divider d-none d-lg-block"></div>
            <Link href="/" className="edition-link mx-2 mx-lg-3">
              Video
            </Link>
            <div className="edition-divider d-none d-lg-block"></div>
            <Link
              href="/"
              className="edition-link mx-2 mx-lg-3 d-none d-md-block"
            >
              Audio
            </Link>
            <div className="edition-divider d-none d-lg-block"></div>
            <Link
              href="/"
              className="edition-link mx-2 mx-lg-3 d-none d-lg-block"
            >
              Latest Headlines
            </Link>
            <div className="edition-divider d-none d-lg-block"></div>
            <div className="dropdown more-dropdown ms-2 ms-lg-3">
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
                  <Link href="/" className="dropdown-item">
                    More Options
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Authentication buttons - hidden on small screens */}
          <div className="auth-container position-absolute end-0 top-50 translate-middle-y me-2 d-none d-md-block">
            <Link
              href="/subscribe"
              className="btn btn-primary btn-sm btn-md-normal subscribe-btn me-1 me-md-2"
            >
              Subscribe
            </Link>
            <Link
              href="/signin"
              className="btn btn-outline-dark btn-sm btn-md-normal signin-btn"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu - slides in when active */}
      <div
        className={`mobile-menu d-lg-none ${
          mobileMenuOpen ? "open" : "closed"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "280px",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 1050,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          overflowY: "auto",
          boxShadow: mobileMenuOpen ? "0 0 10px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="p-3 border-bottom">
          <button onClick={toggleMobileMenu} className="btn float-end">
            <X size={24} />
          </button>
          <div className="py-2 text-center">
            <h2 className="h5 mb-0">WSJ Menu</h2>
          </div>
        </div>

        <div className="p-2">
          {/* Authentication buttons in mobile menu */}
          <div className="mobile-auth-buttons d-flex justify-content-center gap-2 my-3">
            <Link
              href="/subscribe"
              className="btn btn-primary btn-sm flex-grow-1"
            >
              Subscribe
            </Link>
            <Link
              href="/signin"
              className="btn btn-outline-dark btn-sm flex-grow-1"
            >
              Sign In
            </Link>
          </div>

          <div className="mobile-nav-section">
            <h3 className="mobile-nav-title h6 mb-2 ps-2">Sections</h3>
            <div className="mobile-nav-items d-flex flex-column">
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Latest
              </Link>
              <Link href="/world" className="nav-link py-2 ps-2 border-bottom">
                World
              </Link>
              <Link
                href="/business"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Business
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                U.S.
              </Link>
              <Link
                href="/politics"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Politics
              </Link>
              <Link
                href="/economy"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Economy
              </Link>
              <Link href="/tech" className="nav-link py-2 ps-2 border-bottom">
                Tech
              </Link>
              <Link
                href="/market-and-finance"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Markets & Finance
              </Link>
              <Link
                href="/opinion"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Opinion
              </Link>
              <Link href="/arts" className="nav-link py-2 ps-2 border-bottom">
                Arts
              </Link>
              <Link
                href="/lifestyle"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Lifestyle
              </Link>
              <Link
                href="/real-estate"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Real Estate
              </Link>
              <Link
                href="/personal-finance"
                className="nav-link py-2 ps-2 border-bottom"
              >
                Personal Finance
              </Link>
              <Link href="/health" className="nav-link py-2 ps-2 border-bottom">
                Health
              </Link>
              <Link href="/style" className="nav-link py-2 ps-2 border-bottom">
                Style
              </Link>
              <Link href="/sports" className="nav-link py-2 ps-2 border-bottom">
                Sports
              </Link>
            </div>
          </div>

          <div className="mobile-nav-section mt-3">
            <h3 className="mobile-nav-title h6 mb-2 ps-2">Edition</h3>
            <div className="mobile-nav-items d-flex flex-column">
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Print Edition
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Video
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Audio
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Latest Headlines
              </Link>
            </div>
          </div>

          <div className="mobile-nav-section mt-3">
            <h3 className="mobile-nav-title h6 mb-2 ps-2">WSJ Network</h3>
            <div className="mobile-nav-items d-flex flex-column">
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                WSJ
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Barron's
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                MarketWatch
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                IBD
              </Link>
              <Link href="/" className="nav-link py-2 ps-2 border-bottom">
                Buy Side from WSJ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
          onClick={toggleMobileMenu}
        />
      )}

      {/* Desktop navigation - hidden on mobile */}
      <nav className="wsj-nav d-none d-lg-block">
        <div className="container-fluid">
          <div className="nav-container d-flex justify-content-center align-items-center">
            <div className="main-nav d-flex flex-wrap justify-content-center w-100">
              <Link href="/organized-crime" className="nav-link">
                organized-crime
              </Link>
              <Link href="/criminal-psychology" className="nav-link">
                criminal-psychology
              </Link>
              <Link href="/true-crime-stories" className="nav-link">
                true-crime-stories
              </Link>
              <Link href="/cybercrime" className="nav-link">
                cybercrime
              </Link>
              <Link href="/violent-crimes" className="nav-link">
                violent-crimes
              </Link>
              <Link href="/drug-trafficking" className="nav-link">
                Drug Trafficking
              </Link>
              <Link href="/money-laundering" className="nav-link">
                Money Laundering
              </Link>
              <Link href="/extortion-and-racketeering" className="nav-link">
                Extortion and Racketeering
              </Link>
              <Link href="/human-trafficking" className="nav-link">
                Human Trafficking
              </Link>
            </div>
            <div className="search-container">
              <button className="search-btn">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile bottom search bar */}
      <div className="mobile-search-bar d-lg-none border-top py-2 px-3 text-center">
        <button className="btn btn-light">
          <Search size={16} className="me-2" />
          <span>Search</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
