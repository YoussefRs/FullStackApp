import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content container ">
        <div className="footer-copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
