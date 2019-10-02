import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import UserProvider from '../components/User/UserProvider';
import User from './User/User';
import Profile from './User/Profile';
import Archive from '../pages/User/Archive';


class Routes extends Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        const { userSession } = this.props;
        const user = userSession.loadUserData();
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        const { userSession } = this.props;

        if (_.isEmpty(user)) {
            return <div>Empty</div>;
        }

        return(
            <UserProvider userSession={userSession}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/u/'}/>}/>
                    <Route exact path="/u/" render={() => <User user={user} userSession={userSession}/> } />
                    <Route exact path="/u/profile/" render={() => <Profile user={user} userSession={userSession} /> } />
                    <Route exact path="/u/archive/" render={() => <Archive user={user} userSession={userSession} /> } /> 
                </Switch>
            </UserProvider>
        );
    }
}

export default Routes;