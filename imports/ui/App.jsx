import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import MainMenu from './components/MainMenu/MainMenu.jsx';
import FilteringMenu from './components/FilteringMenu/FIlteringMenu.jsx';
import ProjectList from './components/ProjectList/ProjectList.jsx';

import ProjectForm from './components/Project/ProjectForm/ProjectForm.jsx';

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
                <div className="container" style={this.props.style.appContainer}>
                    <span style={this.props.style.version}>{this.version}</span>

                    <MainMenu />

                    <div className="container" style={this.props.style.pageContainer}>
                        {/* <FilteringMenu />
                         <ProjectList projects={projects} style={{}} /> */}
                        <ProjectForm />
                    </div>
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
    menuStyle: PropTypes.object,
    children: PropTypes.object,
    loading: PropTypes.bool,
};

export default createContainer(() => {
    const subHandle2 = Meteor.subscribe('styles');
    const ready = subHandle2.ready();

    const commonStyles = getStyle('Common', CommonStyle.style);
    const localStyles = getStyle('App', AppStyle.style);

    return {
        loading: !ready,
        style: Object.assign({}, commonStyles, localStyles),
    };
}, Radium(App));
