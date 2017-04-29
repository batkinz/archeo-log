import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import GenericList from '../GenericList/GenericList.jsx';
import Button from '../Button/Button.jsx';

import Artefacts from '/imports/api/Artefacts/ArtefactCollection.js';
import Objects from '/imports/api/Objects/ObjectCollection.js';

class ArtefactList extends Component {
    get getArtefactItemsFunction() {
        const self = this;
        function getArtefactItems() {
            Meteor.subscribe('leletek');

            return Artefacts.find({ objektum_id: self.props.objectId }, {
                transform(doc) {
                    return {
                        label: doc.lelet_szam,
                        link: `${self.props.match.url}/${doc.lelet_szam}`,
                    };
                },
            }).fetch();
        }

        return getArtefactItems;
    }

    render() {
        return (
            <div>
                <Link to={`${this.props.match.url}/add`}>
                    <Button>Új lelet...</Button>
                </Link>
                <GenericList getItemsReactive={this.getArtefactItemsFunction} />
            </div>
        );
    }
}

ArtefactList.propTypes = {
    projectId: PropTypes.string.isRequired,
    objectNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    objectId: PropTypes.string,
    match: PropTypes.object.isRequired,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');

    const objektum = Objects.findOne({ projekt_id: props.projectId, objektum_szam: props.objectNumber }) || {};

    return {
        objectId: objektum._id,
    };
}, ArtefactList);
