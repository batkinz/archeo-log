import { Meteor } from 'meteor/meteor';
import resetAllStyles from '/imports/startup/server/HandleDefaultStyles.js';

import '/imports/startup/common/SimpleSchemaExtensions.js';

Meteor.startup(() => {
    resetAllStyles();
});
