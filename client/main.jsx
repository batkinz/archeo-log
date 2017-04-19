import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import '/imports/startup/common/SimpleSchemaExtensions.js';
import '/imports/startup/client/AccountsTemplatesConfiguration.js';

import Routes from '/imports/ui/Routes.jsx';

Meteor.startup(() => {
    render(<Routes />, document.getElementById('render-target'));
});
