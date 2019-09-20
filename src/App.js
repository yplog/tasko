import React, { Component } from 'react';
import { appConfig } from './utils/constant';
import { UserSession } from 'blockstack';
import Navigation from './components/Landing/Navigation';
import HeaderSection from './components/Landing/HeaderSection';
import FeaturesSection from './components/Landing/FeaturesSection';
import Footer from './components/Landing/Footer';

export default class App extends Component {

  state = {
    userSession: new UserSession({ appConfig }),
  }

  render() {
    const { userSession } = this.state;

    return (
      <div>
        <Navigation />
        <HeaderSection />
        <FeaturesSection />
        <Footer />
      </div>
    );
  }
}
