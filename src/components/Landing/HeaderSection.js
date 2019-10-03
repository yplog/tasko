import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const jumbotronStyle = {
    backgroundImage: 'url(/Endless-Constellation.svg)',
    textAlign: 'center'
};

const HeaderSection = () => (
    <Jumbotron fluid style={jumbotronStyle}>
        <h1><u>Welcome to Distributed To Do App</u></h1>
        <Button className="mt-5" variant="dark" href="#section">Learn more</Button>
    </Jumbotron>
);

export default HeaderSection;