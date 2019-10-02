import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/User/Navigation';
import Header from '../../components/User/Header';
import { TODO_FILENAME } from '../../utils/constant';

class User extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession
    }

    handleSignOut = () => {
        const { userSession } = this.state; 
        userSession.signUserOut(window.location.origin);
    }

    deleteTodo = async () => {
        const { userSession } = this.state;
        const option = { decyrpt: false };

        try {
            await userSession.putFile(TODO_FILENAME, '[]', option);
            console.log('ok');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { user, userSession } = this.state;

        return(
            <Container>
                <Navigation handleSignOut={this.handleSignOut}/>
                <Header user={user} userSession={userSession} />
                <hr />
                <Row className="mt-3">
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                        <Button variant="danger" onClick={()=>this.deleteTodo()}>Delete Todos</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default User;