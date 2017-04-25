import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import AutoFormBase from '../AutoFormBase/AutoFormBase.jsx';

import Objects, { OmitFieldsObjectForm } from '/imports/api/Objects/ObjectCollection.js';

class ObjectForm extends Component {
    render() {
        return (
            <AutoFormBase
              formId="objectForm"
              collection={Objects}
              doc={this.props.doc}
              omitFields={OmitFieldsObjectForm} />
        );
    }
}

ObjectForm.propTypes = {
    objectNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    projectId: PropTypes.string.isRequired,
    doc: PropTypes.object,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');

    const doc = props.doc || Objects.findOne({
        $and:
        [
            { projekt_id: props.projectId },
            { objektum_szam: parseInt(props.objectNumber, 10) },
        ],
    });

    return { doc };
}, ObjectForm);
