import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Objects from '/imports/api/Objects/ObjectCollection.js';

import ObjectListItem from './ObjectListItem/ObjectListItem.jsx';

const ObjectList = (props) => {
    const items = _.map(props.objects, (object, index) =>
        <ObjectListItem key={index} link={object.link} number={object.number} />);
    return (
        <div>
            {items}
        </div>
    );
};

ObjectList.propTypes = {
    objects: PropTypes.arrayOf(PropTypes.shape({
        number: PropTypes.string,
        link: PropTypes.string,
    })),
    projectId: PropTypes.string.isRequired,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');

    const objects = Objects.find({ projekt_id: props.projectId }, {
        transform(doc) {
            return {
                number: doc.objektum_szam,
                link: `/project/${props.projectId}/objects/${doc._id}`,
            };
        },
    }).fetch();

    return {
        objects,
    };
}, ObjectList);
