import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { AppStyle } from './App.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import ProjectListItem from './components/ProjectListItem/ProjectListItem.jsx';

// App component - represents the whole app
const App = (props) => {
    return (
        <div className="container" style={props.style}>
            <ProjectListItem name="Sometownnaghme6" location="Far Faraway Straße 1324" />
        </div>
    );
};

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
