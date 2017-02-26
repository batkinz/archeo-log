import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { ProjectListStyle } from './ProjectList.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';
import ProjectListItem from '../ProjectListItem/ProjectListItem.jsx';


class ProjectList extends Component {
    render() {
        const style = getStyle(this.props.style, ProjectListStyle.style);

        const projectComponents = this.props.projects.map(project => {
            return <ProjectListItem key={project._id} project={project} style={this.props.itemStyle} />;
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
    style: PropTypes.object.isRequired,
    itemStyle: PropTypes.object.isRequired,
};

export default Radium(ProjectList);
