import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tasko</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="https://blockstack.org/" target="_blank"><FontAwesomeIcon icon={faBolt}/> Blockstack</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
        </Nav>
    </Navbar>
);

export default Footer;