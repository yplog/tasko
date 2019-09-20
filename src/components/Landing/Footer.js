import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
    <Navbar bg="light">
        <Navbar.Brand>Tasko</Navbar.Brand>
        <Nav>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
        </Nav>
    </Navbar>
);

export default Footer;