import SimpleSchema from 'simpl-schema';
import { getOmittedFields, getEditableFields } from '/imports/api/CollectionHelpers/CollectionHelpers.js';

const ProjectSchema = new SimpleSchema({
    name: {
        type: String,
        editable: true,
    },
    feltarasi_hely: {
        type: String,
        editable: true,
    },
    asatas_kezdete: {
        type: Date,
        editable: true,
    },
    adatrogzito_szemely_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true,
    },
    timestamp: {
        type: Date,
        defaultValue: new Date(),
        optional: true,
    },
});

const Projects = new Meteor.Collection('projektek');
Projects.attachSchema(ProjectSchema);

const whitelist = getEditableFields(ProjectSchema);

Projects.allow({
    insert(userId, doc) {
        return true;
        // return userId;
    },
    update(userId, doc, fieldNames, modifier) {
        return true;
        // return (userId && doc.userId === userId && _.difference(fieldNames, whitelist).length === 0);
    },
    remove(userId, doc) {
        return userId === doc.adatrogzito_szemely_id;
    },
});

export default Projects;
