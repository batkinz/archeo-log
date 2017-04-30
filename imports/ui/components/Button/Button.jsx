import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import DropdownItem from './DropdownItem/DropdownItem.jsx';

import { getStyle, resolveColor } from '/imports/ui/common/StyleHelpers.js';
import { ButtonStyle } from './Button.style.js';

class Button extends Component {
    constructor(props) {
        super(props);

        if (this.props.handleClick) {
            this.handleClick = this.props.handleClick.bind(this);
        }
    }

    render() {
        let classes = { 'btn': true, 'btn-default': true };
        const style = Object.assign({}, this.props.privStyle.button, this.props.style);
        let dropdownItemsContainer = false;
        let caret = false;
        const extraAttributes = {};

        if (this.props.color) {
            const color = resolveColor(this.props.color);

            style.backgroundColor = color;
            style[':focus'].backgroundColor = color;
        }

        if (this.props.dropdown) {
            classes['dropdown-toggle'] = true;
            const dropdownItems = _.map(this.props.dropdownItems, (item, index) =>
                (<DropdownItem separator={item.separator} key={index} href={item.href} text={item.text} />));

            dropdownItemsContainer = <ul className="dropdown-menu">{dropdownItems}</ul>;

            extraAttributes['data-toggle'] = 'dropdown';
            extraAttributes['aria-haspopup'] = 'true';
            extraAttributes['aria-expanded'] = 'false';

            caret = <span className="caret" />;
        }

        classes = classNames(classes);

        return (
            <div className="btn-group">
                <button
                  type="button"
                  className={classes}
                  style={style}
                  onClick={this.handleClick}
                  {...extraAttributes}>
                    {this.props.children} {caret}
                </button>
                {dropdownItemsContainer}
            </div>
        );
    }
}

Button.propTypes = {
    dropdown: PropTypes.bool,
    dropdownItems: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
        separator: PropTypes.bool,
    })),
    handleClick: PropTypes.func,
    privStyle: PropTypes.object,
    style: PropTypes.object,
    type: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node,
    ]),
    color: PropTypes.string,
};

export default createContainer(() => {
    return {
        privStyle: getStyle('Button', ButtonStyle.style),
    };
}, Radium(Button));
