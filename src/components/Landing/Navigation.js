import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navigation = ({handleSignIn}) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Tasko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Docs</Nav.Link>
                <Nav.Link href="#">Support</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="https://browser.blockstack.org/sign-up" className="mr-2" target="_blank">Create Blockstack ID</Nav.Link>
                <Button variant="outline-primary" onClick={handleSignIn}>Login</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;