/**
 * Created by bence on 2016.05.15..
 */
import Projects from '../ProjectCollection.js';

Meteor.publish('projektek', () => {
    return Projects.find();
});
