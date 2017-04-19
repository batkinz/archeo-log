import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Route, Redirect } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import LoginStyle from './Login.style.js';

class Login extends Component {
    componentWillMount() {
        if (this.props.userId) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userId) {
            nextProps.history.push('/');
        }
    }

    render() {
        return (
            <div style={LoginStyle.container}>
                <div style={LoginStyle.logo}></div>
                <div style={LoginStyle.subtitle}>The excavation documenter</div>
                <Blaze template="atForm" />
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object.isRequired,
    userId: PropTypes.string,
};

export default createContainer(() => {
    const userId = Meteor.userId();

    return {
        userId,
    };
}, Radium(Login));
