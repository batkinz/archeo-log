import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ProjectListStyle } from './ProjectList.style.js';
import ProjectListItem from '../ProjectListItem/ProjectListItem.jsx';


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

export default Radium(ProjectList);
