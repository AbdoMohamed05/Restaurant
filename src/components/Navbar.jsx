import React from 'react'
import logo from '../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';


function BasicExample({link}) {
    return (
        <Navbar expand="lg fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title='logo' alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to={`/`}>Home</Nav.Link>
                        <Nav.Link href={`Sidebar`}>About Us</Nav.Link>
                        <Nav.Link href="#home">Exeplore</Nav.Link>
                        <Nav.Link href="#home">Reviews</Nav.Link>
                        <Nav.Link href="#link">Fag</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id='last-nav'>46848840150</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;