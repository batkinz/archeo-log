import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '/imports/startup/common/SimpleSchemaExtensions.js';

import { renderRoutes } from '/imports/startup/client/routes.jsx';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('render-target'));
});
