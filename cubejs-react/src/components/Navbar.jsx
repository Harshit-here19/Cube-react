import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            Cube Analytics
          </Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/line" className="nav-link">
                Line Chart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bar" className="nav-link">
                Bar Chart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pie" className="nav-link">
                Pie Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
