import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoForm } from 'meteor/aldeed:autoform';

import '/imports/ui/BlazeTemplates/ProjectFormTemplate/ProjectFormTemplate.js';

export default class AutoFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { random: 0 };
        this.mounted = false;
    }

    componentDidMount() {
        this.mounted = true;

        this.registerFormHooks(this.props.formId, this.rerenderHooks);
        if (this.props.hooksObject) {
            this.registerFormHooks(this.props.formId, this.props.hooksObject);
        }
    }

    componentWillUnmount() {
        this.mounted = false;

        const emptyHooksObj = {};
        emptyHooksObj[this.props.formId] = {};

        AutoForm.hooks(emptyHooksObj);
    }

    get rerenderHooks() {
        const self = this;

        function triggerRerender() {
            if (self.mounted) {
                self.setState({ random: Math.random() });
            }
        }

        const hooks = {
            onError(formType, error) {
                triggerRerender();
            },
            onSuccess() {
                triggerRerender();
            },
            formToDoc(doc) {
                triggerRerender();
                return doc;
            },
            formToModifier(modifier) {
                triggerRerender();
                return modifier;
            },
        };

        return hooks;
    }

    registerFormHooks(formId, callbackObject, overwrite) {
        AutoForm.addHooks(formId, callbackObject, overwrite);
    }

    render() {
        let type = this.props.type;
        if (!type) {
            type = this.props.doc ? 'update' : 'insert';
        }

        return (
            <Blaze
              template="ProjectForm"
              formId={this.props.formId}
              collection={this.props.collection}
              schema={this.props.schema}
              type={type}
              doc={this.props.doc}
              omitFields={this.props.omitFields}
              state={this.state.random} />
        );
    }
}

AutoFormBase.propTypes = {
    formId: PropTypes.string.isRequired,
    collection: PropTypes.object,
    schema: PropTypes.object,
    doc: PropTypes.object,
    hooksObject: PropTypes.object,
    omitFields: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
};
