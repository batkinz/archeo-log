import { Meteor } from 'meteor/meteor';
import resetAllStyles from '/imports/startup/server/HandleDefaultStyles.js';

Meteor.startup(() => {
    resetAllStyles();
});
