import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Toggle menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu
  const closeMenu = () => setMenuOpen(false);

  // Sticky on scroll

 useEffect(() => {
  const handleScroll = () => setIsSticky(window.scrollY > 50);
  handleScroll(); // Add this to apply immediately if needed
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // Auto-close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <h1 className="logo">
          <Link to="/">VISMIT Radiology Center</Link>
        </h1>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

        {/* CTA */}
        <Link to="/appointment" className="cta-btn">
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
