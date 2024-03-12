import { Link, useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Header = () => {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">HypeMe HypeYou</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link
                  to="/"
                  className={
                    currentPage === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Timeline
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/login"
                  className={
                    currentPage === "/login" ? "nav-link active" : "nav-link"
                  }
                >
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/signup"
                  className={
                    currentPage === "/signup" ? "nav-link active" : "nav-link"
                  }
                >
                  Sign-Up
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link
                  to="/profile/me"
                  className={
                    currentPage === "/profile" ? "nav-link active" : "nav-link"
                  }
                >
                  Profile
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
