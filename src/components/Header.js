import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



function BasicExample() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Nav.Link href="#home">Writers</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Best Offers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Best Offers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">How To Order</Nav.Link>
                        <Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>

                    </Nav>
                    <div className="d-flex">
           
            <Button className='btn'>Log In</Button>
            <Button className='_btn'>Sign Up</Button>

          </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;