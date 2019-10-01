import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/User/Navigation';
import Header from '../../components/User/Header';

class User extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession
    }

    handleSignOut = () => {
        const { userSession } = this.state; 
        userSession.signUserOut(window.location.origin);
    }

    // TODO: Delete todos file function!

    render() {
        const { user, userSession } = this.state;

        return(
            <Container>
                <Navigation handleSignOut={this.handleSignOut}/>
                <Header user={user} userSession={userSession} />
                <hr />
                <Row className="mt-3">
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                        <Button variant="danger" onClick={this.deleteTodos}>Delete Todos</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default User;