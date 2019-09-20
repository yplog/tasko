import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Tasko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Docs</Nav.Link>
                <Nav.Link href="#link">Support</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="outline-primary" className="mr-2">Login</Button>
                <Button variant="outline-success">Sign Up</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;