import React from 'react';
import Navigation from "../components/Landing/Navigation";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const Support = ({handleSignIn}) => (
    <Container>
        <Navigation handleSignIn={handleSignIn}/>
        <Row className="mt-5">
            <Col>
                <h1><FontAwesomeIcon icon={faGithubAlt} /></h1>
                <p>Tasko is an open source project and you can always support us.</p>
                <ul>
                    <li><b>Github: </b><a href="https://github.com/yplog/tasko" target="_blank">tasko</a></li>
                </ul>
            </Col>
        </Row>
        <Row className="mt-3">
            <Row>
                <Col>
                    <h1><FontAwesomeIcon icon={faHandHoldingHeart} /></h1> <br/>
                    <p>Although we do not defend, money has a very high motivation power.</p>
                </Col>
            </Row>
                <Row>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Stellar</Card.Title>
                            <Card.Text>
                                <b>Address: </b>GBI6S6N3M3FFM2LOEVUA3FXKPQPH2TXBEHMZESRFHEIGVIERBP4XSOLO
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/btc.png" />
                        <Card.Body>
                            <Card.Title>Bitcoin</Card.Title>
                            <Card.Text>
                                <b>Address: </b>1KWf1xK3SayHy24LjQgrJUg1f9KTsByjQB
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/eth.png" />
                        <Card.Body>
                            <Card.Title>Ethereum</Card.Title>
                            <Card.Text>
                                <b>Address: </b>0x82ad9cee5ac22a5033ef7f673cd874868baafbb9
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Row>
        
    </Container>
);

export default Support;