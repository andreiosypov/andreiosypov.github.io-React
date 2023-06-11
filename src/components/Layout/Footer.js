import React from 'react';

const now = new Date();

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <span className="copyright">
        &copy; {now.getFullYear()} Andrei Osypov
        </span>
      </footer>
    </div>
    
  );
};

export default Footer;
