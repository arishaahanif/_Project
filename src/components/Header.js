import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Logo, Brand } from "./SVG"

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">{Logo}&nbsp;&nbsp;{Brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#home">Writers</Nav.Link>
            <NavDropdown title="Services" id="Services">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Admission Essay Writing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coursework Writing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Dissertation Writing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Research Paper Writing                  </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Law Essay Writing        
                           </NavDropdown.Item>
                           <NavDropdown.Item href="#action/3.4">
                            <b>
                            View all writing services     

                            </b>
                           </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Best Offers" id="Offers">
              <NavDropdown.Item href="#action/3.1">
                Best Offers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Buy essay
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">do my homework</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                pay for essay
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                research pagers for sale
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                write my essay for college
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">How To Order</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button className="btn mx-1">Log In</Button>
            <Button className="_btn mx-1">Sign Up</Button>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default BasicExample;
