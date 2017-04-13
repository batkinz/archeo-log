import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ObjectListItemStyle } from './ObjectListItem.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

class ObjectListItem extends Component {
    render() {
        const style = this.props.style;
        return (
            <div style={style.container}>
                <Link to={this.props.link}>{this.props.number}</Link>
            </div>
        );
    }
}

ObjectListItem.propTypes = {
    style: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default createContainer(() => {
    const commonStyles = getStyle('Common', CommonStyle.style) || {};
    const style = getStyle('ObjectListMenu', ObjectListItemStyle.style) || {};

    return {
        style: Object.assign({}, commonStyles, style),
    };
}, Radium(ObjectListItem));
