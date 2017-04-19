import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import Objects, { OmitFieldsObjectForm } from '/imports/api/Objects/ObjectCollection.js';

class ObjectForm extends Component {
    render() {
        return (
            <Blaze
              template="ProjectForm"
              formId="objectForm"
              collection={Objects}
              type="update"
              doc={this.props.doc} />
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

    const doc = Objects.findOne({
        $and:
        [
            { projekt_id: props.projectId },
            { objektum_szam: parseInt(props.objectNumber, 10) },
        ],
    });

    return { doc };
}, ObjectForm);
