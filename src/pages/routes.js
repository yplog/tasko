import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import UserProvider from '../components/User/UserProvider';
import User from '../pages/User';


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
                    <Route path="/u/" render={() => <User/>}/>
                </Switch>
            </UserProvider>
        );
    }
}

export default Routes;