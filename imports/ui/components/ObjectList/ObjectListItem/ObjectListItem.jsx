import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ObjectListItem extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.link}>{this.props.number}</Link>
            </div>
        );
    }
}

ObjectListItem.propTypes = {
    number: PropTypes.number.isRequired,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default ObjectListItem;
