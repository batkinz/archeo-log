import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import Objects from '/imports/api/Objects/ObjectCollection.js';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ObjectListMenuStyle } from './ObjectListMenu.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

import Button from '../Button/Button.jsx';

class ObjectListMenu extends Component {
    constructor(props) {
        super(props);

        if (this.props.addObjectRange) {
            this.props.addObjectRange = this.props.addObjectRange.bind(this);
        }
    }

    render() {
        const style = this.props.style;

        return (
            <div style={style.container}>
                <span style={style.label}>Objektumok létrehozása:</span>
                <input
                  style={style.objectNumberInput}
                  onChange={(evt) => this.setState({ startNumber: evt.target.value })}
                  className="form-control"
                  type="number"
                  placeholder="-tól" />
                <span>—</span>
                <input
                  style={style.objectNumberInput}
                  onChange={(evt) => this.setState({ endNumber: evt.target.value })}
                  className="form-control"
                  type="number"
                  placeholder="-ig" />
                <Button
                  style={style.addButton}
                  handleClick={() => this.props.addObjectRange(this.state.startNumber, this.state.endNumber)}>
                    <span className="glyphicon glyphicon-plus-sign" style={style.plusSign} />
                </Button>
            </div>);
    }
}

ObjectListMenu.propTypes = {
    style: PropTypes.object.isRequired,
    projectId: PropTypes.string.isRequired,
    addObjectRange: PropTypes.func,
};

export default createContainer((props) => {
    Meteor.subscribe('objektumok');

    function addObjectRange(startNumber, endNumber) {
        if (startNumber < 0 || endNumber < 0 || startNumber > endNumber) {
            const error = { message: 'Invalid parameter' };
            throw error;
        }

        for (let i = startNumber; i <= endNumber; i++) {
            Objects.insert({ projekt_id: props.projectId, objektum_szam: i });
        }
    }

    const commonStyles = getStyle('Common', CommonStyle.style) || {};
    const style = getStyle('ObjectListMenu', ObjectListMenuStyle.style) || {};

    return {
        style: Object.assign({}, commonStyles, style),
        addObjectRange,
    };
}, Radium(ObjectListMenu));
