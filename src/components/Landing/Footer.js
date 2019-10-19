import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Tasko v:0.1</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="https://blockstack.org/" target="_blank">
                <FontAwesomeIcon icon={faBolt} /> Blockstack
            </Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="https://github.com/yplog/tasko" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} /> Github
            </Nav.Link>
        </Nav>
    </Navbar>
);

export default Footer;