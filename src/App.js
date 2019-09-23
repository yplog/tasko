import React, { Component } from 'react';
import { appConfig } from './utils/constant';
import { UserSession } from 'blockstack';
import { Container, Button } from 'react-bootstrap';
import Routes from './pages/routes';

export default class App extends Component {

  state = {
    userSession: new UserSession({ appConfig }),
  }

  componentDidMount = async () => {
    const { userSession } = this.state;
    
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
    
  }
  

  handleSignIn = () => {
    const { userSession } = this.state;
    userSession.redirectToSignIn();
  }

  handleSignOut = () => {
    const { userSession } = this.state; 
    userSession.signUserOut(window.location.origin);
  }

  render() {
    const { userSession } = this.state;

    return (
      <Container>
        {
          userSession.isUserSignedIn() ?
          <Routes userSession={userSession}/>
          //<Button onClick={this.handleSignOut}>Sign Out</Button>
          :
          <Button onClick={this.handleSignIn}>Sign In</Button>
        }
      </Container>
    );
  }
}
