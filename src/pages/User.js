import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navigation from '../components/User/Navigation';

class User extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession
    }

    handleSignOut = () => {
        const { userSession } = this.state; 
        userSession.signUserOut(window.location.origin);
    }

    render() {
        return(
            <Container>
                <Navigation handleSignOut={this.handleSignOut}/>
                <h1>User Page</h1>
            </Container>
        );
    }
}

export default User;