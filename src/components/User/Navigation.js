import React from "react";
import { Navbar, Nav, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faUser, faBook, faHeart } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({handleSignOut}) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Tasko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <DropdownButton className="mr-2" variant="info" id="dropdown-basic-button" title="Settings">
                    <Dropdown.Item href="/u/profile/"><FontAwesomeIcon icon={faUser}/> Profile</Dropdown.Item>
                    <Dropdown.Item href="#"><FontAwesomeIcon icon={faArchive}/> Archive</Dropdown.Item>
                    <Dropdown.Item href="#"><FontAwesomeIcon icon={faBook}/> Docs</Dropdown.Item>
                    <Dropdown.Item href="#"><FontAwesomeIcon icon={faHeart}/> Support</Dropdown.Item>
                </DropdownButton>
                <Button variant="outline-danger" onClick={handleSignOut}>Sign Out</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;