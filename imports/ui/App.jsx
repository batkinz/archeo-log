import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import MainMenu from './components/MainMenu/MainMenu.jsx';
import ProjectList from './components/ProjectList/ProjectList.jsx';
import Project from './components/Project/Project.jsx';

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

        if (!this.props.loading) {
            return (
                <Router>
                    <div className="container" style={this.props.style.appContainer}>
                        <span style={this.props.style.version}>{this.version}</span>

                        <MainMenu />

                        <div className="container" style={this.props.style.pageContainer}>
                            <Route exact path="/" component={ProjectList} />
                            {/* <FilteringMenu />
                             <ProjectList projects={projects} style={{}} /> */}
                            <Route path="/project" component={Project} />
                        </div>
                        {this.props.children}
                    </div>
                </Router>
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
