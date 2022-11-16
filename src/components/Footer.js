import React from "react";
import logo from "../images/Image.jpg";
import insta from "../images/instagram.svg";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="main-footer">
          <div className="footer-icons">
            <img alt="footer" src={logo} className="footer-logo" />

            <a href="https://www.instagram.com/maxpressureco/" target="_blank">
              <img alt="footer" src={insta} className="footer-icon" />
            </a>
          </div>
          <div className="footer-navigation">
            <h4>Max Pressure</h4>
            <Link
              className="footer-link"
              to="services"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Services
            </Link>
            <Link
              className="footer-link"
              to="process"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Process
            </Link>
            <Link
              className="footer-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About
            </Link>
            <Link
              className="footer-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
        <p className="copyright">
          &copy; Max Pressure, 2022. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
