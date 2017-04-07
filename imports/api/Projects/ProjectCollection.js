import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const ProjectSchema = new SimpleSchema({
    name: {
        type: String,
        editable: true,
    },
    feltarasi_hely: {
        type: String,
        editable: true,
    },
    asatasKezdete: {
        type: Date,
        editable: true,
    },
    adatrogzito_szemely_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    timestamp: {
        type: Date,
        defaultValue: new Date(),
    },
});

const Projects = new Meteor.Collection('projektek');
Projects.attachSchema(ProjectSchema);

const whitelist = _.filter(_.keys(ProjectSchema), (property) => {
    return ProjectSchema[property].editable;
});

Projects.allow({
    insert(userId, doc) {
        return userId;
    },
    update(userId, doc, fieldNames, modifier) {
        if (userId && doc.userId === userId && _.difference(fieldNames, whitelist).length === 0) {
            return true;
        }
    },
    remove(userId, doc) {
        return userId === doc.adatrogzito_szemely_id;
    },
});

export default Projects;
