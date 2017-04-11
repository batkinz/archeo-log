import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Button from '/imports/ui/components/Button/Button.jsx';

import { getStyle } from '/imports/ui/common/StyleHelpers.js';

export default class FilteringMenu extends Component {
    render() {
        return (
            <Button text="Szalami" />
        );
    }
}

FilteringMenu.propTypes = {
    style: PropTypes.object,
};

FilteringMenu = Radium(FilteringMenu);
