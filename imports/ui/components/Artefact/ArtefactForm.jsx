import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import AutoFormBase from '../AutoFormBase/AutoFormBase.jsx';
import Navigation from '/imports/api/Navigation/Navigation.js';

import Objects from '/imports/api/Objects/ObjectCollection.js';
import Artefacts from '/imports/api/Artefacts/ArtefactCollection.js';

class ArtefactForm extends Component {
    get deleteDocFunc() {
        const self = this;
        return function deleteDoc() {
            const { doc } = self.props;

            if (doc && doc._id) {
                Artefacts.remove({ _id: doc._id });
                Navigation.goBack();
            }
        };
    }

    render() {
        return (
            <AutoFormBase
              formId="artefactForm"
              collection={Artefacts}
              doc={this.props.doc}
              type={this.props.type}
              deleteDoc={this.deleteDocFunc}
              showDeleteButton={!!this.props.doc && !!this.props.doc._id} />
        );
    }
}

ArtefactForm.propTypes = {
    objectNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    projectId: PropTypes.string.isRequired,
    artefactNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    doc: PropTypes.object,
    type: PropTypes.string,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');
    Meteor.subscribe('leletek');

    const object = Objects.findOne({
        projekt_id: props.projectId,
        objektum_szam: parseInt(props.objectNumber, 10),
    }) || {};

    const doc = Artefacts.findOne({
        objektum_id: object._id,
        lelet_szam: parseInt(props.artefactNumber, 10),
    }) || { objektum_id: object._id };

    return { doc, type: doc._id ? 'update' : 'insert' };
}, ArtefactForm);
