import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import AutoFormBase from '../AutoFormBase/AutoFormBase.jsx';

import Objects from '/imports/api/Objects/ObjectCollection.js';
import Artefacts from '/imports/api/Artefacts/ArtefactCollection.js';

class ArtefactForm extends Component {
    render() {
        return (
            <AutoFormBase
              formId="artefactForm"
              collection={Artefacts}
              doc={this.props.doc}
              type={this.props.type} />
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
