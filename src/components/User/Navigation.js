import React from "react";
import { Navbar, Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";

const Navigation = ({handleSignOut}) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Tasko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <DropdownButton className="mr-2" variant="info" id="dropdown-basic-button" title="Settings">
                    <Dropdown.Item href="/u/profile/">Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                </DropdownButton>
                <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;