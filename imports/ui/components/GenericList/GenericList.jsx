import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

import ObjectListItem from './GenericListItem/GenericListItem.jsx';

const GenericList = (props) => {
    const itemComponent = props.itemComponent || ObjectListItem;

    const items = _.map(props.items, (item, index) => {
        const itemComponentProps = Object.assign({}, item);
        if (!itemComponentProps.key) {
            itemComponentProps.key = index;
        }
        return React.createElement(itemComponent, itemComponentProps);
    });

    return (
        <div style={props.style}>
            {items}
        </div>
    );
};

GenericList.propTypes = {
    items: PropTypes.array,
    getItemsReactive: PropTypes.func.isRequired,
    itemComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    style: PropTypes.object,
};

export default createContainer((props) => {
    return {
        items: props.getItemsReactive(),
    };
}, Radium(GenericList));
