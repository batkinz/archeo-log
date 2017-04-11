import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component, PropTypes } from 'react';
import Projects from '/imports/api/Projects/ProjectCollection.js';

class ProjectForm extends Component {
    render() {
        return (
            <Blaze template="ProjectForm" collection={Projects} type={this.props.type} doc={this.props.doc} />
        );
    }
}

ProjectForm.propTypes = {
    type: PropTypes.string.isRequired,
    doc: PropTypes.object,
};

export default ProjectForm;
