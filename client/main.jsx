import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import '/imports/startup/common/SimpleSchemaExtensions.js';

import App from '/imports/ui/App.jsx';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});
