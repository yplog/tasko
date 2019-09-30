import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/User/Navigation';
import Create from '../../components/Todo/Create';
import List from '../../components/Todo/List';

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
                <Navigation handleSignOut={this.handleSignOut} />
                <Create userSession={userSession} user={user} />
                <hr />
                <List userSession={userSession} user={user} />
            </Container>
        );
    }
}

export default User;