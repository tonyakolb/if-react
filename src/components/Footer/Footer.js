import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container">
      <div className="logotype">
        <img src="../../assets/images/triphouse-logo-white.svg" alt="logo" />
      </div>
      <div className="main">
        <div className="about">
          <a href="/">
            <span className="text-bold">About</span>
          </a>
          <a href="/">
            <span className="text">How Triphouse works</span>
          </a>
          <a href="/">
            <span className="text">Careers</span>
          </a>
          <a href="/">
            <span className="text">Privacy</span>
          </a>
          <a href="/">
            <span className="text">Terms</span>
          </a>
        </div>
        <div className="property">
          <a href="/">
            <span className="text-bold">Property types</span>
          </a>
          <a href="/">
            <span className="text">Guests houses</span>
          </a>
          <a href="/">
            <span className="text">Hotels</span>
          </a>
          <a href="/">
            <span className="text">Apartments</span>
          </a>
          <a href="/">
            <span className="text">Villas</span>
          </a>
          <a href="/">
            <span className="text">Holiday homes</span>
          </a>
          <a href="/">
            <span className="text">Hostels</span>
          </a>
        </div>
        <div className="support">
          <a href="/">
            <span className="text-bold">Support</span>
          </a>
          <a href="/">
            <span className="text">Contact Customer Service</span>
          </a>
          <a href="/">
            <span className="text">FAQ</span>
          </a>
        </div>
      </div>
      <div className="company">
        <span className="document">&copy; 2020 Triphouse, Inc. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
