import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';
import { Textfit } from 'react-textfit';
import { Link } from 'react-router-dom';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import Button from '/imports/ui/components/Button/Button.jsx';
import ProjectsButton from './ProjectsButton/ProjectsButton.jsx';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { MainMenuStyle } from './MainMenu.style.js';

class Separator extends Component {
    render() {
        return (
            <div style={this.props.style}></div>
        );
    }
}

Separator.propTypes = {
    style: PropTypes.object.isRequired,
};

Separator = Radium(Separator);


class UserNameContainer extends Component {
    render() {
        return (
            <div style={this.props.style.div}>
                <Textfit mode="single" forceSingleModeWidth={false}>
                    {this.props.firstName}<br />{this.props.lastName}
                </Textfit>
            </div>
        );
    }
}

UserNameContainer.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

UserNameContainer = Radium(UserNameContainer);


class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        AccountsTemplates.logout();
        setTimeout(() => {
            this.props.history.push('/login');
        }, 100);
    }

    render() {
        return (
            <div style={this.props.style.container}>
                <Link to="/" style={this.props.style.logo} />
                <div style={this.props.style.leftSeparatorContainer}>
                    <Separator style={this.props.style.separator} />
                </div>
                <ProjectsButton style={this.props.style.projectsButtonContainer} />
                <div style={this.props.style.rightSeparatorContainer}>
                    <Separator style={this.props.style.separator} />
                </div>
                <div style={this.props.style.userNameContainer}>
                    <UserNameContainer
                      firstName={this.props.user.firstName}
                      lastName={this.props.user.lastName}
                      style={this.props.style.subStyles.userNameContainer} />
                </div>
                <div style={this.props.style.logoutContainer}>
                    <Button handleClick={this.logout} style={this.props.style.logoutButton}>X</Button>
                </div>
            </div>
        );
    }
}

MainMenu.propTypes = {
    history: PropTypes.object.isRequired,
    style: PropTypes.object,
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }),
};

export default createContainer(() => {
    const user = {
        firstName: '',
        lastName: '',
    };

    if (Meteor.userId()) {
        const meteorUser = Meteor.user();
        user.firstName = meteorUser.profile.firstName;
        user.lastName = meteorUser.profile.lastName;
    }

    return {
        style: getStyle('MainMenu', MainMenuStyle.style),
        user,
    };
}, Radium(MainMenu));
