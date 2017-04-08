import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component, PropTypes } from 'react';
import Projects from '/imports/api/Projects/ProjectCollection.js';

class ProjectForm extends Component {
    render() {
        return (
            <Blaze template="ProjectForm" collection={Projects} type="insert" />
        );
    }
}

export default ProjectForm;
