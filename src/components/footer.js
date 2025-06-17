import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        India
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/about"> About </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/blog"> Blog</Link>
          <a href="mailto:fawaz.ahamed2023@vitstudent.ac.in"> Email </a>
          <a href="https://linkedin.com/in/fawaz-ahamed" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
