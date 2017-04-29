import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import ProjectList from './components/ProjectList/ProjectList.jsx';
import Project from './components/Project/Project.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

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
                <div className="container" style={this.props.style.appContainer}>
                    <span style={this.props.style.version}>{this.version}</span>

                    <MainMenu history={this.props.history} />

                    <div className="container" style={this.props.style.pageContainer}>
                        <Switch>
                            <PrivateRoute exact path="/" component={ProjectList} />
                            <PrivateRoute path="/project" component={Project} />
                            <PrivateRoute component={NotFound} />
                        </Switch>
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
    history: PropTypes.object.isRequired,
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
