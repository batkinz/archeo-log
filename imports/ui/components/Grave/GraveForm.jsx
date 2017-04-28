import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import AutoFormBase from '../AutoFormBase/AutoFormBase.jsx';
import Button from '../Button/Button.jsx';

import Objects from '/imports/api/Objects/ObjectCollection.js';
import GraveSchema from '/imports/api/Objects/GraveSchema.js';

class GraveForm extends Component {
    constructor(props) {
        super(props);

        this.showForm = this.showForm.bind(this);

        this.state = {
            showForm: !!props && !!props.doc && !!props.doc.sir,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.doc && nextProps.doc.sir) {
            this.showForm();
        }
    }

    get graveHooksObject() {
        const self = this;
        return {
            formToDoc(doc) {
                const newDoc = Object.assign({}, doc);
                delete newDoc.sir.csontvazak;
                return newDoc;
            },
            onSubmit(insertDoc, updateDoc) {
                const graveObject = _.extend({ csontvazak: insertDoc.csontvaz }, insertDoc.sir);

                Objects.update({ _id: self.props.objectId }, {
                    $set: {
                        sir: graveObject,
                    },
                }, null, (err, numOfAffected) => {
                    this.done();
                });
                return false;
            },
        };
    }

    showForm() {
        this.setState((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.showForm = true;
            return newState;
        });
    }

    render() {
        if (this.state.showForm) {
            return (
                <AutoFormBase
                  formId="graveForm"
                  schema={GraveSchema}
                  doc={this.props.doc}
                  type="normal"
                  hooksObject={this.graveHooksObject} />
            );
        }
        return (
            <Button handleClick={this.showForm}>Sírrá alakítás</Button>
        );
    }
}

GraveForm.propTypes = {
    objectNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    projectId: PropTypes.string.isRequired,
    objectId: PropTypes.string,
    doc: PropTypes.object,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');

    const doc = Objects.findOne({
        $and: [
                { projekt_id: props.projectId },
                { objektum_szam: parseInt(props.objectNumber, 10) },
        ] }) || {};

    const sir = doc.sir;
    let csontvaz = undefined;
    if (sir && sir.csontvazak) {
        csontvaz = sir.csontvazak;
    }

    return { doc: { sir, csontvaz }, objectId: doc._id };
}, GraveForm);
