import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';
import { Textfit } from 'react-textfit';

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
    render() {
        const langDropdownItems = [
            { id: 1, text: 'HU' },
            { id: 2, text: 'DE' },
            { id: 3, text: 'GB' }];

        return (
            <div style={this.props.style.container}>
                <div style={this.props.style.logo}></div>
                <div style={this.props.style.leftSeparatorContainer}>
                    <Separator style={this.props.style.separator} />
                </div>
                <ProjectsButton style={this.props.style.projectsButtonContainer} />
                <div style={this.props.style.settingsButtonContainer}>
                    <Button text="Settings" />
                </div>
                <div style={this.props.style.addressesButtonContainer}>
                    <Button text="Addresses" />
                </div>
                <div style={this.props.style.rightSeparatorContainer}>
                    <Separator style={this.props.style.separator} />
                </div>
                <div style={this.props.style.langSelectButtonContainer}>
                    <Button text="GB" style={{ minWidth: 46 }} type={{ yellow: true }} />
                </div>
                <div style={this.props.style.langSelectDropdownContainer}>
                    <Button
                      text="Languages"
                      type={{
                          yellow: true,
                          dropdown: true,
                          dropdownItems: langDropdownItems }} />
                </div>
                <div style={this.props.style.userNameContainer}>
                    <UserNameContainer
                      firstName="Géza"
                      lastName="Mézga"
                      style={this.props.style.subStyles.userNameContainer} />
                </div>
            </div>
        );
    }
}

MainMenu.propTypes = {
    style: PropTypes.object,
};

export default createContainer(() => {
    return {
        style: getStyle('MainMenu', MainMenuStyle.style),
    };
}, Radium(MainMenu));
