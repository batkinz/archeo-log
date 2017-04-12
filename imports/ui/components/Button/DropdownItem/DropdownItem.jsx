import React, { PropTypes } from 'react';

const DropdownItem = (props) => {
    if (props.separator) {
        return (<li role="separator" className="divider"></li>);
    }

    return (<li><a href={props.href || '#'}>{props.text}</a></li>);
};

DropdownItem.propTypes = {
    separator: PropTypes.bool,
    href: PropTypes.string,
    text: PropTypes.string,
};

export default DropdownItem;
