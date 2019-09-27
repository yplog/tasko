import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/User/Navigation';

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
        const { user, userSession } = this.state;

        return(
            <Container>
                <Navigation handleSignOut={this.handleSignOut}/>
            </Container>
        );
    }
}

export default User;