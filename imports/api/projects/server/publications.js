/**
 * Created by bence on 2016.05.15..
 */
import Projects from '../projects.js';

Meteor.publish('projektek', () => {
    return Projects.find();
});
