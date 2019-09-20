import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

class UserProvider extends Component {
    constructor(props) {
        super(props);
        const userData = props.userSession.loadUserData();

        this.state = {
            currentUser: {
                userData,
                userSession: props.userSession,
                userName: userData.userName
            }
        }
    }

    static propTypes = {
        userSession: PropTypes.object.isRequired
    }

    render() {
        return (
            <AuthContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default UserProvider;