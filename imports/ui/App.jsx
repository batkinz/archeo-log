import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import ProjectList from './components/ProjectList/ProjectList.jsx';

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
        const projects = [
            {
                _id: 0,
                name: 'Sometownnaghme',
                location: 'Far Faraway Straße 1324',
                date: new Date(2017, 2, 10),
            },
            {
                _id: 1,
                name: 'Sometownnaghme',
                location: 'Far Faraway Straße 1324',
                date: new Date(2017, 2, 10),
            },
            {
                _id: 2,
                name: 'Sometownnaghme',
                location: 'Far Faraway Straße 1324',
                date: new Date(2017, 2, 10),
            },
            {
                _id: 3,
                name: 'Sometownnaghme',
                location: 'Far Faraway Straße 1324',
                date: new Date(2017, 2, 10),
            },
            {
                _id: 4,
                name: 'Sometownnaghme',
                location: 'Far Faraway Straße 1324',
                date: new Date(2017, 2, 10),
            }];

        if (!this.props.loading) {
            return (
                <div className="container" style={this.props.style.container}>
                    <span style={this.props.style.version}>{this.version}</span>
                    <ProjectList projects={projects} style={{}} itemStyle={this.props.pliStyles} />
                    {this.props.children}
                </div>
            );
        }

        return (
            <div>Loading...</div>
        );
    }
}

App.propTypes = {
    style: PropTypes.object.isRequired,
    pliStyles: PropTypes.object,
    children: PropTypes.object,
    loading: PropTypes.bool,
};

export default createContainer(() => {
    const subHandle = Meteor.subscribe('styles');
    const styleReady = !subHandle.ready();

    const commonStyles = getStyle(Styles.findOne({ targetComponent: 'Common' }), CommonStyle);
    const localStyles = getStyle(Styles.findOne({ targetComponent: 'App' }), AppStyle);
    const projectListItemStyles = Styles.findOne({ targetComponent: 'ProjectListItem' }) || {};
    return {
        loading: styleReady,
        style: Object.assign({}, commonStyles.style, localStyles.style),
        pliStyles: Object.assign({}, commonStyles.style, projectListItemStyles.style),
    };
}, Radium(App));
