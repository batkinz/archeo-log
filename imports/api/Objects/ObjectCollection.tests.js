/* eslint prefer-arrow-callback: "off", func-names: "off" */
import { describe, it, beforeEach, afterEach } from 'meteor/practicalmeteor:mocha';
import { chai } from 'meteor/practicalmeteor:chai';
import '/imports/startup/common/SimpleSchemaExtensions.js';
import Objects, { ObjectSchema } from './ObjectCollection.js';

import { check } from '/imports/testing/TestHelpers.jsx';

const assert = chai.assert;

const fakeObjects = [
    { projekt_id: 'aaaaaaaaaaaaaaaaa', objektum_szam: 1, telepules: 'Budapest' },
    { projekt_id: 'bbbbbbbbbbbbbbbbb', objektum_szam: 2, telepules: 'Budapest' },
];

describe('ObjectCollection', function () {
    if (Meteor.isClient) {
        // beforeEach(function (done) {
        //     function callDone(err) {
        //         done(err);
        //     }
        //
        //     const errors = [];
        //     const objectsToRemoveCursor = Objects.find();
        //
        //     if (objectsToRemoveCursor.count() === 0) {
        //         done();
        //     } else {
        //         _.each(objectsToRemoveCursor, (object, index) => {
        //             if (object) {
        //                 Objects.remove({ _id: object._id }, err => {
        //                     if (err) {
        //                         errors.push(err);
        //                     }
        //                 });
        //             }
        //
        //             if (index === objectsToRemoveCursor.length - 1) {
        //                 if (errors.length > 0) {
        //                     callDone(errors[0]);
        //                 } else {
        //                     callDone();
        //                 }
        //             }
        //         });
        //     }
        // });

        it('is not allowed to use the same object number twice in the same project', function () {
            // ARRANGE
            Objects.insert(fakeObjects[0], () => {
                console.log(Objects.find().fetch());
            });

            // ACT & ASSERT
            assert.throws(function () {
                ObjectSchema.validate(fakeObjects[0]);
            });
        });

        it('is allowed to update an object', function (done) {
            // ARRANGE
            const _id = Objects.insert(fakeObjects[1], () => {
                // ACT
                Objects.update({ _id }, { $set: { telepules: 'York' } }, null, (updateErr, numOfAffected) => {
                    // ASSERT
                    check(done, function () {
                        if (updateErr) {
                            throw updateErr;
                        }

                        //console.log(Objects.find().fetch());

                        assert.equal(1, numOfAffected);
                        const updatedDoc = Objects.findOne({ _id });
                        assert.equal('York', updatedDoc.telepules);
                    });
                });
            });
        });

        afterEach(function (done) {
            function callDone(err) {
                done(err);
            }

            const errors = [];
            const objectsToRemoveCursor = Objects.find();
            const objectsCount = objectsToRemoveCursor.count();

            console.log(`objectsCount: ${objectsCount}`);

            if (objectsCount === 0) {
                done();
            } else {
                objectsToRemoveCursor.forEach((object, index) => {
                    if (object) {
                        Objects.remove({ _id: object._id }, err => {
                            if (err) {
                                errors.push(err);
                            }
                        });
                    }

                    if (index === objectsCount - 1) {
                        if (errors.length > 0) {
                            callDone(errors[0]);
                        } else {
                            callDone();
                        }
                    }
                });
            }
        });
    }
});
