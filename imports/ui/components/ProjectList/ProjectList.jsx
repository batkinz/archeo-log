import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ProjectListStyle } from './ProjectList.style.js';
import ProjectListItem from './ProjectListItem/ProjectListItem.jsx';
import GenericList from '../GenericList/GenericList.jsx';

export default class ProjectList extends Component {
    render() {
        const style = getStyle(this.props.style, ProjectListStyle.style);

        function getProjectItems() {
            Meteor.subscribe('projektek');

            return Projects.find({}, {
                transform(doc) {
                    return {
                        project: {
                            _id: doc._id,
                            name: doc.name,
                            location: doc.feltarasi_hely,
                            date: doc.asatas_kezdete || new Date(),
                            link: `/project/${doc._id}/edit`,
                            objectListLink: `/project/${doc._id}`,
                        },
                    };
                },
            }).fetch();
        }

        return (
            <GenericList style={style} getItemsReactive={getProjectItems} itemComponent={ProjectListItem} />
        );
    }
}

ProjectList.propTypes = {
    style: PropTypes.object,
};

