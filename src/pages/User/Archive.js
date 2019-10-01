import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/User/Navigation';
import TodoArchive from '../../components/Todo/Archive';

class Archive extends Component {

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
                <TodoArchive user={user} userSession={userSession} />
            </Container>
        );
    }
}

export default Archive;