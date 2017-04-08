/**
 * Created by bence on 2017.04.07..
 */
import Artefacts from '../ArtefactCollection.js';

Meteor.publish('leletek', () => {
    return Artefacts.find();
});
