import { Meteor } from 'meteor/meteor';
import resetAllStyles from '/imports/startup/server/HandleDefaultStyles.js';
import { createDefaultUser } from '/imports/startup/server/DefaultUserAccounts.js';

import '/imports/startup/common/SimpleSchemaExtensions.js';
import '/imports/startup/server/publications.js';

Meteor.startup(() => {
    resetAllStyles();

    if (Meteor.users.find().count() === 0) {
        createDefaultUser();
    }
});
