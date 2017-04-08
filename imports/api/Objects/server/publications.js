import Objects from '../ObjectCollection.js';

Meteor.publish('objektumok', () => {
    return Objects.find();
});
