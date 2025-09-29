import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Brand Logo / Title */}
        <Link className="navbar-brand mx-auto d-md-none fw-bold" to="/">
          VISMIT Radiology Center
        </Link>

        {/* Hamburger Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Brand Left & Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-brand fw-bold d-none d-md-block" >
            VISMIT Radiology Center
          </Link>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointment">Book Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
