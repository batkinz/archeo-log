import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Button from '../../Button/Button.jsx';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';
import { ObjectMenuStyle } from './ObjectMenu.style.js';
import { CommonStyle } from '/imports/ui/common/common.style.js';

class ObjectMenu extends Component {
    render() {
        const baseUrl = this.props.baseUrl;
        const style = this.props.style;

        return (
            <div style={style.container}>
                <Link to={`${baseUrl.split('/').slice(undefined, -2).join('/')}`}>
                    <Button style={style.backButton}>
                        <span style={style.backArrow} className="glyphicon glyphicon-menu-left" />
                    </Button>
                </Link>
                <Link to={`${baseUrl}/edit`}>
                    <Button style={style.menuButton}>Objektum adatlap</Button>
                </Link>
                <Link to={`${baseUrl}/artefacts`}>
                    <Button style={style.menuButton}>Leletek</Button>
                </Link>
                <Link to={`${baseUrl}/grave`}>
                    <Button style={style.menuButton}>Sír</Button>
                </Link>
            </div>
        );
    }
}

ObjectMenu.propTypes = {
    style: PropTypes.object,
    baseUrl: PropTypes.string.isRequired,
};

export default createContainer(() => {
    const commonStyles = getStyle('Common', CommonStyle.style) || {};
    const projectListItemStyles = getStyle('ObjectMenu', ObjectMenuStyle.style) || {};

    return {
        style: Object.assign({}, commonStyles, projectListItemStyles),
    };
}, Radium(ObjectMenu));
