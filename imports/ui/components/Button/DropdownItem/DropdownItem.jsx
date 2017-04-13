import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
    if (props.separator) {
        return (<li role="separator" className="divider" />);
    }

    return (<li><Link to={props.href || '#'}>{props.text}</Link></li>);
};

DropdownItem.propTypes = {
    separator: PropTypes.bool,
    href: PropTypes.string,
    text: PropTypes.string,
};

export default DropdownItem;
