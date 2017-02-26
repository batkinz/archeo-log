/* globals ProjectSchema: true, Projects: true */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

ProjectSchema = new SimpleSchema({
    name: {
        type: String,
    },
    megbizas_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    feltarasi_hely_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    zarojelentes: {
        type: Object,
        optional: true,
    },
    timestamp: {
        type: Date,
        defaultValue: new Date(),
    },
    active: {
        type: Boolean,
        defaultValue: true,
    },
});

Projects = new Meteor.Collection('projektek');
Projects.attachSchema(ProjectSchema);
