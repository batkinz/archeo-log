import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
    if (props.separator) {
        return (<li role="separator" className="divider"></li>);
    }

    return (<li><Link to={props.href || '#'}>{props.text}</Link></li>);
};

DropdownItem.propTypes = {
    separator: PropTypes.bool,
    href: PropTypes.string,
    text: PropTypes.string,
};

export default DropdownItem;
