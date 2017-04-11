import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '/imports/api/Projects/ProjectCollection.js';

import Button from '/imports/ui/components/Button/Button.jsx';

class ProjectsButton extends Component {
    render() {
        const handleProjectsClick = () => { console.log('Projects'); };

        return (
            <div style={this.props.style}>
                <Button
                  text="Projects"
                  handleClick={handleProjectsClick}
                  type={{
                      yellow: true,
                      dropdown: true,
                      dropdownItems: this.props.items }} />
            </div>
        );
    }
}

ProjectsButton.propTypes = {
    style: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        text: PropTypes.string.isRequired,
        href: PropTypes.string,
    })),
};

export default createContainer(() => {
    Meteor.subscribe('projektek');

    const projectDropdownItems = Projects.find({}, {
        transform(doc) {
            return {
                id: doc._id,
                text: doc.name,
                href: `/project/${doc._id}`,
            };
        },
    }).fetch();

    return {
        items: projectDropdownItems,
    };
}, Radium(ProjectsButton));
