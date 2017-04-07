import Objects from '../objects.js';

Meteor.publish('objektumok', () => {
    return Objects.find();
});