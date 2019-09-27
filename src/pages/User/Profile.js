import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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

    render() {
        const { user, userSession } = this.state;

        return(
            <Container>
                <Navigation handleSignOut={this.handleSignOut}/>
                <Header user={user} userSession={userSession} />
            </Container>
        );
    }
}

export default User;