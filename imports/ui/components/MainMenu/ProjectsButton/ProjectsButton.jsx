import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import Button from '/imports/ui/components/Button/Button.jsx';

class ProjectsButton extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <Button
                  text="Projektek"
                  dropdown
                  dropdownItems={this.props.items}
                  type={{ yellow: true }} />
            </div>
        );
    }
}

ProjectsButton.propTypes = {
    style: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
        separator: PropTypes.bool,
    })),
};

export default createContainer(() => {
    Meteor.subscribe('projektek');

    const projectDropdownItems = Projects.find({}, {
        transform(doc) {
            return {
                text: doc.name,
                href: `/project/${doc._id}`,
            };
        },
    }).fetch();

    projectDropdownItems.unshift({ separator: true });
    projectDropdownItems.unshift({
        text: 'Új...',
        href: '/project/add',
    });

    return {
        items: projectDropdownItems,
    };
}, Radium(ProjectsButton));
