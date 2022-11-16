import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Image.jpg";
import { Link } from "react-scroll";

function Header() {
  return (
    <Navbar variant="light" sticky="top" expand="lg">
      <Container>
        <img alt="logo" src={logo} className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="link"
              to="services"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Services
            </Link>
            <Link
              className="link"
              to="process"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Process
            </Link>
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              About
            </Link>
            <Link
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
