import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';

export default function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark"> 
            <Container>
                <Navbar.Brand href="/">BookWorm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Products</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login" className="justify-content-end">Log In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}