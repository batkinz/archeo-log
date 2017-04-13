import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { Styles } from '/imports/api/styles/styles.collection.js';
import { NotFoundStyle } from './NotFound.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';


class NotFound extends Component {
    render() {
        return (
            <div style={this.props.style}>
                Not Found.
            </div>
        );
    }
}

NotFound.propTypes = {
    style: PropTypes.object.isRequired,
};

export default createContainer(() => {
    const subHandle = Meteor.subscribe('styles');

    const commonStyles = getStyle(Styles.findOne({ targetComponent: 'Common' }), CommonStyle);
    const localStyles = getStyle(Styles.findOne({ targetComponent: 'NotFound' }), NotFoundStyle);
    return {
        loading: !subHandle.ready(),
        style: Object.assign({}, commonStyles.style, localStyles.style),
    };
}, Radium(NotFound));
