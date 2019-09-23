import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navigation = ({handleSignOut}) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Tasko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Button variant="outline-primary" className="mr-2">Settings</Button>
                <Button variant="outline-success" onClick={handleSignOut}>Sign Out</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;