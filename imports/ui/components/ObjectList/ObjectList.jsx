import React from 'react';
import PropTypes from 'prop-types';

import Objects from '/imports/api/Objects/ObjectCollection.js';

import GenericList from '../GenericList/GenericList.jsx';
import ObjectListMenu from './ObjectListMenu.jsx';

const ObjectList = (props) => {
    function getObjectItems() {
        Meteor.subscribe('objektumok');

        return Objects.find({ projekt_id: props.projectId }, {
            transform(doc) {
                return {
                    label: doc.objektum_szam,
                    link: `/project/${props.projectId}/object/${doc.objektum_szam}/edit`,
                };
            },
        }).fetch();
    }

    return (
        <div>
            <ObjectListMenu projectId={props.projectId} />
            <GenericList getItemsReactive={getObjectItems} />
        </div>
    );
};

ObjectList.propTypes = {
    objects: PropTypes.arrayOf(PropTypes.shape({
        number: PropTypes.number,
        link: PropTypes.string,
    })),
    projectId: PropTypes.string.isRequired,
};

export default ObjectList;
