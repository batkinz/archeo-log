import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Button from '/imports/ui/components/Button/Button.jsx';

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


class MainMenu extends Component {
    render() {
        const handleProjectsClick = () => { console.log('Projects'); };
        const projectDropdownItems = [
            { id: 1, text: 'Action 1' },
            { id: 2, text: 'Action 2' },
            { id: 3, text: 'Action 3' }];

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
                <div style={this.props.style.projectsButtonContainer}>
                    <Button
                      text="Projects"
                      handleClick={handleProjectsClick}
                      type={{
                          yellow: true,
                          dropdown: true,
                          dropdownItems: projectDropdownItems }} />
                </div>
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
