/* eslint prefer-arrow-callback: "off", func-names: "off" */
import { describe, it, beforeEach, afterEach } from 'meteor/practicalmeteor:mocha';
import { chai } from 'meteor/practicalmeteor:chai';
import $ from 'jquery';
import '/imports/startup/common/SimpleSchemaExtensions.js';
import { withRenderedComponent } from '/imports/testing/TestHelpers.jsx';
// import StubCollections from 'meteor/hwillson:stub-collections';

import ObjectForm from './ObjectForm.jsx';
import Objects from '/imports/api/Objects/ObjectCollection.js';

const assert = chai.assert;

const fakeObjects = [
    { projekt_id: '8cFsZMRmx3twGPGR5', objektum_szam: 1, telepules: 'Budapest' },
    { projekt_id: '8cFsZMRmx3twGPGR5', objektum_szam: 2, telepules: 'Budapest' },
];

describe('ObjectForm', function () {
    if (Meteor.isClient) {
        beforeEach(function () {
            _.each(fakeObjects, object => Objects.insert(object));
        });

        afterEach(function () {
            _.each(Objects.find().fetch(), object => {
                if (object) {
                    Objects.remove({ _id: object._id });
                }
            });
        });

        it('can update objects from UI', function () {
            const obj = fakeObjects[0];
            withRenderedComponent(ObjectForm,
                {
                    objectNumber: obj.objektum_szam,
                    projectId: obj.projekt_id,
                },
                function (el) {
                    console.log(el);

                    console.log($(el).find('input[name="telepules"]').val());

                    console.log($(el).find('button[type="submit"]'));
                });
        });
    }
});