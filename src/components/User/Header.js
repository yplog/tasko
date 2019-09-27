import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

class Header extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession
    }

    render() {
        const { user, userSession } = this.state;
        console.log(user);
        console.log(user.profile);

        return(
            <Row>
                <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ user.profile.image[0].contentUrl ? user.profile.image[0].contentUrl : avatarFallbackImage } />
                        <Card.Body>
                            <Card.Title>{ user.profile.name }</Card.Title>
                            <Card.Text>
                                { user.profile.description }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Header;