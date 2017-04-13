import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ProjectListStyle } from './ProjectList.style.js';
import ProjectListItem from './ProjectListItem/ProjectListItem.jsx';


class ProjectList extends Component {
    render() {
        const style = getStyle(this.props.style, ProjectListStyle.style);

        const projectComponents = this.props.projects.map(project => {
            return <ProjectListItem key={project._id} project={project} />;
        });

        return (
            <div style={style}>
                {projectComponents}
            </div>
        );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default createContainer(() => {
    Meteor.subscribe('projektek');

    const projects = Projects.find({}, {
        transform(doc) {
            return {
                _id: doc._id,
                name: doc.name,
                location: doc.feltarasi_hely,
                date: doc.asatas_kezdete || new Date(),
                link: `/project/${doc._id}/edit`,
                objectListLink: `/project/${doc._id}`,
            };
        },
    }).fetch();

    return { projects };
}, Radium(ProjectList));

