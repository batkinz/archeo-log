/**
 * Created by bence on 2017.02.10..
 */
import { Mongo } from 'meteor/mongo';

export const Styles = new Mongo.Collection('styles');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('styles', () => {
        return Styles.find();
    });
}
