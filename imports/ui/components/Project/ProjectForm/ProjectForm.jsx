import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '/imports/api/Projects/ProjectCollection.js';

class ProjectForm extends Component {
    render() {
        return (
            <Blaze
              template="ProjectForm"
              formId="projectForm"
              collection={Projects}
              type={this.props.type}
              doc={this.props.doc} />
        );
    }
}

ProjectForm.propTypes = {
    type: PropTypes.string.isRequired,
    docId: PropTypes.string,
    doc: PropTypes.object,
    omitFields: PropTypes.array,
};

export default createContainer((props) => {
    const subHandle = Meteor.subscribe('projektek');

    let project = null;
    if (props.docId) {
        project = Projects.findOne({ _id: props.docId });
    }

    return {
        doc: project,
        ready: subHandle.ready(),
    };
}, ProjectForm);
