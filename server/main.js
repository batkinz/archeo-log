import { Meteor } from 'meteor/meteor';
import resetAllStyles from '/imports/startup/server/HandleDefaultStyles.js';

import '/imports/startup/common/SimpleSchemaExtensions.js';
import '/imports/startup/server/publications.js';

Meteor.startup(() => {
    resetAllStyles();
});
