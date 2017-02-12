import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import ProjectListItem from './components/ProjectListItem/ProjectListItem.jsx';

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

        this.getVersion = this.getVersion.bind(this);
        this.setVersion = this.setVersion.bind(this);
        this.version = '';
    }

    getVersion() {
        Meteor.call('getVersion', this.setVersion);
    }

    setVersion(error, result) {
        if (!error) {
            this.version = result;
        } else {
            console.log(error);
        }
    }

    render() {
        this.getVersion();

        return (
            <div className="container" style={this.props.style.container}>
                <span style={this.props.style.version}>{this.version}</span>
                <ProjectListItem name="Sometownnaghme" location="Far Faraway Straße 1324" />
            </div>
        );
    }
}

App.propTypes = {
    style: PropTypes.object.isRequired,
};

export default createContainer(() => {
    const subHandle = Meteor.subscribe('styles');

    const commonStyles = getStyle(Styles.findOne({ targetComponent: 'Common' }), CommonStyle);
    const localStyles = getStyle(Styles.findOne({ targetComponent: 'App' }), AppStyle);
    return {
        loading: !subHandle.ready(),
        style: Object.assign({}, commonStyles.style, localStyles.style),
    };
}, Radium(App));
